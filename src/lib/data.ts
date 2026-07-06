export const siteConfig = {
  name: "Stefan Gislason",
  tagline: "IT Support Professional & Emerging Developer",
  email: "stefangislason@outlook.com",
  linkedin: "https://www.linkedin.com/in/stefan-gislason-53948426b/",
  github: "https://github.com/Giza88",
  cvPath: "/stefan-gislason-cv.pdf",
  location: "New Zealand",
  url: "https://stefangislason.online",
  profileImage: "/profile.png",
  profilePlaceholder: "/profile-placeholder.svg",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const heroHighlights = [
  { label: "IT Support", value: "Hands-on user support" },
  { label: "Development", value: "React & Next.js projects" },
  { label: "Automation", value: "AI-assisted workflows" },
];

export const introParagraph =
  "I help people and teams get the most from technology — from onboarding and troubleshooting to building modern web tools. I combine hands-on IT support experience with a growing development skill set, always focused on clear communication and practical solutions.";

export const aboutBio = [
  "Early-career IT professional with hands-on experience in onboarding, troubleshooting, and digital systems.",
  "Completed a Datacom internship with ANZ Application Services, where I built an AI-driven newsletter that aggregated RSS feeds and delivered industry updates to staff.",
  "Worked in customer support and IT support at CityFitness, supporting users with day-to-day technology needs.",
  "Known for strong communication, problem-solving, and a user-focused mindset.",
  "Interested in AI-assisted workflows, web tools, and modern digital systems.",
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  linkLabel: string;
  linkHref: string;
  githubHref?: string;
  image?: string;
  featured?: boolean;
  accent: "blue" | "violet" | "emerald";
};

export const projects: Project[] = [
  {
    title: "PawMatch.fit",
    description:
      "Pet adoption matching platform. Built user-facing features, UI/UX improvements, testing, and deployment workflows.",
    tech: ["React", "TypeScript", "Firebase", "Vercel", "Tailwind CSS"],
    linkLabel: "View Live Demo",
    linkHref: "https://pawmatch.fit",
    githubHref: "https://github.com/PawMatch/pawmatch",
    image: "/projects/pawmatch.png",
    featured: true,
    accent: "blue",
  },
  {
    title: "OpenTrackr",
    description:
      "Smart productivity app for tasks, to-do lists, and a built-in calendar. Set priorities, track deadlines, and personalise your workflow with themes.",
    tech: ["JavaScript", "React", "Vercel"],
    linkLabel: "View Live Demo",
    linkHref: "https://open-trackr.vercel.app",
    githubHref: "https://github.com/Giza88/OpenTrackr",
    image: "/projects/opentrackr.png",
    featured: true,
    accent: "violet",
  },
  {
    title: "ThinkLoop",
    description:
      "Deployed web app built with React and TypeScript for capturing ideas and keeping work organised in a clean, focused interface.",
    tech: ["TypeScript", "React", "Vite", "Vercel"],
    linkLabel: "View Live Demo",
    linkHref: "https://think-loop-brown.vercel.app",
    githubHref: "https://github.com/Giza88/ThinkLoop",
    image: "/projects/thinkloop.png",
    featured: true,
    accent: "emerald",
  },
  {
    title: "Paw Health",
    description:
      "Mobile-first pet health tracker for medical records, medications, and vet visits. Supports multiple pets with timeline views and dose reminders.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/Paw-Health",
    image: "/projects/paw-health.png",
    featured: true,
    accent: "blue",
  },
  {
    title: "Datacom AI Newsletter",
    description:
      "Automated AI-driven newsletter that aggregated RSS feeds and generated industry updates for Datacom staff during my internship.",
    tech: ["Python", "RSS Aggregation", "AI APIs", "Automation"],
    linkLabel: "See Experience",
    linkHref: "#experience",
    githubHref: "https://github.com/Giza88/Datacom-Ai-agent-training-",
    image: "/projects/datacom-newsletter.svg",
    featured: true,
    accent: "violet",
  },
  {
    title: "Microsoft Ollama Agent",
    description:
      "Modular Python agent built with the Microsoft Agent Framework and local Ollama models for free, offline AI with tools, workflows, and memory.",
    tech: ["Python", "Ollama", "Microsoft Agent Framework", "Azure Functions"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/Micosoft_Ollama_first_agent",
    image: "/projects/ollama-agent.png",
    featured: true,
    accent: "emerald",
  },
  {
    title: "Free Hack AI",
    description:
      "Secure, fully offline local-AI environment for ethical penetration-testing workflows. Runs models locally in an isolated sandbox for learning security techniques.",
    tech: ["TypeScript", "Local AI", "Security", "Offline-first"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/Free_Hack_Ai",
    accent: "blue",
  },
  {
    title: "HTB AI Helper",
    description:
      "AI assistant built to support Hack The Box learning with practical guidance and workflow help for security challenges.",
    tech: ["TypeScript", "AI", "Hack The Box"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/HTB_AI_HELPER",
    accent: "violet",
  },
  {
    title: "Health & Safety Toolkit",
    description:
      "Adaptable health and safety toolkit for businesses. Streamlines incident reporting, hazard tracking, and basic compliance tasks.",
    tech: ["Web App", "Compliance", "Incident Reporting"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/health-safety-project",
    accent: "emerald",
  },
  {
    title: "Pure NZ Journeys",
    description:
      "Multi-page tourism website for New Zealand with responsive UI, consistent branding, and curated content for destinations, tours, and travel tips.",
    tech: ["HTML", "CSS", "Responsive Design", "Tourism"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/nz-pure-tourism-web-site",
    accent: "blue",
  },
  {
    title: "TO-Done",
    description:
      "A playful take on a to-do app — my first app built by extending an existing project, focused on learning modern JavaScript patterns.",
    tech: ["JavaScript", "To-Do App", "UI"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/TO-Done-_A-Play-On-TO-Do-App",
    accent: "violet",
  },
  {
    title: "Car Project",
    description:
      "My first React project — a fun build that helped me learn component structure, state, and front-end fundamentals.",
    tech: ["JavaScript", "React"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/Car-Project-Take-2",
    accent: "emerald",
  },
  {
    title: "Ai-free",
    description:
      "Next.js project exploring free and accessible AI tooling with a modern web interface.",
    tech: ["TypeScript", "Next.js", "AI"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/Ai-free-",
    accent: "blue",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "IT Intern",
    company: "Datacom — ANZ Application Services",
    period: "2024 – 2025",
    description:
      "Supported digital systems and built an AI-driven newsletter that aggregated industry RSS feeds for internal staff updates.",
  },
  {
    role: "IT Support / Customer Support",
    company: "CityFitness",
    period: "2023 – 2024",
    description:
      "Resolved user issues, managed access and onboarding, and delivered friendly, reliable support across digital systems.",
  },
  {
    role: "Independent Developer",
    company: "PawMatch",
    period: "2024 – Present",
    description:
      "Developed and improved a pet adoption matching platform with a focus on UX, testing, and reliable deployment.",
  },
  {
    role: "Chef & Kitchen Team Leader",
    company: "Hospitality",
    period: "Earlier Career",
    description:
      "Led teams under pressure, coordinated workflows, and built strong communication, empathy, and attention to detail.",
  },
];

export const skillGroups = [
  {
    title: "IT & Support",
    skills: [
      "IT Support & Troubleshooting",
      "MFA & Access Management",
      "Digital Systems & Onboarding",
    ],
  },
  {
    title: "Development",
    skills: ["HTML, CSS & GitHub", "React, Next.js & TypeScript"],
  },
  {
    title: "Tools & AI",
    skills: ["AI Tools (Cursor, Copilot, Perplexity)"],
  },
];

export const softSkills = [
  "Communication",
  "Empathy",
  "Problem-solving",
  "Adaptability",
  "Attention to detail",
  "User-focused mindset",
];
