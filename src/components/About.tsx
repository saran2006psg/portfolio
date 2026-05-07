'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { useRef, MouseEvent } from 'react';

const skills = [
    "Python",
    "TypeScript",
    "Next.js",
    "React",
    "Flutter",
    "Embedded Systems",
    "Arduino & Microcontrollers",
    "SQL & Firebase"
];

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

    // 3D Tilt Effect State
    const x = useMotionValue(0);
    const yMove = useMotionValue(0);

    // Spring physics for smooth mouse follow
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(yMove);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        yMove.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        yMove.set(0);
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen bg-[#050505] py-32 px-4 md:px-10 overflow-hidden flex items-center justify-center perspective-1000"
        >
            {/* Dynamic Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#29abe2]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-delay-2000" />

            <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                {/* Left Content */}
                <div className="flex flex-col gap-8 order-2 lg:order-1 relative">
                    <motion.div style={{ opacity }}>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                            viewport={{ once: true }}
                            className="text-7xl md:text-9xl font-display font-light text-white leading-[0.85] mb-8 tracking-tighter"
                        >
                            Building <br />
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-[#29abe2] to-teal-200 italic relative inline-block"
                                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                style={{ backgroundSize: "200% auto" }}
                            >
                                Tomorrow.
                                <svg className="absolute -bottom-2 w-full h-3 md:h-5 text-[#29abe2]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </motion.span>
                        </motion.h2>

                        <div className="space-y-6 text-lg md:text-xl text-[#a1a1a1] font-sans font-light leading-relaxed max-w-xl">
                            <p>
                                Computer science student with a strong foundation in software development and a keen interest in both <span className="text-[#29abe2] font-medium">mobile application development</span> and <span className="text-[#29abe2] font-medium">embedded systems</span>.
                            </p>
                            <p>
                                Experienced in developing mobile solutions using <strong className="text-white font-medium">Flutter</strong> and applying knowledge of microcontrollers and sensors to integrate software with hardware for <span className="text-[#29abe2]">real-world solutions</span>.
                            </p>
                            <p>
                                Passionate about contributing to impactful projects and advancing skills in building reliable, production-grade applications that solve actual problems.
                            </p>
                        </div>

                        {/* Interactive Skills Grid */}
                        <div className="flex flex-wrap gap-3 mt-10">
                            {skills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(41, 171, 226, 0.15)", borderColor: "rgba(41, 171, 226, 0.5)" }}
                                    className="px-5 py-2.5 rounded-full border border-white/10 text-sm font-mono text-[#29abe2] bg-white/5 transition-all cursor-default select-none backdrop-blur-sm"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Visual - Interactive 3D Card */}
                <div className="relative h-full min-h-[600px] w-full flex items-center justify-center order-1 lg:order-2 perspective-1000">
                    <motion.div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                            y
                        }}
                        className="relative w-80 h-[500px] bg-[#141414]/90 backdrop-blur-xl rounded-[30px] border border-white/10 shadow-2xl cursor-pointer group"
                    >
                        {/* Internal 3D Layers */}
                        <div
                            style={{ transform: "translateZ(50px)" }}
                            className="absolute inset-0 rounded-[30px] border border-[#29abe2]/20 shadow-[0_0_30px_rgba(41,171,226,0.1)]"
                        />

                        {/* Glowing Orb */}
                        <div style={{ transform: "translateZ(30px)" }} className="absolute -top-10 -right-10 w-32 h-32 bg-[#29abe2]/30 rounded-full blur-2xl group-hover:bg-[#29abe2]/50 transition-colors duration-500" />

                        {/* Content inside Card */}
                        <div className="absolute inset-6 flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
                            <div className="flex justify-between items-center">
                                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-mono text-[#29abe2]">01</div>
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "70%" }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="h-full bg-[#29abe2]"
                                    />
                                </div>
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "90%" }}
                                        transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                                        className="h-full bg-purple-500"
                                    />
                                </div>
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "50%" }}
                                        transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
                                        className="h-full bg-teal-300"
                                    />
                                </div>
                            </div>

                            <div className="font-mono text-xs text-white/40">
                                &gt; Initializing protocol...<br />
                                &gt; Access granted.<br />
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                    className="text-[#29abe2]"
                                >
                                    _
                                </motion.span>
                            </div>
                        </div>

                        {/* Floating Tech Elements outside */}
                        <motion.div
                            style={{ transform: "translateZ(80px)", x: -40, y: 40 }}
                            className="absolute -bottom-8 -left-8 bg-[#0a0a0a] border border-white/20 p-4 rounded-xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-xs font-bold font-mono text-white">SYSTEM ACTIVE</span>
                        </motion.div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}
