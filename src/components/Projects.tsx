"use client";

import { useMemo, useState } from "react";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/components/ToastProvider";
import { projects, type Project } from "@/lib/data";
import { smoothScrollTo } from "@/lib/smoothScroll";

type ProjectFilter = "featured" | "all" | "live" | "ai" | "web";

const filters: { id: ProjectFilter; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "all", label: "All projects" },
  { id: "live", label: "Live demos" },
  { id: "ai", label: "AI & tools" },
  { id: "web", label: "Web apps" },
];

function matchesFilter(project: Project, filter: ProjectFilter) {
  if (filter === "all") {
    return true;
  }

  if (filter === "featured") {
    return Boolean(project.featured);
  }

  if (filter === "live") {
    return (
      project.linkHref.startsWith("http") && !project.linkHref.includes("github.com")
    );
  }

  if (filter === "ai") {
    return project.tech.some((tech) =>
      /ai|ollama|automation|agent|local ai/i.test(tech),
    );
  }

  return project.tech.some((tech) =>
    /react|next\.js|javascript|typescript|html|css|vite|web app/i.test(tech),
  );
}

export default function Projects() {
  const { showToast } = useToast();
  const [filter, setFilter] = useState<ProjectFilter>("featured");
  const [techFilter, setTechFilter] = useState<string | null>(null);

  const visibleProjects = useMemo(() => {
    let list = projects.filter((project) => matchesFilter(project, filter));

    if (techFilter) {
      list = list.filter((project) =>
        project.tech.some((tech) => tech.toLowerCase() === techFilter.toLowerCase()),
      );
    }

    return list;
  }, [filter, techFilter]);

  const handleFilterChange = (nextFilter: ProjectFilter) => {
    setFilter(nextFilter);
    setTechFilter(null);
  };

  const handleTechClick = (tech: string) => {
    setTechFilter(tech);
    setFilter("all");
    showToast(`Showing projects tagged with ${tech}`, "info");
    smoothScrollTo("#projects");
  };

  return (
    <section id="projects" className="section-padding w-full">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="Projects"
            title="Featured work"
            description={
              techFilter
                ? `Filtered by ${techFilter}. Click a filter pill to reset.`
                : filter === "all"
                  ? "All projects from my GitHub, from deployed products to experiments that solve real problems."
                  : "Projects that show how I support users, ship software, and solve practical problems."
            }
          />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map((item) => {
              const isActive = filter === item.id && !techFilter;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleFilterChange(item.id)}
                  className={`filter-pill ${isActive ? "filter-pill-active" : ""}`}
                >
                  {item.label}
                </button>
              );
            })}

            {techFilter && (
              <button
                type="button"
                onClick={() => setTechFilter(null)}
                className="filter-pill filter-pill-active"
              >
                {techFilter} ×
              </button>
            )}
          </div>
        </FadeIn>

        <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <FadeIn
              key={project.title}
              delay={index % 3 === 1 ? 100 : index % 3 === 2 ? 200 : 0}
              className="project-card-enter h-full min-w-0"
            >
              <ProjectCard project={project} onTechClick={handleTechClick} />
            </FadeIn>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <FadeIn className="mt-8 text-center">
            <p className="text-sm text-muted">
              No projects match this filter yet. Try another category or clear the tech tag.
            </p>
            <button
              type="button"
              onClick={() => {
                setTechFilter(null);
                setFilter("featured");
              }}
              className="btn-secondary btn-interactive mt-4"
            >
              Reset filters
            </button>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
