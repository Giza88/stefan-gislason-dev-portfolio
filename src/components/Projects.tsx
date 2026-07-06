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
          description="A mix of independent development projects and practical tools built to solve real problems with clean design and reliable delivery."
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
