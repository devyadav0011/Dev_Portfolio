'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { 
  Send, 
  Globe, 
  MessageSquare, 
  Check, 
  Copy 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/icons/BrandIcons';

export default function ContactSection() {
  const [topic, setTopic] = useState('recruiter');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const topics = [
    {
      id: 'recruiter',
      label: '💼 Hiring / Opportunity',
      defaultMsg: `Hi Dev, I came across your portfolio and was impressed by your projects like CareerLense and your work with NIMBLUX. We'd love to chat regarding an engineering opportunity / internship.`,
    },
    {
      id: 'community',
      label: '🚀 NIMBLUX / Hackathons',
      defaultMsg: `Hi Dev, I am interested in collaborating with NIMBLUX for campus initiatives, hackathons, or partnership opportunities. Let's discuss!`,
    },
    {
      id: 'developer',
      label: '🤝 Tech Collaboration',
      defaultMsg: `Hey Dev, saw your open-source tools and web projects. Would love to connect and build something impactful together.`,
    },
    {
      id: 'general',
      label: '☕ Just Saying Hi',
      defaultMsg: `Hi Dev, great streaming portfolio! Wanted to drop a quick hello and connect.`,
    },
  ];

  const handleTopicSelect = (topicId: string) => {
    setTopic(topicId);
    const selected = topics.find((t) => t.id === topicId);
    if (selected) {
      setMessage(selected.defaultMsg);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const activeMsg = message || topics.find((t) => t.id === topic)?.defaultMsg || '';
    const subject = encodeURIComponent(`Connecting with Dev Yadav: ${topics.find((t) => t.id === topic)?.label}`);
    const body = encodeURIComponent(
      `From: ${senderName || 'Anonymous'} (${senderEmail || 'No email provided'})\n\nMessage:\n${activeMsg}`
    );

    // Open native mailto client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setStatusMessage('Draft opened in your email client!');
    setTimeout(() => setStatusMessage(''), 4000);
  };

  return (
    <section id="contact-section" className="relative my-16 sm:my-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-[#e50914]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="mb-8 text-left">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#e50914] bg-[#e50914]/10 border border-[#e50914]/30">
          Transmission &bull; Channels Open
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2">
          Let&apos;s Connect &amp; Collaborate
        </h2>
        <p className="mt-1 text-sm text-neutral-400 max-w-xl">
          Whether you have an exciting software role, want to partner with NIMBLUX, or want to discuss AI and tech ventures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Quick Message Builder (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0f111a] border border-white/10 shadow-xl">
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#e50914]" />
            <span>Direct Message Dispatcher</span>
          </h3>
          <p className="text-xs text-neutral-400 mb-6">
            Choose a conversation purpose to pre-populate your inquiry or write a custom message.
          </p>

          {/* Purpose pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {topics.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => handleTopicSelect(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  topic === t.id
                    ? 'bg-[#e50914] text-white shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/5'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3.5 py-2.5 bg-neutral-900/90 text-white placeholder-neutral-500 rounded-xl border border-neutral-700/80 focus:outline-none focus:border-[#e50914] text-xs"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="e.g. alex@company.com"
                  className="w-full px-3.5 py-2.5 bg-neutral-900/90 text-white placeholder-neutral-500 rounded-xl border border-neutral-700/80 focus:outline-none focus:border-[#e50914] text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                Message Content
              </label>
              <textarea
                rows={4}
                value={message || topics.find((t) => t.id === topic)?.defaultMsg}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-neutral-900/90 text-white placeholder-neutral-500 rounded-xl border border-neutral-700/80 focus:outline-none focus:border-[#e50914] text-xs leading-relaxed"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-xl red-glow-btn text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send via Email Client</span>
              </button>

              {statusMessage && (
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>{statusMessage}</span>
                </span>
              )}
            </div>
          </form>
        </div>

        {/* Right: Direct Reach Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Quick Copy Box */}
          <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#e50914] block mb-1">
              Direct Inbox
            </span>
            <div className="flex items-center justify-between gap-2 mt-2 p-3 rounded-xl bg-neutral-900/80 border border-neutral-800">
              <span className="text-xs sm:text-sm font-mono text-white truncate">
                {PERSONAL_INFO.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/15 text-white transition-colors flex-shrink-0"
                title="Copy Email Address"
                aria-label="Copy Email Address"
              >
                {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            {isCopied && (
              <span className="text-[11px] text-emerald-400 font-semibold block mt-1.5">
                Copied to clipboard!
              </span>
            )}
          </div>

          {/* Social Profiles Grid */}
          <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/10 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block mb-2">
              Verified Profiles
            </span>

            {/* GitHub */}
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <GithubIcon className="w-5 h-5 text-white group-hover:text-[#e50914] transition-colors" />
                <div>
                  <span className="text-xs font-bold text-white block">GitHub Profile</span>
                  <span className="text-[10px] text-neutral-400 font-mono">@devyadav0011</span>
                </div>
              </div>
              <span className="text-xs text-neutral-400 group-hover:text-white">&rarr;</span>
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <LinkedinIcon className="w-5 h-5 text-[#0077b5]" />
                <div>
                  <span className="text-xs font-bold text-white block">LinkedIn</span>
                  <span className="text-[10px] text-neutral-400">Dev Yadav</span>
                </div>
              </div>
              <span className="text-xs text-neutral-400 group-hover:text-white">&rarr;</span>
            </a>

            {/* NIMBLUX */}
            <a
              href={PERSONAL_INFO.socials.nimbluxWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-emerald-400" />
                <div>
                  <span className="text-xs font-bold text-white block">NIMBLUX Official</span>
                  <span className="text-[10px] text-neutral-400">nimblux.xyz</span>
                </div>
              </div>
              <span className="text-xs text-neutral-400 group-hover:text-white">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
