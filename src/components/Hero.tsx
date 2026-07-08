import FadeIn from "@/components/FadeIn";
import HeroActions from "@/components/HeroActions";
import ProfileImage from "@/components/ProfileImage";
import { heroHighlights, introParagraph, siteConfig } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={siteConfig.backgroundImage}
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <div className="relative z-10 flex min-h-[17rem] flex-col justify-end pt-16 sm:min-h-[20rem] sm:pt-20 lg:min-h-[22rem]">
          <div className="section-container w-full px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8">
            <FadeIn
              immediate
              className="mx-auto flex w-full max-w-3xl flex-col gap-2 rounded-2xl border border-border bg-white/95 px-4 py-3 text-center shadow-sm backdrop-blur-sm sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2"
            >
              <span className="inline-flex items-center justify-center gap-2 text-sm font-medium text-foreground">
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
          </div>
        </div>
      </div>

      <div className="section-container section-padding w-full bg-white pb-16 text-center sm:pb-20 lg:pb-24">
        <FadeIn
          immediate
          delay={100}
          className="mx-auto flex w-full max-w-[14rem] justify-center sm:max-w-[16rem] lg:max-w-[18rem]"
        >
          <div className="relative w-full overflow-hidden rounded-3xl border border-border bg-white p-1.5 shadow-md">
            <ProfileImage className="aspect-square w-full rounded-[1.35rem] object-cover object-top" />
          </div>
        </FadeIn>

        <FadeIn
          immediate
          as="h1"
          delay={200}
          className="font-display mx-auto mt-8 w-full max-w-4xl text-[clamp(1.875rem,4vw+1rem,3.25rem)] font-bold leading-[1.12] tracking-tight text-foreground text-balance"
        >
          {siteConfig.headline}
        </FadeIn>

        <FadeIn
          immediate
          as="p"
          delay={300}
          className="mx-auto mt-4 w-full max-w-3xl text-base font-medium text-muted sm:text-lg lg:text-xl"
        >
          <span className="text-foreground">{siteConfig.name}</span>
          <span className="mx-2 hidden sm:inline">·</span>
          <span className="mt-1 block sm:mt-0 sm:inline">{siteConfig.tagline}</span>
        </FadeIn>

        <FadeIn
          immediate
          as="p"
          delay={400}
          className="mx-auto mt-5 w-full max-w-3xl text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8"
        >
          {introParagraph}
        </FadeIn>

        <FadeIn immediate delay={500} className="mx-auto w-full max-w-3xl">
          <HeroActions />
        </FadeIn>

        <FadeIn
          immediate
          delay={500}
          className="mx-auto mt-10 flex w-full max-w-5xl flex-col gap-3 sm:mt-14 sm:flex-row sm:flex-wrap lg:flex-nowrap"
        >
          {heroHighlights.map((item) => (
            <div
              key={item.label}
              className="flex flex-1 flex-col rounded-xl border border-border bg-surface-muted px-4 py-3.5 text-center shadow-sm"
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
