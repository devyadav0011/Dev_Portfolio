'use client';

import React from 'react';
import Link from 'next/link';
import { usePortfolio } from '@/context/PortfolioContext';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { 
  Mail, 
  RotateCcw, 
  Sparkles, 
  Globe, 
  FileText 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/icons/BrandIcons';

export default function Footer() {
  const { 
    setShowIntro, 
    setProfileMode, 
    setIsProfileModalOpen, 
    setIsResumeOpen 
  } = usePortfolio();

  return (
    <footer className="relative bg-[#06070a] border-t border-white/10 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Reach Out Line (Netflix Style) */}
        <div className="mb-10 pb-6 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-white">
              Questions or collaboration ideas? Reach out directly.
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">
              Email:{' '}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-neutral-300 hover:text-[#e50914] transition-colors underline"
              >
                {PERSONAL_INFO.email}
              </a>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setShowIntro(true);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors border border-white/5"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#e50914]" />
              <span>Replay Intro</span>
            </button>

            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors border border-white/5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#e50914]" />
              <span>Switch Profile</span>
            </button>
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Explore */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Explore Catalog
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-colors">
                  Cinematic Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white hover:underline transition-colors">
                  Complete Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">
                  About Dev Yadav
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white hover:underline transition-colors">
                  NIMBLUX Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Profile Perspectives */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Viewer Modes
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setProfileMode('recruiter')}
                  className="hover:text-white hover:underline text-left"
                >
                  Recruiter Mode (Hiring)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setProfileMode('developer')}
                  className="hover:text-white hover:underline text-left"
                >
                  Developer Mode (Code)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setProfileMode('founder')}
                  className="hover:text-white hover:underline text-left"
                >
                  Founder Mode (NIMBLUX)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="text-[#e50914] font-semibold hover:underline flex items-center gap-1"
                >
                  <FileText className="w-3 h-3" />
                  <span>Resume Viewer</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Initiatives */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Initiatives &amp; Ventures
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={PERSONAL_INFO.socials.nimbluxWeb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  NIMBLUX Platform
                </a>
              </li>
              <li>
                <a
                  href="https://careerlense.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  CareerLense AI
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socials.nimbluxLinkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  ORVIX Hackathon
                </a>
              </li>
              <li>
                <span className="text-neutral-500">FET Agra College (2025–29)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Channels */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              Connect Online
            </h4>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white hover:text-[#e50914] transition-colors"
                title="GitHub"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white hover:text-blue-400 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white hover:text-[#e50914] transition-colors"
                title="Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.nimbluxWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white hover:text-emerald-400 transition-colors"
                title="NIMBLUX"
                aria-label="NIMBLUX"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-neutral-500 leading-relaxed mt-2">
              Based in Agra, India. Building products with national and global reach.
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#e50914] flex items-center justify-center text-white font-black text-[10px]">
              DY
            </div>
            <span>
              &copy; {new Date().getFullYear()} Dev Yadav. DEV YADAV &bull; Building Products &amp; Communities.
            </span>
          </div>

          <p className="text-center sm:text-right text-[10px] text-neutral-600">
            Engineered with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion. Production ready for Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}
