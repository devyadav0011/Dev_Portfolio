'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePortfolio } from '@/context/PortfolioContext';
import { PERSONAL_INFO, PROFILES } from '@/data/portfolioData';
import { 
  Play, 
  FileText, 
  Send, 
  ChevronDown, 
  Sparkles 
} from 'lucide-react';

export default function HeroBanner() {
  const { profileMode, setIsResumeOpen, openProjectById } = usePortfolio();
  const currentProfile = PROFILES[profileMode];

  const scrollToRows = () => {
    const catalogElement = document.getElementById('catalog-section');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact-section');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Layer: Atmospheric Tech Lighting & Gradients */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

        {/* Ambient colored lighting orbs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-[#e50914]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

        {/* Cinematic bottom vignette fade into content rows */}
        <div className="absolute inset-0 hero-gradient-overlay pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand & Hero Messaging (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Streaming Platform Style Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#e50914] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                {currentProfile.name} Active
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs font-medium text-neutral-400">
                FET Agra College &bull; NIMBLUX
              </span>
            </motion.div>

            {/* Main Dramatic Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.08]"
            >
              Building Products.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff334b] via-[#e50914] to-[#f43f5e]">
                Creating Impact.
              </span>
              <span className="block text-neutral-300 text-3xl sm:text-4xl md:text-5xl font-extrabold mt-1">
                Exploring What&apos;s Next.
              </span>
            </motion.h1>

            {/* Supporting Bio Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed"
            >
              {PERSONAL_INFO.supportingText}
            </motion.p>

            {/* Dynamic Profile-Tailored Highlight Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-3 w-full max-w-xl"
            >
              <div className="p-2 rounded-lg bg-[#e50914]/20 text-[#e50914] flex-shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-sm text-neutral-300">
                <strong className="text-white font-semibold">
                  {currentProfile.avatarBadge} SPOTLIGHT:
                </strong>{' '}
                {currentProfile.summary}
              </p>
            </motion.div>

            {/* Prominent Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <button
                onClick={scrollToRows}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl red-glow-btn text-white font-bold text-sm tracking-wide transition-all w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#e50914]"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Explore My Work</span>
              </button>

              {/* Resume CTA */}
              <button
                onClick={() => setIsResumeOpen(true)}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 hover:border-white/30 transition-all w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#e50914]"
              >
                <FileText className="w-4 h-4 text-[#e50914]" />
                <span>My Resume</span>
              </button>

              {/* Connect CTA */}
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-sm border border-neutral-700/60 transition-all w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#e50914]"
              >
                <Send className="w-3.5 h-3.5 text-neutral-400" />
                <span>Let&apos;s Connect</span>
              </button>
            </motion.div>

            {/* Real Metrics Counter Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-xl"
            >
              <div>
                <p className="text-xl sm:text-2xl font-black text-white">
                  {PERSONAL_INFO.metrics.communityMembers}
                </p>
                <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider">
                  NIMBLUX Members
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white">
                  {PERSONAL_INFO.metrics.hackathonRegistrations}
                </p>
                <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider">
                  ORVIX Hackathon
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white">
                  {PERSONAL_INFO.metrics.productsBuilt}
                </p>
                <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider">
                  Products Shipped
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white">2025–29</p>
                <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wider">
                  FET Agra CSE
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-End Portrait & Streaming Identity Card (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-[380px]"
            >
              {/* Outer Glowing Frame */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-[#e50914]/80 via-white/10 to-transparent shadow-[0_0_50px_rgba(229,9,20,0.3)]">
                <div className="relative rounded-[14px] bg-[#0d0f17] overflow-hidden">
                  {/* Portrait Image Container */}
                  <div className="relative h-[400px] sm:h-[440px] w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={PERSONAL_INFO.portraitPath}
                      alt="Dev Kumar - Developer and NIMBLUX Founder"
                      fill
                      priority
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay for text readability at bottom of portrait */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-transparent to-black/20" />

                    {/* Top Status Pill */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                        Available to Build
                      </span>
                    </div>

                    {/* Top Right Streaming Badge */}
                    <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md bg-[#e50914] text-white text-[10px] font-black uppercase tracking-wider">
                      DEV KUMAR
                    </div>
                  </div>

                  {/* Card Bottom Meta Box */}
                  <div className="p-5 bg-[#0d0f17] border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white">Dev Kumar</h3>
                        <p className="text-xs text-neutral-400">
                          B.Tech CSE &bull; Founder of NIMBLUX
                        </p>
                      </div>
                      <button
                        onClick={() => openProjectById(currentProfile.spotlightProjectId)}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#e50914] text-white text-xs font-semibold transition-colors"
                      >
                        Spotlight
                      </button>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                      <span>FET Agra College</span>
                      <span className="text-neutral-500">•</span>
                      <span className="text-[#e50914] font-semibold">5000+ Community</span>
                      <span className="text-neutral-500">•</span>
                      <span>Agra, India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Background Glow Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e50914]/20 rounded-full blur-2xl pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator at bottom */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <button
            onClick={scrollToRows}
            className="flex flex-col items-center gap-1.5 text-neutral-500 hover:text-white transition-colors group focus:outline-none"
            aria-label="Scroll to Project Catalog"
          >
            <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 group-hover:text-neutral-300">
              Browse Streaming Catalog
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-5 h-5 text-[#e50914]" />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
}
