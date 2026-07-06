import { siteConfig } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-slate-50">
      <div className="section-container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
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
