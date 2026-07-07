export const siteConfig = {
  name: "Stefan Gislason",
  tagline: "IT Support Professional & Emerging Developer",
  headline: "Reliable IT support with a builder's mindset",
  email: "stefangislason@outlook.com",
  phone: "02108182178",
  linkedin: "https://www.linkedin.com/in/stefan-gislason-53948426b/",
  github: "https://github.com/Giza88",
  cvPath: "/stefan-gislason-cv.pdf",
  location: "Auckland, New Zealand",
  url: "https://stefangislason.online",
  logo: "/logo.png",
  profileImage: "/profile.png",
  profilePlaceholder: "/profile-placeholder.svg",
  availability: {
    status: "Open to opportunities",
    roles: "IT Support · Service Desk",
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
  { label: "Support", value: "Onboarding, troubleshooting, MFA & access workflows" },
  { label: "Build", value: "HTML, CSS, JavaScript & deployed web apps" },
  { label: "Learn", value: "IT Essentials L4 · Diploma in IT L5 (in progress)" },
];

export const introParagraph =
  "Early-career IT professional with hands-on experience in onboarding, troubleshooting, access management, and customer support across Datacom and CityFitness. Seeking an IT support or service desk role where I can deliver reliable, clear, and confident assistance to users.";

export const aboutBio = [
  "I started in hospitality, leading kitchen teams across Auckland venues from 2009 to 2018 and learning how clear communication and composure keep operations running under pressure.",
  "That mindset carried into IT. At CityFitness I deliver front-line support, onboarding, and account guidance; at Datacom I supported access requests, MFA setup, troubleshooting, and application-related queries.",
  "Alongside support work, I build web apps like PawMatch.fit and continue studying toward my New Zealand Diploma in Information Technology while sharpening my front-end and AI-assisted development skills.",
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
    title: "Datacom IT Internship",
    description:
      "Supported onboarding workflows, troubleshooting, access requests, and MFA setup for Datacom staff during my internship with ANZ Application Services.",
    outcome: "Hands-on IT support across onboarding, access, and application queries.",
    tech: ["IT Support", "MFA", "Onboarding", "Access Management"],
    linkLabel: "See highlight",
    linkHref: "#datacom-highlight",
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
      "A playful take on a to-do app, my first app built by extending an existing project, focused on learning modern JavaScript patterns.",
    outcome: "First extended app project for learning JS patterns.",
    tech: ["JavaScript", "To-Do App", "UI"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88/TO-Done-_A-Play-On-TO-Do-App",
    accent: "slate",
  },
  {
    title: "Car Project",
    description:
      "My first React project, a fun build that helped me learn component structure, state, and front-end fundamentals.",
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
  location?: string;
  description: string;
};

export const datacomHighlight = {
  title: "Datacom Take2 internship",
  description:
    "Featured in Datacom's Take2 graduate celebration. Our team built an AI-powered platform that delivered tailored, newsfeed-style tech trend updates to help employees stay ahead in customer conversations and day-to-day decisions.",
  linkedInUrl:
    "https://www.linkedin.com/feed/update/urn:li:activity:7466017511248015360/",
  embedUrl:
    "https://www.linkedin.com/embed/feed/update/urn:li:activity:7466017511248015360",
};

export const experiences: Experience[] = [
  {
    role: "IT Intern",
    company: "Datacom, ANZ Application Services Team",
    period: "Apr 2026 to Jun 2026",
    location: "Auckland",
    description:
      "Supported onboarding workflows, troubleshooting, access requests, and application-related queries. Guided users through account setup, MFA, permissions, and new system onboarding.",
  },
  {
    role: "Independent Developer",
    company: "PawMatch.fit",
    period: "Sep 2025 to Present",
    description:
      "Designed and built user-facing features with a focus on usability and accessibility. Managed the full development lifecycle from planning to deployment.",
  },
  {
    role: "Receptionist / Customer Support",
    company: "CityFitness",
    period: "Feb 2025 to Present",
    location: "Auckland",
    description:
      "Delivered front-line support and guided customers through onboarding and digital systems. Managed accounts, payments, and system navigation for new members.",
  },
  {
    role: "Chef & Kitchen Team Leader",
    company: "Various Auckland Venues",
    period: "2009 to 2018",
    location: "Auckland",
    description:
      "Led kitchen teams and coordinated operations in high-pressure environments. Developed leadership, time management, and problem-solving skills.",
  },
];

export type Education = {
  qualification: string;
  institution: string;
  period: string;
};

export const education: Education[] = [
  {
    qualification: "New Zealand Diploma in Information Technology (Level 5)",
    institution: "Open Polytechnic of New Zealand",
    period: "2025 to 2026",
  },
  {
    qualification: "New Zealand Certificate in IT Essentials (Level 4)",
    institution: "Toi Ohomai, Windermere Campus",
    period: "2024",
  },
];

export const certifications = [
  "Google IT Support Professional Certificate",
  "Introduction to Cybersecurity, Cisco",
  "Introduction to Generative AI, Google",
  "AI For Everyone, Coursera",
  "NZ Certificate in IT Essentials (Level 4)",
  "NZ Certificate in Computing (Level 2)",
  "NZ Diploma in Information Technology (Level 5)",
];

export const skillGroups = [
  {
    title: "IT & Support",
    skills: [
      "Troubleshooting, onboarding, MFA, and access workflows",
      "Application support and digital systems navigation",
    ],
  },
  {
    title: "Development",
    skills: ["Front-end development: HTML, CSS, JavaScript", "React, Next.js & TypeScript"],
  },
  {
    title: "Tools & AI",
    skills: [
      "AI-assisted workflows: Cursor, GitHub Copilot, Perplexity",
      "Basic UI/UX awareness and user-focused design",
    ],
  },
];

export const softSkills = [
  "Clear and professional communication",
  "Strong problem-solving and analytical thinking",
  "Attention to detail and accuracy",
  "Process-driven approach to troubleshooting",
  "Collaborative teamwork in technical environments",
  "Curiosity-driven learning and adaptability",
];
