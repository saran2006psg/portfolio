'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

// Portfolio Data
const experienceData = [
  {
    id: 1,
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
    ],
    learnings: [
      "Applying transformer models directly to network packets/HTTP request text streams is incredibly fast and powerful.",
      "MLM allows the firewall to generalize threats better than classic signatures or regex rules.",
      "Deploying ML pipelines to real-time network streams requires high-throughput data processing to avoid latency issues."
    ],
    top: 0,
    height: 160,
    left: "calc(0% + 0px)",
    width: "calc(50% - 3px)",
    logo: "/sequence/frame_000.png" // fallback/logo indicator
  },
  {
    id: 2,
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
    ],
    learnings: [
      "Designing workflows that involve human-in-the-loop validation requires strict role isolation and database integrity.",
      "FastAPI simplifies validation schemas via Pydantic immensely.",
      "Supabase real-time handles simple notification systems without setting up a heavy broker."
    ],
    top: 140,
    height: 180,
    left: "calc(50% + 3px)",
    width: "calc(50% - 3px)",
    logo: "/sequence/frame_040.png"
  },
  {
    id: 3,
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
    ],
    learnings: [
      "Integrating multi-media storage (audio + video) requires handling slow uploads with smooth UI loading and optimistic states.",
      "Handling media securely means setting fine-grained security policies on storage buckets.",
      "Creating intuitive journaling logs requires robust local storage caching and state sync."
    ],
    top: 180,
    height: 190,
    left: "calc(0% + 0px)",
    width: "calc(50% - 3px)",
    logo: "/sequence/frame_080.png"
  },
  {
    id: 4,
    company: "Capture The Flag Platform",
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
    ],
    learnings: [
      "Using WebSockets at scale requires thinking about connection heartbeats and reconnection states to prevent memory leaks.",
      "Backend route middleware is critical for preventing horizontal privilege escalation in CTFs.",
      "Clean Git branch merging is key in collaborative backend projects with high file overlap."
    ],
    top: 390,
    height: 160,
    left: "0",
    width: "100%",
    logo: "/sequence/frame_100.png"
  }
];

const achievementsData = [
  {
    title: "1st Prize - ETHER-X Hackathon",
    date: "Feb 2026",
    desc: "Built a transformer-based HTTP anomaly detection firewall using DistilBERT. Crowned 1st among competitive cybersecurity projects.",
    url: "github.com/saran2006psg",
    icon: (
      <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0h-9M9 10.5h.008v.008H9V10.5zm.75 0h.008v.008H9.75V10.5z" />
      </svg>
    )
  },
  {
    title: "First Prize - CREATE 2024 National Competition",
    date: "Dec 2024",
    desc: "Received First Prize at CREATE 2024 National Competition organized by IIC/AICTE. Developed a Smart Sign Glove with IoT sensors and real-time gesture recognition ML to assist disabled people.",
    url: "#",
    icon: (
      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )
  },
  {
    title: "1st Prize - Unbound Hackathon Gateway",
    date: "July 2025",
    desc: "Built a secure CLI command validation gateway with role approval flows, validation logic rules, and real-time logs in 36 hours.",
    url: "github.com/saran2006psg",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    )
  },
  {
    title: "ReLive – Digital Memory Journal Release",
    date: "Oct 2025",
    desc: "Shipped Next.js full-stack memory journaling system. Enabled cloud audio, mood analysis logs, and responsive timeline views.",
    url: "github.com/saran2006psg",
    icon: (
      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    )
  }
];

const projectsData = [
  {
    title: "Legal Contract Risk Analyzer",
    category: "AI & Machine Learning",
    desc: "End-to-end AI system for automated legal contract risk assessment using semantic retrieval and LLM reasoning. High speed and robust PDF ingestions.",
    tech: ["Python", "Groq", "SentenceTransformers", "Pinecone", "PyMuPDF"],
    url: "https://github.com/saran2006psg",
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
  },
  {
    title: "AgriConnect",
    category: "Full Stack Marketplace",
    desc: "Agricultural marketplace platform connecting farmers and consumers directly with role-based access, farmer wallets, and analytical dashboard.",
    tech: ["React", "FastAPI", "Supabase", "PostgreSQL", "TailwindCSS"],
    url: "https://github.com/saran2006psg/aggriconnect/tree/mainv",
    gradient: "linear-gradient(135deg, #052e16 0%, #14532d 100%)"
  },
  {
    title: "ReLive – Digital Memory Journal",
    category: "Full Stack Web",
    desc: "Full-stack memory journal with mood logs, image/audio uploads, Cloudinary integration, and highly interactive gallery timelines.",
    tech: ["Next.js", "TypeScript", "Supabase", "Cloudinary", "Tailwind"],
    url: "https://github.com/saran2006psg",
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)"
  },
  {
    title: "Smart Sign Glove for Disabled",
    category: "Embedded Systems & IoT",
    desc: "Award-winning gesture recognition system combining IoT sensors with machine learning to translate sign language gestures in real-time.",
    tech: ["Arduino", "Embedded C", "ML", "Accelerometers", "Gyros"],
    url: "#",
    gradient: "linear-gradient(135deg, #3b0764 0%, #581c87 100%)"
  }
];

