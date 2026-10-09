'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO, EDUCATION_INFO } from '@/data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  Download, 
  Printer, 
  ArrowLeft, 
  GraduationCap, 
  Briefcase, 
  Code, 
  MapPin 
} from 'lucide-react';

export default function ResumePage() {
  const handleDownload = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#e50914', '#ffffff', '#22c55e']
      });
    } catch {
      // safe fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10 print:hidden">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Streaming Home</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors border border-white/10"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            {/* Direct download linking to the actual PDF file */}
            <a
              href="/dev-yadav-resume.pdf"
              download="Dev_Kumar_Resume.pdf"
              onClick={handleDownload}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e50914] hover:bg-[#ff1e27] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Paper Resume Container */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0d0f17] border border-white/10 shadow-2xl text-neutral-200 space-y-8 print:bg-white print:text-black print:p-0 print:border-none print:shadow-none">
          {/* Header */}
          <div className="border-b border-white/10 print:border-neutral-300 pb-6">
            <h1 className="text-3xl sm:text-4xl font-black text-white print:text-black tracking-tight">
              DEV KUMAR
            </h1>
            <p className="text-sm sm:text-base font-bold text-[#e50914] mt-1 print:text-red-700">
              Software Engineer &bull; B.Tech CSE &bull; Founder of NIMBLUX
            </p>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-400 print:text-neutral-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-neutral-500" />
                <span>Agra, Uttar Pradesh, India</span>
              </span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-neutral-300 print:text-black hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="text-neutral-300 print:text-black hover:underline">
                github.com/devyadav0011
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-300 print:text-black hover:underline">
                linkedin.com/in/devyadav0011
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#e50914] print:text-red-700 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 print:border-neutral-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-sm font-bold text-white print:text-black">
                  {EDUCATION_INFO.institution}
                </h3>
                <span className="text-xs text-neutral-400 print:text-neutral-600 font-medium">
                  {EDUCATION_INFO.timeline} &bull; {EDUCATION_INFO.location}
                </span>
              </div>
              <p className="text-xs font-semibold text-neutral-300 print:text-neutral-700 mt-1">
                {EDUCATION_INFO.degree} in {EDUCATION_INFO.major}
              </p>
              <p className="text-xs text-neutral-400 print:text-neutral-600 mt-2 leading-relaxed">
                Core coursework: Data Structures, Algorithms, Software Engineering, Web Systems Architecture, AI Fundamentals.
              </p>
            </div>
          </div>

          {/* Leadership & Founder Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#e50914] print:text-red-700 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Leadership &amp; Founder Experience</span>
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 print:border-neutral-200 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <h3 className="text-sm font-bold text-white print:text-black">
                  Founder &bull; NIMBLUX (nimblux.xyz)
                </h3>
                <span className="text-xs text-neutral-400 print:text-neutral-600">2024 – Present</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-300 print:text-neutral-800 leading-relaxed">
                <li>
                  Founded and scaled an active student developer community to <strong>5000+ members</strong> across digital channels.
                </li>
                <li>
                  Conceptualized, planned, and organized the <strong>ORVIX Hackathon</strong>, achieving <strong>600+ teams</strong>.
                </li>
                <li>
                  Created cross-campus ambassador initiatives, hosting peer code clinics, Git workshops, and project showcases.
                </li>
              </ul>
            </div>
          </div>

          {/* Featured Technical Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#e50914] print:text-red-700 mb-3 flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Featured Engineering Projects</span>
            </h2>
            <div className="space-y-4">
              {/* CareerLense */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 print:border-neutral-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-sm font-bold text-white print:text-black">
                    CareerLense &bull; AI Resume Analyzer &amp; ATS Grading SaaS
                  </h3>
                  <a
                    href="https://careerlense.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#e50914] print:text-red-700 font-semibold hover:underline"
                  >
                    careerlense.xyz
                  </a>
                </div>
                <p className="text-xs text-neutral-300 print:text-neutral-700 mt-1">
                  Built a career platform with resume builder, automated ATS analyzer, AI improvement suggestions, and job matching.
                </p>
                <p className="text-[11px] text-neutral-400 print:text-neutral-600 mt-2 font-mono">
                  Stack: Next.js App Router, TypeScript, Tailwind CSS, OpenAI LLM API, Node.js, PostgreSQL
                </p>
              </div>

              {/* Gemini Watermark Remover */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 print:border-neutral-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-sm font-bold text-white print:text-black">
                    Gemini Watermark Remover &bull; Open-Source Computer Vision
                  </h3>
                  <a
                    href="https://github.com/devyadav0011/gemini-watermark-remover"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 print:text-emerald-700 font-semibold hover:underline"
                  >
                    GitHub Repo
                  </a>
                </div>
                <p className="text-xs text-neutral-300 print:text-neutral-700 mt-1">
                  Open-source Python utility automating watermark coordinate detection and pixel inpainting for AI-generated visuals.
                </p>
                <p className="text-[11px] text-neutral-400 print:text-neutral-600 mt-2 font-mono">
                  Stack: Python, OpenCV, NumPy, Computer Vision, Inpainting
                </p>
              </div>

              {/* WallPC / Nimwall */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 print:border-neutral-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <h3 className="text-sm font-bold text-white print:text-black">
                    WallPC / Nimwall &bull; Curated 4K Wallpaper Discovery
                  </h3>
                  <a
                    href="https://github.com/devyadav0011/wallpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-amber-400 print:text-amber-700 font-semibold hover:underline"
                  >
                    GitHub Repo
                  </a>
                </div>
                <p className="text-xs text-neutral-300 print:text-neutral-700 mt-1">
                  Wallpaper discovery engine focused on ultra-HD 4K resolutions and multi-monitor aspect ratios with zero ads.
                </p>
                <p className="text-[11px] text-neutral-400 print:text-neutral-600 mt-2 font-mono">
                  Stack: React, Next.js, Tailwind CSS, REST APIs, CDN Image Optimization
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#e50914] print:text-red-700 mb-3">
              Technical Toolbox
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 print:border-neutral-200">
                <span className="font-bold text-white print:text-black block mb-0.5">Frontend:</span>
                <span className="text-neutral-400 print:text-neutral-700">TypeScript, React, Next.js (App Router), Tailwind CSS, Framer Motion, HTML5</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 print:border-neutral-200">
                <span className="font-bold text-white print:text-black block mb-0.5">Backend &amp; DB:</span>
                <span className="text-neutral-400 print:text-neutral-700">Node.js, Express, Python, Next.js API Routes, PostgreSQL, MongoDB, REST</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 print:border-neutral-200">
                <span className="font-bold text-white print:text-black block mb-0.5">AI &amp; Computer Vision:</span>
                <span className="text-neutral-400 print:text-neutral-700">OpenAI API, Gemini API, OpenCV, Inpainting, NLP, Speech Recognition</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 print:border-neutral-200">
                <span className="font-bold text-white print:text-black block mb-0.5">Tools &amp; Leadership:</span>
                <span className="text-neutral-400 print:text-neutral-700">Git, GitHub, Vercel, VS Code, Community Ops, Event Organizing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
