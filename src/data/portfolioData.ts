export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  categorySlug: 'ai-saas' | 'community' | 'open-source' | 'web-products';
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  featured: boolean;
  badge?: string;
  matchScore: string;
  year: string;
  status: string;
  thumbnail: string;
  backdrop: string;
  stats?: { label: string; value: string };
  founderNotes?: string;
  technicalHighlights?: string[];
}

export type ProfileMode = 'recruiter' | 'developer' | 'founder';

export interface ProfileConfig {
  id: ProfileMode;
  name: string;
  roleTitle: string;
  avatarBadge: string;
  avatarGradient: string;
  summary: string;
  targetAudience: string;
  recommendedFilters: string[];
  primaryCtaText: string;
  primaryCtaLink: string;
  spotlightProjectId: string;
  keyHighlights: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    popular?: boolean;
  }[];
}

export interface MilestoneItem {
  id: string;
  metric: string;
  label: string;
  description: string;
  category: 'Community' | 'Hackathon' | 'Product' | 'Engineering';
  highlightBadge: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  category: string;
  description: string;
  achievements: string[];
}

export interface PersonalInfo {
  name: string;
  handle: string;
  role: string;
  tagline: string;
  supportingText: string;
  college: string;
  education: string;
  location: string;
  email: string;
  portraitPath: string;
  socials: {
    github: string;
    linkedin: string;
    nimbluxLinkedin: string;
    nimbluxGithub: string;
    nimbluxWeb: string;
    twitter?: string;
  };
  metrics: {
    communityMembers: string;
    hackathonRegistrations: string;
    productsBuilt: string;
    codeCommits: string;
  };
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Dev Yadav",
  handle: "devyadav0011",
  role: "Developer, B.Tech CSE Student, and Founder of NIMBLUX",
  tagline: "Building Products. Creating Impact. Exploring What's Next.",
  supportingText: "Developer, AI enthusiast, and founder building digital products, open-source tools, and technology communities.",
  college: "FET Agra College",
  education: "B.Tech Computer Science & Engineering (2025–2029)",
  location: "Agra, Uttar Pradesh, India",
  email: "devyadav81711@gmail.com",
  portraitPath: "/images/dev-yadav.jpg",
  socials: {
    github: "https://github.com/devyadav0011",
    linkedin: "https://www.linkedin.com/in/devyadav0011",
    nimbluxLinkedin: "https://www.linkedin.com/company/nimblux/",
    nimbluxGithub: "https://github.com/orgs/Nimblux/dashboard",
    nimbluxWeb: "https://www.nimblux.xyz",
  },
  metrics: {
    communityMembers: "950+",
    hackathonRegistrations: "600+",
    productsBuilt: "6+",
    codeCommits: "500+",
  },
};

export const PROFILES: Record<ProfileMode, ProfileConfig> = {
  recruiter: {
    id: "recruiter",
    name: "Recruiter Mode",
    roleTitle: "Software Engineer & Product Builder",
    avatarBadge: "TALENT",
    avatarGradient: "from-blue-600 via-indigo-600 to-sky-500",
    summary: "Focused on production readiness, engineering rigor, technical skill depth, academic foundation at FET Agra College, and real-world delivery.",
    targetAudience: "Engineering Managers, Recruiters & Hiring Teams",
    recommendedFilters: ["ai-saas", "web-products"],
    primaryCtaText: "View Interactive Resume",
    primaryCtaLink: "/resume",
    spotlightProjectId: "careerlense",
    keyHighlights: [
      "B.Tech CSE (2025-2029) with strong CS core fundamentals",
      "Full-stack proficiency in TypeScript, React, Next.js & Python",
      "Real-world production SaaS: CareerLense (ATS & Resume Analysis)",
      "High agency & demonstrated initiative through startup leadership"
    ]
  },
  developer: {
    id: "developer",
    name: "Developer Mode",
    roleTitle: "Full-Stack Engineer & AI Toolmaker",
    avatarBadge: "CODE",
    avatarGradient: "from-emerald-500 via-teal-600 to-cyan-600",
    summary: "Deep dive into technical architectures, GitHub repositories, algorithm implementations, image processing tools, and experimental codebases.",
    targetAudience: "Fellow Developers, Tech Leads & Open Source Collaborators",
    recommendedFilters: ["open-source", "ai-saas"],
    primaryCtaText: "Explore GitHub Repos",
    primaryCtaLink: "https://github.com/devyadav0011",
    spotlightProjectId: "gemini-watermark-remover",
    keyHighlights: [
      "Open-source Python computer vision (Gemini Watermark Remover)",
      "Clean TypeScript & React component architecture with Tailwind CSS",
      "Hands-on AI integration (LLM APIs, Prompt Engineering, Speech NLP)",
      "Git-first workflow with modular clean-code practices"
    ]
  },
  founder: {
    id: "founder",
    name: "Founder Mode",
    roleTitle: "Community Founder & Product Visionary",
    avatarBadge: "STARTUP",
    avatarGradient: "from-red-600 via-rose-600 to-amber-600",
    summary: "Discover NIMBLUX, student ecosystem empowerment, 950+ community members, ORVIX Hackathon with 600+ registrations, and zero-to-one product shipping.",
    targetAudience: "Startup Founders, Community Leads & Venture Partners",
    recommendedFilters: ["community", "ai-saas"],
    primaryCtaText: "Discover NIMBLUX Ecosystem",
    primaryCtaLink: "/community",
    spotlightProjectId: "nimblux",
    keyHighlights: [
      "Founder of NIMBLUX: Scaled to 950+ ambitious tech members",
      "Organized ORVIX Hackathon with 600+ student registrations",
      "Established campus ambassador network across regional institutions",
      "Product-first mindset: Fast execution, community-driven iteration"
    ]
  }
};

