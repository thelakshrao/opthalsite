'use client';

import React from 'react';
import Image from 'next/image';

export default function Credibility() {
    return (
        // SECTION 5: SURGICAL CREDIBILITY
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
                                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Operating Room</div>
                                <div className="text-sm font-bold text-white mt-0.5">A Clean, Safe Space to Heal</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono tracking-widest uppercase mb-4 border border-white/15">
                            Why Patients Trust Us
                        </div>

                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                            CARE YOU CAN TRUST
                        </h2>

                        <h3 className="mt-2 text-base sm:text-lg font-semibold text-neutral-300">
                            No Shortcuts. No Guesswork. Just Careful, Precise Surgery.
                        </h3>

                        <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                            Great eye surgery comes down to the small details. Our surgeons work in spotless, carefully controlled operating rooms, using powerful microscopes and live imaging to see exactly what they&apos;re doing at every step. Every movement is planned and precise, so you can feel confident from the moment you walk in.
                        </p>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                                <div className="text-xs font-bold uppercase tracking-wider text-white">Spotless Operating Rooms</div>
                                <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                                    Filtered air and a controlled environment keep the risk of infection extremely low.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                                <div className="text-xs font-bold uppercase tracking-wider text-white">Highly Trained Surgeons</div>
                                <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                                    Our team trained at some of the world&apos;s top eye hospitals, including Wilmer, Moorfields, and Bascom Palmer.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                                <div className="text-xs font-bold uppercase tracking-wider text-white">Steady, Precise Guidance</div>
                                <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                                    Smart tracking technology automatically adjusts for any small eye movement during surgery.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                                <div className="text-xs font-bold uppercase tracking-wider text-white">Consistently Great Results</div>
                                <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                                    99.8% of our patients reach their vision goals, above international safety standards.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}