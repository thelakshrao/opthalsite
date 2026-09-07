'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

const TOTAL_FRAMES = 300;
const CONCURRENCY_LIMIT = 8;

export default function EyeAnimation({
  frameIndex = 0,
  progress,
  className = '',
  onFrameChange,
  onLoaded,
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  // Resolved frame index (0 to 299)
  const resolvedFrameIndex = progress !== undefined
    ? Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(progress * TOTAL_FRAMES)))
    : Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(frameIndex)));

  const [isMobile, setIsMobile] = useState(false);
  const [initialFrameReady, setInitialFrameReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  // Cache of Image objects
  const framesCacheRef = useRef(
    Array.from({ length: TOTAL_FRAMES }, () => ({ img: null, status: 'idle' }))
  );
  const activeDownloadsRef = useRef(0);
  const priorityQueueRef = useRef([]);
  const isDestroyedRef = useRef(false);
  const lastDrawnIndexRef = useRef(-1);

  // Mobile breakpoint detection (< 768px loads mobile 1080x1920 portrait set)
  useEffect(() => {
    const checkBreakpoint = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkBreakpoint();
    window.addEventListener('resize', checkBreakpoint);
    return () => window.removeEventListener('resize', checkBreakpoint);
  }, []);

  // Frame URL generator: loads from /mobile/ for mobile, /desktop/ for desktop
  const getFrameUrl = useCallback((index, mobile) => {
    const padded = String(index + 1).padStart(3, '0');
    const folder = mobile ? 'mobile' : 'desktop';
    return `/eye-animation/${folder}/ezgif-frame-${padded}.webp`;
  }, []);

  // Draw frame to canvas: portrait dimensions (1080x1920) on mobile, landscape (1280x720) on desktop
  const drawFrameToCanvas = useCallback((imageToDraw) => {
    const canvas = canvasRef.current;
    if (!canvas || !imageToDraw || !imageToDraw.complete || imageToDraw.naturalWidth === 0) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    const displayWidth = Math.round(rect.width);
    const displayHeight = Math.round(rect.height);

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    // Natural aspect ratio: 1080/1920 (0.5625 portrait) on mobile, 1280/720 (1.777 landscape) on desktop
    const imgW = imageToDraw.naturalWidth || (isMobile ? 1080 : 1280);
    const imgH = imageToDraw.naturalHeight || (isMobile ? 1920 : 720);
    const targetRatio = imgW / imgH;
    const currentRatio = displayWidth / displayHeight;

    let drawW, drawH, drawX, drawY;

    if (isMobile) {
      // Mobile: CONTAIN mode with native 1080x1920 portrait aspect ratio (no cropping, full visibility)
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
      // Desktop: COVER mode with native 1280x720 landscape aspect ratio (edge-to-edge full bleed)
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
    ctx.restore();
  }, [isMobile]);

  const getRenderableImage = useCallback((targetIndex) => {
    const cache = framesCacheRef.current;
    const direct = cache[targetIndex];
    if (direct && direct.status === 'loaded' && direct.img && direct.img.complete) {
      return { img: direct.img, index: targetIndex };
    }

    for (let i = targetIndex - 1; i >= 0; i--) {
      if (cache[i] && cache[i].status === 'loaded' && cache[i].img && cache[i].img.complete) {
        return { img: cache[i].img, index: i };
      }
    }

    for (let i = targetIndex + 1; i < TOTAL_FRAMES; i++) {
      if (cache[i] && cache[i].status === 'loaded' && cache[i].img && cache[i].img.complete) {
        return { img: cache[i].img, index: i };
      }
    }

    return null;
  }, []);

  const renderCurrentFrame = useCallback(() => {
    const renderable = getRenderableImage(resolvedFrameIndex);
    if (renderable) {
      drawFrameToCanvas(renderable.img);
      lastDrawnIndexRef.current = resolvedFrameIndex;
      if (onFrameChange) {
        onFrameChange(resolvedFrameIndex);
      }
    }
  }, [resolvedFrameIndex, getRenderableImage, drawFrameToCanvas, onFrameChange]);

  const loadSingleFrame = useCallback((index, mobile, onComplete) => {
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
      setLoadedCount(prev => prev + 1);

      if (index === 0) {
        setInitialFrameReady(true);
      }
      if (index === resolvedFrameIndex || index === 0) {
        drawFrameToCanvas(img);
      }

      if (onComplete) onComplete();
    };

    img.onerror = () => {
      if (isDestroyedRef.current) return;
      console.warn(`Frame ${index} failed to load from /eye-animation/${mobile ? 'mobile' : 'desktop'}/`);
      cacheEntry.status = 'error';
      if (onComplete) onComplete();
    };

    img.src = getFrameUrl(index, mobile);
  }, [getFrameUrl, resolvedFrameIndex, drawFrameToCanvas]);

  useEffect(() => {
    isDestroyedRef.current = false;
    const cache = framesCacheRef.current;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      cache[i] = { img: null, status: 'idle' };
    }
    setLoadedCount(0);
    setInitialFrameReady(false);

    loadSingleFrame(0, isMobile, () => {
      renderCurrentFrame();
    });

    const remainingIndices = [];
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      remainingIndices.push(i);
    }
    priorityQueueRef.current = remainingIndices;

    const pumpQueue = () => {
      if (isDestroyedRef.current) return;
      while (activeDownloadsRef.current < CONCURRENCY_LIMIT && priorityQueueRef.current.length > 0) {
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
  }, [isMobile, loadSingleFrame, renderCurrentFrame]);

  useEffect(() => {
    if (loadedCount === TOTAL_FRAMES && onLoaded) {
      onLoaded();
    }
  }, [loadedCount, onLoaded]);

  useEffect(() => {
    const entry = framesCacheRef.current[resolvedFrameIndex];
    if (entry && entry.status === 'idle') {
      const neighbors = [resolvedFrameIndex];
      for (let offset = 1; offset <= 4; offset++) {
        if (resolvedFrameIndex + offset < TOTAL_FRAMES) neighbors.push(resolvedFrameIndex + offset);
        if (resolvedFrameIndex - offset >= 0) neighbors.push(resolvedFrameIndex - offset);
      }

      const remaining = priorityQueueRef.current.filter(idx => !neighbors.includes(idx));
      priorityQueueRef.current = [...neighbors, ...remaining];
    }

    renderCurrentFrame();
  }, [resolvedFrameIndex, renderCurrentFrame]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let resizeRaf = null;
    const resizeObserver = new ResizeObserver(() => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        renderCurrentFrame();
      });
    });

    resizeObserver.observe(container);
    return () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeObserver.disconnect();
    };
  }, [renderCurrentFrame]);

  const placeholderUrl = getFrameUrl(0, isMobile);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none overflow-hidden ${className}`}
    >
      {/* Static frame-1 placeholder matching breakpoint mode */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={placeholderUrl}
        alt="Precision Human Eye Anatomy Frame 1"
        className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ${
          isMobile ? 'object-contain' : 'object-cover'
        } ${initialFrameReady ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden="true"
      />

      {/* Main rendering canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block touch-none"
        aria-label="Interactive ocular anatomical visualization"
        role="img"
      />
    </div>
  );
}
