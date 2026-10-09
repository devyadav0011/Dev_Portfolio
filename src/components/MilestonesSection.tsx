'use client';

import React from 'react';
import { MILESTONES } from '@/data/portfolioData';
import { Award, Users, Code, Trophy } from 'lucide-react';

export default function MilestonesSection() {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Community':
        return <Users className="w-5 h-5 text-rose-400" />;
      case 'Hackathon':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case 'Product':
        return <Code className="w-5 h-5 text-blue-400" />;
      default:
        return <Award className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="relative my-16 sm:my-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-left">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#e50914] bg-[#e50914]/10 border border-[#e50914]/30">
          Track Record &bull; Milestones
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
          Achievements &amp; Key Milestones
        </h2>
        <p className="mt-1 text-sm text-neutral-400 max-w-xl">
          Historical milestones achieved through disciplined engineering, community leadership, and product launches.
        </p>
      </div>

      {/* Grid of Milestone Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MILESTONES.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl bg-[#0f111a] border border-white/10 hover:border-[#e50914]/40 hover:shadow-[0_10px_25px_rgba(229,9,20,0.15)] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-neutral-300 bg-white/5 border border-white/10">
                  {item.highlightBadge}
                </span>
                <div className="p-2 rounded-xl bg-white/[0.03]">
                  {getCategoryIcon(item.category)}
                </div>
              </div>

              <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-[#ff2e3e] transition-colors">
                {item.metric}
              </div>

              <h3 className="text-sm font-bold text-neutral-200 mt-2">
                {item.label}
              </h3>
            </div>

            <p className="mt-4 pt-3 border-t border-white/5 text-xs text-neutral-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
