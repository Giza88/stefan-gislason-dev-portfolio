import SectionHeading from "@/components/SectionHeading";
import { softSkills, technicalSkills } from "@/lib/data";

type SkillListProps = {
  title: string;
  skills: string[];
};

function SkillList({ title, skills }: SkillListProps) {
  return (
    <div className="card-surface p-6 sm:p-8">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
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
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Technical and people skills"
          description="A balance of practical IT capability and the communication skills needed to support users effectively."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <SkillList title="Technical Skills" skills={technicalSkills} />
          <SkillList title="Soft Skills" skills={softSkills} />
        </div>
      </div>
    </section>
  );
}
