'use client';

import React from 'react';
import Link from 'next/link';
import { Film, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 bg-[#08090c] text-center">
      <div className="relative max-w-lg p-8 sm:p-12 rounded-3xl bg-[#0f1118] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Ambient red flare */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#e50914]/20 blur-[70px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 shadow-inner">
            <Film className="w-8 h-8 text-[#e50914]" />
          </div>

          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#e50914] bg-[#e50914]/10 border border-[#e50914]/30 mb-3">
            Error Code: 404_TITLE_NOT_FOUND
          </span>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Lost in the Catalog?
          </h1>

          <p className="mt-3 text-sm text-neutral-400 leading-relaxed max-w-sm">
            The page or project title you requested isn&apos;t currently available in Dev Kumar&apos;s streaming directory.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-[#e50914] hover:bg-[#ff1e27] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(229,9,20,0.4)]"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs uppercase tracking-wider transition-colors border border-white/10"
            >
              <Search className="w-4 h-4" />
              <span>Browse Catalog</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
