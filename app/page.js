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
    // Check if the URL contains a hash fragment (e.g., #Examination-form or #services-section)
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash;

      // Small delay allows mobile DOM/images to finish layout sizing before scrolling
      const timer = setTimeout(() => {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#ffffff] text-black">
      <Navbar />

      <main className="pt-16 sm:pt-20">
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