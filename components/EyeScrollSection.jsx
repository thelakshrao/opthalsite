'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, Scissors, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';
import EyeAnimation from './EyeAnimation';

const TOTAL_FRAMES = 300;

export default function EyeScrollSection() {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const lastDrawnFrameRef = useRef(-1);

  const isVisibleRef = useRef(true);
  const rafIdRef = useRef(null);

  useEffect(() => {
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
      if (!isVisibleRef.current) {
        rafIdRef.current = null;
        return;
      }

      currentProgressRef.current += (targetProgressRef.current - currentProgressRef.current) * 0.15;

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(currentProgressRef.current * TOTAL_FRAMES))
      );

      if (frameIndex !== lastDrawnFrameRef.current) {
        lastDrawnFrameRef.current = frameIndex;
        if (animationRef.current) {
          animationRef.current.drawFrame(frameIndex);
        }
      }

      rafIdRef.current = requestAnimationFrame(renderLoop);
    };

    const startLoop = () => {
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(renderLoop);
      }
    };

    const container = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          updateScrollProgress();
          startLoop();
        }
      },
      { threshold: 0 }
    );

    if (container) observer.observe(container);

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });

    updateScrollProgress();
    startLoop();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
      if (container) observer.unobserve(container);
      observer.disconnect();
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero-animation"
      className="relative w-full h-[380vh] sm:h-[420vh] bg-black transform-gpu"
    >
      <div className="sticky top-0 h-screen sm:h-[100dvh] w-full overflow-hidden bg-black">

        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden flex items-center justify-center bg-black">
          <EyeAnimation
            ref={animationRef}
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute inset-0 z-10 pointer-events-none bg-black/55"
          aria-hidden="true"
        />

        <div
          className="absolute inset-x-0 bottom-0 h-24 sm:h-36 z-10 pointer-events-none bg-gradient-to-b from-transparent to-white"
          aria-hidden="true"
        />

        <div className="relative z-20 pointer-events-none text-center px-4 pt-16 sm:pt-24 md:pt-28 flex flex-col items-center max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-[11px] sm:text-sm font-medium tracking-wide uppercase mb-2 sm:mb-3 backdrop-blur-md shadow-md"
          >
            <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-black" />
            <span>Advanced Laser Eye Care Hospital</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="my-1 sm:my-2 flex items-center justify-center"
          >
            <Image
              src="/images/logo/eyevora2.png"
              alt="Eyevora Logo"
              width={440}
              height={110}
              className="w-72 sm:w-80 md:w-[380px] lg:w-[460px] h-auto object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl text-white font-bold tracking-tight max-w-2xl drop-shadow-lg"
          >
            Clear Vision. Painless Treatment. Better Living.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-2 sm:mt-3 text-s sm:text-base text-neutral-200 font-normal leading-relaxed max-w-2xl drop-shadow-md px-2"
          >
            Our laser vision correction uses computer-guided technology to help reshape the cornea with precision, addressing common refractive errors like nearsightedness, farsightedness, and astigmatism. The procedure is generally performed with local anesthetic eye drops, without incisions or stitches, and takes just a few minutes per eye. It's based on clinical research in ophthalmic care, reflecting years of advances aimed at improving both safety and results. Many patients notice improved vision within a day or two, though recovery time can vary from person to person.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-3 sm:mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-white font-medium"
          >
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-xs">
              <Zap className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-black" />
              Ultra-Fast Laser
            </span>
            <span className="hidden sm:inline text-neutral-400">•</span>
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-xs">
              <ShieldCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-black" />
              Proven Safe & Effective
            </span>
            <span className="hidden sm:inline text-neutral-400">•</span>
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-xs">
              <HeartHandshake className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-black" />
              Insurance Support
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}