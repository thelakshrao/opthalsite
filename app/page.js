'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import EyeScrollSection from '../components/EyeScrollSection';

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    treatment: 'Laser Vision Correction (SMILE Pro / Topo-LASIK)',
    notes: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#ffffff] text-black">
      
      {/* 
        ========================================================================
        PERMANENTLY DARK NAVBAR (Fixed at top, #0a0a0a, never changes color)
        ========================================================================
      */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] text-white border-b border-white/10 h-16 sm:h-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-full flex items-center justify-between">
          
          {/* Eyevora White Logo */}
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/images/logo/eyevora2.png"
              alt="Eyevora Precision Ophthalmology"
              width={160}
              height={42}
              className="h-7 sm:h-8 w-auto object-contain"
              priority
            />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-300">
            <a href="#hero-animation" className="hover:text-white transition-colors">
              Anatomy
            </a>
            <a href="#consultation-patient" className="hover:text-white transition-colors">
              Patient Journey
            </a>
            <a href="#photography-showcase" className="hover:text-white transition-colors">
              Vision Macro
            </a>
            <a href="#reconstruction-specialties" className="hover:text-white transition-colors">
              Specialties
            </a>
            <a href="#surgical-credibility" className="hover:text-white transition-colors">
              Credibility
            </a>
          </nav>

          {/* Consultation CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#consultation-patient"
              className="px-4 sm:px-5 py-2 rounded-full bg-white text-black text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors"
            >
              Consultation
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Sections (Strict Alternating Cadence: Dark -> White -> Dark -> White -> Dark -> White -> Dark) */}
      <main>
        
        {/* ====================================================================
            SECTION 1: HERO & SCROLL ANIMATION (DARK THEME WITH SHIFTING TONES)
            ==================================================================== */}
        <EyeScrollSection />

        {/* ====================================================================
            SECTION 2: PATIENT EXPERIENCE & CONSULTATION FORM (PURE WHITE #ffffff)
            ==================================================================== */}
        <section
          id="consultation-patient"
          className="py-28 sm:py-36 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-[#ffffff] text-black"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Patient Examination Photography & Editorial */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-block self-start px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-mono tracking-widest uppercase mb-4 border border-neutral-200">
                The Patient Experience
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-tight">
                Compassionate Care, <br />
                Guided by Evidence.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
                A thorough ophthalmic examination is never hurried. Our board-certified clinicians combine high-resolution digital topography with detailed clinical listening—ensuring your bespoke vision plan is tailored precisely to your anatomy and daily visual demands.
              </p>

              {/* Patient Photo Frame */}
              <div className="relative mt-8 rounded-2xl overflow-hidden border border-neutral-200 shadow-lg aspect-video sm:aspect-4/3 w-full bg-neutral-50">
                <Image
                  src="/images/photos/patient.webp"
                  alt="Doctor conducting vision acuity examination with patient using phoropter trial frames"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Trust Callouts */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-black">Unhurried Consultations</div>
                  <div className="text-xs text-neutral-500 mt-1 font-light">60-minute in-depth diagnostic evaluation with your surgeon.</div>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-black">Direct Access</div>
                  <div className="text-xs text-neutral-500 mt-1 font-light">Direct clinical communication before and after any procedure.</div>
                </div>
              </div>
            </div>

            {/* Right: Consultation Request Form */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-12 rounded-3xl bg-neutral-50 border border-neutral-200 shadow-sm">
                
                <div className="mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                    Direct Clinical Intake
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mt-1">
                    Request an Examination
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-light">
                    Schedule an in-person consultation with our ophthalmology team. No referral required for self-referrals.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-white border border-neutral-300 text-center py-12">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4 text-xl">
                      ✓
                    </div>
                    <h4 className="text-lg font-bold text-black">Consultation Request Received</h4>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-sm mx-auto">
                      Thank you, <span className="font-semibold">{formData.fullName}</span>. Our clinical coordinator will contact you at <span className="font-semibold">{formData.phone}</span> within one business day to confirm your appointment.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 px-5 py-2 text-xs font-semibold rounded-full bg-neutral-100 text-neutral-800 hover:bg-neutral-200 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm text-black placeholder-neutral-400 focus:outline-hidden focus:border-black transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm text-black placeholder-neutral-400 focus:outline-hidden focus:border-black transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                        Primary Clinical Interest / Concern *
                      </label>
                      <select
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm text-black focus:outline-hidden focus:border-black transition-colors"
                      >
                        <option value="Laser Vision Correction (SMILE Pro / Topo-LASIK)">
                          Laser Vision Correction (SMILE Pro / Topo-LASIK)
                        </option>
                        <option value="Cataract & Advanced Multifocal IOL">
                          Cataract & Advanced Multifocal IOL
                        </option>
                        <option value="Corneal Topography & Keratoconus">
                          Corneal Topography & Keratoconus
                        </option>
                        <option value="Vitreoretinal & Macular Evaluation">
                          Vitreoretinal & Macular Evaluation
                        </option>
                        <option value="General Comprehensive Ophthalmic Exam">
                          General Comprehensive Ophthalmic Exam / Second Opinion
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                        Optional Notes or Prior History
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Any prior surgeries, current prescriptions, or specific questions..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm text-black placeholder-neutral-400 focus:outline-hidden focus:border-black transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-black text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-neutral-800 transition-colors shadow-xs"
                    >
                      Request Priority Consultation
                    </button>

                    <p className="text-[11px] text-neutral-500 text-center font-light mt-3">
                      Confidential & HIPAA compliant. We do not share your medical information.
                    </p>
                  </form>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* ====================================================================
            SECTION 3: REAL EYE PHOTOGRAPHY SHOWCASE (PURE BLACK #000000)
            ==================================================================== */}
        <section
          id="photography-showcase"
          className="relative w-full py-28 sm:py-36 px-4 sm:px-8 lg:px-12 bg-[#000000] text-white overflow-hidden border-t border-white/10"
        >
          {/* Softly blurred ambient background using duplicate-and-blur of eye.webp */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <Image
              src="/images/photos/eye.webp"
              alt=""
              fill
              className="object-cover filter blur-3xl scale-150 brightness-30 contrast-125"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left: Asymmetric Organic Oval Mask Floating Over Blurred Backdrop */}
            <div className="relative shrink-0 flex items-center justify-center">
              {/* Outer soft glow */}
              <div className="absolute -inset-6 rounded-full bg-white/5 blur-2xl pointer-events-none" />

              {/* Organic hand-drawn oval mask */}
              <div
                className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] overflow-hidden ring-1 ring-white/25 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  borderRadius: '58% 42% 64% 36% / 46% 56% 44% 54%',
                }}
              >
                <Image
                  src="/images/photos/eye.webp"
                  alt="High-resolution clinical macro photography of human iris and ocular geometry"
                  fill
                  sizes="(max-width: 768px) 384px, 480px"
                  className="object-cover scale-110"
                  priority={false}
                />
              </div>

              {/* Scaled-up Eyevora Logo mark pinned near oval's edge */}
              <div className="absolute -bottom-4 right-4 sm:bottom-4 sm:right-2 z-20 px-5 py-2.5 rounded-2xl bg-[#0a0a0a]/90 border border-white/20 backdrop-blur-md shadow-2xl flex items-center gap-2.5">
                <Image
                  src="/images/logo/eyevora2.png"
                  alt="Eyevora"
                  width={180}
                  height={48}
                  className="h-7 sm:h-9 md:h-10 w-auto object-contain"
                />
              </div>
            </div>

            {/* Right: Dual-Audience Clinical & Patient Copy */}
            <div className="w-full lg:max-w-xl text-center lg:text-left">
              <div className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono tracking-widest uppercase mb-4 border border-white/15">
                Refractive Fidelity
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                CLARITY, REDEFINED.
              </h2>

              <h3 className="mt-2 text-sm sm:text-base font-semibold text-neutral-300">
                Sub-Micron Ophthalmic Diagnostics & Bespoke Refractive Surgery
              </h3>

              {/* Dual-Audience Copy Line */}
              <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                Trusted by referring clinicians for sub-micron wavefront accuracy and 10-layer OCT diagnostics; chosen by patients for life-changing visual clarity and unhurried surgical excellence.
              </p>

              {/* Targeted Clinical & Patient Criteria */}
              <div className="mt-8 space-y-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-white mt-1.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      For Referring Clinicians
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                      Objective ray-tracing aberrometry, axial OCT biometrics, and comprehensive co-management protocols for complex corneal and retinal referrals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-white mt-1.5 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      For Prospective Patients
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                      100% blade-free femtosecond laser precision restoring natural visual contrast, reading sharpness, and rapid return to everyday activities.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ====================================================================
            SECTION 4: PRECISION RECONSTRUCTIVE SPECIALTIES with eye2.webp (PURE WHITE #ffffff)
            ==================================================================== */}
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
                  alt="Microsurgical reconstruction of human ocular puzzle showing precise anatomical assembly"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-2"
                />
              </div>
            </div>

          </div>

          {/* Specialties Grid */}
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

        {/* ====================================================================
            SECTION 5: SURGICAL CREDIBILITY & OPERATING STANDARDS with doctor.webp (PURE BLACK #000000)
            ==================================================================== */}
        <section
          id="surgical-credibility"
          className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-12 bg-[#000000] text-white border-t border-white/10 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left: Dramatic Surgeon Portrait Under Operating Lights */}
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

              {/* Right: Clinical Precision & Credibility Copy */}
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

                {/* 4 Pillars of Surgical Trust */}
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

        {/* ====================================================================
            SECTION 6: CLINICAL BENCHMARK OUTCOMES (PURE WHITE #ffffff)
            ==================================================================== */}
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

            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-4xl font-black text-black tracking-tight">0.02%</div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-800 mt-2">Complication Index</div>
              <div className="text-[11px] text-neutral-500 mt-1 font-light">Strict Clinical Audit Standards</div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 7: CONSULTATION FINALE & FOOTER (PURE BLACK #0a0a0a)
            ==================================================================== */}
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

      {/* Permanently Dark Sleek Minimal Footer */}
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
