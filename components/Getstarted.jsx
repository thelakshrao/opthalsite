'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { diseaseData } from '@/data/diseaseContent';
import { COUNTRY_CODES } from '@/data/countryCodes';

const EMAILJS_SERVICE_ID = 'service_nx91wke';
const EMAILJS_TEMPLATE_ID = 'template_loos9xj';
const EMAILJS_PUBLIC_KEY = 'k3ORwrN11DA_MndsG';

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
    const [countryCode, setCountryCode] = useState('+91');
    const [form, setForm] = useState({ fullName: '', phone: '', treatment: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const selectedCountry = useMemo(() => {
        return COUNTRY_CODES.find((c) => c.code === countryCode) || COUNTRY_CODES[0];
    }, [countryCode]);

    const handlePhoneChange = (e) => {
        const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, selectedCountry.maxLength);
        setForm((prev) => ({ ...prev, phone: digitsOnly }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const fullPhoneNumber = `${countryCode} ${form.phone}`;

        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.fullName,
                    phone: fullPhoneNumber,
                    treatment: form.treatment || 'General Inquiry',
                },
                EMAILJS_PUBLIC_KEY
            );
            setSubmitted(true);
        } catch (error) {
            console.error('Email send error:', error);
            alert('Failed to send consultation request. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
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
                <motion.div
                    className="w-full max-w-sm mx-auto lg:mx-0"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeLeft}
                >
                    {submitted ? (
                        <div className="p-6 rounded-2xl bg-neutral-950 border border-white/10 text-center">
                            <p className="text-sm font-semibold text-white">Consultation Requested!</p>
                            <p className="text-xs text-neutral-400 mt-1">
                                We will get back to you shortly regarding your request for {form.treatment}.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-neutral-950 border border-white/10 space-y-3">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Eleanor Vance"
                                    value={form.fullName}
                                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                                    className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                                    Phone *
                                </label>
                                <div className="flex rounded-lg border border-white/10 bg-neutral-900 overflow-hidden focus-within:border-white/30 transition-colors">
                                    <select
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        className="bg-neutral-800 text-white text-xs px-2 py-2 border-r border-white/10 outline-none"
                                    >
                                        {COUNTRY_CODES.map((item) => (
                                            <option key={item.label} value={item.code}>
                                                {item.label}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        required
                                        value={form.phone}
                                        onChange={handlePhoneChange}
                                        maxLength={selectedCountry.maxLength}
                                        placeholder={`${selectedCountry.maxLength} digits`}
                                        className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-neutral-600 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                                    Select Treatment
                                </label>
                                <select
                                    value={form.treatment}
                                    onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                                    className="w-full px-3 py-2 text-sm rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors"
                                >
                                    <option value="" disabled>Select a Treatment...</option>
                                    {Object.values(diseaseData).map((item) => (
                                        <option key={item.id} value={item.name} className="bg-neutral-900 text-white">
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={loading}
                                className="w-full mt-1 px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors disabled:opacity-50"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {loading ? 'Submitting...' : 'Request Consultation'}
                            </motion.button>

                            <p className="text-[10px] text-neutral-500 text-center pt-1">
                                Confidential & HIPAA compliant.
                            </p>
                        </form>
                    )}

                    <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                        <a
                            href="#hero-animation"
                            className="px-5 py-2 rounded-full bg-transparent text-white border border-white/20 text-xs font-medium hover:bg-white/10 transition-colors"
                        >
                            Return to Ocular Anatomy ↑
                        </a>
                    </div>
                </motion.div>

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