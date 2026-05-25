'use client';

import { motion } from 'framer-motion';

const experienceData = [
    {
        company: "Capture The Flag (CTF) Platform",
        role: "Backend Developer",
        duration: "2024 • Remote",
        type: "Project",
        description: "Worked on the backend development of a CTF cybersecurity platform with authentication, challenge management, and real-time score updates.",
        techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "WebSockets"],
        achievements: [
            "Developed authentication and middleware systems.",
            "Implemented JWT-based role authorization.",
            "Built APIs for challenges and categories.",
            "Worked on real-time leaderboard updates using WebSockets.",
            "Collaborated with team members using GitHub workflows."
        ]
    },
    {
        company: "Unbound Hackathon",
        role: "Full Stack Developer",
        roleSubtitle: "Command Gateway System",
        duration: "2025 • Remote",
        type: "Hackathon",
        description: "Built a secure command management platform with role-based access, validation rules, and admin approval workflows.",
        techStack: ["Python FastAPI", "React.js", "Supabase", "REST APIs", "Vite"],
        achievements: [
            "Built a full-stack command validation platform.",
            "Implemented API key authentication and role-based access control.",
            "Created regex-based command validation rules.",
            "Developed admin approval and voting workflows.",
            "Added audit logs and command history tracking.",
            "Deployed the project using Vercel and Render."
        ]
    },
    {
        company: "ReLive",
        role: "Full Stack Developer",
        roleSubtitle: "Digital Memory Journal",
        duration: "2025 • Remote",
        type: "Project",
        description: "Developed a digital journaling platform where users can save memories using photos, audio, and stories.",
        techStack: ["Next.js", "TypeScript", "Supabase", "Cloudinary", "Tailwind CSS"],
        achievements: [
            "Built timeline and gallery-based memory views.",
            "Implemented secure authentication using Supabase.",
            "Added support for image and audio uploads.",
            "Developed mood tracking and memory reminder features.",
            "Integrated Cloudinary for media storage.",
            "Improved frontend performance and responsiveness."
        ]
    },
    {
        company: "ETHER-X Hackathon",
        role: "AI Engineer",
        roleSubtitle: "AI-Based Web Application Firewall",
        duration: "2026 • Hackathon Project",
        type: "1st Prize Winner 🏆",
        description: "Built an AI-powered Web Application Firewall using DistilBERT to detect malicious HTTP requests and cyber attacks.",
        techStack: ["Python", "DistilBERT", "Transformers", "Machine Learning", "Cybersecurity"],
        achievements: [
            "Built a transformer-based HTTP anomaly detection system.",
            "Used Masked Language Modeling (MLM) for threat detection.",
            "Detected SQL injection, XSS, and command injection attacks.",
            "Developed real-time request monitoring and scoring pipelines.",
            "Trained and tested the model using HTTP traffic datasets.",
            "Won 1st Prize in the ETHER-X Hackathon."
        ]
    }
];

const typeBadgeColors: Record<string, string> = {
    "Project": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    "Hackathon": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    "1st Prize Winner 🏆": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
};

export default function Experience() {
    return (
        <section className="relative w-full bg-background py-24 px-4 md:px-8 overflow-hidden" id="experience">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#29abe2]/10 dark:bg-[#29abe2]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <p className="font-mono text-xs text-[#29abe2] uppercase tracking-widest mb-3">$ ls ./experience</p>
                    <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-3">My Work</h2>
                    <p className="font-sans text-muted-foreground text-base">A record of projects, hackathons, and contributions.</p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-black/[0.07] dark:bg-white/[0.07]" />

                    <div className="flex flex-col gap-12">
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative pl-10"
                            >
                                {/* Dot */}
                                <div className="absolute left-0 top-[6px] w-[16px] h-[16px] rounded-full bg-background border-2 border-[#29abe2]/60 shadow-[0_0_8px_rgba(41,171,226,0.3)]" />

                                {/* Card */}
                                <div className="group rounded-2xl bg-card border border-black/10 dark:border-white/[0.07] hover:border-[#29abe2]/20 dark:hover:border-[#29abe2]/20 transition-all duration-300 overflow-hidden">
                                    {/* Card Header */}
                                    <div className="px-6 pt-6 pb-5 border-b border-black/5 dark:border-white/[0.05]">
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                            <div>
                                                <p className="font-mono text-[11px] text-[#29abe2] uppercase tracking-widest mb-1">{item.company}</p>
                                                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground leading-snug">
                                                    {item.role}
                                                    {item.roleSubtitle && (
                                                        <span className="text-black/40 dark:text-white/40 font-normal"> — {item.roleSubtitle}</span>
                                                    )}
                                                </h3>
                                            </div>
                                            <div className="flex flex-col items-end gap-2 shrink-0">
                                                <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full border ${typeBadgeColors[item.type] ?? 'bg-black/5 dark:bg-white/5 text-black/50 dark:text-white/50 border-black/10 dark:border-white/10'}`}>
                                                    {item.type}
                                                </span>
                                                <span className="font-mono text-[11px] text-black/40 dark:text-white/40">{item.duration}</span>
                                            </div>
                                        </div>
                                        <p className="text-black/60 dark:text-white/60 font-sans text-sm leading-relaxed">{item.description}</p>
                                    </div>

                                    {/* Card Body */}
                                    <div className="px-6 py-5 space-y-6">
                                        {/* Tech Stack */}
                                        {item.techStack.length > 0 && (
                                            <div>
                                                <p className="font-mono text-xs text-black/30 dark:text-white/30 mb-3 flex items-center gap-2">
                                                    <span className="text-[#29abe2]/80 dark:text-[#29abe2]/60">$</span> tech --stack
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.techStack.map((tech, i) => (
                                                        <span key={i} className="font-mono text-[10px] md:text-[11px] text-black/60 dark:text-white/60 bg-black/5 dark:bg-white/[0.04] px-2.5 py-1 rounded-md border border-black/10 dark:border-white/[0.08]">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Achievements */}
                                        {item.achievements.length > 0 && (
                                            <div>
                                                <p className="font-mono text-xs text-black/30 dark:text-white/30 mb-3 flex items-center gap-2">
                                                    <span className="text-[#29abe2]/80 dark:text-[#29abe2]/60">$</span> achievements --list
                                                </p>
                                                <ul className="space-y-2">
                                                    {item.achievements.map((ach, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-[13px] text-black/60 dark:text-white/55 leading-relaxed">
                                                            <span className="text-[#29abe2]/70 dark:text-[#29abe2]/50 mt-0.5 shrink-0">▸</span>
                                                            <span>{ach}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
