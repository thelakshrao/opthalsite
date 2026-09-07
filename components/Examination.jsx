'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function useEyeDots(width = 360, height = 180, step = 9) {
    return useMemo(() => {
        const dots = [];
        const cx = width / 2;
        const cy = height / 2;

        // Horizontal vesica/eye dimensions
        const rx = width * 0.45;
        const ry = height * 0.42;

        for (let x = 0; x <= width; x += step) {
            for (let y = 0; y <= height; y += step) {
                // Elliptical distance from center
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
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <section
            id="consultation-patient"
            className="relative w-full pt-16 sm:pt-24 pb-28 sm:pb-36 bg-[#ffffff] text-black z-20 overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
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
            </motion.div>

            <EyeDotPattern
                className="absolute -top-8 -left-16 sm:top-24 sm:-left-8 z-10 block opacity-80 sm:opacity-95"
                width={360}
                height={180}
            />

            <EyeDotPattern
                className="absolute -bottom-8 -right-16 sm:-bottom-4 sm:-right-8 z-10 block opacity-80 sm:opacity-95"
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
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="inline-block self-start px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-[11px] font-mono tracking-widest uppercase mb-4 border border-neutral-200"
                        >
                            LASIK Eye Surgery
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-tight"
                        >
                            Freedom From Glasses, <br />
                            In Minutes.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-5 text-base sm:text-lg text-neutral-600 font-light leading-relaxed"
                        >
                            LASIK (Laser-Assisted In Situ Keratomileusis) reshapes the cornea using a precise, computer-guided excimer laser—correcting nearsightedness, farsightedness, and astigmatism. The procedure is quick, typically performed with numbing eye drops rather than general anesthesia, and most patients return to normal daily activities within a day or two.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative mt-8 rounded-2xl overflow-hidden border border-neutral-200 shadow-lg aspect-video sm:aspect-4/3 w-full bg-neutral-50"
                        >
                            <Image
                                src="/images/photos/lasik.webp"
                                alt="LASIK laser eye surgery procedure"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover object-[78%_45%] scale-[1.35]"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-8 grid grid-cols-2 gap-4"
                        >
                            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                                <div className="text-xs font-bold uppercase tracking-wider text-black">Quick Procedure</div>
                                <div className="text-xs text-neutral-500 mt-1 font-light">Typically completed in under 15 minutes for both eyes.</div>
                            </div>
                            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                                <div className="text-xs font-bold uppercase tracking-wider text-black">Fast Recovery</div>
                                <div className="text-xs text-neutral-500 mt-1 font-light">Most patients notice clearer vision within a day or two.</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                        className="lg:col-span-6"
                    >
                        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-50 border border-neutral-200 shadow-sm">

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
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="p-8 rounded-2xl bg-white border border-neutral-300 text-center py-12"
                                >
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
                                </motion.div>
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
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="e.g. eleanor@email.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                                            Message
                                        </label>
                                        <textarea
                                            rows={3}
                                            placeholder="Any prior surgeries, current prescriptions, or specific questions..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-sm text-black placeholder-neutral-400 focus:outline-hidden focus:border-black transition-colors resize-none"
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full py-3.5 rounded-full bg-black text-white text-xs sm:text-sm font-semibold tracking-wide hover:bg-neutral-800 transition-colors shadow-xs"
                                    >
                                        Request Priority Consultation
                                    </motion.button>

                                    <p className="text-[11px] text-neutral-500 text-center font-light mt-3">
                                        Confidential & HIPAA compliant. We do not share your medical information.
                                    </p>
                                </form>
                            )}

                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-8 flex items-center justify-center"
                        >
                            <Image
                                src="/images/logo/eyevora2.png"
                                alt="Eyevora Logo"
                                width={160}
                                height={40}
                                className="h-6 sm:h-8 w-auto object-contain brightness-0"
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}