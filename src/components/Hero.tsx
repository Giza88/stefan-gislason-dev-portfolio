import FadeIn from "@/components/FadeIn";
import { heroHighlights, introParagraph, siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />
      </div>

      <div className="section-container section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn
            as="p"
            className="mb-4 inline-flex items-center rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-muted shadow-sm"
          >
            Available for IT support & development opportunities
          </FadeIn>

          <FadeIn as="h1" delay={100} className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {siteConfig.name}
          </FadeIn>

          <FadeIn
            as="p"
            delay={200}
            className="mt-4 text-xl font-medium text-primary sm:text-2xl"
          >
            {siteConfig.tagline}
          </FadeIn>

          <FadeIn
            as="p"
            delay={300}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg"
          >
            {introParagraph}
          </FadeIn>

          <FadeIn delay={400} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
            >
              View My Work
            </a>
            <a
              href={siteConfig.cvPath}
              download
              className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-md"
            >
              Download CV
            </a>
          </FadeIn>

          <FadeIn delay={400} className="mt-12 grid gap-4 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-white/80 px-4 py-4 text-left shadow-sm backdrop-blur-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.value}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
