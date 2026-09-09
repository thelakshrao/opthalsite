'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    Eye,
    ShieldCheck,
    HeartHandshake,
    Wallet,
    Cpu,
    Layers,
    Contact,
    Glasses,
    ArrowUpRight,
    Radar,
    Zap,
    Crosshair,
    CheckCircle2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import PatientJourney from '@/components/Patientjourney';
import Footer from '@/components/Footer';

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
    show: { transition: { staggerChildren: 0.14 } },
};

const MISSION_PILLARS = [
    {
        icon: Eye,
        title: 'Comprehensive Eye Care',
        desc: 'From routine exams to advanced surgical care, one dedicated team guides you through every stage of your vision health — no referrals lost in the shuffle.',
    },
    {
        icon: Cpu,
        title: 'Advanced Technology',
        desc: 'We reinvest in our diagnostic and surgical equipment every year, so every treatment plan is built on the most precise measurements available.',
    },
    {
        icon: Wallet,
        title: 'Insurance & Affordable Care',
        desc: 'We work with most major insurance providers, run a free coverage verification before you commit to anything, and lay out transparent, itemized pricing with flexible financing.',
    },
    {
        icon: HeartHandshake,
        title: 'Patient-First Philosophy',
        desc: 'Every recommendation is built around what is right for your eyes and your life — never a one-size-fits-all script or a rushed five-minute visit.',
    },
];

const TECH_2025 = {
    year: '2025',
    name: 'Eyevora Diagnostic Suite',
    image: '/images/photos/retina.webp',
    alt: 'Ophthalmic diagnostic scanning equipment used during a retinal exam',
    points: [
        'High-resolution corneal topography mapping',
        'OCT retinal cross-section imaging',
        'Digital biometry for precise lens power calculation',
        'AI-assisted pre-operative screening',
    ],
};

const TECH_2026 = {
    year: '2026',
    name: 'Eyevora Precision Platform',
    image: '/images/photos/cornea.webp',
    alt: 'Surgeon using precision microsurgical instruments under blue diagnostic light',
    points: [
        'Bladeless femtosecond laser incisions',
        'Real-time eye-tracking during surgery',
        'Integrated 3D visualization for the surgical team',
        'Shorter chair time and faster visual recovery',
    ],
};

const LENS_TYPES = [
    {
        icon: Glasses,
        title: 'Monofocal IOL',
        tag: 'Standard',
        desc: 'A single, fixed focal point tuned for sharp distance vision after cataract surgery. Reading glasses are typically still needed for close-up tasks.',
    },
    {
        icon: Layers,
        title: 'Multifocal / EDOF IOL',
        tag: 'Premium',
        desc: 'Multiple focal zones reduce dependency on glasses across near, intermediate, and far distances for an active, glasses-light lifestyle.',
    },
    {
        icon: Crosshair,
        title: 'Toric IOL',
        tag: 'Astigmatism',
        desc: 'Corrects corneal astigmatism at the same time as cataracts, sharpening uncorrected vision that a standard lens can’t fully address.',
    },
    {
        icon: Contact,
        title: 'Implantable Collamer Lens',
        tag: 'ICL',
        desc: 'An additive lens placed in front of your natural lens — an alternative for higher prescriptions without reshaping or removing corneal tissue.',
    },
];

