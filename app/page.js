'use client';

import React, { useEffect } from 'react';
import EyeScrollSection from '../components/EyeScrollSection';
import Navbar from '../components/Navbar';
import Examination from '../components/Examination';
import Services from '@/components/Services';
import Specialties from '@/components/Specialties';
import Credibility from '@/components/Credibility';
import PatientJourney from '@/components/Patientjourney';
import GetStarted from '@/components/Getstarted';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.location.hash) return;
    const hash = window.location.hash;

    let rafId = null;
    let attempts = 0;
    const maxAttempts = 60; // ~1s ceiling at 60fps, well under the old fixed 250ms in the slow case

    const tryScroll = () => {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      attempts += 1;
      if (attempts < maxAttempts) {
        rafId = requestAnimationFrame(tryScroll);
      }
    };

    // requestAnimationFrame instead of a fixed setTimeout: it fires on the
    // very next paint the target element exists in, so on a fast client-side
    // transition this scrolls immediately instead of always waiting 250ms,
    // while still retrying if the section hasn't mounted yet on a slow one.
    rafId = requestAnimationFrame(tryScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    // overflow-x-clip, not overflow-x-hidden — these wrap EyeScrollSection
    // directly, and `hidden` here was the main cause of its sticky pin not
    // holding (see globals.css comment for the full explanation).
    <div className="relative min-h-screen w-full max-w-full overflow-x-clip bg-[#ffffff] text-black">
      <Navbar />

      <main className="pt-16 sm:pt-20 w-full max-w-full overflow-x-clip">
        <EyeScrollSection />
        <Examination />
        <Services />
        <Specialties />
        <Credibility />
        <PatientJourney />
        <GetStarted />
      </main>

      <Footer />
    </div>
  );
}