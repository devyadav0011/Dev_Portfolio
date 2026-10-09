'use client';

import React from 'react';
import { BEYOND_KEYBOARD_ITEMS } from '@/data/portfolioData';
import { Rocket, BookOpen, Sparkles, Compass } from 'lucide-react';

export default function BeyondKeyboard() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-rose-400" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      default:
        return <Compass className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section className="relative my-16 sm:my-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-left">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#e50914] bg-[#e50914]/10 border border-[#e50914]/30">
          Personal Perspectives &bull; Behind the Scenes
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
          Beyond the Keyboard
        </h2>
        <p className="mt-1 text-sm text-neutral-400 max-w-xl">
          What drives my engineering mindset, creative pursuits, and long-term ambition when I step away from code editors.
        </p>
      </div>

      {/* Grid of 4 Interest / Principle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BEYOND_KEYBOARD_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-2xl bg-[#0f111a] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {getIcon(item.icon)}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <span className="text-xs text-[#e50914] font-semibold">
                    {item.tagline}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
