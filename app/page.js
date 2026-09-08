'use client';

import React from 'react';
import Image from 'next/image';
import EyeScrollSection from '../components/EyeScrollSection';
import Navbar from '../components/Navbar';
import Examination from '../components/Examination';
import Services from '@/components/Services';
import Specialties from '@/components/Specialties';
import Credibility from '@/components/Credibility';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#ffffff] text-black">

      {/* Permanent Fixed Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">

        {/* SECTION 1: HERO & SCROLL ANIMATION */}
        <EyeScrollSection />

        {/* SECTION 2: LASIK EXAMINATION & CONSULTATION FORM */}
        <Examination />

        {/* SECTION 3: REAL EYE PHOTOGRAPHY SHOWCASE */}
        <Services />

        {/* SECTION 4: PRECISION RECONSTRUCTIVE SPECIALTIES */}
        <Specialties />


        {/* SECTION 5: SURGICAL CREDIBILITY */}
        <Credibility />

        {/* SECTION 6: CLINICAL BENCHMARK OUTCOMES */}
        <section
          id="clinical-outcomes"
          className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-[#ffffff] text-black"
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-2">
              Verified Clinical Metrics
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black">
              Clinical Performance & Outcomes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              Every procedure is prospectively audited against international ophthalmic safety benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-4xl font-black text-black tracking-tight">99.8%</div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-800 mt-2">20/20 Acuity Rate</div>
              <div className="text-[11px] text-neutral-500 mt-1 font-light">Refractive & Premium IOL Cohort</div>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-4xl font-black text-black tracking-tight">35,000+</div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-800 mt-2">Procedures Completed</div>
              <div className="text-[11px] text-neutral-500 mt-1 font-light">Lifetime Surgical Volume</div>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-4xl font-black text-black tracking-tight">25+</div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-800 mt-2">Years Research</div>
              <div className="text-[11px] text-neutral-500 mt-1 font-light">Peer-Reviewed Publications</div>
            </div>

            <div className="p-8 rounded-2xl bg-[#ffffff] border border-neutral-200">
              <div className="text-4xl font-black text-black tracking-tight">0.02%</div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-800 mt-2">Complication Index</div>
              <div className="text-[11px] text-neutral-500 mt-1 font-light">Strict Clinical Audit Standards</div>
            </div>
          </div>
        </section>

        {/* SECTION 7: CONSULTATION FINALE */}
        <section
          id="consultation-finale"
          className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-[#000000] text-white border-t border-white/10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-medium uppercase tracking-wider mb-6 border border-white/15">
              Begin Your Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Elevate Your Visual Potential
            </h2>
            <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
              Whether exploring laser refractive freedom, premium cataract restoration, or specialized retinal care—our surgeons are ready to assist you.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#consultation-patient"
                className="px-8 py-3.5 rounded-full bg-white text-black text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors shadow-xs"
              >
                Schedule Examination Form ↑
              </a>
              <a
                href="#hero-animation"
                className="px-8 py-3.5 rounded-full bg-transparent text-white border border-white/30 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Return to Ocular Anatomy ↑
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Permanently Dark Sleek Footer */}
      <footer className="py-12 px-4 sm:px-8 lg:px-12 bg-[#0a0a0a] text-neutral-400 text-xs border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/eyevora2.png"
              alt="Eyevora"
              width={120}
              height={32}
              className="h-5 w-auto object-contain"
            />
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-400">© 2026 Eyevora Precision Ophthalmology. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
            <a href="#hero-animation" className="hover:text-white transition-colors">Anatomy Model</a>
            <a href="#consultation-patient" className="hover:text-white transition-colors">Patient Intake</a>
            <a href="#photography-showcase" className="hover:text-white transition-colors">Vision Macro</a>
            <a href="#reconstruction-specialties" className="hover:text-white transition-colors">Specialties</a>
            <a href="#surgical-credibility" className="hover:text-white transition-colors">Credibility</a>
          </div>
        </div>
      </footer>

    </div>
  );
}