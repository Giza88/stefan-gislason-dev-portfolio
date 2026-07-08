import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding w-full bg-white">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="Experience"
            title="Where I have grown"
            description="From hospitality leadership to IT internships and customer support. Each role has shaped how I communicate, solve problems, and support users."
          />
        </FadeIn>

        <div className="mx-auto w-full max-w-3xl space-y-8">
          {experiences.map((item, index) => {
            const delays = [100, 200, 300, 400] as const;
            return (
              <FadeIn key={`${item.company}-${item.role}`} delay={delays[index] ?? 400}>
                <div className="card-surface card-interactive min-w-0 p-5 text-center sm:p-6">
                  <div className="flex min-w-0 flex-col gap-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-primary">{item.company}</p>
                    {item.location && <p className="text-xs text-muted">{item.location}</p>}
                    <span className="text-sm text-muted">{item.period}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                  {index === 0 && (
                    <p className="mt-3 rounded-lg bg-teal-50 px-3 py-2 text-xs font-medium text-teal-900">
                      Also featured in Datacom&apos;s Take2 graduate celebration for an AI-powered
                      trend platform built during the internship.
                    </p>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
