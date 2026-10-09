'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/data/portfolioData';
import { usePortfolio } from '@/context/PortfolioContext';
import { 
  Info, 
  ExternalLink, 
  ChevronRight 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/icons/BrandIcons';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: 'landscape' | 'portrait';
}

export default function ProjectCard({ project, aspectRatio = 'landscape' }: ProjectCardProps) {
  const { setSelectedProject } = usePortfolio();
  const [isHovered, setIsHovered] = useState(false);

  const isLandscape = aspectRatio === 'landscape';

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setSelectedProject(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setSelectedProject(project);
        }
      }}
      role="button"
      tabIndex={0}
      className={`group relative flex-shrink-0 cursor-pointer rounded-xl bg-[#12141d] border border-white/10 transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#e50914] ${
        isLandscape
          ? 'w-[280px] sm:w-[320px] md:w-[360px]'
          : 'w-[200px] sm:w-[240px]'
      } hover:border-[#e50914]/60 hover:shadow-[0_12px_30px_rgba(229,9,20,0.25)] hover:scale-[1.03] hover:z-20`}
    >
      {/* Thumbnail Banner Area */}
      <div
        className={`relative w-full overflow-hidden bg-neutral-900 ${
          isLandscape ? 'h-[175px] sm:h-[195px]' : 'h-[280px] sm:h-[320px]'
        }`}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 300px, 400px"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Ambient Top & Bottom Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141d] via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          {project.badge ? (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold text-white bg-[#e50914] shadow-sm uppercase tracking-wider">
              {project.badge}
            </span>
          ) : (
            <span />
          )}

          <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold text-white/90 bg-black/60 backdrop-blur-md border border-white/10">
            {project.matchScore}
          </span>
        </div>

        {/* Center Quick Play/Detail Overlay on Desktop Hover */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center gap-2 transition-opacity duration-200 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-black font-bold text-xs shadow-lg transform group-hover:scale-105 transition-transform">
            <Info className="w-3.5 h-3.5 fill-black" />
            <span>View Details</span>
          </div>
        </div>
      </div>

      {/* Card Information Panel */}
      <div className="p-4 flex flex-col justify-between">
        <div>
          {/* Category & Status */}
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="text-[#e50914] font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-neutral-400 font-medium">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#ff3848] transition-colors line-clamp-1">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="mt-1 text-xs text-neutral-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-medium text-neutral-300 bg-white/5 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-medium text-neutral-500 bg-white/5">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Card Quick Action Buttons */}
        <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                title="View GitHub Repository"
                aria-label={`GitHub Repository for ${project.title}`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-md text-neutral-400 hover:text-[#e50914] hover:bg-white/10 transition-colors"
                title="Open Live Website"
                aria-label={`Live Website for ${project.title}`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.linkedinUrl && (
              <a
                href={project.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-md text-neutral-400 hover:text-blue-400 hover:bg-white/10 transition-colors"
                title="NIMBLUX LinkedIn"
                aria-label="NIMBLUX LinkedIn Page"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <span className="flex items-center gap-0.5 text-[11px] font-semibold text-[#e50914] group-hover:translate-x-0.5 transition-transform">
            <span>Explore</span>
            <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
