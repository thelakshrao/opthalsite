'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#hero-animation' },
        { name: 'About us', href: '#photography-showcase' },
        { name: 'Services', href: '#photography-showcase' },
        { name: 'Specialties', href: '#reconstruction-specialties' },
        { name: 'Credibility', href: '#surgical-credibility' },
        { name: 'Patient Journey', href: '#consultation-patient' },
    ];

    const handleScroll = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] text-white border-b border-white/10 h-16 sm:h-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-full flex items-center justify-between">

                {/* Left: Eyevora Logo */}
                <a href="#hero-animation" onClick={(e) => handleScroll(e, '#hero-animation')} className="flex items-center shrink-0">
                    <Image
                        src="/images/logo/eyevora2.png"
                        alt="Eyevora Logo"
                        width={160}
                        height={42}
                        className="h-7 sm:h-8 w-auto object-contain"
                        priority
                    />
                </a>

                {/* Center: Desktop Links with Framer Motion Hover */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-medium tracking-wide text-neutral-300">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            whileHover={{ scale: 1.05, color: '#ffffff' }}
                            transition={{ duration: 0.2 }}
                            className="py-1 cursor-pointer"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </nav>

                {/* Right: Desktop CTA Button */}
                <div className="hidden lg:flex items-center">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#consultation-patient"
                        onClick={(e) => handleScroll(e, '#consultation-patient')}
                        className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold tracking-wide shadow-md"
                    >
                        Book Consultation
                    </motion.a>
                </div>

                {/* Mobile Hamburger Toggle */}
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

            {/* Animated Mobile Drawer Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-6 space-y-4 overflow-hidden"
                    >
                        <nav className="flex flex-col gap-4 text-sm font-medium text-neutral-300">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className="hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                        <div className="pt-4 border-t border-white/10">
                            <a
                                href="#consultation-patient"
                                onClick={(e) => handleScroll(e, '#consultation-patient')}
                                className="block w-full text-center px-5 py-3 rounded-full bg-white text-black text-xs font-semibold tracking-wide"
                            >
                                Book Consultation
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}