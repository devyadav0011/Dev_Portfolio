'use client';

import React from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { STREAMING_GENRES } from '@/data/portfolioData';
import { Search, X, Sparkles, SlidersHorizontal } from 'lucide-react';

interface SearchAndFiltersProps {
  totalCount: number;
  filteredCount: number;
}

export default function SearchAndFilters({ totalCount, filteredCount }: SearchAndFiltersProps) {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    featuredOnly,
    setFeaturedOnly,
  } = usePortfolio();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="p-4 sm:p-6 rounded-2xl bg-[#10131d] border border-white/10 shadow-lg">
        {/* Top Bar: Search Input & Featured Toggle */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Live Search Input */}
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, technology, or keywords (e.g., Python, Next.js, ATS, CV)..."
              className="w-full pl-10 pr-10 py-2.5 bg-neutral-900/90 text-white placeholder-neutral-500 rounded-xl border border-neutral-700/80 focus:outline-none focus:border-[#e50914] focus:ring-1 focus:ring-[#e50914] text-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Featured Toggle Switch */}
          <div className="flex items-center gap-3 justify-between md:justify-end">
            <button
              onClick={() => setFeaturedOnly(!featuredOnly)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-bold transition-all focus:outline-none ${
                featuredOnly
                  ? 'bg-[#e50914]/20 border-[#e50914] text-white shadow-[0_0_15px_rgba(229,9,20,0.3)]'
                  : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white hover:bg-white/10'
              }`}
              aria-pressed={featuredOnly}
            >
              <Sparkles className={`w-3.5 h-3.5 ${featuredOnly ? 'text-[#e50914]' : 'text-neutral-400'}`} />
              <span>Featured Only</span>
            </button>

            {/* Total Results Count */}
            <div className="text-xs text-neutral-400 font-medium">
              Showing <span className="text-white font-bold">{filteredCount}</span> of {totalCount} titles
            </div>
          </div>
        </div>

        {/* Category Genre Pills */}
        <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex-shrink-0 mr-2 flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Category:</span>
          </span>

          {STREAMING_GENRES.map((genre) => {
            const isActive = selectedCategory === genre.id;
            return (
              <button
                key={genre.id}
                onClick={() => setSelectedCategory(genre.id)}
                className={`flex-shrink-0 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#e50914] text-white shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/5'
                }`}
              >
                {genre.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