export default function NoahPortfolio() {
  const { theme, toggleTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [selectedJob, setSelectedJob] = useState<typeof experienceData[0] | null>(null);
  const [closing, setClosing] = useState(false);
  
  const columnsOuterRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  // Copy Email Function
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('saranpsg2006@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Scroll Columns Left/Right
  const scrollColumns = (direction: 'left' | 'right') => {
    if (!columnsOuterRef.current) return;
    const colW = window.innerWidth > 600 ? 496 : window.innerWidth - 32;
    const scrollAmount = direction === 'left' ? -colW : colW;
    columnsOuterRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Track active dot on mobile/horizontal scroll
  const handleScroll = () => {
    if (!columnsOuterRef.current) return;
    const scrollLeft = columnsOuterRef.current.scrollLeft;
    const width = columnsOuterRef.current.clientWidth;
    const index = Math.round(scrollLeft / width);
    setActiveDot(index);
  };

  // Job Modal Closing Animation handler
  const closeJobModal = () => {
    setClosing(true);
    setTimeout(() => {
      setSelectedJob(null);
      setClosing(false);
    }, 280);
  };

  // Navigate between jobs inside modal
  const handleModalNav = (direction: 'prev' | 'next') => {
    if (!selectedJob) return;
    const currentIndex = experienceData.findIndex(j => j.id === selectedJob.id);
    let newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < experienceData.length) {
      setSelectedJob(experienceData[newIndex]);
    }
  };

  return (
    <div className="site">
      {/* Site Header */}
      <header className="site-header border-b border-black/[0.06] dark:border-white/[0.06]">
        <h1 className="site-title font-mono uppercase tracking-widest text-[#111] dark:text-[#f0f0f0] font-semibold">
          Saran M
        </h1>
        
        {/* Navigation Arrows & Dark Mode */}
        <div className="nav-arrows">
          <button 
            className="nav-arrow" 
            onClick={toggleTheme} 
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              // Sun
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              // Moon
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
          
          <button 
            className="nav-arrow" 
            onClick={() => scrollColumns('left')} 
            aria-label="Previous column"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>
          
          <button 
            className="nav-arrow" 
            onClick={() => scrollColumns('right')} 
            aria-label="Next column"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
        </div>
      </header>

      {/* Columns Outer Container */}
      <div 
        ref={columnsOuterRef} 
        className="columns-outer"
        onScroll={handleScroll}
      >
        <div className="columns-inner">
          
          {/* COLUMN 1: About me */}
          <div className="column">
            <div className="about-card card h-full">
              <div className="card-label">
                <button className="col-tab" disabled>About me</button>
              </div>
              
              <div className="about-scroll">
                <div className="about-body">
                  <div className="about-photo-wrap">
                    <img 
                      src="/avatar.png" 
                      alt="Saran M" 
                      className="about-photo"
                      onError={(e) => {
                        // Fallback in case of asset delay
                        e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80";
                      }}
                    />
                  </div>
                  
                  <h2 className="bio-heading text-black dark:text-[#f0f0f0]">
                    Hey, I'm Saran. A Computer Science Student & Developer.
                  </h2>
                  <p className="bio-para">
                    I have a strong foundation in software engineering, with a keen interest in mobile application development (Flutter) and embedded systems. I love combining sensors and hardware with modern web frameworks to build production-grade, real-world solutions.
                  </p>
                  <p className="bio-para">
                    Currently studying Computer Science and Engineering, I actively participate in national hackathons and enjoy designing robust backend architectures, validation frameworks, and deep-learning threat detections.
                  </p>
                  
                  {/* Social Buttons Row */}
                  <div className="social-row">
                    <a 
                      href="https://github.com/saran2006psg" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn social-icon-btn" 
                      aria-label="Visit GitHub Profile"
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com/in/saranpsg" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="social-btn social-icon-btn" 
                      aria-label="Visit LinkedIn Profile"
                    >
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <button 
                      onClick={handleCopyEmail} 
                      className="social-btn font-mono"
                    >
                      {copied ? "Copied Email!" : "Copy email"}
                    </button>
                  </div>
                </div>

                {/* About Metadata Rows */}
                <div className="about-meta border-t border-black/[0.06] dark:border-white/[0.06]">
                  <div className="meta-row">
                    <span className="meta-label">Role</span>
                    <span className="meta-val">CS Student & Full-Stack Developer</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Focus</span>
                    <span className="meta-val">Mobile Apps, Embedded IoT, AI Firewalls</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Stack</span>
                    <span className="meta-val font-mono text-[11px] leading-relaxed">
                      Flutter, Python, TypeScript, React, Next.js, FastAPI, Node, Supabase, C++, Arduino
                    </span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Achievements</span>
                    <span className="meta-val">
                      Winner of ETHER-X 2026 & CREATE 2024 National Comp.
                    </span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">Location</span>
                    <span className="meta-val">Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Career Journey (Timeline) */}
          <div className="column">
            <div className="career-card card h-full" style={{ position: 'relative' }}>
              <div className="card-label">
                <button className="col-tab" disabled>Career Journey</button>
              </div>

              {/* Scrollable Timeline content */}
              <div className={`tl-scroll ${selectedJob ? 'tl-scroll--shrunk' : ''}`}>
                <div className="tl-inner" style={{ height: '620px' }}>
                  
                  {/* Year lines and text labels */}
                  <div className="tl-year-line" style={{ top: '0px' }} />
                  <div className="tl-year-line" style={{ top: '120px' }} />
                  <div className="tl-year-line" style={{ top: '240px' }} />
                  <div className="tl-year-line" style={{ top: '360px' }} />
                  <div className="tl-year-line" style={{ top: '480px' }} />
                  <div className="tl-year-line" style={{ top: '560px' }} />

                  <div className="tl-years">
                    <div className="tl-year" style={{ top: '0px' }}>2026</div>
                    <div className="tl-year" style={{ top: '120px' }}>2025</div>
                    <div className="tl-year" style={{ top: '360px' }}>2024</div>
                  </div>

                  {/* Vertical center timeline line */}
                  <div className="tl-line" />

                  {/* Side Project tag block */}
                  <div className="tl-sideprojects" style={{ top: '160px', height: '220px' }}>
                    <span className="tl-sideprojects-label">Featured Works</span>
                  </div>

                  {/* Dynamic Job Cards absolute overlay */}
                  <div className="tl-cards">
                    {experienceData.map((job) => (
                      <div 
                        key={job.id} 
                        onClick={() => setSelectedJob(job)} 
                        className={`job-card ${job.id === 4 ? 'job-card--compact' : ''}`}
                        style={{ 
                          top: job.top, 
                          height: job.height, 
                          left: job.left, 
                          width: job.width 
                        }} 
                        role="button" 
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && setSelectedJob(job)}
                      >
                        <img 
                          src={job.logo} 
                          alt={job.company} 
                          className="job-logo"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="job-body mt-2">
                          <h3 className="job-role">{job.role}</h3>
                          <div className="job-co">{job.company}</div>
                          <div className="job-dates">{job.duration.split('•')[0]}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Bottom Interactive Slide-up Drawer Modal */}
              <AnimatePresence>
                {selectedJob && (
                  <div className="job-modal-overlay">
                    <motion.div 
                      className={`job-modal ${closing ? 'job-modal--closing' : ''}`}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ type: "spring", damping: 25, stiffness: 220 }}
                    >
                      {/* Swipe Handle */}
                      <div className="job-modal-handle" onClick={closeJobModal} />

                      {/* Modal Body */}
                      <div className="job-modal-body">
                        <div className="flex items-center gap-3">
                          <img 
                            src={selectedJob.logo} 
                            alt={selectedJob.company} 
                            className="job-modal-logo"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div>
                            <h3 className="job-modal-title">{selectedJob.role}</h3>
                            <div className="job-modal-meta font-mono tracking-widest text-[#999] dark:text-[#555] text-xs">
                              {selectedJob.company} • {selectedJob.duration}
                            </div>
                          </div>
                        </div>

                        <p className="job-modal-desc font-sans text-[#666] dark:text-[#999] text-sm leading-relaxed mt-4">
                          {selectedJob.description}
                        </p>

                        {/* Tech Stack List */}
                        <div className="job-modal-section mt-4">
                          <h4 className="job-modal-section-title uppercase tracking-widest font-bold text-xs text-[#999] dark:text-[#555] mb-2">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedJob.techStack.map((tech, i) => (
                              <span 
                                key={i} 
                                className="font-mono text-[10px] px-2.5 py-1 rounded bg-[#f0f0f0] dark:bg-[#2a2a2c] text-[#111] dark:text-[#f0f0f0]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements / Key Items */}
                        <div className="job-modal-section mt-6">
                          <h4 className="job-modal-section-title uppercase tracking-widest font-bold text-xs text-[#999] dark:text-[#555] mb-3">
                            Key Deliverables & Actions
                          </h4>
                          <ul className="job-modal-list">
                            {selectedJob.achievements.map((ach, i) => (
                              <li key={i}>{ach}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Things Learned Section */}
                        <div className="job-modal-section mt-6">
                          <h4 className="job-modal-section-title uppercase tracking-widest font-bold text-xs text-[#999] dark:text-[#555] mb-3">
                            Things I Learned
                          </h4>
                          <ul className="job-modal-list">
                            {selectedJob.learnings.map((learn, i) => (
                              <li key={i} className="italic text-[#666] dark:text-[#999]">{learn}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Modal Footer Controls */}
                      <footer className="job-modal-nav border-t border-black/[0.06] dark:border-white/[0.06]">
                        <button 
                          className="job-modal-nav-btn" 
                          onClick={() => handleModalNav('prev')}
                          disabled={experienceData.findIndex(j => j.id === selectedJob.id) === 0}
                          aria-label="Previous job"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="15,18 9,12 15,6" />
                          </svg>
                        </button>

                        <button className="job-modal-close uppercase" onClick={closeJobModal}>
                          Close
                        </button>

                        <button 
                          className="job-modal-nav-btn" 
                          onClick={() => handleModalNav('next')}
                          disabled={experienceData.findIndex(j => j.id === selectedJob.id) === experienceData.length - 1}
                          aria-label="Next job"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="9,18 15,12 9,6" />
                          </svg>
                        </button>
                      </footer>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* COLUMN 3: Hackathons & Open Source Achievements */}
          <div className="column">
            <div className="col-outer card h-full">
              <div className="card-label">
                <button className="col-tab" disabled>Achievements & Releases</button>
              </div>

              {/* Scrollable list matching Noah's Open Source */}
              <div className="projects-scroll">
                <div className="projects-list projects-list--top mt-4">
                  {achievementsData.map((item, index) => (
                    <a 
                      key={index} 
                      href={item.url === '#' ? undefined : `https://${item.url}`}
                      target={item.url === '#' ? undefined : "_blank"} 
                      rel="noopener noreferrer" 
                      className="project-row"
                    >
                      <div className="project-row-left">
                        <div className="project-icon bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05] flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                      
                      <div className="project-row-body">
                        <div className="project-row-header">
                          <h3 className="project-title font-semibold text-black dark:text-[#f0f0f0]">
                            {item.title}
                          </h3>
                          <span className="project-date font-mono">{item.date}</span>
                        </div>
                        <p className="project-desc font-sans text-xs text-[#666] dark:text-[#999] leading-relaxed">
                          {item.desc}
                        </p>
                        {item.url !== '#' && (
                          <p className="project-url font-mono text-[9.5px] text-[#999] tracking-wider mt-1">
                            {item.url}
                          </p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 4: Featured Projects */}
          <div className="column">
            <div className="col-outer card h-full">
              <div className="card-label">
                <button className="col-tab" disabled>Featured Projects</button>
              </div>

              {/* Projects card grid layout */}
              <div className="projects-card-scroll">
                <div className="flex flex-col gap-3 mt-4">
                  {projectsData.map((project, index) => (
                    <a 
                      key={index} 
                      href={project.url === '#' ? undefined : project.url}
                      target={project.url === '#' ? undefined : "_blank"} 
                      rel="noopener noreferrer" 
                      className="proj-card"
                    >
                      {/* Premium aesthetic card mockup gradient placeholder */}
                      <div className="proj-card-media-wrap" style={{ background: project.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="p-4 text-center">
                          <span className="text-white/40 uppercase tracking-widest text-[9px] font-mono block mb-1">
                            {project.category}
                          </span>
                          <span className="text-white font-display font-medium text-lg leading-tight block">
                            {project.title}
                          </span>
                        </div>
                      </div>

                      <div className="proj-card-body">
                        <div className="proj-card-text">
                          <h3 className="proj-card-title text-black dark:text-[#f0f0f0]">{project.title}</h3>
                          <p className="proj-card-desc text-xs text-[#666] dark:text-[#999]">
                            {project.desc}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 my-1">
                          {project.tech.slice(0, 4).map((tech, i) => (
                            <span 
                              key={i} 
                              className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.04] text-[#666] dark:text-[#999] border border-black/[0.05] dark:border-white/[0.05]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="proj-card-meta">
                          <span className="proj-card-url text-[9px] font-mono tracking-widest text-[#999]">
                            {project.url === '#' ? "COMPLETED" : "GITHUB REPO"}
                          </span>
                          <span className="proj-card-arrow">↗</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Mobile Page Dots indicators */}
      <div className="page-dots">
        {[0, 1, 2, 3].map((idx) => (
          <span 
            key={idx} 
            className={`page-dot ${idx === activeDot ? 'page-dot--active' : ''}`} 
          />
        ))}
      </div>
    </div>
  );
}
