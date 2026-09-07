'use client';

import React, { useRef, useEffect } from 'react';
import EyeAnimation from './EyeAnimation';

export default function EyeScrollSection() {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const lastDrawnFrameRef = useRef(-1);

  useEffect(() => {
    let rafId = null;

    const updateScrollProgress = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;

      if (scrollableDistance > 0) {
        const rawProgress = -rect.top / scrollableDistance;
        targetProgressRef.current = Math.max(0, Math.min(1, rawProgress));
      }
    };

    const renderLoop = () => {
      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * 0.15;

      const maxFrames = animationRef.current ? animationRef.current.getTotalFrames() : 192;

      const frameIndex = Math.min(
        maxFrames - 1,
        Math.max(0, Math.floor(currentProgressRef.current * maxFrames))
      );

      if (frameIndex !== lastDrawnFrameRef.current) {
        lastDrawnFrameRef.current = frameIndex;
        if (animationRef.current) {
          animationRef.current.drawFrame(frameIndex);
        }
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });

    updateScrollProgress();
    rafId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero-animation"
      className="relative w-full h-[420vh] bg-white"
    >
      <div className="sticky top-0 h-screen sm:h-[100dvh] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden flex items-center justify-center">
          <EyeAnimation
            ref={animationRef}
            className="w-full h-full"
          />
        </div>

        <div
          className="absolute inset-0 w-full h-full z-10 pointer-events-none bg-gradient-to-b from-black/85 via-black/40 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-20 pointer-events-none text-center px-4 pt-20 sm:pt-28 md:pt-32 flex flex-col items-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase mb-3 backdrop-blur-md shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span>Sub-Micron Microsurgery • Refractive & Vitreoretinal Institute</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none drop-shadow-xl">
            PRECISION EYE CARE
          </h1>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-neutral-200 font-normal tracking-wide max-w-2xl drop-shadow-md">
            Advanced ophthalmology, visualized with precision.
          </p>

          <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-2xl drop-shadow-sm">
            From anterior corneal topography to the posterior optic nerve pathway, we engineer diffraction-limited visual restoration through bespoke femtosecond precision and wavefront optics.
          </p>

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