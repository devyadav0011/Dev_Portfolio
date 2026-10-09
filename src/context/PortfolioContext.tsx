'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProfileMode, Project, PROJECTS } from '@/data/portfolioData';

interface PortfolioContextType {
  profileMode: ProfileMode;
  setProfileMode: (mode: ProfileMode) => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  featuredOnly: boolean;
  setFeaturedOnly: (val: boolean) => void;
  isResumeOpen: boolean;
  setIsResumeOpen: (open: boolean) => void;
  isProfileModalOpen: boolean;
  setIsProfileModalOpen: (open: boolean) => void;
  showIntro: boolean;
  setShowIntro: (show: boolean) => void;
  openProjectById: (id: string) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [profileMode, setProfileModeState] = useState<ProfileMode>('recruiter');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Check if user has already seen intro in this session
    const introSeen = sessionStorage.getItem('dev_portfolio_intro_seen');
    if (!introSeen) {
      setShowIntro(true);
      sessionStorage.setItem('dev_portfolio_intro_seen', 'true');
    }

    const savedProfile = localStorage.getItem('dev_portfolio_profile') as ProfileMode;
    if (savedProfile && ['recruiter', 'developer', 'founder'].includes(savedProfile)) {
      setProfileModeState(savedProfile);
    }
  }, []);

  const setProfileMode = (mode: ProfileMode) => {
    setProfileModeState(mode);
    localStorage.setItem('dev_portfolio_profile', mode);

    // Contextual category filter adjustments based on profile
    if (mode === 'founder') {
      setSelectedCategory('community');
    } else if (mode === 'developer') {
      setSelectedCategory('open-source');
    } else if (mode === 'recruiter') {
      setSelectedCategory('all');
    }
  };

  const openProjectById = (id: string) => {
    const found = PROJECTS.find((p) => p.id === id);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        profileMode,
        setProfileMode,
        selectedProject,
        setSelectedProject,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        featuredOnly,
        setFeaturedOnly,
        isResumeOpen,
        setIsResumeOpen,
        isProfileModalOpen,
        setIsProfileModalOpen,
        showIntro,
        setShowIntro,
        openProjectById,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
