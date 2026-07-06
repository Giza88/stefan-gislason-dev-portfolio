import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I have grown"
          description="From hospitality leadership to IT support and development — each role has shaped how I communicate, solve problems, and support users."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute bottom-0 left-4 top-0 w-px bg-border sm:left-5"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <div key={`${item.company}-${item.role}`} className="relative pl-12 sm:pl-14">
                <div
                  className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-white bg-primary shadow-sm sm:left-3.5"
                  aria-hidden="true"
                />

                <div className="card-surface p-5 sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-primary">
                        {item.company}
                      </p>
                    </div>
                    <span className="text-sm text-muted">{item.period}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                  {index === 0 && (
                    <p className="mt-3 rounded-lg bg-blue-50 px-3 py-2 text-xs font-medium text-blue-800">
                      Highlight: Built the Datacom AI Newsletter during this internship.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
