'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Eye,
  ShieldCheck,
  Activity,
  Layers,
  ArrowUpRight,
  Sparkles,
  Droplet,
  CircleDot,
  Focus,
  Scan,
  Crosshair,
  AlertCircle
} from 'lucide-react';

function useEyeDots(width = 360, height = 180, step = 10) {
  return useMemo(() => {
    const dots = [];
    const cx = width / 2;
    const cy = height / 2;
    const rx = width * 0.45;
    const ry = height * 0.42;

    for (let x = 0; x <= width; x += step) {
      for (let y = 0; y <= height; y += step) {
        const dx = (x - cx) / rx;
        const dy = (y - cy) / ry;
        if (dx * dx + dy * dy <= 1) {
          const distFromCenter = Math.hypot(x - cx, y - cy);
          const isIris = distFromCenter < height * 0.18;
          dots.push({ x, y, iris: isIris });
        }
      }
    }
    return dots;
  }, [width, height, step]);
}

function SingleCornerEyeDotPattern({ className = '', width = 360, height = 180 }) {
  const dots = useEyeDots(width, height);

  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      style={{
        width: width,
        height: height,
        WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
        maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
      }}
      aria-hidden="true"
    >
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        {dots.map((d, i) => {
          const baseRadius = d.iris ? 2.5 : 1.5;
          const baseOpacity = d.iris ? 0.85 : 0.45;
          const animDelay = (i % 12) * 0.15;

          return (
            <motion.circle
              key={i}
              cx={d.x}
              cy={d.y}
              r={baseRadius}
              fill={d.iris ? '#ffffff' : '#737373'}
              initial={{ opacity: baseOpacity, scale: 1 }}
              animate={{
                opacity: [baseOpacity, baseOpacity * 0.3, baseOpacity],
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: animDelay,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}

const PRIMARY_SERVICES = [
  {
    id: 'lasik',
    title: 'Lasik Eye Surgery',
    subtitle: 'Blade-Free Refractive Precision',
    icon: Eye,
  },
  {
    id: 'cataract',
    title: 'Cataract Surgery',
    subtitle: 'Advanced Premium IOL Implants',
    icon: Layers,
  },
  {
    id: 'retinal-detachment',
    title: 'Retinal Detachment',
    subtitle: 'Vitreoretinal Surgical Repair',
    icon: Activity,
  },
  {
    id: 'glaucoma',
    title: 'Glaucoma Treatment',
    subtitle: 'Intraocular Pressure Control',
    icon: ShieldCheck,
  },
];

const ADDITIONAL_TREATMENTS = [
  { id: 'dry-eye-syndrome', title: 'Dry Eye Syndrome', category: 'Surface', icon: Droplet },
  { id: 'conjunctivitis', title: 'Conjunctivitis', category: 'Infectious', icon: Eye },
  { id: 'macular-degeneration', title: 'Macular Degeneration', category: 'Retina', icon: Focus },
  { id: 'diabetic-retinopathy', title: 'Diabetic Retinopathy', category: 'Vascular', icon: Activity },
  { id: 'pterygium', title: 'Pterygium Removal', category: 'Corneal', icon: Sparkles },
  { id: 'keratoconus', title: 'Keratoconus (CXL)', category: 'Corneal', icon: Crosshair },
  { id: 'uveitis', title: 'Uveitis Therapy', category: 'Inflammatory', icon: ShieldCheck },
  { id: 'corneal-ulcer', title: 'Corneal Ulcer Care', category: 'Emergency', icon: AlertCircle },
  { id: 'strabismus', title: 'Strabismus Surgery', category: 'Muscle', icon: CircleDot },
  { id: 'blepharitis', title: 'Blepharitis Hygiene', category: 'Lid Care', icon: Scan },
  { id: 'stye-chalazion', title: 'Stye & Chalazion', category: 'Lid Care', icon: CircleDot },
  { id: 'vitreous-hemorrhage', title: 'Vitreous Hemorrhage', category: 'Vitreous', icon: Layers },
  { id: 'optic-neuritis', title: 'Optic Neuritis', category: 'Neuro-Opth', icon: ShieldCheck },
  { id: 'retinitis-pigmentosa', title: 'Retinitis Pigmentosa', category: 'Genetic', icon: Focus },
  { id: 'retinoblastoma', title: 'Retinoblastoma Care', category: 'Oncology', icon: AlertCircle },
];

export default function Services() {
  return (
    <div
      id="services-section"
      className="relative w-full max-w-full bg-black text-white selection:bg-white selection:text-black overflow-hidden scroll-mt-20 sm:scroll-mt-28"
    >
      <section
        id="photography-showcase"
        className="relative w-full max-w-full py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-black text-white overflow-hidden border-b border-white/10 scroll-mt-20 sm:scroll-mt-28"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black"
          aria-hidden="true"
        />

        <SingleCornerEyeDotPattern
          className="hidden md:block absolute -bottom-10 -left-16 z-0 opacity-70"
          width={360}
          height={180}
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative shrink-0 flex items-center justify-center"
          >
            <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-white/5 blur-xl pointer-events-none" />

            <div
              className="relative w-60 h-60 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] overflow-hidden ring-1 ring-white/25 shadow-2xl"
              style={{
                borderRadius: '58% 42% 64% 36% / 46% 56% 44% 54%',
              }}
            >
              <Image
                src="/images/photos/eye.webp"
                alt="Clinical macro photography of human iris"
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 384px, 460px"
                quality={80}
                className="object-cover scale-110"
                priority
              />
            </div>

            <div className="absolute -bottom-3 right-2 sm:bottom-4 sm:right-2 z-20 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-[#0a0a0a] border border-white/20 shadow-2xl flex items-center gap-2">
              <Image
                src="/images/logo/eyevora2.png"
                alt="Eyevora"
                width={160}
                height={40}
                className="h-5 sm:h-8 w-auto object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="w-full lg:max-w-2xl text-left"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-[10px] sm:text-[11px] font-mono tracking-widest uppercase mb-3 border border-white/15">
              Core Ophthalmic Specialties
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-2">
              PRIMARY SERVICES
            </h1>

            <p className="text-xs sm:text-base text-neutral-400 font-light mb-6">
              Sub-micron surgical precision across core disciplines of modern vision care.
            </p>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
              {PRIMARY_SERVICES.map((service, index) => {
                const IconComponent = service.icon;

                return (
                  <Link
                    key={service.id}
                    href={`/treatment/${service.id}`}
                    className="block"
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.96 }}
                      className="relative p-3.5 sm:p-5 rounded-2xl bg-neutral-950 border border-white/10 text-neutral-300 hover:border-white/40 hover:bg-neutral-900 transition-all duration-200 flex flex-col justify-between h-full"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <div className="p-2 rounded-xl bg-white/10 text-white">
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span className="text-[10px] font-mono text-neutral-500 font-bold">
                            0{index + 1}
                          </span>
                        </div>

                        <h2 className="text-xs sm:text-lg font-bold text-white tracking-tight leading-snug">
                          {service.title}
                        </h2>

                        <p className="text-[10px] sm:text-xs text-neutral-400 font-light mt-1 line-clamp-2">
                          {service.subtitle}
                        </p>
                      </div>

                      <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-neutral-400 hover:text-white">
                        <span>View Details</span>
                        <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto mt-16 sm:mt-24">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                Specialized Conditions
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Additional Eye Treatments
              </h2>
            </div>
            <span className="text-xs font-mono text-neutral-500">
              Scroll →
            </span>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            {ADDITIONAL_TREATMENTS.map((item) => {
              const ItemIcon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={`/treatment/${item.id}`}
                  className="shrink-0 w-60 sm:w-64"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    className="p-4 rounded-2xl bg-neutral-950 border border-white/10 hover:border-white/30 transition-all duration-200 flex flex-col justify-between h-36"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-neutral-400 uppercase">
                          {item.category}
                        </span>
                        <ItemIcon className="w-4 h-4 text-neutral-400" />
                      </div>
                      <h3 className="text-sm font-bold text-white tracking-tight line-clamp-1">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-medium text-neutral-400 border-t border-white/5 pt-2">
                      <span>Learn More</span>
                      <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}