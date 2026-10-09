'use client';

import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import ContentRow from '@/components/ContentRow';
import CommunityShowcase from '@/components/CommunityShowcase';
import SkillsSection from '@/components/SkillsSection';
import EducationTimeline from '@/components/EducationTimeline';
import MilestonesSection from '@/components/MilestonesSection';
import BeyondKeyboard from '@/components/BeyondKeyboard';
import ContactSection from '@/components/ContactSection';
import SearchAndFilters from '@/components/SearchAndFilters';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from '@/data/portfolioData';
import { usePortfolio } from '@/context/PortfolioContext';
import { Sparkles, Film } from 'lucide-react';

export default function HomePage() {
  const { searchQuery, selectedCategory, featuredOnly } = usePortfolio();

  // Filter projects based on live search and filters
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

  const isFilteringActive =
    searchQuery.trim() !== '' || selectedCategory !== 'all' || featuredOnly;

  // Categorized project collections for streaming rows
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const aiSaasProjects = PROJECTS.filter((p) => p.categorySlug === 'ai-saas');
  const webDigitalProjects = PROJECTS.filter((p) => p.categorySlug === 'web-products');
  const openSourceProjects = PROJECTS.filter((p) => p.categorySlug === 'open-source');
  const communityProjects = PROJECTS.filter((p) => p.categorySlug === 'community');

  return (
    <div className="relative overflow-hidden">
      {/* 1. Cinematic Opening Hero Banner */}
      <HeroBanner />

      {/* 2. Interactive Search & Genre Filter Bar */}
      <div id="catalog-section">
        <SearchAndFilters
          totalCount={PROJECTS.length}
          filteredCount={filteredProjects.length}
        />
      </div>

      {/* If search/filter active, display targeted results grid first */}
      {isFilteringActive ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#e50914]" />
              <span>Matching Titles ({filteredProjects.length})</span>
            </h2>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((p) => (
                <ProjectCard key={p.id} project={p} aspectRatio="landscape" />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-white/[0.02] border border-white/5">
              <Film className="w-10 h-10 text-neutral-600 mx-auto mb-3" />
              <p className="text-base font-bold text-neutral-300">
                No titles matched your current filters.
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Try searching for &quot;AI&quot;, &quot;Next.js&quot;, &quot;Python&quot;, or clearing the filter.
              </p>
            </div>
          )}
        </section>
      ) : (
        /* Standard Streaming Catalog Rows */
        <div className="space-y-4">
          {/* Row 1: Featured Projects */}
          <ContentRow
            title="Featured Projects &amp; Top Picks"
            subtitle="Flagship production applications and leading open-source tooling."
            projects={featuredProjects}
            viewAllHref="/projects"
            badge="Spotlight"
          />

          {/* Row 2: AI & SaaS Products */}
          <ContentRow
            title="AI &amp; SaaS Products"
            subtitle="Intelligent resume optimization, language model integrations, and voice AI."
            projects={aiSaasProjects}
            viewAllHref="/projects"
            badge="AI Powered"
          />

          {/* Row 3: Websites & Digital Experiences */}
          <ContentRow
            title="Websites &amp; Digital Experiences"
            subtitle="High-performance web apps, wallpaper discovery engines, and storefronts."
            projects={webDigitalProjects}
            viewAllHref="/projects"
            badge="Web Apps"
          />

          {/* Row 4: Open Source Experiments */}
          <ContentRow
            title="Open Source &amp; Developer Tools"
            subtitle="Computer vision algorithms, media processing scripts, and automation tools."
            projects={openSourceProjects}
            viewAllHref="/projects"
            badge="Codebase"
          />

          {/* Row 5: Hackathons & Community Initiatives */}
          <ContentRow
            title="Community &amp; Startup Ventures"
            subtitle="NIMBLUX initiatives, student developer communities, and hackathon platforms."
            projects={communityProjects}
            viewAllHref="/community"
            badge="Founder"
          />
        </div>
      )}

      {/* Row 6: NIMBLUX Founder and Community Showcase */}
      <CommunityShowcase />

      {/* Row 7: Technical Skills & Toolbox */}
      <SkillsSection />

      {/* Row 8: Education & Learning Journey (FET Agra College) */}
      <EducationTimeline />

      {/* Row 9: Achievements & Milestones (950+ members, 600+ regs) */}
      <MilestonesSection />

      {/* Row 10: Beyond the Keyboard */}
      <BeyondKeyboard />

      {/* Row 11: Let's Connect */}
      <ContactSection />
    </div>
  );
}
