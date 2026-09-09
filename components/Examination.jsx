'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { diseaseData } from '@/data/diseaseContent';

const EMAILJS_SERVICE_ID = 'service_nx91wke';
const EMAILJS_TEMPLATE_ID = 'template_loos9xj';
const EMAILJS_PUBLIC_KEY = 'k3ORwrN11DA_MndsG';

const COUNTRY_CODES = [
    { code: "+91", label: "🇮🇳 +91 (IN)", maxLength: 10 },
    { code: "+1", label: "🇺🇸 +1 (US/CA)", maxLength: 10 },
    { code: "+44", label: "🇬🇧 +44 (UK)", maxLength: 11 },
    { code: "+61", label: "🇦🇺 +61 (AU)", maxLength: 9 },
    { code: "+971", label: "🇦🇪 +971 (UAE)", maxLength: 9 },
    { code: "+81", label: "🇯🇵 +81 (JP)", maxLength: 10 },
    { code: "+49", label: "🇩🇪 +49 (DE)", maxLength: 11 },
    { code: "+33", label: "🇫🇷 +33 (FR)", maxLength: 9 },
    { code: "+65", label: "🇸🇬 +65 (SG)", maxLength: 8 },
];

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
                const distSq = dx * dx + dy * dy;

                if (distSq <= 1) {
                    const distFromCenter = Math.hypot(x - cx, y - cy);
                    const isIris = distFromCenter < height * 0.18;
                    dots.push({ x, y, iris: isIris });
                }
            }
        }
        return dots;
    }, [width, height, step]);
}

