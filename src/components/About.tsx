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

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card-surface p-6 sm:p-8">
            <div className="space-y-4 text-base leading-7 text-muted">
              {aboutBio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
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
            ].map((item) => (
              <div key={item.title} className="card-surface p-5">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
