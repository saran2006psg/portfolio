'use client';

import { MotionValue, motion, useTransform } from 'framer-motion';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {

    // Section 1: Title (Visible at start, fades out)
    const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

    // Section 2: "I build digital experiences" (Left) - Appear ~30%
    const opacity2 = useTransform(scrollYProgress, [0.20, 0.30, 0.40], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.20, 0.40], [50, -50]);
    const x2 = useTransform(scrollYProgress, [0.20, 0.30], [-50, 0]); // Slide in from left

    // Section 3: "Bridging design..." (Right) - Appear ~60%
    const opacity3 = useTransform(scrollYProgress, [0.50, 0.60, 0.70], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.50, 0.70], [50, -50]);
    const x3 = useTransform(scrollYProgress, [0.50, 0.60], [50, 0]); // Slide in from right

    // Section 4: Scroll Down Indicator / Button (Appear ~72% to 95%)
    const opacity4 = useTransform(scrollYProgress, [0.72, 0.80, 0.95, 0.98], [0, 1, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.72, 0.80, 0.95, 0.98], [40, 0, 0, -40]);

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 text-foreground font-sans">
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
                        Creative Developer
                    </p>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2, x: x2 }}
                className="absolute top-[30%] left-[5%] md:left-[15%] max-w-[90vw] md:max-w-3xl"
            >
                <h2 className="text-3xl md:text-7xl font-display font-light leading-tight">
                    I build <span className="text-accent italic">digital experiences</span> that matter.
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3, x: x3 }}
                className="absolute top-[60%] right-[5%] md:right-[15%] max-w-[90vw] md:max-w-3xl text-right"
            >
                <h2 className="text-3xl md:text-7xl font-display font-light leading-tight">
                    Bridging <span className="text-teal-400 italic">design</span> and <br /> <span className="font-mono text-2xl md:text-6xl not-italic text-muted-foreground">engineering.</span>
                </h2>
            </motion.div>

            {/* Section 4 */}
            <motion.div
                style={{ opacity: opacity4, y: y4 }}
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
