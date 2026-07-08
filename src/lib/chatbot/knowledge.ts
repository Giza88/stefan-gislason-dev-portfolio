import {
  aboutBio,
  certifications,
  datacomHighlight,
  education,
  experiences,
  introParagraph,
  navLinks,
  projects,
  siteConfig,
  skillGroups,
  softSkills,
} from "@/lib/data";

export const sectionMap: Record<string, string> = {
  Home: "#home",
  About: "#about",
  Projects: "#projects",
  Experience: "#experience",
  Skills: "#skills",
  Contact: "#contact",
  "Datacom highlight": "#datacom-highlight",
};

export const quickFacts = {
  name: siteConfig.name,
  tagline: siteConfig.tagline,
  email: siteConfig.email,
  phone: siteConfig.phone,
  linkedin: siteConfig.linkedin,
  github: siteConfig.github,
  cvPath: siteConfig.cvPath,
  location: siteConfig.location,
  availability: siteConfig.availability.status,
  roles: siteConfig.availability.roles,
};

export const suggestedPrompts = [
  { label: "Show me your projects", message: "Show me your projects" },
  { label: "How do I contact you?", message: "How do I contact you?" },
  { label: "Download your CV", message: "Download your CV" },
  { label: "Tell me about your experience", message: "Tell me about your experience" },
  { label: "What skills do you have?", message: "What skills do you have?" },
  { label: "Where is the Datacom highlight?", message: "Where is the Datacom highlight?" },
] as const;

export function getAboutSummary(): string {
  return `${introParagraph} ${aboutBio[0]}`;
}

export function getExperienceSummary(): string {
  const recent = experiences.slice(0, 3);
  return recent
    .map((exp) => `${exp.role} at ${exp.company} (${exp.period}): ${exp.description}`)
    .join(" ");
}

export function getSkillsSummary(): string {
  const technical = skillGroups
    .map((group) => `${group.title}: ${group.skills.join(", ")}`)
    .join(". ");
  const soft = softSkills.slice(0, 3).join(", ");
  return `${technical}. Soft skills include ${soft}.`;
}

export function getProjectsSummary(): string {
  const featured = projects.filter((p) => p.featured).slice(0, 5);
  return featured
    .map((p) => `${p.title}: ${p.description}`)
    .join(" ");
}

export function getDatacomSummary(): string {
  return `${datacomHighlight.title}. ${datacomHighlight.description}`;
}

export function getEducationSummary(): string {
  return education
    .map((e) => `${e.qualification} at ${e.institution} (${e.period})`)
    .join(". ");
}

export function getKnowledgeContext(): string {
  const sections = Object.entries(sectionMap)
    .map(([label, id]) => `${label}: ${id}`)
    .join(", ");

  const projectList = projects
    .map((p) => `- ${p.title}: ${p.description} Tech: ${p.tech.join(", ")}`)
    .join("\n");

  const experienceList = experiences
    .map((e) => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`)
    .join("\n");

  const skillList = skillGroups
    .map((g) => `- ${g.title}: ${g.skills.join("; ")}`)
    .join("\n");

  return `You are Stef, the site guide for ${siteConfig.name}'s portfolio.

SITE SECTIONS: ${sections}

QUICK FACTS:
- Name: ${siteConfig.name}
- Tagline: ${siteConfig.tagline}
- Email: ${siteConfig.email}
- Phone: ${siteConfig.phone}
- Location: ${siteConfig.location}
- Website: ${siteConfig.siteUrl}
- LinkedIn: ${siteConfig.linkedin}
- GitHub: ${siteConfig.github}
- CV: ${siteConfig.cvPath}
- Availability: ${siteConfig.availability.status} (${siteConfig.availability.roles})

ABOUT: ${getAboutSummary()}

PROJECTS:
${projectList}

EXPERIENCE:
${experienceList}

DATACOM HIGHLIGHT: ${getDatacomSummary()}

SKILLS:
${skillList}
Soft skills: ${softSkills.join(", ")}

EDUCATION: ${getEducationSummary()}

CERTIFICATIONS: ${certifications.join(", ")}

NAV LINKS: ${navLinks.map((l) => `${l.label} → ${l.href}`).join(", ")}

RULES:
- Answer ONLY from the information above.
- If you don't know something, say you don't know and suggest the Contact section.
- Keep answers concise and helpful.
- Do not invent experience, skills, or projects.`;
}
