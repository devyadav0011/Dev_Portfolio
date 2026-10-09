'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/context/PortfolioContext';
import { X } from 'lucide-react';

export default function CinematicIntro() {
  const { showIntro, setShowIntro } = usePortfolio();

  useEffect(() => {
    if (!showIntro) return;

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2800); // auto dismiss smoothly

    return () => clearTimeout(timer);
  }, [showIntro, setShowIntro]);

  if (!showIntro) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#08090c] overflow-hidden"
      >
        {/* Subtle background red flare */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.4, 1.2], opacity: [0, 0.25, 0.15] }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          className="absolute w-[500px] h-[500px] rounded-full bg-[#e50914] blur-[120px] pointer-events-none"
        />

        {/* Skip button in top right */}
        <button
          onClick={() => setShowIntro(false)}
          className="absolute top-6 right-6 z-20 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wider text-neutral-400 uppercase bg-neutral-900/80 hover:bg-neutral-800 hover:text-white rounded-full border border-neutral-800 transition-colors"
          aria-label="Skip Intro"
        >
          <span>Skip Intro</span>
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Central Monogram / Brand Reveal */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Animated Glowing Monogram Box */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0, rotateY: 90 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#ff2a38] via-[#e50914] to-[#800008] p-1 shadow-[0_0_60px_rgba(229,9,20,0.6)]"
          >
            {/* Inner frame */}
            <div className="w-full h-full rounded-[14px] bg-[#0c0d14] flex items-center justify-center relative overflow-hidden">
              {/* Scanline light effect */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.8 }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              />

              {/* DY Monogram code symbol */}
              <div className="flex items-center gap-1">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter">D</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#e50914]">/</span>
                <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter">Y</span>
              </div>
            </div>
          </motion.div>

          {/* Typography reveal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-center"
          >
            <h1 className="text-2xl sm:text-3xl font-black tracking-[0.25em] text-white uppercase">
              DEV <span className="text-[#e50914]">YADAV</span>
            </h1>
            <p className="mt-2 text-xs sm:text-sm font-medium tracking-widest text-neutral-400 uppercase">
              Building Products &bull; Creating Impact
            </p>
          </motion.div>

          {/* Minimal streaming loading bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="h-[2px] mt-6 bg-gradient-to-r from-[#e50914] to-[#ff4d61] rounded-full"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
