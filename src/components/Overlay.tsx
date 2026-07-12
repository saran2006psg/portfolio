'use client';

import { MotionValue, motion, useTransform } from 'framer-motion';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {

    // Section 1: Title (Visible at start, fades out)
    const opacity1 = useTransform(scrollYProgress, [0, 0.10], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.10], [0, -50]);

    // Section 2: "Crafting intelligent solutions..." - Visible ~10% to ~40%
    const opacity2 = useTransform(scrollYProgress, [0.10, 0.20, 0.34, 0.40], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.10, 0.40], [50, -50]);
    const x2 = useTransform(scrollYProgress, [0.10, 0.20], [-50, 0]); // Slide in from left

    // Section 3: "Bridging the gap..." - Visible ~40% to ~70%
    const opacity3 = useTransform(scrollYProgress, [0.40, 0.50, 0.64, 0.70], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.40, 0.70], [50, -50]);
    const x3 = useTransform(scrollYProgress, [0.40, 0.50], [50, 0]); // Slide in from right

    // Section 4: "Always exploring, building..." - Visible ~70% to ~90%
    const opacity4 = useTransform(scrollYProgress, [0.70, 0.80, 0.86, 0.90], [0, 1, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.70, 0.90], [50, -50]);
    const x4 = useTransform(scrollYProgress, [0.70, 0.80], [-50, 0]); // Slide in from left

    // Section 5: Single high-impact word "Create." - Visible ~90% to ~98%
    const opacity5 = useTransform(scrollYProgress, [0.90, 0.93, 0.96, 0.98], [0, 1, 1, 0]);
    const y5 = useTransform(scrollYProgress, [0.90, 0.98], [50, -50]);

    // Scroll Down Indicator / Button (Appear at the end, ~94% to 99%)
    const opacityBtn = useTransform(scrollYProgress, [0.94, 0.96, 0.98, 0.99], [0, 1, 1, 0]);
    const yBtn = useTransform(scrollYProgress, [0.94, 0.96, 0.98, 0.99], [40, 0, 0, -40]);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 text-foreground font-body">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute top-[5vh] w-full flex flex-col justify-center items-center h-screen"
            >
                <div className="text-center space-y-4 md:space-y-6 px-4">
                    <h1 className="text-5xl md:text-9xl font-display font-light tracking-tight text-white mix-blend-difference">
                        SARAN M.
                    </h1>
                    <p className="text-base md:text-2xl font-mono text-muted-foreground uppercase tracking-widest">
                        AI Engineer &amp; Full-Stack Developer
                    </p>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2, x: x2 }}
                className="absolute top-[35%] left-[5%] md:left-[10%] lg:left-[15%] max-w-[90vw] md:max-w-2xl"
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-light leading-tight tracking-tight text-white/95">
                    Crafting <span className="text-accent italic font-semibold">intelligent solutions</span> <br className="hidden md:block" /> at the intersection of AI &amp; code.
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3, x: x3 }}
                className="absolute top-[55%] right-[5%] md:right-[10%] lg:right-[15%] max-w-[90vw] md:max-w-2xl text-right"
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-light leading-tight tracking-tight text-white/95">
                    Bridging the gap between <br className="hidden md:block" /><span className="text-teal-400 italic">neural reasoning</span> <br className="hidden md:block" /> and <span className="text-muted-foreground font-mono text-xl md:text-4xl lg:text-5xl block mt-2">production systems.</span>
                </h2>
            </motion.div>

            {/* Section 4 */}
            <motion.div
                style={{ opacity: opacity4, y: y4, x: x4 }}
                className="absolute top-[35%] left-[5%] md:left-[10%] lg:left-[15%] max-w-[90vw] md:max-w-2xl"
            >
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-light leading-tight tracking-tight text-white/95">
                    Always exploring, <span className="text-purple-400 italic font-semibold">building</span>, <br className="hidden md:block" /> and pushing the limits of what is possible.
                </h2>
            </motion.div>

            {/* Section 5 */}
            <motion.div
                style={{ opacity: opacity5, y: y5 }}
                className="absolute top-0 left-0 w-full flex justify-center items-center h-screen"
            >
                <h2 className="text-6xl md:text-9xl font-display font-light tracking-tight text-white mix-blend-difference">
                    Create.
                </h2>
            </motion.div>

            {/* Scroll Indicator Button */}
            <motion.div
                style={{ opacity: opacityBtn, y: yBtn }}
                className="absolute bottom-[8vh] left-0 w-full flex justify-center items-center pointer-events-none z-20"
            >
                <button
                    onClick={() => {
                        const portfolio = document.getElementById('portfolio-content');
                        if (portfolio) {
                            portfolio.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    className="flex flex-col items-center gap-2 px-6 py-3 rounded-full bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 text-white shadow-lg hover:bg-white/20 dark:hover:bg-black/60 transition-all duration-300 pointer-events-auto cursor-pointer"
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-white/95">
                        Explore Portfolio
                    </span>
                    <svg 
                        className="w-4 h-4 animate-bounce text-teal-400" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </motion.div>
        </div>
    );
}
