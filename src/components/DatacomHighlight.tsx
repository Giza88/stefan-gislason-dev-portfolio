import FadeIn from "@/components/FadeIn";
import LinkedInPostPreview from "@/components/LinkedInPostPreview";
import { datacomHighlight } from "@/lib/data";

export default function DatacomHighlight() {
  return (
    <section id="datacom-highlight" className="w-full pb-20 pt-0 sm:pb-24">
      <div className="section-container">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:items-start">
            <div className="card-surface min-w-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Featured highlight
              </p>
              <h2 className="font-display mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
                {datacomHighlight.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                {datacomHighlight.description}
              </p>
              <a
                href={datacomHighlight.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Watch on LinkedIn
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H8M17 7v9"
                  />
                </svg>
              </a>
            </div>

            <LinkedInPostPreview
              title={datacomHighlight.title}
              description={datacomHighlight.description}
              linkedInUrl={datacomHighlight.linkedInUrl}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
