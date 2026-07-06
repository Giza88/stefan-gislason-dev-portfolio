import FadeIn from "@/components/FadeIn";
import ProfileImage from "@/components/ProfileImage";
import SectionHeading from "@/components/SectionHeading";
import { aboutBio } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="Support-first, builder-minded"
          description="I bring a practical IT support background together with hands-on development experience — always focused on helping people use technology with confidence."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <FadeIn className="flex flex-col items-center lg:items-start">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-slate-50 shadow-sm">
              <ProfileImage className="h-72 w-72 object-cover" />
            </div>
            <p className="mt-4 max-w-xs text-center text-xs leading-6 text-muted lg:text-left">
              Add your own photo by placing{" "}
              <code className="rounded bg-slate-100 px-1.5 py-0.5">profile.jpg</code> in the{" "}
              <code className="rounded bg-slate-100 px-1.5 py-0.5">public/</code> folder.
            </p>
          </FadeIn>

          <div className="grid gap-8">
            <FadeIn delay={100} className="card-surface p-6 sm:p-8">
              <div className="space-y-4 text-base leading-7 text-muted">
                {aboutBio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
              {[
                {
                  title: "Support Experience",
                  text: "Onboarding, troubleshooting, and user-focused IT support in real workplace environments.",
                },
                {
                  title: "Development Projects",
                  text: "Building and shipping web tools with modern frameworks, testing, and deployment workflows.",
                },
                {
                  title: "AI & Automation",
                  text: "Exploring AI-assisted workflows to improve communication, productivity, and digital systems.",
                },
              ].map((item, index) => {
                const delays = [200, 300, 400] as const;
                return (
                  <FadeIn
                    key={item.title}
                    delay={delays[index] ?? 400}
                    className="card-surface p-5"
                  >
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