function EyeDotPattern({ className = '', width = 360, height = 180 }) {
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
                            fill={d.iris ? '#000000' : '#525252'}
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

export default function Examination() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [countryCode, setCountryCode] = useState("+91");
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        treatment: '',
        message: '',
    });

    const selectedCountry = useMemo(() => {
        return COUNTRY_CODES.find((c) => c.code === countryCode) || COUNTRY_CODES[0];
    }, [countryCode]);

    const handlePhoneChange = (e) => {
        const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, selectedCountry.maxLength);
        setFormData((prev) => ({ ...prev, phone: digitsOnly }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const fullPhoneNumber = `${countryCode} ${formData.phone}`;

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.fullName,
                    phone: fullPhoneNumber,
                    treatment: formData.treatment || 'General Inquiry',
                    message: formData.message || 'No message provided',
                },
                EMAILJS_PUBLIC_KEY
            );
            setFormSubmitted(true);
        } catch (error) {
            console.error('Email send failed:', error);
            alert('Failed to submit consultation request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="consultation-patient"
            className="relative w-full pt-16 sm:pt-24 pb-28 sm:pb-26 bg-[#ffffff] text-black z-20 overflow-hidden transform-gpu"
        >
            <div
                className="absolute top-0 inset-x-0 h-28 pointer-events-none bg-gradient-to-b from-transparent via-white/80 to-white z-30 flex items-center justify-center pt-2"
                aria-hidden="true"
            >
                <Image
                    src="/images/logo/eyevora2.png"
                    alt="Eyevora Logo"
                    width={160}
                    height={40}
                    className="h-6 sm:h-8 w-auto object-contain brightness-0"
                />
            </div>

            <EyeDotPattern
                className="hidden md:block absolute md:top-24 md:-left-8 z-10 opacity-80"
                width={360}
                height={180}
            />

            <EyeDotPattern
                className="hidden md:block absolute md:-bottom-4 md:-right-8 z-10 opacity-80"
                width={360}
                height={180}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-40 pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="lg:col-span-6 flex flex-col justify-center relative z-20"
                    >
                        <div className="inline-block self-start px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-mono tracking-widest uppercase mb-4 border border-neutral-200">
                            LASIK Eye Surgery
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-tight">
                            Freedom From Glasses, <br />
                            In Minutes.
                        </h2>

                        <p className="mt-5 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
                            LASIK (Laser-Assisted In Situ Keratomileusis) reshapes the cornea using a precise, computer-guided excimer laser—correcting nearsightedness, farsightedness, and astigmatism. The procedure is quick, typically performed with numbing eye drops rather than general anesthesia, and most patients return to normal daily activities within a day or two.
                        </p>

                        <div className="relative mt-8 rounded-2xl overflow-hidden border border-neutral-200 shadow-lg aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-50">
                            <Image
                                src="/images/photos/lasik.webp"
                                alt="LASIK laser eye surgery procedure"
                                fill
                                sizes="(max-width: 640px) 100vw, 50vw"
                                quality={75}
                                className="object-cover object-[78%_45%] scale-[1.35]"
                            />
                        </div>

                        <div className="mt-6 p-4 rounded-xl bg-black text-white">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                                Machine We Use For Surgery
                            </div>
                            <p className="text-sm mt-1.5 font-light leading-relaxed">
                                Your procedure is performed with a <strong className="font-bold">computer-guided excimer laser</strong>, with corneal flaps created by a <strong className="font-bold">femtosecond laser</strong> and reshaping mapped by a <strong className="font-bold">topography-guided system</strong>.
                            </p>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                                <div className="text-xs font-bold uppercase tracking-wider text-black">Quick Procedure</div>
                                <div className="text-xs text-neutral-500 mt-1 font-light">Typically completed in under 15 minutes for both eyes.</div>
                            </div>
                            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                                <div className="text-xs font-bold uppercase tracking-wider text-black">Fast Recovery</div>
                                <div className="text-xs text-neutral-500 mt-1 font-light">Most patients notice clearer vision within a day or two.</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                        className="lg:col-span-6"
                    >
                        <div
                            id="Examination-form"
                            className="p-6 sm:p-12 rounded-3xl bg-neutral-50 border border-neutral-200 shadow-sm scroll-mt-24"
                        >

                            <div className="mb-8">
                                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                                    Direct Clinical Intake
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-black mt-1">
                                    Request an Examination
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-light">
                                    Schedule an in-person LASIK consultation with our ophthalmology team. No referral required for self-referrals.
                                </p>
                            </div>

                            {formSubmitted ? (
                                <div className="p-8 rounded-2xl bg-white border border-neutral-300 text-center py-12">
                                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center mx-auto mb-4 text-xl">
                                        ✓
                                    </div>
                                    <h4 className="text-lg font-bold text-black">Consultation Request Received</h4>
                                    <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-sm mx-auto">
                                        Thank you, <span className="font-semibold">{formData.fullName}</span>. Our clinical coordinator will contact you at <span className="font-semibold">{countryCode} {formData.phone}</span> within one business day regarding your request for <span className="font-semibold">{formData.treatment}</span>.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setFormSubmitted(false);
                                            setFormData({ fullName: '', phone: '', treatment: '', message: '' });
                                        }}
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
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                                            Phone Number *
                                        </label>
                                        <div className="flex rounded-xl border border-neutral-300 bg-white overflow-hidden focus-within:border-black transition-colors">
                                            <select
                                                value={countryCode}
                                                onChange={(e) => setCountryCode(e.target.value)}
                                                className="bg-neutral-100 text-neutral-800 text-xs px-3 py-3 border-r border-neutral-300 outline-none font-medium"
                                            >
                                                {COUNTRY_CODES.map((item) => (
                                                    <option key={item.code} value={item.code}>
                                                        {item.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={handlePhoneChange}
                                                maxLength={selectedCountry.maxLength}
                                                placeholder={`${selectedCountry.maxLength} digits`}
                                                className="w-full px-4 py-3 text-sm text-black placeholder-neutral-400 outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                                            Select Treatment
                                        </label>
                                        <select
                                            value={formData.treatment}
                                            onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm text-black focus:outline-none focus:border-black transition-colors"
                                        >
                                            <option value="" disabled>Select a Condition / Treatment...</option>
                                            {Object.values(diseaseData).map((item) => (
                                                <option key={item.id} value={item.name}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder="Any prior surgeries, current prescriptions, or specific questions..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm text-black placeholder-neutral-400 focus:outline-none focus:border-black transition-colors resize-none"
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3.5 rounded-full bg-black text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-neutral-800 transition-colors shadow-xs disabled:opacity-50"
                                    >
                                        {loading ? 'Sending Request...' : 'Request Priority Consultation'}
                                    </motion.button>

                                    <p className="text-[11px] text-neutral-500 text-center font-light mt-3">
                                        Confidential & HIPAA compliant. We do not share your medical information.
                                    </p>
                                </form>
                            )}

                        </div>

                        <div className="mt-8 flex items-center justify-center">
                            <Image
                                src="/images/logo/eyevora2.png"
                                alt="Eyevora Logo"
                                width={260}
                                height={40}
                                className="h-6 sm:h-18 w-auto object-contain brightness-0"
                            />
                        </div>
                    </motion.div>

                </div>

                <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-neutral-200">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="lg:col-span-6 order-2 lg:order-1"
                        >
                            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-lg aspect-[16/10] sm:aspect-[16/9] w-full max-w-md mx-auto lg:mx-0 bg-neutral-50">
                                <Image
                                    src="/images/photos/cataract.webp"
                                    alt="Cataract surgery procedure"
                                    fill
                                    sizes="(max-width: 640px) 100vw, 40vw"
                                    quality={75}
                                    className="object-cover scale-[1.25]"
                                />
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-black text-white max-w-md mx-auto lg:mx-0">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                                    Machine We Use For Surgery
                                </div>
                                <p className="text-sm mt-1.5 font-light leading-relaxed">
                                    Lens removal is performed with a <strong className="font-bold">phacoemulsification system</strong>, with key steps guided by a <strong className="font-bold">femtosecond laser platform</strong> for precise, computer-planned incisions.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                            className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center"
                        >
                            <div className="inline-block self-start px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-mono tracking-widest uppercase mb-4 border border-neutral-200">
                                Cataract Surgery
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-tight">
                                Clear Vision. <br />
                                Without The Glasses.
                            </h2>

                            <p className="mt-5 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
                                Cataract surgery removes the eye's clouded natural lens and replaces it with a clear, custom-calculated intraocular lens (IOL). Our surgeons use micro-incision phacoemulsification, breaking up the cataract with focused ultrasound energy through an opening small enough that most patients need no stitches at all.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-black">Stitch-Free</div>
                                    <div className="text-xs text-neutral-500 mt-1 font-light">Micro-incisions are typically self-sealing.</div>
                                </div>
                                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-black">Custom Lens Fit</div>
                                    <div className="text-xs text-neutral-500 mt-1 font-light">IOL selection matched to your daily vision needs.</div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}