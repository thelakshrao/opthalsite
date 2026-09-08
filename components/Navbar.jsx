'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    // type: 'anchor'  -> scrolls to a section on the homepage (href is the section id, e.g. '#hero-animation')
    // type: 'page'    -> navigates to a real route (href is a real Next.js page, e.g. '/about')
    const navLinks = [
        { name: 'Home', href: '#hero-animation', type: 'anchor' },
        { name: 'About us', href: '/about', type: 'page' },
        { name: 'Services', href: '#photography-showcase', type: 'anchor' },
        { name: 'Specialties', href: '#reconstruction-specialties', type: 'anchor' },
        { name: 'Credibility', href: '#surgical-credibility', type: 'anchor' },
        { name: 'Our Journey', href: '#patient-journey', type: 'anchor' },
    ];

    const bookHref = '#consultation-patient';

    const handleAnchorClick = (e, hash) => {
        // If we're already on the homepage, scroll smoothly without a full navigation.
        if (isHome) {
            e.preventDefault();
            setIsOpen(false);
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Not on the homepage: let the Link navigate to "/" + hash,
            // the browser/Next.js will land on the homepage and jump to the section.
            setIsOpen(false);
        }
    };

    const handlePageClick = () => {
        setIsOpen(false);
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
                    {navLinks.map((link) => (
                        <motion.div
                            key={link.name}
                            whileHover={{ scale: 1.08, color: '#ffffff' }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2, ease: 'easeInOut' }}
                            className="py-1"
                        >
                            {link.type === 'page' ? (
                                <Link href={link.href} onClick={handlePageClick} className="cursor-pointer transition-colors">
                                    {link.name}
                                </Link>
                            ) : (
                                <Link
                                    href={isHome ? link.href : `/${link.href}`}
                                    onClick={(e) => handleAnchorClick(e, link.href)}
                                    className="cursor-pointer transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )}
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
                <div className="lg:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-6 space-y-4">
                    <nav className="flex flex-col gap-4 text-sm font-medium text-neutral-300">
                        {navLinks.map((link) => (
                            link.type === 'page' ? (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={handlePageClick}
                                    className="hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={isHome ? link.href : `/${link.href}`}
                                    onClick={(e) => handleAnchorClick(e, link.href)}
                                    className="hover:text-white transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )
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