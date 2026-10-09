'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { usePortfolio } from '@/context/PortfolioContext';
import SkillsSection from '@/components/SkillsSection';
import EducationTimeline from '@/components/EducationTimeline';
import BeyondKeyboard from '@/components/BeyondKeyboard';
import { FileText, Send } from 'lucide-react';

export default function AboutPage() {
  const { setIsResumeOpen } = usePortfolio();

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-left mb-12">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#e50914] bg-[#e50914]/10 border border-[#e50914]/30">
            About the Creator &bull; Behind the Brand
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Dev Yadav
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mt-2">
            Developer, B.Tech CSE student at FET Agra College, and founder of NIMBLUX.
          </p>
        </div>

        {/* Feature Bio Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-6 sm:p-10 rounded-3xl bg-[#0f111a] border border-white/10 shadow-2xl mb-16">
          {/* Portrait Image (4 cols) */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-[280px] sm:w-[320px] h-[360px] sm:h-[400px] rounded-2xl overflow-hidden border-2 border-[#e50914]/60 shadow-[0_0_40px_rgba(229,9,20,0.3)]">
              <Image
                src={PERSONAL_INFO.portraitPath}
                alt="Dev Yadav portrait"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f111a] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-bold text-white block">DEV YADAV</span>
                <span className="text-[11px] text-neutral-300">
                  FET Agra College &bull; NIMBLUX Founder
                </span>
              </div>
            </div>
          </div>

          {/* Bio Text (8 cols) */}
          <div className="lg:col-span-8 space-y-5 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Building software that solves tangible problems and uniting people who want to create impact.
            </h2>

            <p>
              I am a Computer Science &amp; Engineering student at{' '}
              <strong className="text-white">FET Agra College</strong> (Class of 2025–2029) with a passion for high-craft frontend engineering, AI integrations, and tech community leadership.
            </p>

            <p>
              As the founder of <strong className="text-white">NIMBLUX</strong>, I started with a mission: to create a platform where tier-2 and tier-3 college students can gain exposure to real hackathons, collaborate on ambitious projects, and learn modern software engineering. Under NIMBLUX, I organized the <strong className="text-white">ORVIX Hackathon</strong>, which mobilized over 600 student registrations across institutions.
            </p>

            <p>
              On the engineering front, I enjoy building production web apps like <strong className="text-white">CareerLense</strong>—an AI-powered resume and ATS analysis engine—as well as open-source utilities like the <strong className="text-white">Gemini Watermark Remover</strong>.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e50914] hover:bg-[#ff1e27] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>

              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-colors border border-white/10"
              >
                <Send className="w-4 h-4" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Education Timeline Component */}
        <EducationTimeline />

        {/* Technical Skills Component */}
        <SkillsSection />

        {/* Beyond Keyboard Component */}
        <BeyondKeyboard />
      </div>
    </div>
  );
}
