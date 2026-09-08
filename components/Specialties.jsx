'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export default function Specialties() {
    return (
        // SECTION 4: PRECISION RECONSTRUCTIVE SPECIALTIES
        <section
            id="reconstruction-specialties"
            className="bg-[#ffffff] text-black"
        >
            <div className="py-28 sm:py-36 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={stagger}
                >
                    <motion.div className="lg:col-span-7" variants={fadeUp}>
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
                    </motion.div>

                    <motion.div className="lg:col-span-5 flex justify-center" variants={fadeUp}>
                        <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-white p-2">
                            <Image
                                src="/images/photos/eye2.webp"
                                alt="Microsurgical reconstruction of human ocular puzzle"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-contain p-2"
                            />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={stagger}
                >
                    {/* 01 / CORNEA */}
                    <motion.div
                        className="p-8 rounded-2xl bg-[#ffffff] border border-neutral-200 hover:border-black transition-colors"
                        variants={fadeUp}
                        whileHover={{ y: -6 }}
                    >
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-200 mb-6 bg-neutral-50">
                            <Image
                                src="/images/photos/cornea.webp"
                                alt="Corneal and refractive architecture close-up"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </div>
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
                    </motion.div>

                    {/* 02 / LENS */}
                    <motion.div
                        className="p-8 rounded-2xl bg-[#ffffff] border border-neutral-200 hover:border-black transition-colors"
                        variants={fadeUp}
                        whileHover={{ y: -6 }}
                    >
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-200 mb-6 bg-neutral-50">
                            <Image
                                src="/images/photos/lens.webp"
                                alt="Crystalline lens and premium IOL close-up"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </div>
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
                    </motion.div>

                    {/* 03 / RETINA */}
                    <motion.div
                        className="p-8 rounded-2xl bg-[#ffffff] border border-neutral-200 hover:border-black transition-colors"
                        variants={fadeUp}
                        whileHover={{ y: -6 }}
                    >
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-neutral-200 mb-6 bg-neutral-50">
                            <Image
                                src="/images/photos/retina.webp"
                                alt="Vitreoretinal and macular medicine close-up"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </div>
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
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}