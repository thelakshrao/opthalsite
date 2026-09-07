'use client';

import React, { useEffect, useRef, useState, useCallback, useImperativeHandle, forwardRef } from 'react';

const DESKTOP_TOTAL_FRAMES = 192;
const MOBILE_TOTAL_FRAMES = 240;
const CONCURRENCY_LIMIT = 8;

const EyeAnimation = forwardRef(function EyeAnimation(
  { className = '', onFrameChange, onLoaded },
  ref
) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const totalFrames = isMobile ? MOBILE_TOTAL_FRAMES : DESKTOP_TOTAL_FRAMES;

  const framesCacheRef = useRef([]);
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
    return `/eye-animation/${folder}/ezgif-frame-${padded}.png`;
  }, []);

  const updateCanvasBounds = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.max(window.devicePixelRatio || 1, 2);

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

      const imgW = imageToDraw.naturalWidth || (isMobile ? 1080 : 1920);
      const imgH = imageToDraw.naturalHeight || (isMobile ? 1920 : 1080);
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
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(imageToDraw, drawX, drawY, drawW, drawH);
    },
    [isMobile]
  );

  const getRenderableImage = useCallback(
    (targetIndex) => {
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

      for (let i = targetIndex + 1; i < totalFrames; i++) {
        if (cache[i] && cache[i].status === 'loaded' && cache[i].img && cache[i].img.complete) {
          return cache[i].img;
        }
      }

      return null;
    },
    [totalFrames]
  );

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
    getTotalFrames: () => totalFrames,
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

    framesCacheRef.current = Array.from({ length: totalFrames }, () => ({
      img: null,
      status: 'idle',
    }));

    setLoadedCount(0);
    updateCanvasBounds();

    loadSingleFrame(0, isMobile, () => {
      drawFrame(0);
    });

    const remainingIndices = [];
    for (let i = 1; i < totalFrames; i++) {
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
  }, [isMobile, totalFrames, loadSingleFrame, drawFrame, updateCanvasBounds]);

  useEffect(() => {
    if (loadedCount === totalFrames && onLoaded) {
      onLoaded();
    }
  }, [loadedCount, totalFrames, onLoaded]);

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