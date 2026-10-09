'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { 
  Users, 
  Trophy, 
  Award,
  Zap,
  Globe
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/icons/BrandIcons';

export default function CommunityShowcase() {
  return (
    <section className="relative my-16 sm:my-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#e50914]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Showcase Container */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#141224] via-[#10101b] to-[#0a0a12] border border-white/10 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        {/* Top Header Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff2a38]/15 border border-[#ff2a38]/30 mb-3">
              <Zap className="w-3.5 h-3.5 text-[#ff2a38]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Founder Spotlight &bull; Startup &bull; Community
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              NIMBLUX Ecosystem &amp; ORVIX Hackathon
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-2xl">
              Founded and spearheaded by Dev Yadav to bridge tier-2/3 college students with real-world developer opportunities, hackathons, and high-energy collaborative building.
            </p>
          </div>

          {/* Quick External Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.nimbluxWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#e50914] hover:bg-[#ff1e27] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(229,9,20,0.3)]"
            >
              <Globe className="w-4 h-4" />
              <span>nimblux.xyz</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.nimbluxLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-200 hover:text-white transition-colors border border-white/10"
              title="NIMBLUX LinkedIn Page"
              aria-label="NIMBLUX LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.socials.nimbluxGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-neutral-200 hover:text-white transition-colors border border-white/10"
              title="NIMBLUX GitHub Organization"
              aria-label="NIMBLUX GitHub Organization"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Big Milestone Stat Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 relative overflow-hidden group hover:border-[#e50914]/40 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-[#e50914] uppercase tracking-wider">
                COMMUNITY REACH
              </span>
              <Users className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {PERSONAL_INFO.metrics.communityMembers}
            </div>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400">
              Active student developers, creators, and builders learning and collaborating together across NIMBLUX platforms.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 relative overflow-hidden group hover:border-purple-500/40 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider">
                FLAGSHIP HACKATHON
              </span>
              <Trophy className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {PERSONAL_INFO.metrics.hackathonRegistrations}
            </div>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400">
              Registrations for the ORVIX Hackathon, mobilizing students to build innovative tech solutions under time pressure.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 relative overflow-hidden group hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                CAMPUS LEADERSHIP
              </span>
              <Award className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Multi-Campus
            </div>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400">
              Campus Ambassador network actively representing and scaling student innovation across regional educational institutions.
            </p>
          </div>
        </div>

        {/* 3 Pillars of Community Impact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e50914]" />
              <span>ORVIX Hackathon</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Curated problem tracks, mentor check-ins, keynote sessions, and live evaluation rounds encouraging hands-on engineering rather than just theory.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span>Campus Ambassador Network</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Empowering motivated student representatives with leadership experience, event management training, and peer-to-peer outreach skills.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Builder Culture &amp; Projects</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Organizing code jams, open-source contributor guides, and project incubations that transition participants from learners to builders.
            </p>
          </div>
        </div>

        {/* View Full Community Page CTA */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            Want to partner with NIMBLUX for student hackathons, workshops, or developer initiatives?
          </p>
          <Link
            href="/community"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/15"
          >
            Explore Complete Community Page &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
