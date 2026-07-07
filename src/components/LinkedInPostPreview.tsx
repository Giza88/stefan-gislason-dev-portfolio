type LinkedInPostPreviewProps = {
  title: string;
  description: string;
  linkedInUrl: string;
};

export default function LinkedInPostPreview({
  title,
  description,
  linkedInUrl,
}: LinkedInPostPreviewProps) {
  return (
    <a
      href={linkedInUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group card-surface card-interactive flex min-h-[20rem] flex-col justify-between overflow-hidden p-6 sm:min-h-[24rem] sm:p-8"
      aria-label={`Watch ${title} on LinkedIn`}
    >
      <div>
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A66C2] text-sm font-bold text-white">
            in
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Datacom</p>
            <p className="text-xs text-muted">Take2 internship highlight</p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-7 text-muted line-clamp-5">{description}</p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface-muted px-6 py-8 transition-colors group-hover:border-primary/30 group-hover:bg-teal-50/60">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-md transition-transform group-hover:scale-105">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <div className="text-center">
          <p className="text-sm font-semibold text-foreground">Watch on LinkedIn</p>
          <p className="mt-1 text-xs text-muted">Opens the post and video in a new tab</p>
        </div>
      </div>
    </a>
  );
}
