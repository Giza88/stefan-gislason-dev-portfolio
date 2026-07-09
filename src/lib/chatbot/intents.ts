import {
  getAboutSummary,
  getDatacomSummary,
  getExperienceSummary,
  getProjectsSummary,
  getFeaturedProjectNames,
  getSkillsSummary,
  quickFacts,
  sectionMap,
  suggestedPrompts,
} from "@/lib/chatbot/knowledge";
import type { ChatAction, ChatResponse } from "@/lib/chatbot/types";
import { projects, datacomHighlight } from "@/lib/data";

type IntentRule = {
  intent: string;
  patterns: RegExp[];
  priority: number;
};

const intentRules: IntentRule[] = [
  {
    intent: "download_cv",
    priority: 10,
    patterns: [/\b(cv|resume|curriculum\s*vitae)\b/i, /\bdownload\b.*\b(cv|resume)\b/i],
  },
  {
    intent: "copy_email",
    priority: 9,
    patterns: [
      /\b(email|e-mail|mail\s*address)\b/i,
      /what('s| is) (your|stefan'?s?) email/i,
      /\bcopy\b.*\bemail\b/i,
    ],
  },
  {
    intent: "datacom_highlight",
    priority: 9,
    patterns: [
      /where is the datacom/i,
      /tell me about datacom/i,
      /\bdatacom\b/i,
      /\btake\s*2\b/i,
      /\btake2\b/i,
      /\bhighlight\b/i,
    ],
  },
  {
    intent: "show_contact",
    priority: 8,
    patterns: [
      /\b(contact|get in touch|reach out|hire|hiring|phone|linkedin|github)\b/i,
      /how (can|do) i (contact|reach)/i,
    ],
  },
  {
    intent: "show_projects",
    priority: 8,
    patterns: [
      /show me (your )?projects/i,
      /tell me about (your )?projects/i,
      /\bprojects?\b/i,
      /\bportfolio\b/i,
      /\bwork\b/i,
      /\bpawmatch\b/i,
      /\bopentrackr\b/i,
      /\bthinkloop\b/i,
      /\bmino\b/i,
      /\bpaw\s*health\b/i,
      /\blive\s*demo\b/i,
    ],
  },
  {
    intent: "experience_summary",
    priority: 8,
    patterns: [
      /tell me about (your )?experience/i,
      /\bexperience\b/i,
      /\bwork\s*history\b/i,
      /\bemployment\b/i,
      /\bcityfitness\b/i,
      /\bintern(ship)?\b/i,
      /\bjob(s)?\b/i,
    ],
  },
  {
    intent: "skills_summary",
    priority: 8,
    patterns: [
      /what skills do you have/i,
      /tell me about (your )?skills/i,
      /\bskills?\b/i,
      /\btech\s*stack\b/i,
      /\btechnologies\b/i,
      /\bwhat (can|do) you (know|use)\b/i,
    ],
  },
  {
    intent: "availability",
    priority: 7,
    patterns: [
      /\bavailable\b/i,
      /\bavailability\b/i,
      /\bopen to\b/i,
      /\blooking for\b/i,
      /\bhire\b/i,
    ],
  },
  {
    intent: "about_stefan",
    priority: 6,
    patterns: [
      /\babout\b/i,
      /\bwho (are|is) (you|stefan)\b/i,
      /\btell me about\b/i,
      /\bbackground\b/i,
      /\bbio\b/i,
    ],
  },
  {
    intent: "navigate_section",
    priority: 5,
    patterns: [
      /\bgo to\b/i,
      /\bshow me\b/i,
      /\btake me\b/i,
      /\bwhere (is|are)\b/i,
      /\bnavigate\b/i,
      /\bscroll\b/i,
      /#\w+/i,
    ],
  },
];

const sectionKeywords: Record<string, RegExp[]> = {
  "#home": [/\bhome\b/i],
  "#about": [/\babout\b/i],
  "#projects": [/\bprojects?\b/i, /\bportfolio\b/i, /\bwork\b/i],
  "#experience": [/\bexperience\b/i, /\bwork\s*history\b/i],
  "#skills": [/\bskills?\b/i, /\btech\s*stack\b/i],
  "#contact": [/\bcontact\b/i, /\bget in touch\b/i],
  "#datacom-highlight": [/\bdatacom\b/i, /\bhighlight\b/i, /\btake\s*2\b/i],
};

function scrollAction(target: string, label: string): ChatAction {
  return { type: "scroll", target, label };
}

function buildContactActions(): ChatAction[] {
  return [
    scrollAction("#contact", "Go to Contact"),
    { type: "copy", value: quickFacts.email, label: "Copy email" },
    { type: "link", href: quickFacts.linkedin, label: "LinkedIn" },
    { type: "link", href: quickFacts.github, label: "GitHub" },
  ];
}

