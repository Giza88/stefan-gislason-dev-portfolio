"use client";

import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/components/ToastProvider";
import { skillGroups, softSkills } from "@/lib/data";

type SkillListProps = {
  title: string;
  skills: string[];
  onSkillClick: (skill: string) => void;
};

function SkillList({ title, skills, onSkillClick }: SkillListProps) {
  return (
    <div className="card-surface card-interactive h-full p-6 text-center sm:p-8">
      <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
      <ul className="mt-6 space-y-3">
        {skills.map((skill) => (
          <li key={skill}>
            <button
              type="button"
              onClick={() => onSkillClick(skill)}
              className="skill-chip flex w-full items-center justify-center gap-3 rounded-xl px-2 py-1.5 text-sm leading-6 text-muted transition-colors hover:bg-teal-50 hover:text-primary"
              title="Click to copy skill"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
              {skill}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const { showToast } = useToast();
  const groups = [...skillGroups, { title: "Soft Skills", skills: softSkills }];

  const copySkill = async (skill: string) => {
    try {
      await navigator.clipboard.writeText(skill);
      showToast(`Copied: ${skill}`, "success");
    } catch {
      showToast("Could not copy skill text", "error");
    }
  };

  return (
    <section id="skills" className="section-padding w-full">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="Skills"
            title="Technical and people skills"
            description="A balance of practical IT capability and the communication skills needed to support users effectively. Click any skill to copy it."
          />
        </FadeIn>

        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-4">
          {groups.map((group, index) => {
            const delays = [100, 200, 300, 400] as const;
            return (
              <FadeIn key={group.title} delay={delays[index] ?? 400} className="h-full min-w-0">
                <SkillList
                  title={group.title}
                  skills={group.skills}
                  onSkillClick={copySkill}
                />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
