'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import MilestonesSection from '@/components/MilestonesSection';
import { 
  Users, 
  Trophy, 
  Globe, 
  Sparkles, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/icons/BrandIcons';

export default function CommunityPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e50914]/15 border border-[#e50914]/30 mb-3">
            <Zap className="w-3.5 h-3.5 text-[#e50914]" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Founder Ecosystem &bull; NIMBLUX
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            NIMBLUX Community &amp; ORVIX Hackathon
          </h1>
          <p className="mt-3 text-base sm:text-lg text-neutral-300 max-w-2xl">
            Empowering the next generation of engineers, creators, and innovators through community-driven hackathons and hands-on developer initiatives.
          </p>
        </div>

        {/* Big Impact Numbers Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10 text-left">
            <div className="text-4xl font-black text-white mb-1">950+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#e50914]">
              Community Members
            </div>
            <p className="mt-2 text-xs text-neutral-400">
              Active student developers collaborating across Discord, Telegram, and online events.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10 text-left">
            <div className="text-4xl font-black text-white mb-1">600+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-purple-400">
              ORVIX Hackathon Regs
            </div>
            <p className="mt-2 text-xs text-neutral-400">
              Students participated in solving real problems during our flagship hackathon.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10 text-left">
            <div className="text-4xl font-black text-white mb-1">10+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Campuses Engaged
            </div>
            <p className="mt-2 text-xs text-neutral-400">
              Multi-college ambassador network connecting tier-2/3 student innovators.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10 text-left">
            <div className="text-4xl font-black text-white mb-1">100%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Student Focused
            </div>
            <p className="mt-2 text-xs text-neutral-400">
              Zero fluff, zero paywalls. Focused entirely on project shipping and peer mentorship.
            </p>
          </div>
        </div>

        {/* The NIMBLUX Story */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#12131d] to-[#0a0b12] border border-white/10 mb-16 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Why I Founded NIMBLUX
          </h2>
          <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p>
              When I entered engineering college, I noticed a distinct divide: many motivated students had high potential but had never participated in a hackathon, had never pushed code to GitHub in teams, and didn&apos;t know how to deploy full-stack applications.
            </p>
            <p>
              I founded <strong className="text-white">NIMBLUX</strong> to be the launchpad. We started organizing interactive learning sessions, live code walkthroughs, and problem-solving workshops. This culminated in our flagship event: the <strong className="text-white">ORVIX Hackathon</strong>.
            </p>
            <p>
              With over 600 registrations, ORVIX proved that when you give students clear problem statements, high-energy community support, and structured mentorship, they build incredible things.
            </p>
          </div>

          {/* Quick links to NIMBLUX */}
          <div className="pt-4 flex flex-wrap gap-3">
            <a
              href={PERSONAL_INFO.socials.nimbluxWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e50914] hover:bg-[#ff1e27] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              <Globe className="w-4 h-4" />
              <span>Visit Official Website (nimblux.xyz)</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.nimbluxLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-colors border border-white/10"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>NIMBLUX on LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.nimbluxGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-colors border border-white/10"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Org Dashboard</span>
            </a>
          </div>
        </div>

        {/* Community Initiatives Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#e50914]" />
              <span>ORVIX Hackathon</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Organized with custom problem tracks spanning AI, Web3, FinTech, and Student Utilities. Provided real-time technical mentorship and live judging.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span>Campus Ambassadors</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Student ambassadors leading local developer pods, hosting watch parties for tech keynotes, and coordinating regional hackathon teams.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span>Workshops &amp; Clinics</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Peer-led bootcamps on Git workflows, React &amp; Next.js essentials, API integration, and resume building to help students prepare for internships.
            </p>
          </div>
        </div>

        {/* Milestones Component */}
        <MilestonesSection />

        {/* Contact CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-[#0f111a] border border-white/10 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white">
            Want to collaborate with NIMBLUX?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2 mb-6">
            We are always open to partner with collegiate clubs, student developer communities, and hackathon sponsors.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e50914] hover:bg-[#ff1e27] text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            <span>Reach Out to Dev Yadav</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
