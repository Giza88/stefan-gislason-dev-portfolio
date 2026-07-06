import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Web apps, AI tools, and practical projects from my GitHub — from deployed products to experiments that solve real problems."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
