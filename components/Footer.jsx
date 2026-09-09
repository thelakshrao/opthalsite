'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export default function Footer() {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

    return (
        <>
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
                        <span className="text-neutral-400">© 2026 EyevoraCare. All rights reserved.</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-400">
                        <a href="#patient-journey" className="hover:text-white transition-colors">
                            Patient Intake
                        </a>
                        <a href="#services-section" className="hover:text-white transition-colors">
                            Treatment
                        </a>
                        <a href="#surgical-credibility" className="hover:text-white transition-colors">
                            Credibility
                        </a>
                        <button
                            onClick={() => setIsPrivacyOpen(true)}
                            className="hover:text-white transition-colors cursor-pointer"
                        >
                            Privacy Policy
                        </button>
                    </div>
                </div>
            </footer>

            <AnimatePresence>
                {isPrivacyOpen && (
                    <div className="fixed inset-0 z-50 overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setIsPrivacyOpen(false)}
                        />

                        <div className="fixed inset-y-0 right-0 max-w-full flex">
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                                className="w-screen max-w-full lg:max-w-[33.33vw] bg-[#0d0d0d] text-white border-l border-white/10 shadow-2xl flex flex-col justify-between h-full z-10"
                            >
                                {/* Added data-lenis-prevent and flex-1 min-h-0 to enable smooth internal scrolling */}
                                <div
                                    data-lenis-prevent
                                    className="p-6 sm:p-8 overflow-y-auto flex-1 min-h-0 space-y-6 overscroll-contain"
                                >
                                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                        <div className="flex items-center gap-2">
                                            <ShieldCheck className="w-5 h-5 text-white" />
                                            <h2 className="text-lg font-bold tracking-wide text-white">Privacy & Data Security</h2>
                                        </div>
                                        <button
                                            onClick={() => setIsPrivacyOpen(false)}
                                            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                                        >
                                            <X className="w-5 h-5 text-white" />
                                        </button>
                                    </div>

                                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shrink-0">
                                        <Image
                                            src="/images/photos/doctor2.webp"
                                            alt="Eyevora Specialist Confidentiality"
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent" />
                                    </div>

                                    <div className="space-y-6 text-xs text-neutral-300 font-light leading-relaxed">
                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <div className="flex items-center gap-2 font-semibold text-white mb-1">
                                                <Lock className="w-4 h-4 text-white" />
                                                Personal Data Protection
                                            </div>
                                            <p className="text-neutral-400">
                                                Your personal health identifiers, medical history, and consultation details are encrypted end-to-end. We strictly guarantee that your personal data will never be published, sold, or shared with unauthorized third parties.
                                            </p>
                                        </div>

                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                            <div className="flex items-center gap-2 font-semibold text-white mb-1">
                                                <FileText className="w-4 h-4 text-white" />
                                                Insurance & Claims Confidentiality
                                            </div>
                                            <p className="text-neutral-400">
                                                When you request coverage verification or insurance assistance, your policy information is processed through secure, HIPAA-compliant channels solely for claim processing with your insurance provider.
                                            </p>
                                        </div>

                                        <div className="space-y-3">
                                            <h3 className="text-sm font-semibold text-white">Our Commitments to You:</h3>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                                                    <span>Zero public disclosure of private patient records or scan results.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                                                    <span>Encrypted insurance submission for zero-hassle coverage checks.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                                                    <span>Right to request complete removal of your data from non-clinical systems at any time.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 border-t border-white/10 bg-gradient-to-t from-black via-black/90 to-transparent flex items-center justify-between text-[11px] text-neutral-400 shrink-0">
                                    <span>© 2026 EyevoraCare. All rights reserved.</span>
                                    <button
                                        onClick={() => setIsPrivacyOpen(false)}
                                        className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}