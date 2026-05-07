'use client';

import { useScroll } from 'framer-motion'; // Removed unused imports
import { useEffect, useRef, useState } from 'react';
import Overlay from './Overlay';

interface ScrollyCanvasProps {
    numFrames?: number;
}

export default function ScrollyCanvas({ numFrames = 120 }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        // Determine the number of frames to load. 
        // We assume frames are 000 to (numFrames - 1)
        for (let i = 0; i < numFrames; i++) {
            const img = new Image();
            const frameIndex = i.toString().padStart(3, '0');
            img.src = `/sequence/frame_${frameIndex}.png`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === numFrames) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                console.error(`Failed to load frame ${i}`);
                // If one fails, we might hang? 
                // Best to count it anyway or handle error.
                loadedCount++;
                if (loadedCount === numFrames) {
                    setImages(loadedImages); // Some might be incomplete/broken
                    setIsLoaded(true);
                }
            };
            loadedImages[i] = img;
        }
    }, [numFrames]);

    // Render logic
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const render = (progress: number) => {
            if (images.length === 0 || !isLoaded) return;

            // Map progress 0-1 to frame index
            let index = Math.floor(progress * (images.length - 1));
            if (index < 0) index = 0;
            if (index > images.length - 1) index = images.length - 1;

            const img = images[index];
            if (!img || !img.complete) return; // Ensure image is actually available

            const cw = canvas.width;
            const ch = canvas.height;
            const iw = img.naturalWidth;
            const ih = img.naturalHeight;

            const canvasRatio = cw / ch;
            const imgRatio = iw / ih;

            let renderW, renderH, renderX, renderY;

            if (imgRatio > canvasRatio) {
                renderH = ch;
                renderW = ch * imgRatio;
                renderX = (cw - renderW) / 2;
                renderY = 0;
            } else {
                renderW = cw;
                renderH = cw / imgRatio;
                renderX = 0;
                renderY = (ch - renderH) / 2;
            }

            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(img, renderX, renderY, renderW, renderH);
        };

        // Sub to scroll
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            requestAnimationFrame(() => render(latest));
        });

        // Initial render call
        render(scrollYProgress.get());

        return () => unsubscribe();
    }, [scrollYProgress, images, isLoaded]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Re-render current frame if possible?
                // The next scroll event or state update will fix it, 
                // or we can force redraw but we need accessing the current progress.
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div ref={containerRef} className="h-[500vh] relative z-0">
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
                <canvas ref={canvasRef} className="w-full h-full block bg-background" />
            </div>
            <Overlay scrollYProgress={scrollYProgress} />
        </div>
    );
}
