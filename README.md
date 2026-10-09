# Dev Yadav — Cinematic Streaming Developer Portfolio

> **"Building Products. Creating Impact. Exploring What's Next."**  
> A premium personal portfolio website inspired by modern cinematic streaming platforms, built for **Dev Yadav**—Developer, B.Tech CSE student at **FET Agra College (2025–2029)**, and Founder of **NIMBLUX**.

---

## 🌟 Highlights & Key Features

- **Cinematic Streaming Catalog**: Interactive browsing experience with horizontal carousels, slick scroll controls, hover scale animations, and category filters.
- **Interactive Profile Switcher ("Who's Exploring?")**:
  - 💼 **Recruiter Mode**: Prioritizes production software, core competencies, education at FET Agra College, resume viewer, and contact channels.
  - 🛠️ **Developer Mode**: Prioritizes GitHub repositories, Python/OpenCV computer vision tools, technical architecture, and open-source contributions.
  - 🚀 **Founder Mode**: Prioritizes NIMBLUX, student community impact (950+ members), ORVIX Hackathon (600+ registrations), and campus ambassador leadership.
- **Cinematic Opening Reveal**: Tasteful, skippable animated monogram intro with visual glow fallbacks (zero autoplay sound).
- **Comprehensive Project Showcase**:
  - **CareerLense**: AI-powered resume builder, analyzer, and ATS intelligence platform (`careerlense.xyz`).
  - **NIMBLUX**: Student innovation ecosystem, campus hackathons, and community platform (`nimblux.xyz`).
  - **Gemini Watermark Remover**: Open-source Python computer vision tool utilizing OpenCV inpainting.
  - **WallPC / Nimwall**: Curated ultra-HD 4K desktop wallpaper discovery engine.
  - **Brahmastra AI**: Voice-powered AI desktop assistant & natural language query engine.
  - **Dev Shopee**: Modern full-stack e-commerce storefront with reactive state.
