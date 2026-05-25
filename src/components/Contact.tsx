'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const contactInfo = [
    { 
        label: 'Email', 
        value: 'saranpsg2006@gmail.com', 
        href: 'mailto:saranpsg2006@gmail.com',
        icon: '✉'
    },
    { 
        label: 'Phone', 
        value: '+91 81485 99787', 
        href: 'tel:+918148599787',
        icon: '☎'
    },
    { 
        label: 'LinkedIn', 
        value: 'linkedin.com/in/saranpsg', 
        href: 'https://linkedin.com/in/saranpsg',
        icon: '🔗'
    },
    { 
        label: 'GitHub', 
        value: 'github.com/saran2006psg', 
        href: 'https://github.com/saran2006psg',
        icon: '⚙'
    },
];

export default function Contact() {
    return (
        <section className="relative w-full bg-background py-24 px-4 md:px-10 overflow-hidden" id="contact">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#29abe2]/20 dark:bg-[#29abe2]/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-light text-foreground mb-4">Get in Touch</h2>
                    <p className="font-mono text-muted-foreground text-lg">Let's collaborate on something amazing</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {contactInfo.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target={item.label !== 'Email' && item.label !== 'Phone' ? '_blank' : undefined}
                            rel={item.label !== 'Email' && item.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group p-6 rounded-[24px] bg-card border border-border hover:border-[#29abe2]/50 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-4xl">{item.icon}</div>
                                <div className="flex-1">
                                    <h3 className="text-[#29abe2] font-mono text-sm uppercase tracking-widest mb-2">
                                        {item.label}
                                    </h3>
                                    <p className="text-foreground font-display text-lg break-all">
                                        {item.value}
                                    </p>
                                </div>
                                <div className="w-5 h-5 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-[#29abe2] group-hover:border-[#29abe2] transition-all opacity-0 group-hover:opacity-100">
                                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Availability Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 flex justify-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#29abe2]/30 bg-[#29abe2]/5">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-mono text-sm text-foreground">Open to opportunities & collaborations</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
