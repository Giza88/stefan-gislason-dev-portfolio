import FadeIn from "@/components/FadeIn";
import ProfileImage from "@/components/ProfileImage";
import SectionHeading from "@/components/SectionHeading";
import { aboutBio, aboutPillars, siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding w-full bg-white">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="About Me"
            title="From kitchen to keyboard"
            description="Hospitality taught me composure under pressure. IT taught me to listen. Development lets me build the tools that make both easier."
          />
        </FadeIn>

        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 text-center">
          <FadeIn delay={100} className="flex min-w-0 flex-col items-center">
            <div className="relative w-full max-w-[18rem] overflow-hidden rounded-3xl border border-border bg-surface-muted shadow-sm sm:max-w-xs">
              <ProfileImage
                src={siteConfig.profileAboutImage}
                className="aspect-square w-full object-cover object-center"
              />
            </div>
          </FadeIn>

          <FadeIn delay={200} className="card-surface w-full min-w-0 p-6 sm:p-8">
            <div className="space-y-5 text-base leading-7 text-muted">
              {aboutBio.map((paragraph, index) => (
                <p key={paragraph} className="min-w-0 break-words">
                  <span className="font-display mr-1 font-semibold text-foreground">
                    Chapter {index + 1}.
                  </span>
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <div className="grid w-full min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aboutPillars.map((item, index) => {
              const delays = [300, 400, 500] as const;
              return (
                <FadeIn
                  key={item.title}
                  delay={delays[index] ?? 500}
                  className="card-surface card-interactive min-w-0 p-5 sm:last:col-span-2 lg:last:col-span-1"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
