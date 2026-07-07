import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups, softSkills } from "@/lib/data";

type SkillListProps = {
  title: string;
  skills: string[];
};

function SkillList({ title, skills }: SkillListProps) {
  return (
    <div className="card-surface card-interactive h-full p-6 sm:p-8">
      <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
      <ul className="mt-6 space-y-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="flex items-start gap-3 text-sm leading-6 text-muted"
          >
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const groups = [...skillGroups, { title: "Soft Skills", skills: softSkills }];

  return (
    <section id="skills" className="section-padding w-full">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="Skills"
            title="Technical and people skills"
            description="A balance of practical IT capability and the communication skills needed to support users effectively."
          />
        </FadeIn>

        <div className="grid w-full gap-6 md:grid-cols-2 xl:grid-cols-4">
          {groups.map((group, index) => {
            const delays = [100, 200, 300, 400] as const;
            return (
              <FadeIn key={group.title} delay={delays[index] ?? 400} className="h-full min-w-0">
                <SkillList title={group.title} skills={group.skills} />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
