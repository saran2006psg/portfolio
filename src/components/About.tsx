'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import LogoLoop from './LogoLoop';

const techLogos = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", title: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", title: "TypeScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", title: "Next.js", className: "dark:invert" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", title: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", title: "Flutter" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", title: "Embedded Systems" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg", title: "Arduino" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg", title: "Firebase" }
].map(logo => ({
    node: (
        <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm whitespace-nowrap cursor-pointer">
            <img src={logo.src} alt={logo.title} className={`w-6 h-6 object-contain ${logo.className || ''}`} />
            <span className="text-sm font-mono text-black/90 dark:text-white/90">{logo.title}</span>
        </div>
    ),
    title: logo.title
}));

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax & Scroll transforms
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);


    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen bg-background py-32 px-4 md:px-10 overflow-hidden flex items-center justify-center perspective-1000"
        >
            {/* Dynamic Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#29abe2]/20 dark:bg-[#29abe2]/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen animate-delay-2000" />

            <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 gap-20 items-center">

                {/* Left Content */}
                <div className="flex flex-col gap-8 order-2 lg:order-1 relative">
                    <motion.div style={{ opacity }}>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold text-foreground mb-8"
                        >
                            About Saran
                        </motion.h2>

                        <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-sans font-light leading-relaxed max-w-xl">
                            <p>
                                Computer science student with a strong foundation in software development and a keen interest in both <span className="text-[#29abe2] font-medium">mobile application development</span> and <span className="text-[#29abe2] font-medium">embedded systems</span>.
                            </p>
                            <p>
                                Experienced in developing mobile solutions using <strong className="text-foreground font-medium">Flutter</strong> and applying knowledge of microcontrollers and sensors to integrate software with hardware for <span className="text-[#29abe2]">real-world solutions</span>.
                            </p>
                            <p>
                                Passionate about contributing to impactful projects and advancing skills in building reliable, production-grade applications that solve actual problems.
                            </p>
                        </div>

                        {/* Interactive Skills Loop */}
                        <div className="mt-12 h-16 relative w-[120%] -ml-[10%] mask-linear-fade">
                            <LogoLoop
                                logos={techLogos}
                                speed={80}
                                direction="left"
                                logoHeight={40}
                                gap={16}
                                hoverSpeed={0}
                                scaleOnHover={true}
                                fadeOut={true}
                                fadeOutColor="var(--background)"
                                ariaLabel="Technical Skills"
                            />
                        </div>
                    </motion.div>
                </div>


            </div>
        </section>
    );
}
