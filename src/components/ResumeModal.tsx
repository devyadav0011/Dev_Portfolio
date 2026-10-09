'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/context/PortfolioContext';
import { PERSONAL_INFO, EDUCATION_INFO } from '@/data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  X, 
  Download, 
  GraduationCap, 
  Briefcase, 
  Code, 
  FileText 
} from 'lucide-react';

export default function ResumeModal() {
  const { isResumeOpen, setIsResumeOpen } = usePortfolio();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeOpen(false);
      }
    };
    if (isResumeOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isResumeOpen, setIsResumeOpen]);

  if (!isResumeOpen) return null;

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#e50914', '#ffffff', '#22c55e']
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
        onClick={() => setIsResumeOpen(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl my-8 rounded-2xl bg-[#0f1118] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden text-left"
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-title"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#141722] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#e50914]/20 text-[#e50914]">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h2 id="resume-title" className="text-base font-bold text-white">
                  Dev Kumar &bull; Official Resume
                </h2>
                <p className="text-[11px] text-neutral-400">
                  B.Tech CSE (2025–2029) &bull; Developer &bull; NIMBLUX Founder
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Direct PDF Download Button */}
              <a
                href="/dev-yadav-resume.pdf"
                download="Dev_Kumar_Resume.pdf"
                onClick={handleDownload}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e50914] hover:bg-[#ff1e27] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(229,9,20,0.4)]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              {/* Close Button */}
              <button
                onClick={() => setIsResumeOpen(false)}
                className="p-2 rounded-lg text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close Resume Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Formatted Resume Body */}
          <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto no-scrollbar space-y-8 bg-[#0b0c10] text-neutral-200">
            {/* Resume Top Contact Banner */}
            <div className="border-b border-white/10 pb-6">
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                DEV KUMAR
              </h1>
              <p className="text-sm font-semibold text-[#e50914] mt-1">
                Software Engineer &bull; B.Tech CSE Student &bull; Founder of NIMBLUX
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-400">
                <span>Agra, Uttar Pradesh, India</span>
                <span>•</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-neutral-300 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:underline">
                  github.com/devyadav0011
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:underline">
                  linkedin.com/in/devxcoder
                </a>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#e50914] mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h3>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h4 className="text-sm font-bold text-white">
                    {EDUCATION_INFO.institution}
                  </h4>
                  <span className="text-xs text-neutral-400 font-medium">
                    {EDUCATION_INFO.timeline} &bull; {EDUCATION_INFO.location}
                  </span>
                </div>
                <p className="text-xs font-semibold text-neutral-300 mt-1">
                  {EDUCATION_INFO.degree} in {EDUCATION_INFO.major}
                </p>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Focus: Data Structures, Algorithms, Software Engineering, Web Systems, AI. Founder of NIMBLUX and organizer of ORVIX Hackathon.
                </p>
              </div>
            </div>

            {/* Leadership & Founder Experience */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#e50914] mb-3 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" />
                <span>Leadership &amp; Founder Experience</span>
              </h3>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h4 className="text-sm font-bold text-white">
                    Founder &bull; NIMBLUX (nimblux.xyz)
                  </h4>
                  <span className="text-xs text-neutral-400">2024 – Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300">
                  <li>Built and grew an active student and developer community to <strong>5000+ members</strong> across digital platforms.</li>
                  <li>Spearheaded and directed the <strong>ORVIX Hackathon</strong>, receiving <strong>600+ teams</strong> from multiple campuses across India.</li>
                  <li>Established campus ambassador programs and conducted tech bootcamps on Web Development, Git, and Project Building.</li>
                </ul>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#e50914] mb-3 flex items-center gap-1.5">
                <Code className="w-4 h-4" />
                <span>Featured Technical Projects</span>
              </h3>
              <div className="space-y-4">
                {/* CareerLense */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="text-sm font-bold text-white">
                      CareerLense &bull; AI Resume Analyzer &amp; ATS Platform
                    </h4>
                    <span className="text-xs text-[#e50914] font-semibold">careerlense.xyz</span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Engineered an AI-powered career platform providing ATS grading, line-by-line improvement suggestions, and resume building.
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-2 font-mono">
                    Stack: Next.js App Router, TypeScript, Tailwind CSS, OpenAI LLM API, Node.js, PostgreSQL
                  </p>
                </div>

                {/* Gemini Watermark Remover */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="text-sm font-bold text-white">
                      Gemini Watermark Remover &bull; Open-Source Computer Vision
                    </h4>
                    <span className="text-xs text-emerald-400 font-semibold">GitHub Repository</span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Created an open-source Python tool using OpenCV inpainting algorithms to automatically remove corner watermarks from AI-generated media.
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-2 font-mono">
                    Stack: Python, OpenCV, NumPy, Image Processing, Automated Inpainting
                  </p>
                </div>

                {/* WallPC */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="text-sm font-bold text-white">
                      WallPC / Nimwall &bull; 4K Desktop Wallpaper Platform
                    </h4>
                    <span className="text-xs text-amber-400 font-semibold">Web Product</span>
                  </div>
                  <p className="text-xs text-neutral-300 mt-1">
                    Curated ultra-HD wallpaper engine with zero-ad browsing, multi-monitor aspect ratio filters, and clean gallery UI.
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-2 font-mono">
                    Stack: React, Next.js, Tailwind CSS, REST APIs, Image Optimization
                  </p>
                </div>
              </div>
            </div>

            {/* Core Technical Skills */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#e50914] mb-3">
                Technical Skills &amp; Toolbox
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <span className="font-bold text-white block mb-1">Languages &amp; Frontend:</span>
                  <span className="text-neutral-400">TypeScript, JavaScript, Python, React 19, Next.js App Router, Tailwind CSS, Framer Motion, HTML5</span>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <span className="font-bold text-white block mb-1">Backend &amp; Database:</span>
                  <span className="text-neutral-400">Node.js, Express, Python, Next.js API Routes, PostgreSQL, MongoDB, REST APIs</span>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <span className="font-bold text-white block mb-1">AI &amp; Computer Vision:</span>
                  <span className="text-neutral-400">OpenAI API, Gemini API, OpenCV Inpainting, NLP, Speech Recognition</span>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <span className="font-bold text-white block mb-1">Tools &amp; Deployment:</span>
                  <span className="text-neutral-400">Git, GitHub, Vercel, VS Code, Postman, Linux CLI, Community Operations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-[#141722] border-t border-white/10 flex items-center justify-between">
            <span className="text-xs text-neutral-400">
              PDF asset verified at <code className="text-white font-mono">/dev-yadav-resume.pdf</code>
            </span>
            <button
              onClick={() => setIsResumeOpen(false)}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors"
            >
              Close Resume
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
