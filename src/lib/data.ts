export const siteConfig = {
  name: "Stefan Gislason",
  tagline: "IT Support Professional & Emerging Developer",
  headline: "I turn IT support into reliable, user-friendly software",
  email: "stefangislason@outlook.com",
  linkedin: "https://www.linkedin.com/in/stefan-gislason-53948426b/",
  github: "https://github.com/Giza88",
  cvPath: "/stefan-gislason-cv.pdf",
  location: "New Zealand",
  url: "https://stefangislason.online",
  profileImage: "/profile.png",
  profilePlaceholder: "/profile-placeholder.svg",
  availability: {
    status: "Open to opportunities",
    roles: "IT Support · Junior Developer",
  },
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
  { label: "Support", value: "Onboarding, troubleshooting & user-first IT" },
  { label: "Build", value: "React, Next.js & deployed web apps" },
  { label: "Automate", value: "AI-assisted workflows & internal tools" },
];

export const introParagraph =
  "Hands-on IT support meets modern development — I help people use technology confidently, then build the tools that make that easier.";

export const aboutBio = [
  "I started in hospitality — leading kitchen teams under pressure, coordinating service, and learning how clear communication keeps everything running when it matters most.",
  "That mindset carried into IT. At CityFitness I supported users day to day; at Datacom I built an AI-driven newsletter that kept staff informed with curated industry updates.",
  "Today I ship web apps with React and Next.js, explore AI-assisted workflows, and bring the same user-first approach to every project — whether I'm troubleshooting access issues or deploying a new feature.",
];

export const aboutPillars = [
  {
    title: "People first",
    text: "Strong communication and empathy from hospitality and front-line IT support.",
  },
  {
    title: "Practical builder",
    text: "Deployed apps, testing workflows, and tools that solve real problems.",
  },
  {
    title: "Always learning",
    text: "Growing into development while staying grounded in how users actually work.",
  },
];

export type Project = {
  title: string;
  description: string;
  outcome: string;
  tech: string[];
  linkLabel: string;
  linkHref: string;
  githubHref?: string;
  image?: string;
  featured?: boolean;
  accent: "teal" | "slate" | "stone";
};

export const projects: Project[] = [
  {
    title: "PawMatch.fit",
    description:
      "Pet adoption matching platform. Built user-facing features, UI/UX improvements, testing, and deployment workflows.",
    outcome: "Live product helping users match with adoptable pets.",
    tech: ["React", "TypeScript", "Firebase", "Vercel", "Tailwind CSS"],
    linkLabel: "View Live Demo",
    linkHref: "https://pawmatch.fit",
    githubHref: "https://github.com/PawMatch/pawmatch",
    image: "/projects/pawmatch.png",
    featured: true,
    accent: "teal",
  },
  {
    title: "OpenTrackr",
    description:
      "Smart productivity app for tasks, to-do lists, and a built-in calendar. Set priorities, track deadlines, and personalise your workflow with themes.",
    outcome: "Deployed demo for task management with calendar integration.",
    tech: ["JavaScript", "React", "Vercel"],
    linkLabel: "View Live Demo",
    linkHref: "https://open-trackr.vercel.app",
    githubHref: "https://github.com/Giza88/OpenTrackr",
    image: "/projects/opentrackr.png",
    featured: true,
    accent: "slate",
  },
  {
    title: "ThinkLoop",
    description:
      "Deployed web app built with React and TypeScript for capturing ideas and keeping work organised in a clean, focused interface.",
    outcome: "Shipped idea-capture app with a clean, focused UX.",
    tech: ["TypeScript", "React", "Vite", "Vercel"],
    linkLabel: "View Live Demo",
    linkHref: "https://think-loop-brown.vercel.app",
    githubHref: "https://github.com/Giza88/ThinkLoop",
    image: "/projects/thinkloop.png",
    featured: true,
    accent: "stone",
  },
  {
    title: "Paw Health",
    description:
      "Mobile-first pet health tracker for medical records, medications, and vet visits. Supports multiple pets with timeline views and dose reminders.",
    outcome: "Full-stack health tracker with reminders and timeline views.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/Paw-Health",
    image: "/projects/paw-health.png",
    featured: true,
    accent: "teal",
  },
  {
    title: "Datacom AI Newsletter",
    description:
      "Automated AI-driven newsletter that aggregated RSS feeds and generated industry updates for Datacom staff during my internship.",
    outcome: "Automated internal newsletter delivered to Datacom staff.",
    tech: ["Python", "RSS Aggregation", "AI APIs", "Automation"],
    linkLabel: "See Experience",
    linkHref: "#experience",
    githubHref: "https://github.com/Giza88/Datacom-Ai-agent-training-",
    featured: true,
    accent: "slate",
  },
  {
    title: "Microsoft Ollama Agent",
    description:
      "Modular Python agent built with the Microsoft Agent Framework and local Ollama models for free, offline AI with tools, workflows, and memory.",
    outcome: "Offline AI agent with tools, memory, and workflow support.",
    tech: ["Python", "Ollama", "Microsoft Agent Framework", "Azure Functions"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/Micosoft_Ollama_first_agent",
    image: "/projects/ollama-agent.png",
    featured: true,
    accent: "stone",
  },
  {
    title: "Free Hack AI",
    description:
      "Secure, fully offline local-AI environment for ethical penetration-testing workflows. Runs models locally in an isolated sandbox for learning security techniques.",
    outcome: "Offline sandbox for ethical security learning.",
    tech: ["TypeScript", "Local AI", "Security", "Offline-first"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/Free_Hack_Ai",
    accent: "teal",
  },
  {
    title: "HTB AI Helper",
    description:
      "AI assistant built to support Hack The Box learning with practical guidance and workflow help for security challenges.",
    outcome: "AI assistant for structured security challenge learning.",
    tech: ["TypeScript", "AI", "Hack The Box"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/HTB_AI_HELPER",
    accent: "slate",
  },
  {
    title: "Health & Safety Toolkit",
    description:
      "Adaptable health and safety toolkit for businesses. Streamlines incident reporting, hazard tracking, and basic compliance tasks.",
    outcome: "Toolkit for incident reporting and hazard tracking.",
    tech: ["Web App", "Compliance", "Incident Reporting"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/health-safety-project",
    accent: "stone",
  },
  {
    title: "Pure NZ Journeys",
    description:
      "Multi-page tourism website for New Zealand with responsive UI, consistent branding, and curated content for destinations, tours, and travel tips.",
    outcome: "Responsive multi-page tourism site with consistent branding.",
    tech: ["HTML", "CSS", "Responsive Design", "Tourism"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/nz-pure-tourism-web-site",
    accent: "teal",
  },
  {
    title: "TO-Done",
    description:
      "A playful take on a to-do app — my first app built by extending an existing project, focused on learning modern JavaScript patterns.",
    outcome: "First extended app project for learning JS patterns.",
    tech: ["JavaScript", "To-Do App", "UI"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/TO-Done-_A-Play-On-TO-Do-App",
    accent: "slate",
  },
  {
    title: "Car Project",
    description:
      "My first React project — a fun build that helped me learn component structure, state, and front-end fundamentals.",
    outcome: "First React project covering components and state.",
    tech: ["JavaScript", "React"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/Car-Project-Take-2",
    accent: "stone",
  },
  {
    title: "Ai-free",
    description:
      "Next.js project exploring free and accessible AI tooling with a modern web interface.",
    outcome: "Next.js interface exploring accessible AI tooling.",
    tech: ["TypeScript", "Next.js", "AI"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/Ai-free-",
    accent: "teal",
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