function findProjectMatch(message: string) {
  return projects.find((project) => {
    const titlePattern = new RegExp(project.title.replace(/\./g, "\\."), "i");
    return titlePattern.test(message);
  });
}

function detectSection(message: string): string | null {
  for (const [target, patterns] of Object.entries(sectionKeywords)) {
    if (patterns.some((pattern) => pattern.test(message))) {
      return target;
    }
  }
  return null;
}

function matchIntent(message: string): { intent: string; score: number } | null {
  let best: { intent: string; score: number; priority: number } | null = null;

  for (const rule of intentRules) {
    const matches = rule.patterns.filter((pattern) => pattern.test(message)).length;
    if (matches === 0) {
      continue;
    }

    if (
      !best ||
      matches > best.score ||
      (matches === best.score && rule.priority > best.priority)
    ) {
      best = { intent: rule.intent, score: matches, priority: rule.priority };
    }
  }

  return best ? { intent: best.intent, score: best.score } : null;
}

function buildFallbackResponse(): ChatResponse {
  return {
    intent: "fallback_help",
    message:
      "I'm not sure about that one. I can help you explore projects, experience, skills, contact details, or download Stefan's CV. Try one of the suggestions below.",
    actions: [
      scrollAction("#projects", "View Projects"),
      scrollAction("#contact", "Contact"),
      { type: "download", href: quickFacts.cvPath, label: "Download CV" },
    ],
  };
}

function respond(intent: string, message: string): ChatResponse {
  switch (intent) {
    case "download_cv":
      return {
        intent,
        message: "You can download Stefan's CV as a PDF. I'll start the download for you.",
        actions: [
          { type: "download", href: quickFacts.cvPath, label: "Download CV" },
          scrollAction("#contact", "Get in touch"),
        ],
      };

    case "copy_email":
      return {
        intent,
        message: `Stefan's email is ${quickFacts.email}. I can copy it for you.`,
        actions: [
          { type: "copy", value: quickFacts.email, label: "Copy email" },
          scrollAction("#contact", "Go to Contact"),
        ],
      };

    case "show_contact":
      return {
        intent,
        message: `You can reach Stefan at ${quickFacts.email} or ${quickFacts.phone}. He's based in ${quickFacts.location}.`,
        actions: buildContactActions(),
      };

    case "datacom_highlight": {
      return {
        intent,
        message: getDatacomSummary(),
        actions: [
          scrollAction("#datacom-highlight", "View Datacom highlight"),
          { type: "link", href: datacomHighlight.linkedInUrl, label: "LinkedIn post" },
        ],
      };
    }

    case "show_projects": {
      const project = findProjectMatch(message);
      if (project) {
        return {
          intent,
          message: `${project.title}: ${project.description} Outcome: ${project.outcome}`,
          actions: [
            scrollAction("#projects", "View Projects"),
            ...(project.linkHref.startsWith("#")
              ? [scrollAction(project.linkHref, project.linkLabel)]
              : [{ type: "link" as const, href: project.linkHref, label: project.linkLabel }]),
          ],
        };
      }

      return {
        intent,
        message: `${getProjectsSummary()} Featured projects include ${getFeaturedProjectNames()}.`,
        actions: [scrollAction("#projects", "Go to Projects")],
      };
    }

    case "experience_summary":
      return {
        intent,
        message: getExperienceSummary(),
        actions: [
          scrollAction("#experience", "View Experience"),
          scrollAction("#datacom-highlight", "Datacom highlight"),
        ],
      };

    case "skills_summary":
      return {
        intent,
        message: getSkillsSummary(),
        actions: [scrollAction("#skills", "View Skills")],
      };

    case "about_stefan":
      return {
        intent,
        message: getAboutSummary(),
        actions: [scrollAction("#about", "Read About"), scrollAction("#projects", "View Projects")],
      };

    case "availability":
      return {
        intent,
        message: `Stefan is ${quickFacts.availability.toLowerCase()} for ${quickFacts.roles} roles in ${quickFacts.location}.`,
        actions: [
          scrollAction("#contact", "Get in touch"),
          { type: "copy", value: quickFacts.email, label: "Copy email" },
        ],
      };

    case "navigate_section": {
      const target = detectSection(message);
      if (target) {
        const label =
          Object.entries(sectionMap).find(([, id]) => id === target)?.[0] ?? "section";
        return {
          intent,
          message: `I'll take you to the ${label} section.`,
          actions: [scrollAction(target, `Go to ${label}`)],
        };
      }
      break;
    }
  }

  return buildFallbackResponse();
}

export function matchChatIntent(message: string): ChatResponse {
  const trimmed = message.trim();
  if (!trimmed) {
    return buildFallbackResponse();
  }

  const match = matchIntent(trimmed);
  if (!match || match.score === 0) {
    return buildFallbackResponse();
  }

  return respond(match.intent, trimmed);
}

export function getSuggestedPrompts() {
  return suggestedPrompts;
}
