"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = projects.filter((project) => project.featured);
  const visibleProjects = showAll ? projects : featuredProjects;

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Web apps, AI tools, and practical projects from my GitHub — from deployed products to experiments that solve real problems."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {projects.length > featuredProjects.length && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary hover:shadow-md"
            >
              {showAll
                ? "Show featured projects"
                : `Show all ${projects.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
