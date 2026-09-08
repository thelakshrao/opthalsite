'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ShieldCheck, Activity, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

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

const SERVICES_DATA = [
  {
    id: 'lasik',
    title: 'Lasik Eye Surgery',
    subtitle: 'Blade-Free Refractive Precision',
    icon: Eye,
    tag: 'Refractive Freedom',
    description: 'Computer-guided excimer and femtosecond laser reshaping of the cornea to correct myopia, hyperopia, and astigmatism in minutes.',
    highlights: ['100% Blade-Free', 'Under 15 Min Procedure', 'Rapid 24-48h Recovery'],
  },
  {
    id: 'cataract',
    title: 'Cataract Surgery',
    subtitle: 'Advanced Premium IOL Implants',
    icon: Layers,
    tag: 'Lens Restoration',
    description: 'Micro-incisional phacoemulsification replacing clouded natural lenses with advanced trifocal, EDOF, or toric intraocular implants.',
    highlights: ['Femtosecond Precision', 'Custom Trifocal/Toric', 'Sutureless Day-Care'],
  },
  {
    id: 'retinal',
    title: 'Retinal Detachment',
    subtitle: 'Vitreoretinal Surgical Repair',
    icon: Activity,
    tag: 'Macular Preservation',
    description: 'Urgent 27-gauge sutureless micro-vitrectomy, pneumatic retinopexy, and laser photocoagulation to secure detached retinal layers.',
    highlights: ['27G Micro-Vitrectomy', 'Sub-Micron OCT Alignment', 'Emergency Care Protocol'],
  },
  {
    id: 'glaucoma',
    title: 'Glaucoma Treatment',
    subtitle: 'Intraocular Pressure Control',
    icon: ShieldCheck,
    tag: 'Optic Nerve Safety',
    description: 'Selective Laser Trabeculoplasty (SLT), MIGS micro-stents, and medical therapy to regulate fluid drainage and safeguard optic nerve fibers.',
    highlights: ['SLT Laser Therapy', 'MIGS Micro-Implants', '24/7 IOP Monitoring'],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState('lasik');

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-hidden">

      {/* CORE SERVICES SECTION */}
      <section
        id="photography-showcase"
        className="relative w-full py-16 sm:py-32 px-4 sm:px-8 lg:px-12 bg-black text-white overflow-hidden border-b border-white/10"
      >
        {/* CSS Radial Glow for mobile instead of costly image filters */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black"
          aria-hidden="true"
        />

        {/* SVG Dot animation rendered ONLY on desktop (hidden on mobile to save GPU) */}
        <SingleCornerEyeDotPattern
          className="hidden md:block absolute -bottom-10 -left-16 z-0 opacity-70"
          width={360}
          height={180}
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* LEFT: MACRO EYE GRAPHIC */}
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

          {/* RIGHT: 2X2 GRID OF MAIN SERVICES */}
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
              Sub-micron surgical precision across four core disciplines of modern vision care.
            </p>

            {/* 2X2 GRID FOR MOBILE & DESKTOP -- cards stagger in one by one */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid grid-cols-2 gap-2.5 sm:gap-4"
            >
              {SERVICES_DATA.map((service, index) => {
                const IconComponent = service.icon;
                const isSelected = selectedService === service.id;

                return (
                  <motion.div
                    key={service.id}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedService(service.id)}
                    className={`relative p-3.5 sm:p-5 rounded-2xl cursor-pointer transition-colors duration-200 flex flex-col justify-between border ${isSelected
                      ? 'bg-neutral-900 border-white text-white shadow-lg ring-1 ring-white/40'
                      : 'bg-neutral-950 border-white/10 text-neutral-300 hover:border-white/30'
                      }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className={`p-2 rounded-xl ${isSelected ? 'bg-white text-black' : 'bg-white/10 text-white'}`}>
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

                    <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold">
                      <span className={isSelected ? 'text-white' : 'text-neutral-400'}>
                        {isSelected ? 'Active' : 'Details'}
                      </span>
                      <ArrowUpRight className={`w-3 h-3 transition-transform ${isSelected ? 'rotate-45 text-white' : 'text-neutral-500'}`} />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* SELECTED SERVICE DETAILS PANEL -- crossfades/slides in whenever the selection changes */}
        <AnimatePresence mode="wait">
          {selectedService && (() => {
            const active = SERVICES_DATA.find((s) => s.id === selectedService);
            if (!active) return null;
            const Icon = active.icon;

            return (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="mt-8 sm:mt-12 max-w-7xl mx-auto p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-neutral-950 border border-white/15 relative z-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="p-1.5 rounded-lg bg-white/10 text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-mono tracking-widest text-neutral-400 uppercase">
                        {active.subtitle}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                      {active.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-base text-neutral-300 font-light leading-relaxed">
                      {active.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {active.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-neutral-200">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 flex flex-col gap-3">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="#consultation-patient"
                      className="w-full py-3.5 rounded-full bg-white text-black text-center text-xs sm:text-sm font-bold tracking-wide hover:bg-neutral-200 transition-colors shadow-md"
                    >
                      Book Consultation for {active.title} →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </section>

    </div>
  );
}