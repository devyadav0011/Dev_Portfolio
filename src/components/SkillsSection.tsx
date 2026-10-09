'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { 
  Layout, 
  Server, 
  Cpu, 
  Terminal, 
  Users, 
  Sparkles 
} from 'lucide-react';

export default function SkillsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-4 h-4 text-rose-400" />;
      case 'Server':
        return <Server className="w-4 h-4 text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'Users':
        return <Users className="w-4 h-4 text-purple-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#e50914]" />;
    }
  };

  const currentCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills-section" className="relative my-16 sm:my-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-8 text-left">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#e50914] bg-[#e50914]/10 border border-[#e50914]/30">
          Core Competencies &bull; Genre Directory
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
          Technical Toolbox &amp; Capabilities
        </h2>
        <p className="mt-1 text-sm text-neutral-400 max-w-xl">
          Technologies and tools I use to build scalable web products, train AI pipelines, and coordinate tech communities.
        </p>
      </div>

      {/* Category Tabs (Streaming Channels) */}
      <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-3 mb-6">
        {SKILL_CATEGORIES.map((cat, idx) => {
          const isActive = activeCategoryIndex === idx;
          return (
            <button
              key={cat.title}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-[#e50914] text-white shadow-[0_0_20px_rgba(229,9,20,0.4)]'
                  : 'bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/5'
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Skills Display Box */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0f111a] border border-white/10 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>{currentCategory.title}</span>
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              {currentCategory.description}
            </p>
          </div>
          <span className="text-xs font-semibold text-[#e50914] bg-[#e50914]/10 px-3 py-1 rounded-full w-fit">
            {currentCategory.skills.length} Technologies
          </span>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentCategory.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-[#e50914]/30 transition-all flex flex-col justify-between group"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-bold text-white group-hover:text-[#ff3b4b] transition-colors">
                  {skill.name}
                </span>
                {skill.popular && (
                  <span className="text-[9px] font-black uppercase text-[#e50914] bg-[#e50914]/10 px-1.5 py-0.5 rounded">
                    Core
                  </span>
                )}
              </div>

              <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="text-neutral-500 font-medium">Proficiency:</span>
                <span className="text-neutral-300 font-semibold">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
