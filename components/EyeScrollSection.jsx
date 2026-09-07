'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import EyeAnimation from './EyeAnimation';

const TOTAL_FRAMES = 300;

export default function EyeScrollSection() {
  const containerRef = useRef(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const currentFrameRef = useRef(0);
  const rafIdRef = useRef(null);
  const isTickingRef = useRef(false);

  // Scroll handler using requestAnimationFrame
  const updateScrollProgress = useCallback(() => {
    isTickingRef.current = false;
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const scrollableDistance = rect.height - window.innerHeight;

    if (scrollableDistance <= 0) return;

    const rawProgress = -rect.top / scrollableDistance;
    const clampedProgress = Math.max(0, Math.min(1, rawProgress));
    setProgress(clampedProgress);

    const targetIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.max(0, Math.floor(clampedProgress * TOTAL_FRAMES))
    );

    if (targetIndex !== currentFrameRef.current) {
      currentFrameRef.current = targetIndex;
      setFrameIndex(targetIndex);
    }
  }, []);

  // IntersectionObserver to pause all work when off-screen
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '100px 0px 100px 0px',
        threshold: 0,
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Attach rAF-throttled scroll handler only when intersecting
  useEffect(() => {
    if (!isIntersecting) {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      isTickingRef.current = false;
      return;
    }

    const onScroll = () => {
      if (!isTickingRef.current) {
        isTickingRef.current = true;
        rafIdRef.current = requestAnimationFrame(updateScrollProgress);
      }
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      isTickingRef.current = false;
    };
  }, [isIntersecting, updateScrollProgress]);

  return (
    <section
      ref={containerRef}
      id="hero-animation"
      className="relative w-full h-[420vh] bg-black"
    >
      {/* Sticky full-screen viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/*
          ========================================================================
          LAYER 1: FULL-BLEED BACKGROUND CANVAS
          Fills 100% of the viewport width and height edge-to-edge
          ========================================================================
        */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <EyeAnimation
            frameIndex={frameIndex}
            className="w-full h-full"
          />
        </div>

        {/*
          ========================================================================
          LAYER 2: CINEMATIC DARK SCRIM OVERLAY
          Ensures overlaid text remains crisp, legible, and high-contrast
          ========================================================================
        */}
        <div
          className="absolute inset-0 w-full h-full z-10 pointer-events-none bg-gradient-to-b from-black/85 via-black/45 to-black/65"
          aria-hidden="true"
        />

        {/*
          ========================================================================
          LAYER 3: OVERLAID EDITORIAL & CREDIBILITY BLOCK
          Positioned on top in the upper safe zone
          ========================================================================
        */}
        <div className="relative z-20 pointer-events-none text-center px-4 pt-24 sm:pt-28 md:pt-32 flex flex-col items-center max-w-4xl mx-auto">
          
          {/* Micro Category Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase mb-3 backdrop-blur-md shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>Sub-Micron Microsurgery • Refractive & Vitreoretinal Institute</span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none drop-shadow-xl">
            PRECISION EYE CARE
          </h1>

          {/* Subhead */}
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-neutral-200 font-normal tracking-wide max-w-2xl drop-shadow-md">
            Advanced ophthalmology, visualized with precision.
          </p>

          {/* Supporting Clinical Narrative */}
          <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-2xl drop-shadow-sm">
            From anterior corneal topography to the posterior optic nerve pathway, we engineer diffraction-limited visual restoration through bespoke femtosecond precision and wavefront optics.
          </p>

          {/* Micro Credibility Stat Strip */}
          <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-[10px] sm:text-xs text-white/90 font-mono">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-xs">
              0.01µm Laser Guidance
            </span>
            <span className="hidden sm:inline text-neutral-400">•</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-xs">
              100% Blade-Free Delivery
            </span>
            <span className="hidden sm:inline text-neutral-400">•</span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md shadow-xs">
              99.8% Target Concordance
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
