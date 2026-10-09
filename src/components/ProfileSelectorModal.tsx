'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/context/PortfolioContext';
import { PROFILES, ProfileMode } from '@/data/portfolioData';
import { Briefcase, Code2, Users, Check, X, ArrowRight } from 'lucide-react';

export default function ProfileSelectorModal() {
  const { 
    isProfileModalOpen, 
    setIsProfileModalOpen, 
    profileMode, 
    setProfileMode 
  } = usePortfolio();

  if (!isProfileModalOpen) return null;

  const profilesList = Object.values(PROFILES);

  const handleSelect = (mode: ProfileMode) => {
    setProfileMode(mode);
    setIsProfileModalOpen(false);
  };

  const getProfileIcon = (mode: ProfileMode) => {
    switch (mode) {
      case 'recruiter':
        return <Briefcase className="w-8 h-8 text-blue-400" />;
      case 'developer':
        return <Code2 className="w-8 h-8 text-emerald-400" />;
      case 'founder':
        return <Users className="w-8 h-8 text-rose-400" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
        {/* Background glow */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#e50914]/10 blur-[150px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl p-6 sm:p-10 rounded-2xl bg-[#0f1118] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
        >
          {/* Close button */}
          <button
            onClick={() => setIsProfileModalOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close Profile Switcher"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="text-center max-w-lg mx-auto mb-8 sm:mb-10">
            <span className="inline-block px-3 py-1 mb-2 text-[11px] font-bold tracking-widest text-[#e50914] uppercase bg-[#e50914]/10 rounded-full border border-[#e50914]/30">
              Personalized Streaming Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Who is Exploring Dev&apos;s Work?
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              Select your perspective to personalize featured highlights, recommended categories, and navigation shortcuts.
            </p>
          </div>

          {/* 3 Interactive Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {profilesList.map((p) => {
              const isSelected = profileMode === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => handleSelect(p.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelect(p.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  className={`group relative flex flex-col p-6 rounded-xl cursor-pointer text-left transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#181c29] border-2 border-[#e50914] shadow-[0_0_25px_rgba(229,9,20,0.35)] scale-[1.02]'
                      : 'bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Active Selection Badge */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#e50914] text-[10px] font-bold text-white uppercase tracking-wider">
                      <Check className="w-3 h-3" />
                      <span>Active</span>
                    </div>
                  )}

                  {/* Avatar Icon Box */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${p.avatarGradient} shadow-lg group-hover:scale-105 transition-transform`}
                  >
                    {getProfileIcon(p.id)}
                  </div>

                  {/* Profile Title & Target */}
                  <span className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                    {p.avatarBadge} MODE
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 group-hover:text-[#e50914] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs font-medium text-neutral-400 mt-1 mb-4">
                    {p.roleTitle}
                  </p>

                  {/* Summary */}
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4 flex-1">
                    {p.summary}
                  </p>

                  {/* Key Highlights list */}
                  <div className="space-y-1.5 pt-3 border-t border-white/5 mb-5">
                    {p.keyHighlights.slice(0, 2).map((h, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-neutral-400">
                        <span className="text-[#e50914] font-bold">›</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Select button action */}
                  <div className="mt-auto pt-2 flex items-center justify-between text-xs font-bold text-white">
                    <span className="text-[#e50914] group-hover:underline">
                      Enter {p.name.replace(' Mode', '')}
                    </span>
                    <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Footer Action */}
          <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
            <span>You can switch modes anytime via the profile button in the top navigation bar.</span>
            <button
              onClick={() => setIsProfileModalOpen(false)}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors"
            >
              Continue Exploring
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
