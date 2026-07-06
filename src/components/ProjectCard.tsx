import Image from "next/image";
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
    <article className="card-surface flex h-full flex-col overflow-hidden">
      {project.image ? (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-slate-100">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div
          className={`flex aspect-[16/10] items-center justify-center border-b border-border ${accentStyles[project.accent]}`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em]">
            {project.title}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-8">
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
      </div>
    </article>
  );
}
