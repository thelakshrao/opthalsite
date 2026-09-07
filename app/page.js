'use client';

import React from 'react';
import Image from 'next/image';
import EyeScrollSection from '../components/EyeScrollSection';
import Navbar from '../components/Navbar';
import Examination from '../components/Examination';
import Services from '@/components/Services';


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
        <section
          id="reconstruction-specialties"
          className="py-28 sm:py-36 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-[#ffffff] text-black"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-2">
                Anatomical Reassembly
              </p>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-black leading-tight">
                Reconstructing Sight, <br />
                Piece by Piece.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
                The eye functions as a compound optical system where every micron matters. From corneal curvature to lens accommodation and retinal neural transmission, our microsurgeons analyze each structural segment to restore complete visual harmony.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-white p-2">
                <Image
                  src="/images/photos/eye2.webp"
                  alt="Microsurgical reconstruction of human ocular puzzle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#ffffff] border border-neutral-200 hover:border-black transition-colors">
              <div className="text-xs font-mono font-bold text-neutral-400 mb-6">01 / CORNEA</div>
              <h3 className="text-xl font-bold text-black mb-3">
                Corneal & Refractive Architecture
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-light">
                Sub-micron wavefront modeling, SMILE Pro lenticule extraction, and customized topo-guided laser ablation for crisp refractive acuity.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                <span className="px-2.5 py-1 text-[11px] rounded bg-neutral-100 text-neutral-800 font-medium">
                  Topo-Guided LASIK
                </span>
                <span className="px-2.5 py-1 text-[11px] rounded bg-neutral-100 text-neutral-800 font-medium">
                  SMILE Pro
                </span>
                <span className="px-2.5 py-1 text-[11px] rounded bg-neutral-100 text-neutral-800 font-medium">
                  Cross-Linking
                </span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#ffffff] border border-neutral-200 hover:border-black transition-colors">
              <div className="text-xs font-mono font-bold text-neutral-400 mb-6">02 / LENS</div>
              <h3 className="text-xl font-bold text-black mb-3">
                Crystalline Lens & Premium IOL
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-light">
                Femtosecond laser capsulotomy and trifocal intraocular lens implantation, restoring dynamic visual focus across reading, intermediate, and distance.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                <span className="px-2.5 py-1 text-[11px] rounded bg-neutral-100 text-neutral-800 font-medium">
                  Trifocal Toric
                </span>
                <span className="px-2.5 py-1 text-[11px] rounded bg-neutral-100 text-neutral-800 font-medium">
                  FLACS Laser
                </span>
                <span className="px-2.5 py-1 text-[11px] rounded bg-neutral-100 text-neutral-800 font-medium">
                  EDOF Implants
                </span>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#ffffff] border border-neutral-200 hover:border-black transition-colors">
              <div className="text-xs font-mono font-bold text-neutral-400 mb-6">03 / RETINA</div>
              <h3 className="text-xl font-bold text-black mb-3">
                Vitreoretinal & Macular Medicine
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-light">
                27-gauge sutureless micro-vitrectomy, high-resolution optical coherence tomography, and anti-VEGF targeted micro-infusions for macular stabilization.
              </p>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                <span className="px-2.5 py-1 text-[11px] rounded bg-neutral-100 text-neutral-800 font-medium">
                  27G Vitrectomy
                </span>
                <span className="px-2.5 py-1 text-[11px] rounded bg-neutral-100 text-neutral-800 font-medium">
                  Macular Repair
                </span>
                <span className="px-2.5 py-1 text-[11px] rounded bg-neutral-100 text-neutral-800 font-medium">
                  OCT-Angiography
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: SURGICAL CREDIBILITY */}
        <section
          id="surgical-credibility"
          className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-12 bg-[#000000] text-white border-t border-white/10 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md aspect-2/3 sm:aspect-3/4 rounded-3xl overflow-hidden ring-1 ring-white/20 shadow-2xl bg-neutral-950">
                  <Image
                    src="/images/photos/doctor.webp"
                    alt="Masked ophthalmic microsurgeon prepared under surgical operating lights"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/15">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Surgical Discipline</div>
                    <div className="text-sm font-bold text-white mt-0.5">HEPA Class 10,000 Operating Theater</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono tracking-widest uppercase mb-4 border border-white/15">
                  Microsurgical Standards
                </div>

                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                  MICROSURGICAL DISCIPLINE
                </h2>

                <h3 className="mt-2 text-base sm:text-lg font-semibold text-neutral-300">
                  Zero Margin for Error. Uncompromising Standards.
                </h3>

                <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                  True ophthalmic excellence happens at the cellular threshold. Inside our positive-pressure HEPA surgical suites, board-certified microsurgeons operate under high-magnification stereoscopic optical microscopes, guided by real-time femtosecond optical coherence telemetry. Every incision, capsulorhexis, and intraocular implant is executed to tolerances measured in microns.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="text-xs font-bold uppercase tracking-wider text-white">Class 10,000 Cleanrooms</div>
                    <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                      Continuous micro-filtration and temperature-regulated airflow mitigating surgical infection risk.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="text-xs font-bold uppercase tracking-wider text-white">Fellowship-Trained Microsurgeons</div>
                    <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                      Specialists credentialed at Wilmer Eye Institute, Moorfields, and Bascom Palmer.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="text-xs font-bold uppercase tracking-wider text-white">0.01mm Stereotactic Control</div>
                    <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                      Sub-millimeter infrared eye tracking that auto-compensates for micro-saccadic eye movement.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div className="text-xs font-bold uppercase tracking-wider text-white">99.8% Visual Target Concordance</div>
                    <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                      Consistently exceeding international safety and refractive efficacy benchmarks.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

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