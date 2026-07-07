"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = projects.filter((project) => project.featured);
  const visibleProjects = showAll ? projects : featuredProjects;
  const extraCount = projects.length - featuredProjects.length;

  return (
    <section id="projects" className="section-padding w-full">
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            eyebrow="Projects"
            title="Featured work"
            description={
              showAll
                ? "All projects from my GitHub, from deployed products to experiments that solve real problems."
                : "Six projects that show how I support users, ship software, and solve practical problems."
            }
          />
        </FadeIn>

        <div className="grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <FadeIn key={project.title} delay={index % 3 === 1 ? 100 : index % 3 === 2 ? 200 : 0} className="h-full min-w-0">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>

        {extraCount > 0 && (
          <FadeIn className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="btn-secondary btn-interactive"
            >
              {showAll
                ? "Show featured projects only"
                : `View my other projects (${extraCount} more)`}
            </button>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