- **In-Depth Project Modals**: Overview, problem solved, key features, technical decisions, founder notes, and verified external links.
- **NIMBLUX Founder & Community Hub**: Dedicated showcase with verified historical milestones (950+ community members, 600+ ORVIX Hackathon registrations).
- **Verified Downloadable Resume**: Real PDF document integrated at `/dev-yadav-resume.pdf` with confetti animation and dedicated print-ready route at `/resume`.
- **Search & Filter Matrix**: Real-time multi-keyword search, category pills, and featured toggle.
- **Dedicated Routes**:
  - `/` — Streaming homepage with all 10 required rows
  - `/projects` — Full searchable & filterable title directory
  - `/about` — Biography, education, philosophy, and learning journey
  - `/community` — NIMBLUX ecosystem, hackathons, and ambassador network
  - `/contact` — Interactive message dispatcher and verified communication channels
  - `/resume` — Interactive resume viewer and PDF download
  - `/not-found` — Custom 404 streaming title search error

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org) with React 19
- **Language**: [TypeScript](https://www.typescriptlang.org) (strict types)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with custom glassmorphism and streaming glow variables
- **Motion & Transitions**: [Framer Motion](https://www.framer.com/motion)
- **Icons**: [Lucide React](https://lucide.dev) + Custom SVG Brand Icons
- **Celebration Effects**: [Canvas Confetti](https://github.com/catdad/canvas-confetti)
- **Deploy Target**: [Vercel](https://vercel.com)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification
```bash
npm run build
npm run lint
```

---

## 📁 Project Structure

```
d:\Dev_Portfolio/
├── public/
│   ├── dev-yadav-resume.pdf           # Real downloadable PDF resume
│   ├── images/
│   │   ├── dev-yadav.jpg              # Dev's portrait photo
│   │   ├── logo.svg                   # Original streaming developer logo
│   │   └── projects/                  # Custom cohesive SVG project artwork
│   │       ├── careerlense.svg
│   │       ├── nimblux.svg
│   │       ├── watermark.svg
│   │       ├── wallpc.svg
│   │       ├── brahmastra.svg
│   │       └── shopee.svg
├── src/
│   ├── app/
│   │   ├── globals.css                # Cinematic gradients, glassmorphism & theme
│   │   ├── layout.tsx                 # Root layout with SEO metadata & providers
│   │   ├── page.tsx                   # Streaming homepage (10 catalog rows)
│   │   ├── projects/page.tsx          # Full catalog directory with view toggles
│   │   ├── about/page.tsx             # Biography & learning journey
│   │   ├── community/page.tsx         # NIMBLUX & ORVIX Hackathon showcase
│   │   ├── contact/page.tsx           # Contact hub & dispatcher
│   │   ├── resume/page.tsx            # Formatted resume viewer & print layout
│   │   ├── not-found.tsx              # Custom streaming 404 error page
│   │   ├── robots.ts                  # SEO crawler configuration
│   │   └── sitemap.ts                 # XML sitemap generator
│   ├── components/
│   │   ├── Navbar.tsx                 # Top sticky navigation with profile switcher
│   │   ├── HeroBanner.tsx             # Cinematic hero with Dev's portrait
│   │   ├── CinematicIntro.tsx         # Skippable opening monogram reveal
│   │   ├── ProfileSelectorModal.tsx   # "Who's Exploring?" modal
│   │   ├── ContentRow.tsx             # Horizontal streaming carousel row
│   │   ├── ProjectCard.tsx            # Hover scale card with tech tags & actions
│   │   ├── ProjectModal.tsx           # In-depth project details modal
│   │   ├── SearchAndFilters.tsx       # Live search bar & genre pills
│   │   ├── CommunityShowcase.tsx      # NIMBLUX & ORVIX statistics & pillars
│   │   ├── SkillsSection.tsx          # Categorized technical toolbox
│   │   ├── EducationTimeline.tsx      # FET Agra College (2025–2029) details
│   │   ├── MilestonesSection.tsx      # Achievements & metrics (950+, 600+)
│   │   ├── BeyondKeyboard.tsx         # Mindset, design polish, and values
│   │   ├── ContactSection.tsx         # Message dispatcher & verified links
│   │   ├── ResumeModal.tsx            # Interactive resume modal with confetti
│   │   ├── Footer.tsx                 # Multi-column sitemap & intro replay
│   │   └── icons/
│   │       └── BrandIcons.tsx         # SVG icons for GitHub, LinkedIn, Twitter
│   ├── context/
│   │   └── PortfolioContext.tsx       # State management for modes, search & modals
│   └── data/
│       └── portfolioData.ts           # Centralized typed configuration for all content
```

---

## ✏️ Content Management & Customization

All portfolio data is centralized in **[`src/data/portfolioData.ts`](file:///d:/Dev_Portfolio/src/data/portfolioData.ts)**:

1. **Personal Information**: Update name, degree, college (`FET Agra College`), email, social links, or metrics in `PERSONAL_INFO`.
2. **Projects**: Add, remove, or edit project entries in `PROJECTS`. Every project supports:
   - `liveUrl`: URL for live demo (omitted automatically if empty string)
   - `githubUrl`: URL for GitHub repository (omitted automatically if empty string)
   - `keyFeatures`, `technicalHighlights`, `founderNotes`, etc.
3. **Milestones**: Configure milestone counts (such as `950+ Community Members` or `600+ Hackathon Registrations`) in `MILESTONES`.
4. **Portrait Photograph**: Replace **[`public/images/dev-yadav.jpg`](file:///d:/Dev_Portfolio/public/images/dev-yadav.jpg)** with any new portrait image.
5. **Resume Document**: Replace **[`public/dev-yadav-resume.pdf`](file:///d:/Dev_Portfolio/public/dev-yadav-resume.pdf)** with any updated resume PDF.

---

## 🚢 Deploying to Vercel

1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete cinematic streaming portfolio for Dev Yadav"
   git remote add origin https://github.com/devyadav0011/Dev_Portfolio.git
   git push -u origin main
   ```
2. Import the repository into [Vercel](https://vercel.com/new).
3. The Next.js framework preset will be automatically detected.
4. Click **Deploy**.
