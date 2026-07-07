"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
};

const accentStyles: Record<Project["accent"], string> = {
  teal: "from-teal-50 to-teal-100/80 text-primary",
  slate: "from-slate-50 to-slate-100/80 text-accent",
  stone: "from-stone-50 to-stone-100/80 text-stone-700",
};

function ProjectImageFallback({ project }: { project: Project }) {
  return (
    <div
      className={`flex aspect-[16/10] flex-col items-center justify-center gap-3 bg-gradient-to-br px-6 ${accentStyles[project.accent]}`}
    >
      <span className="rounded-full border border-current/15 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
        {project.tech[0]}
      </span>
      <span className="text-center text-lg font-semibold">{project.title}</span>
      <span className="text-center text-xs font-medium opacity-80">Screenshot coming soon</span>
    </div>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = !project.linkHref.startsWith("#");
  const [imageError, setImageError] = useState(false);
  const showImage = project.image && !imageError;

  return (
    <article className="card-surface card-interactive flex h-full flex-col overflow-hidden">
      {showImage ? (
        <div className="project-image-wrap relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-muted">
          <Image
            src={project.image!}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        <div className="overflow-hidden border-b border-border">
          <ProjectImageFallback project={project} />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {project.outcome}
        </p>
        <h3 className="font-display mt-2 text-xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-accent"
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
