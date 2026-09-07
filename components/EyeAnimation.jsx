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

  // Initialize as null to prevent rendering desktop images before device detection
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

  // Measure viewport on mount without triggering an ambient SSR flash
  useEffect(() => {
    const checkBreakpoint = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
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
    const dpr = window.devicePixelRatio || 1;

    const targetW = Math.round(rect.width * dpr);
    const targetH = Math.round(rect.height * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }
  }, []);

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

      if (isMobile) {
        if (currentRatio > targetRatio) {
          drawH = displayHeight;
          drawW = displayHeight * targetRatio;
          drawX = (displayWidth - drawW) / 2;
          drawY = 0;
        } else {
          drawW = displayWidth;
          drawH = displayWidth / targetRatio;
          drawX = 0;
          drawY = (displayHeight - drawH) / 2;
        }
      } else {
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

  // Trigger frame caching and queue loading only once `isMobile` has been evaluated
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

  const placeholderUrl = isMobile !== null ? getFrameUrl(0, isMobile) : null;

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none overflow-hidden ${className}`}
    >
      {placeholderUrl && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={placeholderUrl}
          alt="Precision Human Eye Anatomy Frame 1"
          className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ${isMobile ? 'object-contain' : 'object-cover'
            } ${initialFrameReady ? 'opacity-0' : 'opacity-100'}`}
          aria-hidden="true"
        />
      )}

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