'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: "Legal Contract Risk Analyzer",
        category: "AI & ML",
        description: "End-to-end AI system for automated legal contract risk assessment using semantic retrieval and LLM reasoning.",
        highlights: [
            "Vector search pipeline with SentenceTransformers & Pinecone (9,447 legal clauses)",
            "Robust PDF ingestion with OCR support using PyMuPDF and EasyOCR",
            "Clause-level risk classification (High/Medium/Low) using Groq-powered LLaMA",
            "Fast analysis (<30 seconds per contract) with optimized batching"
        ],
        tech: ["Python", "LLMs", "Vector DB", "OCR"],
        link: "https://github.com/saran2006psg"
    },
    {
        title: "AgriConnect",
        category: "Full Stack Marketplace",
        description: "Agricultural marketplace platform connecting farmers and consumers directly with role-based access control.",
        highlights: [
            "React + TypeScript frontend with Vite, Tailwind CSS & Recharts",
            "FastAPI backend with Supabase PostgreSQL database",
            "Role-based access (Consumer, Farmer, Admin) with JWT authentication",
            "Shopping cart, order management, farmer wallet & commission system",
            "Product reviews, subscriptions, and analytics dashboard",
            "Deployed on Vercel (frontend) with interactive API docs"
        ],
        tech: ["React", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "Tailwind"],
        link: "https://github.com/saran2006psg/aggriconnect/tree/mainv"
    },
    {
        title: "ReLive – Digital Memory Journal",
        category: "Full Stack Web",
        description: "Full-stack digital memory journal with secure authentication, media uploads, and cloud storage.",
        highlights: [
            "Built with Next.js, TypeScript, and Supabase",
            "Media uploads to Cloudinary",
            "Timeline and gallery views",
            "Mood tracking and mood-based analytics"
        ],
        tech: ["Next.js", "TypeScript", "Supabase", "Cloudinary"],
        link: "https://github.com/saran2006psg"
    },
    {
        title: "Smart Sign Glove for Disabled People",
        category: "Embedded Systems",
        description: "Award-winning embedded system project combining IoT sensors with machine learning for gesture recognition.",
        highlights: [
            "First Prize - CREATE 2024 National Competition (IIC/AICTE)",
            "Microcontroller integration with accelerometers and gyroscopes",
            "Real-time gesture recognition and sign language translation",
            "Practical solution for accessibility and communication"
        ],
        tech: ["Arduino", "Embedded C", "ML", "IoT"],
        link: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative z-10 w-full min-h-screen bg-background py-32 px-4 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl md:text-8xl font-display font-light text-foreground"
                    >
                        Projects
                    </motion.h2>
                    <p className="font-mono text-muted-foreground max-w-md pb-2">
                        A collection of digital artifacts, interfaces, and experiments exploring the future of interaction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group flex flex-col bg-card rounded-[24px] border border-border overflow-hidden hover:border-black/20 dark:hover:border-white/20 transition-colors duration-300"
                        >
                            {/* Content Container */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-mono font-medium tracking-widest text-[#29abe2] uppercase">{project.category}</span>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:rotate-45 transition-transform">
                                            <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                                <h3 className="text-3xl font-display font-medium mb-3 text-foreground">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground font-mono text-sm leading-[1.6] mb-6">
                                    {project.description}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-2 mb-6 flex-grow">
                                    {project.highlights.map((highlight, i) => (
                                        <li key={i} className="text-muted-foreground text-sm font-sans flex items-start gap-2">
                                            <span className="text-[#29abe2] mt-1">▸</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tag, i) => (
                                        <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70 border border-black/10 dark:border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
