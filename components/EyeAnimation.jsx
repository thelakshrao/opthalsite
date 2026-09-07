'use client';

import React, { useEffect, useRef, useState, useCallback, useImperativeHandle, forwardRef } from 'react';

const TOTAL_FRAMES = 300;
const CONCURRENCY_LIMIT = 12;

const EyeAnimation = forwardRef(function EyeAnimation(
  { className = '', onFrameChange, onLoaded },
  ref
) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
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

  const updateCanvasBounds = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const targetW = Math.round(rect.width * dpr);
    const targetH = Math.round(rect.height * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }
  }, []);

  const drawFrameToCanvas = useCallback(
    (imageToDraw) => {
      const canvas = canvasRef.current;
      if (!canvas || !imageToDraw || !imageToDraw.complete || imageToDraw.naturalWidth === 0) return;

      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      const displayWidth = canvas.width;
      const displayHeight = canvas.height;

      ctx.clearRect(0, 0, displayWidth, displayHeight);

      const imgW = imageToDraw.naturalWidth || (isMobile ? 1080 : 1280);
      const imgH = imageToDraw.naturalHeight || (isMobile ? 1920 : 720);
      const targetRatio = imgW / imgH;
      const currentRatio = displayWidth / displayHeight;

      let drawW, drawH, drawX, drawY;

      // FIXED: Constant sizing container logic prevents zoom expansion on scroll
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

    for (let offset = 1; offset <= 8; offset++) {
      const prev = targetIndex - offset;
      if (prev >= 0 && cache[prev]?.status === 'loaded' && cache[prev]?.img?.complete) {
        return cache[prev].img;
      }
      const next = targetIndex + offset;
      if (next < TOTAL_FRAMES && cache[next]?.status === 'loaded' && cache[next]?.img?.complete) {
        return cache[next].img;
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
      if (!cacheEntry || cacheEntry.status === 'loaded' || cacheEntry.status === 'loading') {
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

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none overflow-hidden ${className}`}
    >
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