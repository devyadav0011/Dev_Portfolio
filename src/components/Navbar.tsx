'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePortfolio } from '@/context/PortfolioContext';
import { PROFILES } from '@/data/portfolioData';
import { 
  Search, 
  FileText, 
  Menu, 
  X, 
  ChevronDown, 
  Users,
  Code2,
  Briefcase
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { 
    profileMode, 
    setIsProfileModalOpen, 
    setIsResumeOpen,
    searchQuery,
    setSearchQuery
  } = usePortfolio();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Catalog', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Community', href: '/community' },
    { label: 'Contact', href: '/contact' },
  ];

  const currentProfileInfo = PROFILES[profileMode];

  const getProfileIcon = () => {
    switch (profileMode) {
      case 'recruiter':
        return <Briefcase className="w-3.5 h-3.5 text-blue-400" />;
      case 'developer':
        return <Code2 className="w-3.5 h-3.5 text-emerald-400" />;
      case 'founder':
        return <Users className="w-3.5 h-3.5 text-rose-400" />;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-gradient-to-b from-[#08090c]/90 via-[#08090c]/50 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Brand Monogram & Name */}
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#e50914] rounded-lg"
                aria-label="Dev Yadav Home"
              >
                <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-[#ff2a38] to-[#b8000a] p-[1px] shadow-[0_0_15px_rgba(229,9,20,0.5)] group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-[#0a0b12] rounded-[7px] flex items-center justify-center font-black text-sm tracking-tighter text-white">
                    <span>D</span>
                    <span className="text-[#e50914]">/</span>
                    <span>Y</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold tracking-wider text-base sm:text-lg text-white group-hover:text-neutral-200 transition-colors">
                    DEV <span className="text-[#e50914]">YADAV</span>
                  </span>
                  <span className="text-[10px] tracking-widest text-neutral-400 uppercase -mt-1 font-semibold">
                    STREAM
                  </span>
                </div>
              </Link>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-white font-semibold bg-white/10'
                          : 'text-neutral-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right: Search, Profile Mode Selector, Resume, Menu */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Profile Mode Pill Button */}
              <button
                onClick={() => setIsProfileModalOpen(true)}
                className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-200 hover:text-white transition-all group focus:outline-none focus:ring-2 focus:ring-[#e50914]"
                title="Switch Profile Mode (Recruiter / Developer / Founder)"
                aria-label="Switch Profile Mode"
              >
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-black/40">
                  {getProfileIcon()}
                </div>
                <span className="hidden sm:inline font-semibold text-[11px] uppercase tracking-wider text-neutral-300 group-hover:text-white">
                  {currentProfileInfo.name.replace(' Mode', '')}
                </span>
                <ChevronDown className="w-3 h-3 text-neutral-400 group-hover:text-white" />
              </button>

              {/* Resume Button */}
              <button
                onClick={() => setIsResumeOpen(true)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white transition-all hover:border-[#e50914]/50 focus:outline-none focus:ring-2 focus:ring-[#e50914]"
                aria-label="View Resume"
              >
                <FileText className="w-3.5 h-3.5 text-[#e50914]" />
                <span>Resume</span>
              </button>

              {/* Search Toggle Button */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#e50914]"
                aria-label="Search Catalog"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#e50914]"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Quick Search Slideout Bar */}
          {searchOpen && (
            <div className="pt-3 pb-1 border-t border-white/10 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects, technologies (e.g. Next.js, AI, Python)..."
                  className="w-full pl-9 pr-10 py-2 text-sm bg-neutral-900/90 text-white placeholder-neutral-500 rounded-lg border border-neutral-700 focus:outline-none focus:border-[#e50914] focus:ring-1 focus:ring-[#e50914]"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/80 backdrop-blur-md md:hidden pt-20 px-6">
          <div className="flex flex-col gap-4 max-w-sm mx-auto">
            <div className="p-3 bg-neutral-900/90 rounded-xl border border-neutral-800">
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Active Viewing Profile:
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsProfileModalOpen(true);
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-left"
              >
                <div className="flex items-center gap-2.5">
                  {getProfileIcon()}
                  <span className="font-bold text-sm text-white">{currentProfileInfo.name}</span>
                </div>
                <span className="text-xs text-[#e50914] font-semibold">Change</span>
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'text-white bg-[#e50914]/20 border border-[#e50914]/40 font-bold'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsResumeOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#e50914] hover:bg-[#ff1e27] text-white font-bold text-sm transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>View &amp; Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
