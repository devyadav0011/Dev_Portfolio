'use client';

import React from 'react';
import { EDUCATION_INFO } from '@/data/portfolioData';
import { BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function EducationTimeline() {
  return (
    <section className="relative my-16 sm:my-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-left">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#e50914] bg-[#e50914]/10 border border-[#e50914]/30">
          Academic Anchor &bull; Learning Journey
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
          Education &amp; Engineering Foundation
        </h2>
        <p className="mt-1 text-sm text-neutral-400 max-w-xl">
          Formal academic training at FET Agra College combined with high-tempo practical software development.
        </p>
      </div>

      {/* Main Card */}
      <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#0f111a] border border-white/10 relative overflow-hidden shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left info (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#e50914] text-white text-xs font-bold uppercase tracking-wider">
                Current Program
              </span>
              <span className="text-xs font-semibold text-neutral-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                <span>{EDUCATION_INFO.timeline}</span>
              </span>
              <span className="text-xs text-neutral-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>{EDUCATION_INFO.location}</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {EDUCATION_INFO.institution}
            </h3>
            <p className="text-base sm:text-lg font-semibold text-neutral-200">
              {EDUCATION_INFO.degree} &bull; {EDUCATION_INFO.major}
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed">
              {EDUCATION_INFO.description}
            </p>

            {/* Campus Activities */}
            <div className="pt-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#e50914] mb-3">
                Key Campus &amp; Leadership Initiatives:
              </h4>
              <div className="space-y-2">
                {EDUCATION_INFO.campusActivities.map((act, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#e50914] flex-shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right coursework grid (5 cols) */}
          <div className="lg:col-span-5 p-6 rounded-xl bg-white/[0.03] border border-white/5 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-200 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-neutral-400" />
              <span>Core Coursework &amp; Focus Areas</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {EDUCATION_INFO.coreSubjects.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs font-medium text-neutral-300"
                >
                  <span className="text-[#e50914] font-bold mr-1.5">›</span>
                  {sub}
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-lg bg-[#e50914]/5 border border-[#e50914]/20 text-[11px] text-neutral-300">
              <span className="font-bold text-white block mb-0.5">Philosophy:</span>
              Theory provides the bedrock, but building real tools for real people turns concepts into long-term mastery.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
