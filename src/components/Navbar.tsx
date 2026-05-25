'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const contactInfo = [
    { label: 'Email', value: 'saranpsg2006@gmail.com', href: 'mailto:saranpsg2006@gmail.com' },
    { label: 'Phone', value: '+91 81485 99787', href: 'tel:+918148599787' },
    { label: 'LinkedIn', value: 'linkedin.com/in/saranpsg', href: 'https://linkedin.com/in/saranpsg' },
    { label: 'GitHub', value: 'github.com/saran2006psg', href: 'https://github.com/saran2006psg' },
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-white pointer-events-none"
        >
            {/* Logo Area */}
            <div className="pointer-events-auto">
                <Link href="/" className="font-display text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
                    SARAN M.
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="pointer-events-auto hidden md:flex items-center gap-8 bg-black/50 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors relative group text-white/70"
                    >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                    </Link>
                ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 pointer-events-auto">
                <ThemeToggle />
                <div className="md:hidden">
                    <button className="text-white mix-blend-difference">Menu</button>
                </div>
            </div>
        </motion.nav>
    );
}
