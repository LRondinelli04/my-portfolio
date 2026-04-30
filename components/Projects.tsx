"use client";
import { jobProjects } from "@/components/data/projectsData";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Proyectos
        </h2>
      </div>
      {jobProjects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          priority={index < 2}
        />
      ))}
    </section>
  );
}
