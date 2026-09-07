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

  const [isMobile, setIsMobile] = useState(false);
  const [initialFrameReady, setInitialFrameReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const framesCacheRef = useRef(
    Array.from({ length: TOTAL_FRAMES }, () => ({ img: null, status: 'idle' }))
  );
  const activeDownloadsRef = useRef(0);
  const priorityQueueRef = useRef([]);
  const isDestroyedRef = useRef(false);
  const currentFrameRef = useRef(0);

  useEffect(() => {
    const checkBreakpoint = () => {
      setIsMobile(window.innerWidth < 768);
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

  // Optimized canvas resolution updating on resize only
  const updateCanvasBounds = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
  }, []);

  const drawFrameToCanvas = useCallback(
    (imageToDraw) => {
      const canvas = canvasRef.current;
      if (!canvas || !imageToDraw || !imageToDraw.complete || imageToDraw.naturalWidth === 0) return;

      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return;

      const displayWidth = canvas.width;
      const displayHeight = canvas.height;

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
      if (isDestroyedRef.current) return;
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

  useEffect(() => {
    isDestroyedRef.current = false;
    const cache = framesCacheRef.current;

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

  const placeholderUrl = getFrameUrl(0, isMobile);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none overflow-hidden ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={placeholderUrl}
        alt="Precision Human Eye Anatomy Frame 1"
        className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ${isMobile ? 'object-contain' : 'object-cover'
          } ${initialFrameReady ? 'opacity-0' : 'opacity-100'}`}
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