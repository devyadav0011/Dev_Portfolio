'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Project } from '@/data/portfolioData';
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface ContentRowProps {
  title: string;
  subtitle?: string;
  projects: Project[];
  viewAllHref?: string;
  aspectRatio?: 'landscape' | 'portrait';
  badge?: string;
}

export default function ContentRow({
  title,
  subtitle,
  projects,
  viewAllHref,
  aspectRatio = 'landscape',
  badge,
}: ContentRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [projects]);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { clientWidth } = rowRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!projects || projects.length === 0) return null;

  return (
    <section className="relative my-8 sm:my-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto group/row">
      {/* Row Header */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            {badge && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#e50914] bg-[#e50914]/10 border border-[#e50914]/30">
                {badge}
              </span>
            )}
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <span>{title}</span>
            </h2>
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm text-neutral-400 font-medium">
              {subtitle}
            </p>
          )}
        </div>

        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="flex items-center gap-1 text-xs sm:text-sm font-bold text-neutral-400 hover:text-[#e50914] transition-colors focus:outline-none focus:ring-1 focus:ring-[#e50914] rounded px-1.5 py-0.5"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>

      {/* Row Carousel Area */}
      <div className="relative">
        {/* Left Scroll Navigation Button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-30 w-10 h-10 items-center justify-center rounded-full bg-black/80 hover:bg-[#e50914] text-white border border-white/20 shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#e50914]"
            aria-label={`Scroll ${title} left`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Scrollable Container */}
        <div
          ref={rowRef}
          onScroll={checkScroll}
          className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              aspectRatio={aspectRatio}
            />
          ))}
        </div>

        {/* Right Scroll Navigation Button */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-30 w-10 h-10 items-center justify-center rounded-full bg-black/80 hover:bg-[#e50914] text-white border border-white/20 shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#e50914]"
            aria-label={`Scroll ${title} right`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </section>
  );
}