export const PROJECTS: Project[] = [
  {
    id: "careerlense",
    title: "CareerLense",
    tagline: "AI-Powered Resume Analyzer, Builder & Career Intelligence Platform",
    category: "AI & SaaS",
    categorySlug: "ai-saas",
    description: "A career-focused platform featuring a modern resume maker, automated resume analyzer, resume ranking, AI-powered improvement suggestions, and intelligent job matching.",
    problemSolved: "Job applicants struggle to pass Applicant Tracking Systems (ATS) and often receive vague rejection emails without knowing what to improve in their resumes.",
    keyFeatures: [
      "AI-driven resume parsing and ATS score grading with tailored match analysis",
      "Line-by-line contextual improvement tips and skill-keyword recommendations",
      "Clean interactive resume maker with customizable formatting",
      "Job role alignment engine highlighting missing qualifications and strengths"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI / LLM APIs", "Node.js", "PostgreSQL"],
    liveUrl: "https://careerlense.xyz",
    githubUrl: "https://github.com/devyadav0011/CareerLense",
    featured: true,
    badge: "Trending #1",
    matchScore: "99% Match",
    year: "2024",
    status: "Production Ready",
    thumbnail: "/images/projects/careerlense.svg",
    backdrop: "/images/projects/careerlense-banner.svg",
    stats: { label: "Capabilities", value: "ATS Grading & AI Suggestions" },
    founderNotes: "CareerLense was built out of my own frustration seeing talented peers get rejected solely because their resume formatting failed ATS parsers.",
    technicalHighlights: [
      "Integrated LLM inference to perform granular semantic checks against job requirements",
      "Client-side PDF parsing and structured schema extraction",
      "Fast responsive UI crafted with Next.js App Router and Tailwind CSS"
    ]
  },
  {
    id: "nimblux",
    title: "NIMBLUX",
    tagline: "Ecosystem for Student Innovation, Hackathons & Tech Communities",
    category: "Startup & Community",
    categorySlug: "community",
    description: "A founder-led initiative focused on technology, innovation, community initiatives, hackathons, and empowering students with real-world developer opportunities.",
    problemSolved: "Tier-2 and tier-3 college engineering students often lack peer developer networks, mentorship, and high-energy hackathons to test their building skills.",
    keyFeatures: [
      "Grew active technology community to 950+ tech members",
      "Organized and hosted the ORVIX Hackathon with 600+ student registrations",
      "Built a campus ambassador network bridging student innovators across colleges",
      "Conducted interactive webinars, code clinics, and collaborative project jams"
    ],
    technologies: ["Community Operations", "React", "Next.js", "Discord / Telegram", "Event Operations"],
    liveUrl: "https://www.nimblux.xyz",
    githubUrl: "https://github.com/orgs/Nimblux/dashboard",
    linkedinUrl: "https://www.linkedin.com/company/nimblux/",
    featured: true,
    badge: "Founder Showcase",
    matchScore: "98% Match",
    year: "2024",
    status: "Active Community",
    thumbnail: "/images/projects/nimblux.svg",
    backdrop: "/images/projects/nimblux-banner.svg",
    stats: { label: "Milestone", value: "950+ Members & 600+ Hackathon Regs" },
    founderNotes: "Starting NIMBLUX taught me leadership, team coordination, and the undeniable power of community-driven building.",
    technicalHighlights: [
      "Managed digital portal and event landing pages handling hundreds of registrations",
      "Coordinated cross-campus outreach, mentorship cohorts, and sponsor discussions",
      "Established open-source student repo templates on the Nimblux GitHub organization"
    ]
  },
  {
    id: "gemini-watermark-remover",
    title: "Gemini Watermark Remover",
    tagline: "Computer Vision Tool to Remove Watermarks from AI-Generated Media",
    category: "Open Source",
    categorySlug: "open-source",
    description: "An open-source utility focused on automatically detecting and removing watermarks from Gemini-generated images and video frames using computer vision algorithms.",
    problemSolved: "Generative AI media creators frequently encounter watermarks overlaid in standard corner coordinates when attempting to use generated assets in personal portfolios and creative mockups.",
    keyFeatures: [
      "Automated watermark region boundary detection",
      "Pixel-aware inpainting algorithm reconstructing underlying image texture",
      "Batch processing support for image collections and video frame sequences",
      "Simple CLI workflow with customizable coordinates and sensitivity thresholds"
    ],
    technologies: ["Python", "OpenCV", "NumPy", "Image Processing", "Automation"],
    githubUrl: "https://github.com/devyadav0011/gemini-watermark-remover",
    featured: true,
    badge: "Open Source Tool",
    matchScore: "96% Match",
    year: "2024",
    status: "Open Source",
    thumbnail: "/images/projects/watermark.svg",
    backdrop: "/images/projects/watermark-banner.svg",
    stats: { label: "Engineering", value: "Computer Vision & Inpainting" },
    founderNotes: "One of my favorite deep-dive technical explorations—diving directly into OpenCV mask generation and interpolation algorithms.",
    technicalHighlights: [
      "Exploited known watermark coordinate heuristics to localize bounding masks with high accuracy",
      "Applied Navier-Stokes and Telea inpainting methods for seamless pixel reconstruction",
      "Designed zero-dependency CLI interface for immediate developer adoption"
    ]
  },
  {
    id: "wallpc",
    title: "WallPC / Nimwall",
    tagline: "Curated Ultra-HD Wallpaper Exploration & Discovery Engine",
    category: "Web Products",
    categorySlug: "web-products",
    description: "A specialized wallpaper web platform focused on discovering, previewing, and downloading high-resolution wallpapers optimized for desktop setups and multi-monitors.",
    problemSolved: "Popular wallpaper websites are heavily bloated with popup advertisements, low-quality re-uploads, and cumbersome download steps.",
    keyFeatures: [
      "Ultra-crisp 4K, 5K, and dual-monitor aspect ratio cataloging",
      "Instant live resolution preview with simulated desktop dock overlays",
      "Palette-based search allowing developers to match their IDE themes",
      "Fast, fluid gallery navigation with zero advertising clutter"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Unsplash API", "Image Optimization"],
    githubUrl: "https://github.com/devyadav0011/wallpc",
    liveUrl: "", // editable field for live deployment
    featured: true,
    badge: "Visual Discovery",
    matchScore: "94% Match",
    year: "2024",
    status: "Active Web Product",
    thumbnail: "/images/projects/wallpc.svg",
    backdrop: "/images/projects/wallpc-banner.svg",
    stats: { label: "Aesthetics", value: "4K Desktop Catalog" },
    founderNotes: "Crafted specifically for developers and creative professionals who care about minimal desktop aesthetics and ultra-clean design.",
    technicalHighlights: [
      "Optimized responsive masonry grid with virtualized scrolling to handle hundreds of high-res image tiles",
      "Color extraction utilities to detect dominant hex codes in wallpapers",
      "Tailwind-styled dark interface with fluid transitions"
    ]
  },
  {
    id: "brahmastra-ai",
    title: "Brahmastra AI",
    tagline: "Voice-Powered Desktop Assistant & Intelligent Query Assistant",
    category: "AI Experiments",
    categorySlug: "ai-saas",
    description: "An AI voice assistant project designed to execute voice-driven automation, smart queries, contextual conversation, and system task execution.",
    problemSolved: "Modern knowledge workers lose momentum frequently switching between tabs, tools, and repetitive system tasks that can be triggered through conversational voice.",
    keyFeatures: [
      "Voice recognition engine with quick response latency",
      "Context-aware dialogue capabilities powered by modern language models",
      "System automation shortcuts (app launching, web search, note capture)",
      "Audio synthesis for natural, crisp spoken feedback"
    ],
    technologies: ["Python", "Speech Recognition", "NLP", "Text-to-Speech", "OpenAI API"],
    githubUrl: "", // editable field
    liveUrl: "", // editable field
    featured: false,
    badge: "AI Prototype",
    matchScore: "91% Match",
    year: "2024",
    status: "Research Prototype",
    thumbnail: "/images/projects/brahmastra.svg",
    backdrop: "/images/projects/brahmastra-banner.svg",
    stats: { label: "Modality", value: "Voice & Speech NLP" },
    founderNotes: "Experimenting with conversational audio agents and offline voice recognition models.",
    technicalHighlights: [
      "Modular audio capture pipeline with ambient noise cancellation",
      "Fast intent dispatching system decoupling command execution from general dialogue",
      "Extensible Python architecture allowing custom plugin commands"
    ]
  },
  {
    id: "dev-shopee",
    title: "Dev Shopee",
    tagline: "Modern Full-Stack E-Commerce Digital Storefront",
    category: "Web Development",
    categorySlug: "web-products",
    description: "A full-stack e-commerce web platform featuring dynamic catalog browsing, interactive cart management, promotional pricing, and responsive order simulation.",
    problemSolved: "Building an intuitive, high-performance shopping workflow with instant client-side updates and zero layout shifts.",
    keyFeatures: [
      "Dynamic catalog search with instant category filters and price range sorting",
      "Persistent cart state with quantity adjustments and coupon calculations",
      "Simulated checkout flow with address validation and order confirmation",
      "Fully responsive design optimized for mobile and desktop screens"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "State Management", "Node.js"],
    githubUrl: "", // editable field
    liveUrl: "", // editable field
    featured: false,
    badge: "Web Storefront",
    matchScore: "90% Match",
    year: "2024",
    status: "Completed Project",
    thumbnail: "/images/projects/shopee.svg",
    backdrop: "/images/projects/shopee-banner.svg",
    stats: { label: "Architecture", value: "Full-Stack Storefront" },
    founderNotes: "A practical deep-dive into complex client-side state, shopping cart lifecycle, and responsive UI components.",
    technicalHighlights: [
      "Engineered decoupled cart state store preventing unnecessary parent re-renders",
      "Implemented optimistic UI updates for cart increments and badge counts",
      "Comprehensive Tailwind CSS styling with dark/light visual contrast"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend & UI Engineering",
    iconName: "Layout",
    description: "Creating responsive, interactive web applications with modern component libraries and animation frameworks.",
    skills: [
      { name: "React / React 19", level: "Advanced", experience: "2+ Years", popular: true },
      { name: "Next.js (App Router)", level: "Advanced", experience: "2+ Years", popular: true },
      { name: "TypeScript", level: "Proficient", experience: "2+ Years", popular: true },
      { name: "Tailwind CSS", level: "Expert", experience: "2+ Years", popular: true },
      { name: "Framer Motion", level: "Proficient", experience: "1.5 Years" },
      { name: "HTML5 / Semantic Web", level: "Expert", experience: "3+ Years" },
      { name: "Modern CSS / Glassmorphism", level: "Advanced", experience: "3+ Years" },
      { name: "Responsive UI/UX Design", level: "Advanced", experience: "2+ Years" }
    ]
  },
  {
    title: "Backend, APIs & Core",
    iconName: "Server",
    description: "Developing scalable REST endpoints, serverless functions, database queries, and system scripts.",
    skills: [
      { name: "Node.js", level: "Proficient", experience: "2+ Years", popular: true },
      { name: "Python", level: "Proficient", experience: "2+ Years", popular: true },
      { name: "REST APIs & JSON", level: "Advanced", experience: "2+ Years" },
      { name: "Next.js API Routes", level: "Advanced", experience: "2+ Years" },
      { name: "PostgreSQL", level: "Intermediate", experience: "1+ Year" },
      { name: "MongoDB", level: "Intermediate", experience: "1+ Year" }
    ]
  },
  {
    title: "AI, Computer Vision & Automation",
    iconName: "Cpu",
    description: "Integrating intelligent models, computer vision pipelines, and automated developer tooling.",
    skills: [
      { name: "OpenAI / Gemini LLM APIs", level: "Advanced", experience: "1.5 Years", popular: true },
      { name: "OpenCV (Computer Vision)", level: "Intermediate", experience: "1+ Year" },
      { name: "Prompt Engineering", level: "Advanced", experience: "1.5 Years" },
      { name: "Speech Recognition & NLP", level: "Intermediate", experience: "1+ Year" },
      { name: "Image Inpainting & Processing", level: "Intermediate", experience: "1+ Year" }
    ]
  },
  {
    title: "Developer Tools & DevOps",
    iconName: "Terminal",
    description: "Version control, deployment pipelines, testing suites, and developer productivity tooling.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", experience: "3+ Years", popular: true },
      { name: "Vercel Deployment", level: "Advanced", experience: "2+ Years" },
      { name: "Postman / API Testing", level: "Proficient", experience: "2+ Years" },
      { name: "VS Code & JetBrains", level: "Advanced", experience: "3+ Years" },
      { name: "Bash / PowerShell", level: "Intermediate", experience: "2+ Years" }
    ]
  },
  {
    title: "Leadership & Community Building",
    iconName: "Users",
    description: "Driving developer initiatives, organizing large-scale student hackathons, and founder execution.",
    skills: [
      { name: "Community Leadership (NIMBLUX)", level: "Founder", experience: "950+ Members", popular: true },
      { name: "Hackathon Organizing (ORVIX)", level: "Lead Organizer", experience: "600+ Participants", popular: true },
      { name: "Campus Ambassador Networks", level: "Lead", experience: "Regional Colleges" },
      { name: "Technical Mentorship", level: "Mentor", experience: "Peer Cohorts" },
      { name: "Public Speaking & Workshops", level: "Speaker", experience: "Tech Sessions" }
    ]
  }
];

export const MILESTONES: MilestoneItem[] = [
  {
    id: "community-members",
    metric: "950+",
    label: "Community Members",
    description: "Built NIMBLUX into a thriving innovation and tech community for passionate developers and students.",
    category: "Community",
    highlightBadge: "Founder Impact"
  },
  {
    id: "hackathon-registrations",
    metric: "600+",
    label: "ORVIX Hackathon Registrations",
    description: "Successfully organized ORVIX Hackathon, bringing hundreds of student developers together to build.",
    category: "Hackathon",
    highlightBadge: "Flagship Event"
  },
  {
    id: "products-built",
    metric: "6+",
    label: "Digital Products & Tools",
    description: "From AI SaaS (CareerLense) to open-source computer vision tools and web platforms.",
    category: "Product",
    highlightBadge: "Builder Journey"
  },
  {
    id: "education-timeline",
    metric: "2025–2029",
    label: "B.Tech CSE at FET Agra College",
    description: "Pursuing Computer Science & Engineering degree while continuously building production software.",
    category: "Engineering",
    highlightBadge: "Academic Anchor"
  }
];

export const EDUCATION_INFO = {
  institution: "FET Agra College",
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science & Engineering",
  timeline: "2025 – 2029",
  location: "Agra, Uttar Pradesh, India",
  description: "Building strong foundations in computer science theory, algorithms, software engineering principles, and distributed systems, while actively spearheading NIMBLUX campus initiatives.",
  coreSubjects: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems",
    "Operating Systems & Computer Networks",
    "Software Engineering & Web Architecture",
    "Artificial Intelligence Fundamentals"
  ],
  campusActivities: [
    "Founder of NIMBLUX student developer community",
    "Lead organizer for ORVIX Hackathon",
    "Campus Ambassador initiatives connecting college innovators",
    "Mentoring peers in Git, Web Development, and Project Building"
  ]
};