export default function AboutPage() {
    const router = useRouter();

    const handleAnchorClick = (e, hash) => {
        e.preventDefault();
        router.push(`/${hash}`);
    };

    return (
        <div className="relative min-h-screen bg-white text-black">
            <Navbar />

            <main className="pt-16 sm:pt-20">
                <section className="relative w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-black text-white overflow-hidden border-b border-white/10">
                    <div
                        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black"
                        aria-hidden="true"
                    />

                    <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                        <motion.div
                            className="w-full lg:max-w-2xl text-center lg:text-left order-2 lg:order-1"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={stagger}
                        >
                            <motion.div
                                className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-[10px] sm:text-[11px] font-mono tracking-widest uppercase mb-4 border border-white/15"
                                variants={fadeUp}
                            >
                                About Eyevora
                            </motion.div>

                            <motion.h1
                                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4"
                                variants={fadeUp}
                            >
                                Precision Eye Care,
                                <br />
                                Built Around You
                            </motion.h1>

                            <motion.p
                                className="text-sm sm:text-lg text-neutral-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0"
                                variants={fadeUp}
                            >
                                Eyevora exists to make advanced ophthalmology feel simple. We pair sub-micron
                                surgical precision with straightforward guidance on diagnosis, treatment, and
                                cost — including your insurance — so you always know what happens next and why.
                            </motion.p>

                            <motion.div
                                className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0"
                                variants={stagger}
                            >
                                {[
                                    ['15,000+', 'Patients Treated'],
                                    ['99.8%', 'Vision Goals Met'],
                                    ['20+', 'Specialists'],
                                    ['Most', 'Insurance Accepted'],
                                ].map(([stat, label]) => (
                                    <motion.div
                                        key={label}
                                        className="p-3 sm:p-4 rounded-2xl bg-neutral-950 border border-white/10 text-center"
                                        variants={fadeUp}
                                    >
                                        <div className="text-lg sm:text-2xl font-black text-white tracking-tight">
                                            {stat}
                                        </div>
                                        <div className="text-[9px] sm:text-[11px] text-neutral-400 font-medium mt-1 leading-tight">
                                            {label}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="relative shrink-0 flex items-center justify-center order-1 lg:order-2"
                        >
                            <div className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-white/5 blur-xl pointer-events-none" />

                            <div className="relative w-72 h-72 sm:w-[26rem] sm:h-[26rem] md:w-[30rem] md:h-[30rem] rounded-3xl overflow-hidden ring-1 ring-white/15 shadow-2xl bg-neutral-950">
                                <Image
                                    src="/images/photos/doctor.webp"
                                    alt="Eyevora Ophthalmologist Specialist"
                                    fill
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            <div className="absolute -bottom-3 right-2 sm:-bottom-4 sm:right-2 z-20 px-3.5 sm:px-4 py-2 rounded-2xl bg-[#0a0a0a] border border-white/20 shadow-2xl flex items-center gap-2">
                                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                                    Lead Ophthalmologist
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-white text-black">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <motion.div
                            className="lg:col-span-5 order-2 lg:order-1"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeLeft}
                        >
                            <div className="relative w-full max-w-md mx-auto aspect-[16/10] rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-black">
                                <Image
                                    src="/images/photos/eye2.webp"
                                    alt="Conceptual illustration of a personalized eye care plan coming together"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:col-span-7 order-1 lg:order-2"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={stagger}
                        >
                            <motion.p
                                className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-2"
                                variants={fadeUp}
                            >
                                What We Do
                            </motion.p>

                            <motion.h2
                                className="text-3xl sm:text-5xl font-black tracking-tight text-black leading-tight"
                                variants={fadeUp}
                            >
                                Care That Explains Itself
                            </motion.h2>

                            <motion.p
                                className="mt-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed max-w-2xl"
                                variants={fadeUp}
                            >
                                We diagnose, treat, and follow up on the full range of eye conditions —
                                refractive errors, cataracts, retinal disease, glaucoma, and more. Just as
                                important as the medicine is how we deliver it: clear explanations, honest
                                pricing, and real help navigating insurance, so nothing about your care feels
                                like a surprise.
                            </motion.p>

                            <motion.div
                                className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
                                variants={stagger}
                            >
                                {MISSION_PILLARS.map((pillar) => {
                                    const Icon = pillar.icon;
                                    return (
                                        <motion.div
                                            key={pillar.title}
                                            className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-black transition-colors"
                                            variants={fadeUp}
                                            whileHover={{ y: -4 }}
                                        >
                                            <div className="w-9 h-9 rounded-xl bg-black text-white flex items-center justify-center mb-3">
                                                <Icon className="w-4 h-4" />
                                            </div>
                                            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black">
                                                {pillar.title}
                                            </div>
                                            <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 font-light leading-relaxed">
                                                {pillar.desc}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-black text-white border-t border-white/10 overflow-hidden">
                    <div
                        className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black"
                        aria-hidden="true"
                    />

                    <div className="relative z-10 max-w-7xl mx-auto">
                        <motion.div
                            className="text-center max-w-2xl mx-auto mb-14"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={stagger}
                        >
                            <motion.div
                                className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-mono tracking-widest uppercase mb-4 border border-white/15"
                                variants={fadeUp}
                            >
                                Technology Roadmap
                            </motion.div>
                            <motion.h2
                                className="text-3xl sm:text-5xl font-black tracking-tight text-white"
                                variants={fadeUp}
                            >
                                Machines That Keep Improving
                            </motion.h2>
                            <motion.p
                                className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed"
                                variants={fadeUp}
                            >
                                We upgrade our diagnostic and surgical hardware on a set cycle — not when it
                                breaks. Here is what changed between our 2025 and 2026 generations.
                            </motion.p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                            {[TECH_2025, TECH_2026].map((tech, i) => (
                                <motion.div
                                    key={tech.year}
                                    className="rounded-3xl overflow-hidden border border-white/10 bg-neutral-950"
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: true, amount: 0.2 }}
                                    variants={i === 0 ? fadeLeft : fadeRight}
                                >
                                    <div className="relative w-full aspect-16/10">
                                        <Image
                                            src={tech.image}
                                            alt={tech.alt}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white text-black text-xs font-mono font-bold tracking-widest">
                                            {tech.year} GEN
                                        </div>
                                    </div>

                                    <div className="p-6 sm:p-8">
                                        <div className="flex items-center gap-2 mb-3">
                                            {i === 0 ? (
                                                <Radar className="w-5 h-5 text-white" />
                                            ) : (
                                                <Zap className="w-5 h-5 text-white" />
                                            )}
                                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                                {tech.name}
                                            </h3>
                                        </div>
                                        <ul className="space-y-2.5 mt-4">
                                            {tech.points.map((point) => (
                                                <li key={point} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                                                    <span className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                                                        {point}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-white text-black">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="text-center max-w-2xl mx-auto mb-14"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={stagger}
                        >
                            <motion.p
                                className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-2"
                                variants={fadeUp}
                            >
                                Our Most Requested Procedures
                            </motion.p>
                            <motion.h2
                                className="text-3xl sm:text-5xl font-black tracking-tight text-black"
                                variants={fadeUp}
                            >
                                Lasik &amp; Cataract Surgery
                            </motion.h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                className="relative rounded-3xl overflow-hidden ring-1 ring-neutral-200 shadow-xl aspect-4/3"
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeLeft}
                            >
                                <Image
                                    src="/images/photos/lasik.webp"
                                    alt="Close-up of a Lasik laser vision correction procedure in progress"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5 right-5">
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                                        Blade-Free &amp; Bladed Options
                                    </div>
                                    <div className="text-lg sm:text-xl font-bold text-white mt-1">
                                        Lasik Eye Surgery
                                    </div>
                                    <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1 leading-relaxed">
                                        Computer-guided reshaping of the cornea in minutes per eye, correcting
                                        nearsightedness, farsightedness, and astigmatism.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="relative rounded-3xl overflow-hidden ring-1 ring-neutral-200 shadow-xl aspect-4/3"
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeRight}
                            >
                                <Image
                                    src="/images/photos/cataract.webp"
                                    alt="Surgeon performing cataract surgery using an operating microscope"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5 right-5">
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                                        Premium IOL Implants
                                    </div>
                                    <div className="text-lg sm:text-xl font-bold text-white mt-1">
                                        Cataract Surgery
                                    </div>
                                    <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1 leading-relaxed">
                                        A clouded natural lens is gently removed and replaced with a lens matched
                                        to your eyes and your lifestyle.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-black text-white border-t border-white/10 overflow-hidden">
                    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <motion.div
                            className="lg:col-span-5"
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeLeft}
                        >
                            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white p-4">
                                <Image
                                    src="/images/photos/side.png"
                                    alt="Cross-section illustration of the eye showing the natural lens"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-contain"
                                />
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
                                Lenses We Work With
                            </motion.div>
                            <motion.h2
                                className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight"
                                variants={fadeUp}
                            >
                                The Right Lens for Your Eyes
                            </motion.h2>
                            <motion.p
                                className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl"
                                variants={fadeUp}
                            >
                                No two eyes need the same lens. During your consultation we walk through which
                                of these fit your prescription, your daily habits, and your budget — insurance
                                coverage included.
                            </motion.p>

                            <motion.div
                                className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
                                variants={stagger}
                            >
                                {LENS_TYPES.map((lens) => {
                                    const Icon = lens.icon;
                                    return (
                                        <motion.div
                                            key={lens.title}
                                            className="p-4 sm:p-5 rounded-2xl bg-neutral-950 border border-white/10 hover:border-white/40 transition-colors"
                                            variants={fadeUp}
                                            whileHover={{ y: -4 }}
                                        >
                                            <div className="flex items-center justify-between mb-2.5">
                                                <div className="p-2 rounded-xl bg-white/10 text-white">
                                                    <Icon className="w-4 h-4" />
                                                </div>
                                                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-neutral-400 uppercase">
                                                    {lens.tag}
                                                </span>
                                            </div>
                                            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                                                {lens.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1.5 leading-relaxed">
                                                {lens.desc}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <PatientJourney />

                <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-12 bg-black text-white border-t border-white/10">
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
                            Ready When You Are
                        </motion.span>
                        <motion.h2
                            className="text-3xl sm:text-5xl font-black tracking-tight text-white"
                            variants={fadeUp}
                        >
                            Let&apos;s Talk About Your Vision
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-xl mx-auto"
                            variants={fadeUp}
                        >
                            Book a consultation and we&apos;ll walk you through diagnostics, treatment
                            options, and your insurance coverage — no obligation, no guesswork.
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            <Link
                                href="/#Examination-form"
                                onClick={(e) => handleAnchorClick(e, '#Examination-form')}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-colors"
                            >
                                Book Consultation
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/#services-section"
                                onClick={(e) => handleAnchorClick(e, '#services-section')}
                                className="px-6 py-3 rounded-full bg-transparent text-white border border-white/20 text-sm font-medium hover:bg-white/10 transition-colors"
                            >
                                Explore Treatments
                            </Link>
                        </motion.div>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
}