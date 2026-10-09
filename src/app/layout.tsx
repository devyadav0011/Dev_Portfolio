import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { PortfolioProvider } from '@/context/PortfolioContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';
import ProfileSelectorModal from '@/components/ProfileSelectorModal';
import ResumeModal from '@/components/ResumeModal';
import CinematicIntro from '@/components/CinematicIntro';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devyadav.me'),
  title: 'Dev Yadav | Developer, B.Tech CSE & NIMBLUX Founder',
  description:
    'Building Products. Creating Impact. Exploring What\'s Next. Portfolio of Dev Yadav—developer, AI enthusiast, and founder of NIMBLUX. B.Tech CSE student at FET Agra College (2025–2029).',
  keywords: [
    'Dev Yadav',
    'NIMBLUX',
    'CareerLense',
    'FET Agra College',
    'Developer Portfolio',
    'ORVIX Hackathon',
    'Software Engineer',
    'AI Developer',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'Dev Yadav' }],
  creator: 'Dev Yadav',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devyadav.me',
    title: 'Dev Yadav | Developer & NIMBLUX Founder',
    description:
      'Building Products. Creating Impact. Exploring What\'s Next. Cinematic developer portfolio for exploring projects, community impact, and open source tools.',
    siteName: 'Dev Yadav Portfolio',
    images: [
      {
        url: '/images/projects/careerlense.svg',
        width: 1200,
        height: 630,
        alt: 'Dev Yadav Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Yadav | Developer & NIMBLUX Founder',
    description:
      'Building Products. Creating Impact. Exploring What\'s Next.',
    creator: '@devyadav0011',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#08090c] text-[#f8fafc] min-h-screen selection:bg-[#e50914] selection:text-white`}
      >
        <PortfolioProvider>
          {/* Opening Monogram Reveal */}
          <CinematicIntro />

          {/* Sticky Streaming Navigation */}
          <Navbar />

          {/* Main Route Content */}
          <main className="relative z-10">{children}</main>

          {/* Global Interactive Modals */}
          <ProjectModal />
          <ProfileSelectorModal />
          <ResumeModal />

          {/* Cinematic Streaming Footer */}
          <Footer />
        </PortfolioProvider>
      </body>
    </html>
  );
}