export const BEYOND_KEYBOARD_ITEMS = [
  {
    icon: "Rocket",
    title: "Community Building & Ecosystems",
    tagline: "Empowering Next-Gen Creators",
    description: "I believe technology is best learned together. Through NIMBLUX, I dedicate significant time to bringing students together, demystifying hackathons, and fostering builder culture."
  },
  {
    icon: "BookOpen",
    title: "Startup & Product Exploration",
    tagline: "Studying High-Growth Tech",
    description: "Constantly reading product case studies, following early-stage AI startups, and analyzing how great technical founders iterate from zero to one."
  },
  {
    icon: "Sparkles",
    title: "Creative Design & Visual Polish",
    tagline: "Obsession with Clean Aesthetics",
    description: "Great software deserves great design. I enjoy UI prototyping, typography, dark aesthetic palettes, and subtle motion dynamics that make products memorable."
  },
  {
    icon: "Compass",
    title: "Problem Solving & First Principles",
    tagline: "Deconstructing Complex Systems",
    description: "Whether it is designing an ATS scoring algorithm or planning hackathon logistics for 600+ students, I approach challenges with a structured, first-principles mindset."
  }
];

export const STREAMING_GENRES = [
  { id: "all", label: "All Titles", icon: "Flame" },
  { id: "ai-saas", label: "AI & SaaS", icon: "Brain" },
  { id: "community", label: "Startup & Community", icon: "Users" },
  { id: "open-source", label: "Open Source", icon: "Terminal" },
  { id: "web-products", label: "Web Products", icon: "Globe" }
];
