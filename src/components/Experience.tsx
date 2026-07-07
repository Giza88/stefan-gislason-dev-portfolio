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

        <div className="relative w-full lg:max-w-4xl">
          <div
            className="absolute bottom-0 left-4 top-0 w-px bg-border sm:left-5"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experiences.map((item, index) => {
              const delays = [100, 200, 300, 400] as const;
              return (
                <FadeIn key={`${item.company}-${item.role}`} delay={delays[index] ?? 400}>
                  <div className="relative pl-12 sm:pl-14">
                    <div
                      className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-primary shadow-sm sm:left-3.5"
                      aria-hidden="true"
                    />

                    <div className="card-surface card-interactive min-w-0 p-5 sm:p-6">
                      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                        <div className="min-w-0">
                          <h3 className="font-display text-lg font-semibold text-foreground">
                            {item.role}
                          </h3>
                          <p className="text-sm font-medium text-primary">{item.company}</p>
                          {item.location && (
                            <p className="text-xs text-muted">{item.location}</p>
                          )}
                        </div>
                        <span className="shrink-0 text-sm text-muted">{item.period}</span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                      {index === 0 && (
                        <p className="mt-3 rounded-lg bg-teal-50 px-3 py-2 text-xs font-medium text-teal-900">
                          Also featured in Datacom&apos;s Take2 graduate celebration for an
                          AI-powered trend platform built during the internship.
                        </p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
