'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/context/PortfolioContext';
import { 
  X, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Code, 
  Target 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/icons/BrandIcons';

export default function ProjectModal() {
  const { selectedProject, setSelectedProject } = usePortfolio();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, setSelectedProject]);

  if (!selectedProject) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
        onClick={() => setSelectedProject(null)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl my-8 rounded-2xl bg-[#0f1118] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden text-left"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-[#e50914] text-white border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#e50914]"
            aria-label="Close Project Details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Hero Preview */}
          <div className="relative w-full h-[220px] sm:h-[300px] bg-neutral-900">
            <Image
              src={selectedProject.backdrop || selectedProject.thumbnail}
              alt={selectedProject.title}
              fill
              priority
              className="object-cover object-center"
            />
            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1118] via-[#0f1118]/40 to-black/20" />

            {/* Overlaid Header Info */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white bg-[#e50914] uppercase tracking-wider">
                  {selectedProject.badge || selectedProject.category}
                </span>
                <span className="text-xs font-semibold text-neutral-300">
                  {selectedProject.matchScore}
                </span>
                <span className="text-neutral-500">•</span>
                <span className="text-xs text-neutral-400 font-medium">
                  {selectedProject.status}
                </span>
              </div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {selectedProject.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 line-clamp-1">
                {selectedProject.tagline}
              </p>
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="px-6 py-4 bg-[#141722] border-y border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e50914] hover:bg-[#ff1f29] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(229,9,20,0.4)]"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Visit Live Website</span>
                </a>
              ) : null}

              {selectedProject.githubUrl ? (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-colors border border-white/15"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              ) : null}

              {selectedProject.linkedinUrl ? (
                <a
                  href={selectedProject.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-[#0077b5] border border-[#0077b5]/40 font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>Company LinkedIn</span>
                </a>
              ) : null}
            </div>

            {selectedProject.stats && (
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold text-neutral-400 block">
                  {selectedProject.stats.label}
                </span>
                <span className="text-xs font-bold text-[#e50914]">
                  {selectedProject.stats.value}
                </span>
              </div>
            )}
          </div>

          {/* Body Content */}
          <div className="p-6 space-y-6 max-h-[55vh] overflow-y-auto no-scrollbar">
            {/* Overview & Purpose */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#e50914] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Overview &amp; Purpose</span>
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Problem Solved */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-200 mb-1.5 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-rose-400" />
                <span>The Problem It Solves</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {selectedProject.problemSolved}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-200 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Key Capabilities &amp; Features</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedProject.keyFeatures.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300"
                  >
                    <span className="text-[#e50914] font-bold mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Highlights / Architecture */}
            {selectedProject.technicalHighlights && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-200 mb-2 flex items-center gap-1.5">
                  <Code className="w-3.5 h-3.5 text-blue-400" />
                  <span>Technical &amp; Engineering Decisions</span>
                </h3>
                <div className="space-y-1.5">
                  {selectedProject.technicalHighlights.map((techH, idx) => (
                    <div key={idx} className="text-xs text-neutral-400 flex items-start gap-2">
                      <span className="text-neutral-600 font-mono">0{idx + 1}.</span>
                      <span>{techH}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Founder & Context Notes */}
            {selectedProject.founderNotes && (
              <div className="p-4 rounded-xl bg-[#e50914]/5 border border-[#e50914]/20">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#e50914] mb-1">
                  Builder Notes by Dev Kumar
                </h4>
                <p className="text-xs text-neutral-300 italic">
                  &ldquo;{selectedProject.founderNotes}&rdquo;
                </p>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2.5">
                Technologies &amp; Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md text-xs font-semibold text-neutral-200 bg-white/5 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-4 bg-[#0a0b10] border-t border-white/5 flex items-center justify-between text-xs text-neutral-500">
            <span>Dev Kumar &bull; Portfolio Catalog</span>
            <button
              onClick={() => setSelectedProject(null)}
              className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
