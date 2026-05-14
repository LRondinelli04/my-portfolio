"use client";

import Image from "next/image";
import { Github, ExternalLink, Info } from "lucide-react";
import type { Project } from "@/components/data/projectsData";

interface ProjectCardProps {
  project: Project;
  isWide?: boolean;
  onDetails?: (project: Project) => void;
  priority?: boolean;
}

export function ProjectCard({
  project,
  isWide = false,
  onDetails,
  priority = false,
}: ProjectCardProps) {
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
      className={`proj-card${isWide ? " proj-card--wide" : ""}`}
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
          priority={priority}
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

        <div className="proj-footer">
          <div className="proj-tags">
            {project.skills.map((s) => (
              <span key={s.name} className="tag-blue">
                {s.name}
              </span>
            ))}
          </div>
          {project.details && onDetails && (
            <button
              type="button"
              className="proj-details-trigger"
              aria-label={`Ver detalles de ${project.title}`}
              onClick={(e) => {
                e.stopPropagation();
                onDetails(project);
              }}
            >
              <Info className="h-[14px] w-[14px]" />
              Ver detalles
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
