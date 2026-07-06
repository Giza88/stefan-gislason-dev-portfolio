import { introParagraph, siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />
      </div>

      <div className="section-container section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <p className="animate-fade-up mb-4 inline-flex items-center rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-muted shadow-sm">
            Available for IT support & development opportunities
          </p>

          <h1 className="animate-fade-up animation-delay-100 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="animate-fade-up animation-delay-200 mt-4 text-xl font-medium text-primary sm:text-2xl">
            {siteConfig.tagline}
          </p>

          <p className="animate-fade-up animation-delay-300 mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {introParagraph}
          </p>

          <div className="animate-fade-up animation-delay-400 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
          </div>
        </div>
      </div>
    </section>
  );
}
