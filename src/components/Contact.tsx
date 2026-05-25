'use client';

import { motion } from 'framer-motion';

// Clean Vector Icons (Sleek Hand-Sketched Blueprints)
const EmailIcon = () => (
    <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3,6 L12,13 L21,6" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5,4 H8 L10,9 L8.5,10 C9.5,12 11.5,14 13.5,15 L14.5,13.5 L19,15.5 V18.5 C19,19.5 18,20 17,20 C10,20 4,14 4,7 C4,6 4.5,5 5,4 Z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M8,11 L8,17 M8,8 L8,8.01 M12,11 L12,17 M12,13 C12,11 15,11 15,13 L15,17" />
    </svg>
);

const GitHubIcon = () => (
    <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9,19 C4,20 4,15 2,15 M12,2 C6.48,2 2,6.48 2,12 C2,16.42 4.87,20.17 8.84,21.5 C9.34,21.58 9.5,21.27 9.5,21 C9.5,20.77 9.49,20 9.49,19.16 C7,19.7 6.28,18.42 6.08,17.86 C5.97,17.58 5.49,16.7 5.07,16.47 C4.72,16.28 4.22,15.82 5.06,15.81 C5.85,15.8 6.41,16.53 6.6,16.83 C7.5,18.34 8.94,17.91 9.5,17.66 C9.59,17 9.86,16.53 10.16,16.27 C7.8,16 5.34,15.08 5.34,11 C5.34,9.84 5.76,8.89 6.44,8.15 C6.33,7.88 5.96,6.79 6.55,5.3 C6.55,5.3 7.44,5 9.46,6.38 C10.31,6.14 11.21,6.02 12.11,6.02 C13.01,6.02 13.91,6.14 14.76,6.38 C16.78,5 17.67,5.3 17.67,5.3 C18.26,6.79 17.89,7.88 17.78,8.15 C18.46,8.89 18.88,9.84 18.88,11 C18.88,15.09 16.41,15.99 14.05,16.26 C14.44,16.6 14.79,17.26 14.79,18.27 C14.79,19.72 14.78,20.89 14.78,21.24 C14.78,21.51 14.94,21.83 15.45,21.73 C19.41,20.39 22,16.63 22,12.2 C22,6.48 17.52,2 12,2 Z" />
    </svg>
);

const contactInfo = [
    { 
        label: 'Email', 
        href: 'mailto:saranpsg2006@gmail.com',
        icon: <EmailIcon />,
        isAlt: false
    },
    { 
        label: 'Phone', 
        href: 'tel:+918148599787',
        icon: <PhoneIcon />,
        isAlt: true
    },
    { 
        label: 'LinkedIn', 
        href: 'https://linkedin.com/in/saranpsg',
        icon: <LinkedInIcon />,
        isAlt: false
    },
    { 
        label: 'GitHub', 
        href: 'https://github.com/saran2006psg',
        icon: <GitHubIcon />,
        isAlt: true
    },
];

export default function Contact() {
    return (
        <section className="relative w-full bg-background pt-16 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden" id="contact">
            {/* Notebook Separator Binding */}
            <div className="absolute top-0 left-0 w-full notebook-separator z-20" />

            {/* Depth Glow Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/15 dark:bg-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple/15 dark:bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

            {/* Sketched Terminal Window Doodle */}
            <svg className="absolute left-12 top-1/4 w-40 h-40 doodle-svg animate-doodle hidden xl:block" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="5" width="90" height="70" rx="3" className="stroke-accent" />
                <line x1="5" y1="20" x2="95" y2="20" stroke="currentColor" />
                <circle cx="12" cy="12.5" r="1.5" className="fill-accent stroke-none" />
                <circle cx="20" cy="12.5" r="1.5" className="fill-accent stroke-none" />
                <circle cx="28" cy="12.5" r="1.5" className="fill-accent stroke-none" />
                <path d="M15,35 L25,40 L15,45" stroke="currentColor" />
                <line x1="28" y1="45" x2="42" y2="45" stroke="currentColor" strokeWidth="2" />
                <text x="48" y="42" className="font-handwritten text-[8.5px] fill-foreground select-none">ping -c 3 web</text>
            </svg>

            <div className="max-w-4xl mx-auto relative z-10">
                


                {/* Minimalist Glassmorphic Icons in One Row */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                    {contactInfo.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target={item.label !== 'Email' && item.label !== 'Phone' ? '_blank' : undefined}
                            rel={item.label !== 'Email' && item.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ scale: 1.12 }}
                            className={`group relative w-16 h-16 rounded-full flex items-center justify-center sketch-card ${
                                item.isAlt ? 'sketch-card-alt' : ''
                            }`}
                            aria-label={`Saran's ${item.label}`}
                        >
                            {/* Paper binding hole accent */}
                            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-background border border-border shadow-inner pointer-events-none" />

                            {/* Custom SVG Icon Container */}
                            <div className={`transition-colors duration-300 ${
                                item.isAlt ? 'text-accent-purple group-hover:text-accent-purple' : 'text-accent group-hover:text-accent'
                            }`}>
                                {item.icon}
                            </div>

                            {/* Floating Glassmorphic Tooltip */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-card/90 backdrop-blur-sm border border-border font-mono text-[9px] font-bold rounded shadow-[2px_2px_0px_rgba(0,0,0,0.03)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap text-foreground z-30">
                                {item.label}
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
                    className="flex flex-col items-center"
                >
                    {/* Sketched outline badge */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border bg-card/60 backdrop-blur-md shadow-[3px_3px_0px_rgba(37,99,235,0.06)]">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-mono text-xs font-bold text-foreground/80 tracking-wide">AVAILABLE FOR COLLABORATIONS</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
