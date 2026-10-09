'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/data/portfolioData';
import { usePortfolio } from '@/context/PortfolioContext';
import ProjectCard from '@/components/ProjectCard';
import SearchAndFilters from '@/components/SearchAndFilters';
import { Film, LayoutGrid, Rows3 } from 'lucide-react';

export default function ProjectsCatalogPage() {
  const { searchQuery, selectedCategory, featuredOnly } = usePortfolio();
  const [viewMode, setViewMode] = useState<'grid' | 'detailed'>('grid');

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesSearch =
      searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || project.categorySlug === selectedCategory;

    const matchesFeatured = !featuredOnly || project.featured;

    return matchesSearch && matchesCategory && matchesFeatured;
  });

  return (
    <div className="pt-28 pb-20 min-h-screen">
      {/* Catalog Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e50914]/15 border border-[#e50914]/30 mb-2">
              <Film className="w-3.5 h-3.5 text-[#e50914]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Streaming Catalog Directory
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              All Titles &amp; Projects
            </h1>
            <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-2xl">
              Browse the complete portfolio of software products, AI experiments, open-source utilities, and community ventures built by Dev Kumar.
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-neutral-900/80 p-1 rounded-xl border border-white/10 w-fit">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#e50914] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode('detailed')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'detailed'
                  ? 'bg-[#e50914] text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Rows3 className="w-3.5 h-3.5" />
              <span>Wide Posters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search & Filter Component */}
      <SearchAndFilters
        totalCount={PROJECTS.length}
        filteredCount={filteredProjects.length}
      />

      {/* Projects Display */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {filteredProjects.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'grid grid-cols-1 md:grid-cols-2 gap-8'
            }
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
              />
            ))}
          </div>
        ) : (
          <div className="p-16 text-center rounded-2xl bg-[#0f111a] border border-white/10">
            <Film className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white">
              No matching titles found in the catalog
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-md mx-auto">
              We couldn&apos;t find any project matching your search query or active category filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
