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

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 text-white font-sans">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute top-[5vh] w-full flex flex-col justify-center items-center h-screen"
            >
                <div className="text-center space-y-6">
                    <h1 className="text-7xl md:text-9xl font-display font-light tracking-tight text-white mix-blend-difference">
                        SARAN M.
                    </h1>
                    <p className="text-xl md:text-2xl font-mono text-muted-foreground uppercase tracking-widest">
                        Creative Developer
                    </p>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, y: y2, x: x2 }}
                className="absolute top-[30%] left-[10%] md:left-[15%] max-w-[80vw] md:max-w-3xl"
            >
                <h2 className="text-5xl md:text-7xl font-display font-light leading-none">
                    I build <span className="text-accent italic">digital experiences</span> that matter.
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, y: y3, x: x3 }}
                className="absolute top-[60%] right-[10%] md:right-[15%] max-w-[80vw] md:max-w-3xl text-right"
            >
                <h2 className="text-5xl md:text-7xl font-display font-light leading-none">
                    Bridging <span className="text-teal-400 italic">design</span> and <br /> <span className="font-mono text-4xl md:text-6xl not-italic text-muted-foreground">engineering.</span>
                </h2>
            </motion.div>
        </div>
    );
}
