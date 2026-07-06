export const siteConfig = {
  name: "Stefan Gislason",
  tagline: "IT Support Professional & Emerging Developer",
  email: "stefangislason@outlook.com",
  linkedin: "https://www.linkedin.com/in/stefan-gislason",
  github: "https://github.com/Giza88",
  cvPath: "/stefan-gislason-cv.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
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
};

export const projects: Project[] = [
  {
    title: "PawMatch.fit",
    description:
      "Pet adoption matching platform. Built user-facing features, UI/UX improvements, testing, and deployment workflows.",
    tech: ["React", "TypeScript", "Firebase", "Vercel", "Tailwind CSS"],
    linkLabel: "View Live Demo",
    linkHref: "https://pawmatch.fit",
  },
  {
    title: "OpenTrackr",
    description:
      "Package tracking tool built with modern web tools. Designed for clarity and speed, deployed on Vercel.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/Giza88",
  },
  {
    title: "Datacom AI Newsletter",
    description:
      "Automated AI-driven newsletter that aggregated RSS feeds and generated industry updates for Datacom staff.",
    tech: ["Python", "RSS Aggregation", "AI APIs", "Automation"],
    linkLabel: "Project Overview",
    linkHref: "#experience",
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

export const technicalSkills = [
  "IT Support & Troubleshooting",
  "MFA & Access Management",
  "HTML, CSS & GitHub",
  "AI Tools (Cursor, Copilot, Perplexity)",
  "Digital Systems & Onboarding",
  "React, Next.js & TypeScript",
];

export const softSkills = [
  "Communication",
  "Empathy",
  "Problem-solving",
  "Adaptability",
  "Attention to detail",
  "User-focused mindset",
];
