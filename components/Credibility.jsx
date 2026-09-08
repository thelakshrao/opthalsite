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
            staggerChildren: 0.15,
        },
    },
};

export default function Credibility() {
    return (
        // SECTION 5: SURGICAL CREDIBILITY
        <section
            id="surgical-credibility"
            className="relative py-28 sm:py-36 px-4 sm:px-8 lg:px-12 bg-[#000000] text-white border-t border-white/10 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <motion.div
                        className="lg:col-span-5 flex justify-center"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeLeft}
                    >
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
                                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Operating Room</div>
                                <div className="text-sm font-bold text-white mt-0.5">A Clean, Safe Space to Heal</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-7"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={stagger}
                    >
                        <motion.div
                            className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono tracking-widest uppercase mb-4 border border-white/15"
                            variants={fadeUp}
                        >
                            Why Patients Trust Us
                        </motion.div>

                        <motion.h2
                            className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight"
                            variants={fadeUp}
                        >
                            CARE YOU CAN TRUST
                        </motion.h2>

                        <motion.h3
                            className="mt-2 text-base sm:text-lg font-semibold text-neutral-300"
                            variants={fadeUp}
                        >
                            No Shortcuts. No Guesswork. Just Careful, Precise Surgery.
                        </motion.h3>

                        <motion.p
                            className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed"
                            variants={fadeUp}
                        >
                            Great eye surgery comes down to the small details. Our surgeons work in spotless, carefully controlled operating rooms, using powerful microscopes and live imaging to see exactly what they&apos;re doing at every step. Every movement is planned and precise, so you can feel confident from the moment you walk in.
                        </motion.p>

                        <motion.div
                            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
                            variants={stagger}
                        >
                            <motion.div
                                className="p-4 rounded-xl bg-neutral-900 border border-neutral-800"
                                variants={fadeUp}
                                whileHover={{ y: -4 }}
                            >
                                <div className="text-xs font-bold uppercase tracking-wider text-white">Spotless Operating Rooms</div>
                                <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                                    Filtered air and a controlled environment keep the risk of infection extremely low.
                                </p>
                            </motion.div>

                            <motion.div
                                className="p-4 rounded-xl bg-neutral-900 border border-neutral-800"
                                variants={fadeUp}
                                whileHover={{ y: -4 }}
                            >
                                <div className="text-xs font-bold uppercase tracking-wider text-white">Highly Trained Surgeons</div>
                                <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                                    Our team trained at some of the world&apos;s top eye hospitals, including Wilmer, Moorfields, and Bascom Palmer.
                                </p>
                            </motion.div>

                            <motion.div
                                className="p-4 rounded-xl bg-neutral-900 border border-neutral-800"
                                variants={fadeUp}
                                whileHover={{ y: -4 }}
                            >
                                <div className="text-xs font-bold uppercase tracking-wider text-white">Steady, Precise Guidance</div>
                                <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                                    Smart tracking technology automatically adjusts for any small eye movement during surgery.
                                </p>
                            </motion.div>

                            <motion.div
                                className="p-4 rounded-xl bg-neutral-900 border border-neutral-800"
                                variants={fadeUp}
                                whileHover={{ y: -4 }}
                            >
                                <div className="text-xs font-bold uppercase tracking-wider text-white">Consistently Great Results</div>
                                <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                                    99.8% of our patients reach their vision goals, above international safety standards.
                                </p>
                            </motion.div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}