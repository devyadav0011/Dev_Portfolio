'use client';

import React from 'react';
import ContactSection from '@/components/ContactSection';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Send, MapPin, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Banner */}
        <div className="text-left mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e50914]/15 border border-[#e50914]/30 mb-3">
            <Send className="w-3.5 h-3.5 text-[#e50914]" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Transmission Terminal
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Connect with Dev Kumar
          </h1>
          <p className="mt-2 text-base sm:text-lg text-neutral-300 max-w-2xl">
            Have a role, project idea, hackathon proposal, or want to discuss AI tools? I respond promptly to inquiries.
          </p>
        </div>

        {/* Quick status cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-[#0f111a] border border-white/10 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#e50914]/10 text-[#e50914]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400 block">Direct Email</span>
              <span className="text-xs font-bold text-white font-mono">{PERSONAL_INFO.email}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f111a] border border-white/10 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400 block">Location</span>
              <span className="text-xs font-bold text-white">Agra, Uttar Pradesh, India</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0f111a] border border-white/10 flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-neutral-400 block">Response Time</span>
              <span className="text-xs font-bold text-white">&lt; 24 Hours</span>
            </div>
          </div>
        </div>

        {/* Interactive Contact Component */}
        <ContactSection />
      </div>
    </div>
  );
}
