'use client';

import React from 'react';
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