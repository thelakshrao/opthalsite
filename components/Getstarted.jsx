'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export default function GetStarted() {
    return (
        // SECTION 7: CONSULTATION FINALE / GET STARTED
        <section
            id="consultation-finale"
            className="py-14 sm:py-20 px-4 sm:px-8 lg:px-12 bg-[#000000] text-white border-t border-white/10"
        >
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
            >
                <motion.span
                    className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-medium uppercase tracking-wider mb-6 border border-white/15"
                    variants={fadeUp}
                >
                    Begin Your Journey
                </motion.span>
                <motion.h2
                    className="text-3xl sm:text-5xl font-black tracking-tight text-white"
                    variants={fadeUp}
                >
                    Elevate Your Visual Potential
                </motion.h2>
            </motion.div>

            <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                {/* LEFT: COMPACT INTAKE FORM */}
                <motion.div
                    className="w-full max-w-sm mx-auto lg:mx-0"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeLeft}
                >
                    <form className="p-5 rounded-2xl bg-neutral-950 border border-white/10 space-y-3">
                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Eleanor Vance"
                                className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="e.g. eleanor@email.com"
                                className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>

                        <div>
                            <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                                Phone
                            </label>
                            <input
                                type="tel"
                                placeholder="(555) 000-0000"
                                className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="w-full mt-1 px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Request Consultation
                        </motion.button>

                        <p className="text-[10px] text-neutral-500 text-center pt-1">
                            Confidential & HIPAA compliant.
                        </p>
                    </form>

                    <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                        <a
                            href="#hero-animation"
                            className="px-5 py-2 rounded-full bg-transparent text-white border border-white/20 text-xs font-medium hover:bg-white/10 transition-colors"
                        >
                            Return to Ocular Anatomy ↑
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT: DOCTOR IMAGE */}
                <motion.div
                    className="relative w-full max-w-md mx-auto aspect-4/3 sm:aspect-video lg:aspect-4/3 rounded-3xl overflow-hidden ring-1 ring-white/20 shadow-2xl bg-neutral-950"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeRight}
                >
                    <Image
                        src="/images/photos/doctor2.webp"
                        alt="Ophthalmic surgeon ready to guide your consultation"
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/15">
                        <p className="text-xs text-neutral-300 font-light leading-relaxed">
                            Whether exploring laser refractive freedom, premium cataract restoration, or specialized retinal care—our surgeons are ready to assist you.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}