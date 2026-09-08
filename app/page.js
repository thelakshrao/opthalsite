'use client';

import React from 'react';
import Image from 'next/image';
import EyeScrollSection from '../components/EyeScrollSection';
import Navbar from '../components/Navbar';
import Examination from '../components/Examination';
import Services from '@/components/Services';
import Specialties from '@/components/Specialties';
import Credibility from '@/components/Credibility';
import PatientJourney from '@/components/Patientjourney';
import GetStarted from '@/components/Getstarted';

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

        {/* SECTION 6: PATIENT JOURNEY / CLINICAL TRUST */}
        <PatientJourney />

        {/* SECTION 7: CONSULTATION FINALE */}
        <GetStarted />

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
            <span className="text-neutral-400">© 2026 EyevoraCare. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
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