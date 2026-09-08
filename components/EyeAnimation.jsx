'use client';

import React, { useEffect, useRef, useState, useCallback, useImperativeHandle, forwardRef } from 'react';

const TOTAL_FRAMES = 300;
const CONCURRENCY_LIMIT = 8;

const EyeAnimation = forwardRef(function EyeAnimation(
  { className = '', onFrameChange, onLoaded },
  ref
) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // isMobile MUST start as null so server and client render identically on
  // the very first pass (no window access during render). Computing this
  // with window.innerWidth in the initializer caused a server/client
  // mismatch -- server always saw `undefined window` (desktop default),
  // while the client immediately computed the real value, so whichever
  // <img src> got rendered differed between the two -> hydration error.
  // The actual value is set safely in the effect below, right after mount.
  const [isMobile, setIsMobile] = useState(null);

  const [initialFrameReady, setInitialFrameReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const framesCacheRef = useRef(
    Array.from({ length: TOTAL_FRAMES }, () => ({ img: null, status: 'idle' }))
  );
  const activeDownloadsRef = useRef(0);
  const priorityQueueRef = useRef([]);
  const isDestroyedRef = useRef(false);
  const currentFrameRef = useRef(0);

  // Determine isMobile on mount (client-only, runs after hydration is
  // already complete) and keep it correct on resize/orientation change.
  useEffect(() => {
    const checkBreakpoint = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile((prev) => (prev !== mobile ? mobile : prev));
    };
    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  const getFrameUrl = useCallback((index, mobile) => {
    const padded = String(index + 1).padStart(3, '0');
    const folder = mobile ? 'mobile' : 'desktop';
    return `/eye-animation/${folder}/ezgif-frame-${padded}.webp`;
  }, []);

  const updateCanvasBounds = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();

    // Cap the effective devicePixelRatio, especially on mobile. Modern
    // phones report DPR of 3 (sometimes higher), which means 3x the pixels
    // to draw on every single frame for zero perceptible sharpness gain at
    // arm's length on a small screen. Capping this is one of the biggest
    // wins for mobile canvas performance.
    const rawDpr = window.devicePixelRatio || 1;
    const dpr = Math.min(rawDpr, isMobile ? 1.5 : 2);

    const targetW = Math.round(rect.width * dpr);
    const targetH = Math.round(rect.height * dpr);
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }
  }, [isMobile]);

  const drawFrameToCanvas = useCallback(
    (imageToDraw) => {
      if (isMobile === null) return;
      const canvas = canvasRef.current;
      if (!canvas || !imageToDraw || !imageToDraw.complete || imageToDraw.naturalWidth === 0) return;
      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      const displayWidth = canvas.width;
      const displayHeight = canvas.height;

      // Clear the canvas completely before drawing the next frame
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      const imgW = imageToDraw.naturalWidth || (isMobile ? 1080 : 1280);
      const imgH = imageToDraw.naturalHeight || (isMobile ? 1920 : 720);
      const targetRatio = imgW / imgH;
      const currentRatio = displayWidth / displayHeight;

      let drawW, drawH, drawX, drawY;

      // Uniform Object-Cover scaling strategy across both Mobile and Desktop
      // Ensures complete viewport fill with seamless bottom gradient blending
      if (currentRatio > targetRatio) {
        drawW = displayWidth;
        drawH = displayWidth / targetRatio;
        drawX = 0;
        drawY = (displayHeight - drawH) / 2;
      } else {
        drawH = displayHeight;
        drawW = displayHeight * targetRatio;
        drawX = (displayWidth - drawW) / 2;
        drawY = 0;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'medium';
      ctx.drawImage(imageToDraw, drawX, drawY, drawW, drawH);
    },
    [isMobile]
  );

  const getRenderableImage = useCallback((targetIndex) => {
    const cache = framesCacheRef.current;
    const direct = cache[targetIndex];
    if (direct && direct.status === 'loaded' && direct.img && direct.img.complete) {
      return direct.img;
    }
    for (let i = targetIndex - 1; i >= 0; i--) {
      if (cache[i] && cache[i].status === 'loaded' && cache[i].img && cache[i].img.complete) {
        return cache[i].img;
      }
    }
    for (let i = targetIndex + 1; i < TOTAL_FRAMES; i++) {
      if (cache[i] && cache[i].status === 'loaded' && cache[i].img && cache[i].img.complete) {
        return cache[i].img;
      }
    }
    return null;
  }, []);

  const drawFrame = useCallback(
    (index) => {
      currentFrameRef.current = index;
      const img = getRenderableImage(index);
      if (img) {
        drawFrameToCanvas(img);
        if (onFrameChange) onFrameChange(index);
      }
    },
    [getRenderableImage, drawFrameToCanvas, onFrameChange]
  );

  useImperativeHandle(ref, () => ({
    drawFrame,
  }));

  const loadSingleFrame = useCallback(
    (index, mobile, onComplete) => {
      if (isDestroyedRef.current || mobile === null) return;
      const cacheEntry = framesCacheRef.current[index];
      if (cacheEntry.status === 'loaded' || cacheEntry.status === 'loading') {
        if (onComplete) onComplete();
        return;
      }
      cacheEntry.status = 'loading';

      const img = new Image();
      img.decoding = 'async';
      // Give frame 0 fetch priority since it's the critical first paint;
      // everything else can load at the browser's default priority.
      if (index === 0 && 'fetchPriority' in img) {
        img.fetchPriority = 'high';
      }
      img.onload = () => {
        if (isDestroyedRef.current) return;
        cacheEntry.img = img;
        cacheEntry.status = 'loaded';
        setLoadedCount((prev) => prev + 1);
        if (index === 0) {
          setInitialFrameReady(true);
        }
        if (index === currentFrameRef.current || index === 0) {
          drawFrameToCanvas(img);
        }
        if (onComplete) onComplete();
      };
      img.onerror = () => {
        if (isDestroyedRef.current) return;
        cacheEntry.status = 'error';
        if (onComplete) onComplete();
      };
      img.src = getFrameUrl(index, mobile);
    },
    [getFrameUrl, drawFrameToCanvas]
  );

  // Trigger frame caching and queue loading once isMobile has been
  // determined (immediately after mount, from the effect above).
  useEffect(() => {
    if (isMobile === null) return;
    isDestroyedRef.current = false;

    const cache = framesCacheRef.current;
    // Reset frame cache array to wipe out cross-breakpoint images
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      cache[i] = { img: null, status: 'idle' };
    }
    setLoadedCount(0);
    setInitialFrameReady(false);

    updateCanvasBounds();

    loadSingleFrame(0, isMobile, () => {
      drawFrame(0);
    });

    const remainingIndices = [];
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      remainingIndices.push(i);
    }
    priorityQueueRef.current = remainingIndices;

    const pumpQueue = () => {
      if (isDestroyedRef.current) return;
      while (
        activeDownloadsRef.current < CONCURRENCY_LIMIT &&
        priorityQueueRef.current.length > 0
      ) {
        const nextIndex = priorityQueueRef.current.shift();
        activeDownloadsRef.current++;
        loadSingleFrame(nextIndex, isMobile, () => {
          activeDownloadsRef.current--;
          pumpQueue();
        });
      }
    };

    pumpQueue();

    return () => {
      isDestroyedRef.current = true;
    };
  }, [isMobile, loadSingleFrame, drawFrame, updateCanvasBounds]);

  useEffect(() => {
    if (loadedCount === TOTAL_FRAMES && onLoaded) {
      onLoaded();
    }
  }, [loadedCount, onLoaded]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let resizeRaf = null;
    const resizeObserver = new ResizeObserver(() => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        updateCanvasBounds();
        drawFrame(currentFrameRef.current);
      });
    });

    resizeObserver.observe(container);
    return () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeObserver.disconnect();
    };
  }, [drawFrame, updateCanvasBounds]);

  // Both placeholders are always in the DOM -- identical on server and
  // client -- and CSS (md: breakpoint) decides which one is visible. This
  // is what avoids the hydration mismatch while still painting instantly
  // (CSS resolves before any JS runs, so there's no black-flash gap).
  const desktopFrameUrl = getFrameUrl(0, false);
  const mobileFrameUrl = getFrameUrl(0, true);
  const placeholderOpacityClass = initialFrameReady ? 'opacity-0' : 'opacity-100';

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none overflow-hidden ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={mobileFrameUrl}
        alt="Precision Human Eye Anatomy Frame 1"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className={`block md:hidden absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 object-cover ${placeholderOpacityClass}`}
        aria-hidden="true"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={desktopFrameUrl}
        alt="Precision Human Eye Anatomy Frame 1"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className={`hidden md:block absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 object-cover ${placeholderOpacityClass}`}
        aria-hidden="true"
      />
      <canvas
        ref={canvasRef}
        className="w-full h-full block touch-pan-y"
        aria-label="Interactive ocular anatomical visualization"
        role="img"
      />
    </div>
  );
});

export default EyeAnimation;