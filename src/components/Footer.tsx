import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface-muted">
      <div className="section-container flex w-full flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
          <a
            href={siteConfig.siteUrl}
            className="mt-1 block text-sm text-muted transition-colors hover:text-primary"
          >
            stefangislason.online
          </a>
          <p className="mt-1 text-sm text-muted">
            ©{" "}
            <time dateTime="2026" suppressHydrationWarning>
              {new Date().getFullYear()}
            </time>{" "}
            {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-muted transition-colors hover:text-primary"
          >
            Phone
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted transition-colors hover:text-primary"
          >
            Email
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={siteConfig.cvPath}
            download
            className="text-muted transition-colors hover:text-primary"
          >
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
