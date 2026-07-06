import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
};

const accentStyles: Record<Project["accent"], string> = {
  blue: "bg-blue-50 text-primary",
  violet: "bg-violet-50 text-violet-600",
  emerald: "bg-emerald-50 text-emerald-600",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = !project.linkHref.startsWith("#");

  return (
    <article className="card-surface flex h-full flex-col p-6 sm:p-8">
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${accentStyles[project.accent]}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7h16M4 12h16M4 17h10M8 7V5m8 2V5"
          />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-muted">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <a
          href={project.linkHref}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          {project.linkLabel}
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

        {project.githubHref && project.githubHref !== project.linkHref && (
          <a
            href={project.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted transition-colors hover:text-primary"
          >
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
