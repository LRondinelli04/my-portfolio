"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import ProjectDetailsModal from "@/components/ProjectDetailsModal";
import type { Project } from "@/components/data/projectsData";

type Props = {
  projects: Project[];
};

export default function ProjectsGridWithModal({ projects }: Props) {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            isWide={project.highlight}
            priority={i === 0}
            onDetails={
              project.details
                ? (p) => setSelected(p)
                : undefined
            }
          />
        ))}
      </div>

      <ProjectDetailsModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
