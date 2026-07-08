import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { certifications, education } from "@/lib/data";

export default function EducationSection() {
  return (
    <section id="education" className="section-padding w-full">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="Education"
            title="Learning and credentials"
            description="Formal IT study and industry certifications that support my hands-on support and development experience."
          />
        </FadeIn>

        <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            {education.map((item, index) => {
              const delays = [100, 200] as const;
              return (
                <FadeIn key={item.qualification} delay={delays[index] ?? 200}>
                  <div className="card-surface card-interactive min-w-0 p-5 text-center sm:p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {item.qualification}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">{item.institution}</p>
                    <p className="mt-2 text-sm text-muted">{item.period}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={300}>
            <div className="card-surface h-full p-6 text-center sm:p-8">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Certifications
              </h3>
              <ul className="mt-6 space-y-3">
                {certifications.map((certification) => (
                  <li
                    key={certification}
                    className="flex items-center justify-center gap-3 text-sm leading-6 text-muted"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                    {certification}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
