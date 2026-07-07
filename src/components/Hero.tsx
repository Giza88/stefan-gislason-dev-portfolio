import FadeIn from "@/components/FadeIn";
import ProfileImage from "@/components/ProfileImage";
import { heroHighlights, introParagraph, siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-64 w-64 max-w-full -translate-x-1/2 rounded-full bg-teal-100/50 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
        <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-stone-200/50 blur-3xl sm:h-64 sm:w-64" />
      </div>

      <div className="section-container section-padding w-full pb-16 sm:pb-20 lg:pb-24">
        <div className="flex w-full flex-col gap-8 sm:gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          <div className="flex min-w-0 flex-1 flex-col">
            <FadeIn
              immediate
              className="mb-6 flex w-full max-w-full flex-col gap-2 rounded-2xl border border-border bg-white/90 px-4 py-3 shadow-sm backdrop-blur-sm sm:w-fit sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                <span
                  className="status-dot-pulse inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                {siteConfig.availability.status}
              </span>
              <span className="hidden h-4 w-px shrink-0 bg-border sm:block" aria-hidden="true" />
              <span className="text-sm text-muted">{siteConfig.location}</span>
              <span className="hidden h-4 w-px shrink-0 bg-border sm:block" aria-hidden="true" />
              <span className="text-sm font-medium text-primary">
                {siteConfig.availability.roles}
              </span>
            </FadeIn>

            <FadeIn
              immediate
              as="h1"
              delay={100}
              className="font-display w-full text-[clamp(1.875rem,4vw+1rem,3.25rem)] font-bold leading-[1.12] tracking-tight text-foreground text-balance"
            >
              {siteConfig.headline}
            </FadeIn>

            <FadeIn
              immediate
              as="p"
              delay={200}
              className="mt-4 w-full text-base font-medium text-muted sm:text-lg lg:text-xl"
            >
              <span className="text-foreground">{siteConfig.name}</span>
              <span className="mx-2 hidden sm:inline">·</span>
              <span className="mt-1 block sm:mt-0 sm:inline">{siteConfig.tagline}</span>
            </FadeIn>

            <FadeIn
              immediate
              as="p"
              delay={300}
              className="mt-5 w-full max-w-3xl text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8"
            >
              {introParagraph}
            </FadeIn>

            <FadeIn
              immediate
              delay={400}
              className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap"
            >
              <a href="#projects" className="btn-primary btn-interactive sm:min-w-[9.5rem]">
                View Projects
              </a>
              <a
                href={siteConfig.cvPath}
                download
                className="btn-secondary btn-interactive sm:min-w-[9.5rem]"
              >
                Download CV
              </a>
              <a href="#contact" className="btn-ghost btn-interactive sm:min-w-[9.5rem]">
                Get in Touch
              </a>
            </FadeIn>
          </div>

          <FadeIn
            immediate
            delay={200}
            className="flex w-full shrink-0 justify-center lg:w-auto lg:justify-end"
          >
            <div className="relative w-full max-w-[14rem] overflow-hidden rounded-3xl border border-border bg-white p-1.5 shadow-md sm:max-w-[16rem] lg:max-w-[18rem]">
              <ProfileImage className="aspect-square w-full rounded-[1.35rem] object-cover object-top" />
            </div>
          </FadeIn>
        </div>

        <FadeIn
          immediate
          delay={500}
          className="mt-10 flex w-full flex-col gap-3 sm:mt-14 sm:flex-row sm:flex-wrap lg:flex-nowrap"
        >
          {heroHighlights.map((item) => (
            <div
              key={item.label}
              className="flex flex-1 flex-col rounded-xl border border-border bg-white/80 px-4 py-3.5 text-left shadow-sm backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                {item.label}
              </p>
              <p className="mt-1.5 text-sm leading-6 text-muted">{item.value}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
