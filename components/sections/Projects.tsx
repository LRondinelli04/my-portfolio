"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { jobProjects, type Project } from "@/components/data/projectsData";
import SectionHeader from "@/components/sections/SectionHeader";

function ProjectCard({ project }: { project: Project }) {
  const clickable = Boolean(project.link);

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!clickable) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={`proj-card${project.highlight ? " proj-card--wide" : ""}`}
      data-clickable={clickable}
      onClick={clickable ? handleClick : undefined}
      onKeyDown={clickable ? handleKey : undefined}
      role={clickable ? "link" : undefined}
      tabIndex={clickable ? 0 : undefined}
      aria-label={clickable ? `Abrir ${project.title}` : undefined}
    >
      <div className="proj-img-wrap">
        <Image
          src={project.imagePath}
          alt={project.title}
          fill
          sizes="(max-width: 860px) 100vw, (max-width: 1180px) 50vw, 560px"
          className="proj-img"
        />
        {clickable && (
          <div className="proj-img-overlay">
            <span className="proj-overlay-text">
              Abrir proyecto <ExternalLink className="h-[13px] w-[13px]" />
            </span>
          </div>
        )}
      </div>

      <div className="proj-body">
        <div className="proj-header">
          <p className="proj-title">{project.title}</p>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} en GitHub`}
              className="proj-icon-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-[16px] w-[16px]" />
            </a>
          )}
        </div>

        <p className="proj-desc">{project.description}</p>

        <div className="proj-tags">
          {project.skills.map((s) => (
            <span key={s.name} className="tag-blue">
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const ordered = [...jobProjects].sort((a, b) => {
    if (a.highlight && !b.highlight) return -1;
    if (!a.highlight && b.highlight) return 1;
    return 0;
  });

  return (
    <div>
      <SectionHeader label="Proyectos" />
      <div className="projects-grid">
        {ordered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
