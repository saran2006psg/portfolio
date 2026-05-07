'use client';

import { motion } from 'framer-motion';

const educationData = [
    {
        degree: "Bachelor of Engineering in Computer Science",
        specialization: "(Artificial Intelligence and Machine Learning)",
        year: "Expected 2027",
        institution: "PSG College of Technology, Coimbatore",
        description: "Strong foundation in AI/ML with expertise in software development, data structures, algorithms, and real-world applications. Focus on building intelligent systems and practical problem-solving.",
        grade: "CGPA: 8.63/10"
    },
    {
        degree: "Diploma in Electrical and Electronics Engineering",
        specialization: "",
        year: "2021 - 2024",
        institution: "Nachimuthu Polytechnic College, Coimbatore",
        description: "Comprehensive foundation in embedded systems, microcontrollers, and hardware integration. Developed skills in circuit design, sensor technology, and IoT applications.",
        grade: "CGPA: 9.73/10"
    }
];

export default function Education() {
    return (
        <section className="relative w-full bg-black py-32 px-4 md:px-10 overflow-hidden" id="education">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-teal-glow-radial opacity-10 pointer-events-none -translate-y-1/2" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-display font-light text-white mb-4">Education</h2>
                    <p className="font-mono text-muted-foreground">My academic journey</p>
                </motion.div>

                <div className="relative flex flex-col gap-16">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-4 bottom-4 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-white/10 -translate-x-1/2 md:hidden" />

                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[19px] md:left-1/2 w-4 h-4 rounded-full bg-[#141414] border-2 border-[#29abe2] shadow-[0_0_10px_rgba(41,171,226,0.5)] z-20 -translate-x-1/2 mt-8 md:mt-8" />

                            {/* Content Card */}
                            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                                <div className={`p-8 rounded-[24px] bg-[#141414] border border-[#262626] hover:border-[#29abe2]/30 transition-all duration-300 group
                         ${index % 2 === 0 ? 'text-left' : 'md:text-left'} 
                      `}>
                                    <div className="flex flex-col gap-1 mb-4">
                                        <div className="flex justify-between items-start gap-4 flex-wrap">
                                            <h3 className="text-2xl font-display font-medium text-white leading-tight">
                                                {item.degree}
                                            </h3>
                                            <span className="font-mono text-xs text-[#29abe2] bg-[#29abe2]/10 px-2 py-1 rounded border border-[#29abe2]/20 whitespace-nowrap">
                                                {item.year}
                                            </span>
                                        </div>
                                        {item.specialization && (
                                            <span className="text-lg font-display text-white/80">{item.specialization}</span>
                                        )}
                                    </div>

                                    <h4 className="text-[#29abe2] font-mono text-sm mb-4">{item.institution}</h4>

                                    <p className="text-[#999999] font-sans text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>

                                    {item.grade && (
                                        <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            <span className="font-mono text-xs text-white/70">{item.grade}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Empty space for the other side of the timeline */}
                            <div className="hidden md:block w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
