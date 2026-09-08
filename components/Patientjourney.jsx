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

export default function PatientJourney() {
    return (
        // SECTION 6: PATIENT JOURNEY / CLINICAL TRUST
        <section
            id="patient-journey"
            className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-[#ffffff] text-black"
        >
            <div className="flex flex-col">
                <motion.div
                    className="order-1 sm:order-3 relative w-full max-w-3xl mx-auto h-[280px] sm:h-[360px] lg:h-[420px] mb-10 sm:mb-0 sm:mt-16"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <Image
                        src="/images/photos/people.webp"
                        alt="A diverse group of happy patients who trust our care"
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-contain"
                    />
                </motion.div>

                <motion.div
                    className="order-2 sm:order-1 text-center max-w-2xl mx-auto mb-16"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={stagger}
                >
                    <motion.p
                        className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-2"
                        variants={fadeUp}
                    >
                        Trusted By Real Patients
                    </motion.p>

                    <motion.h2
                        className="text-3xl sm:text-4xl font-black tracking-tight text-black"
                        variants={fadeUp}
                    >
                        People Trust Us With Their Sight
                    </motion.h2>

                    <motion.p
                        className="mt-3 text-sm sm:text-base text-neutral-600 font-light leading-relaxed"
                        variants={fadeUp}
                    >
                        Every patient journey is guided by experienced doctors and backed by real results, not empty promises. This is why people choose us and refer their own family.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="order-3 sm:order-2 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={stagger}
                >
                    <motion.div
                        className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-center"
                        variants={fadeUp}
                    >
                        <div className="text-3xl sm:text-4xl font-black text-black tracking-tight">99.8%</div>
                        <div className="text-xs sm:text-sm font-semibold text-neutral-800 mt-2">20/20 Acuity Rate</div>
                    </motion.div>

                    <motion.div
                        className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-center"
                        variants={fadeUp}
                    >
                        <div className="text-3xl sm:text-4xl font-black text-black tracking-tight">100+</div>
                        <div className="text-xs sm:text-sm font-semibold text-neutral-800 mt-2">Procedures Completed</div>
                    </motion.div>

                    <motion.div
                        className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-center"
                        variants={fadeUp}
                    >
                        <div className="text-3xl sm:text-4xl font-black text-black tracking-tight">5+</div>
                        <div className="text-xs sm:text-sm font-semibold text-neutral-800 mt-2">Years Research</div>
                    </motion.div>

                    <motion.div
                        className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-center"
                        variants={fadeUp}
                    >
                        <div className="text-3xl sm:text-4xl font-black text-black tracking-tight">20+</div>
                        <div className="text-xs sm:text-sm font-semibold text-neutral-800 mt-2">Doctors</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}