'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { treatmentIndex as TREATMENT_LIST } from '@/data/treatmentIndex';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileTreatmentOpen, setIsMobileTreatmentOpen] = useState(false);
    const [isTreatmentHover, setIsTreatmentHover] = useState(false);
    const closeTimeout = useRef(null);
    const pathname = usePathname();
    const isHome = pathname === '/';
    const router = useRouter();

    const navLinks = [
        { name: 'Home', href: '#hero-animation', type: 'anchor' },
        { name: 'About us', href: '/about', type: 'page' },
        { name: 'Specialities', href: '#services-section', type: 'anchor' },
        { name: 'Credibility', href: '#surgical-credibility', type: 'anchor' },
        { name: 'Our Journey', href: '#patient-journey', type: 'anchor' },
    ];

    const bookHref = '#Examination-form';

    const handleAnchorClick = (e, hash) => {
        e.preventDefault();
        setIsOpen(false);

        if (isHome) {
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.history.pushState(null, '', hash);
            } else {
                window.location.hash = hash;
            }
        } else {
            router.push(`/${hash}`);
        }
    };

    const handlePageClick = () => {
        setIsOpen(false);
    };

    const handleTreatmentMouseEnter = () => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        setIsTreatmentHover(true);
    };

    const handleTreatmentMouseLeave = () => {
        closeTimeout.current = setTimeout(() => setIsTreatmentHover(false), 150);
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] text-white border-b border-white/10 h-16 sm:h-20 transform-gpu"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-full flex items-center justify-between">

                <Link
                    href={isHome ? '#hero-animation' : '/#hero-animation'}
                    onClick={(e) => handleAnchorClick(e, '#hero-animation')}
                    className="flex items-center shrink-0"
                >
                    <Image
                        src="/images/logo/eyevora2.png"
                        alt="Eyevora Logo"
                        width={160}
                        height={42}
                        className="h-7 sm:h-8 w-auto object-contain"
                        priority
                    />
                </Link>

                <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-medium tracking-wide text-neutral-300">
                    <motion.div
                        whileHover={{ scale: 1.08, color: '#ffffff' }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="py-1"
                    >
                        <Link
                            href={isHome ? navLinks[0].href : `/${navLinks[0].href}`}
                            onClick={(e) => handleAnchorClick(e, navLinks[0].href)}
                            className="cursor-pointer transition-colors"
                        >
                            {navLinks[0].name}
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.08, color: '#ffffff' }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="py-1"
                    >
                        <Link href={navLinks[1].href} onClick={handlePageClick} className="cursor-pointer transition-colors">
                            {navLinks[1].name}
                        </Link>
                    </motion.div>

                    <div
                        className="relative py-1"
                        onMouseEnter={handleTreatmentMouseEnter}
                        onMouseLeave={handleTreatmentMouseLeave}
                    >
                        <motion.div
                            whileHover={{ scale: 1.08, color: '#ffffff' }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                            className="flex items-center gap-1 cursor-pointer select-none"
                        >
                            <Link
                                href={isHome ? '#photography-showcase' : '/#photography-showcase'}
                                onClick={(e) => handleAnchorClick(e, '#photography-showcase')}
                                className="cursor-pointer transition-colors"
                            >
                                Treatment
                            </Link>
                            <ChevronDown
                                className={`w-3 h-3 transition-transform duration-200 ${isTreatmentHover ? 'rotate-180' : ''}`}
                            />
                        </motion.div>

                        <AnimatePresence>
                            {isTreatmentHover && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.18, ease: 'easeOut' }}
                                    className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden"
                                >
                                    <div className="px-4 py-3 border-b border-white/10">
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                                            All Treatments
                                        </span>
                                    </div>
                                    <div
                                        data-lenis-prevent
                                        className="max-h-80 overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
                                    >
                                        {TREATMENT_LIST.map((t) => (
                                            <Link
                                                key={t.id}
                                                href={`/treatment/${t.id}`}
                                                onClick={() => setIsTreatmentHover(false)}
                                                className="block px-4 py-2.5 hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0"
                                            >
                                                <span className="block text-xs font-semibold text-white">
                                                    {t.name}
                                                </span>
                                                <span className="block text-[10px] text-neutral-500 mt-0.5 truncate">
                                                    {t.category}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {navLinks.slice(2).map((link) => (
                        <motion.div
                            key={link.name}
                            whileHover={{ scale: 1.08, color: '#ffffff' }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                            className="py-1"
                        >
                            <Link
                                href={isHome ? link.href : `/${link.href}`}
                                onClick={(e) => handleAnchorClick(e, link.href)}
                                className="cursor-pointer transition-colors"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href={isHome ? bookHref : `/${bookHref}`}
                            onClick={(e) => handleAnchorClick(e, bookHref)}
                            className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold tracking-wide shadow-md hover:bg-neutral-200 transition-colors inline-block"
                        >
                            Book Consultation
                        </Link>
                    </motion.div>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

            </div>

            {isOpen && (
                <div
                    data-lenis-prevent
                    className="lg:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto overscroll-contain"
                >
                    <nav className="flex flex-col gap-4 text-sm font-medium text-neutral-300">
                        <Link
                            href={isHome ? navLinks[0].href : `/${navLinks[0].href}`}
                            onClick={(e) => handleAnchorClick(e, navLinks[0].href)}
                            className="hover:text-white transition-colors"
                        >
                            {navLinks[0].name}
                        </Link>

                        <Link href={navLinks[1].href} onClick={handlePageClick} className="hover:text-white transition-colors">
                            {navLinks[1].name}
                        </Link>

                        <div>
                            <button
                                type="button"
                                onClick={() => setIsMobileTreatmentOpen((v) => !v)}
                                className="flex w-full items-center justify-between hover:text-white transition-colors"
                            >
                                <span>Treatment</span>
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform duration-200 ${isMobileTreatmentOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <AnimatePresence>
                                {isMobileTreatmentOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            data-lenis-prevent
                                            className="mt-2 max-h-64 overflow-y-auto overscroll-contain rounded-xl border border-white/10 bg-white/5 divide-y divide-white/5"
                                        >
                                            {TREATMENT_LIST.map((t) => (
                                                <Link
                                                    key={t.id}
                                                    href={`/treatment/${t.id}`}
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setIsMobileTreatmentOpen(false);
                                                    }}
                                                    className="block px-3 py-2.5 text-xs text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
                                                >
                                                    {t.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {navLinks.slice(2).map((link) => (
                            <Link
                                key={link.name}
                                href={isHome ? link.href : `/${link.href}`}
                                onClick={(e) => handleAnchorClick(e, link.href)}
                                className="hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="pt-4 border-t border-white/10">
                        <Link
                            href={isHome ? bookHref : `/${bookHref}`}
                            onClick={(e) => handleAnchorClick(e, bookHref)}
                            className="block w-full text-center px-5 py-3 rounded-full bg-white text-black text-xs font-semibold tracking-wide"
                        >
                            Book Consultation
                        </Link>
                    </div>
                </div>
            )}
        </motion.header>
    );
}