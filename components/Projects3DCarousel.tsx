"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Info,
} from "lucide-react";
import type { Project } from "@/components/data/projectsData";

type Props = {
  projects: Project[];
  onDetails: (project: Project) => void;
};

const DRAG_THRESHOLD = 50;

export default function Projects3DCarousel({ projects, onDetails }: Props) {
  const [active, setActive] = useState(0);
  const startXRef = useRef<number | null>(null);
  const draggedRef = useRef(false);

  const last = projects.length - 1;

  const go = (dir: number) =>
    setActive((a) => Math.min(last, Math.max(0, a + dir)));

  const handlePointerDown = (e: React.PointerEvent) => {
    startXRef.current = e.clientX;
    draggedRef.current = false;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (startXRef.current === null) return;
    const dx = e.clientX - startXRef.current;
    startXRef.current = null;
    if (dx > DRAG_THRESHOLD) {
      draggedRef.current = true;
      go(-1);
    } else if (dx < -DRAG_THRESHOLD) {
      draggedRef.current = true;
      go(1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
  };

  return (
    <div className="cf-wrap">
      <div
        className="cf-stage"
        role="group"
        aria-roledescription="carrusel"
        aria-label="Proyectos destacados"
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onKeyDown={handleKeyDown}
      >
        <div className="cf-track">
          {projects.map((project, i) => {
            const offset = i - active;
            const abs = Math.abs(offset);
            const isCenter = offset === 0;

            const tx = offset * 58;
            const ry = offset * -28;
            const scale = isCenter ? 1 : 0.82;
            const opacity = isCenter ? 1 : 0.55;
            const blur = isCenter ? 0 : 1.5;

            return (
              <article
                key={project.slug}
                className="cf-card"
                aria-hidden={!isCenter}
                style={{
                  transform: `translate(-50%, -50%) translateX(${tx}%) rotateY(${ry}deg) scale(${scale})`,
                  opacity,
                  filter: `blur(${blur}px)`,
                  zIndex: 10 - abs,
                  pointerEvents: abs >= 2 ? "none" : "auto",
                }}
                onClick={() => {
                  if (draggedRef.current) {
                    draggedRef.current = false;
                    return;
                  }
                  if (!isCenter) setActive(i);
                }}
              >
                <div
                  className="cf-card-inner"
                  style={{ pointerEvents: isCenter ? "auto" : "none" }}
                >
                  <div className="cf-card-img">
                    <Image
                      src={project.imagePath}
                      alt={project.title}
                      fill
                      draggable={false}
                      sizes="360px"
                      className="object-cover"
                    />
                  </div>

                  <div className="cf-card-body">
                    <h3 className="cf-card-title">{project.title}</h3>
                    <p className="cf-card-desc">{project.description}</p>

                    <div className="cf-card-tags">
                      {project.skills.slice(0, 4).map((s) => (
                        <span key={s.name} className="tag-blue">
                          {s.name}
                        </span>
                      ))}
                    </div>

                    <div className="cf-card-actions">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cf-btn cf-btn--primary"
                        >
                          Abrir proyecto
                          <ExternalLink className="h-[14px] w-[14px]" />
                        </a>
                      )}
                      {project.details && (
                        <button
                          type="button"
                          className="cf-btn cf-btn--secondary"
                          onClick={() => onDetails(project)}
                        >
                          <Info className="h-[14px] w-[14px]" />
                          Ver detalles
                        </button>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} en GitHub`}
                          className="cf-btn cf-btn--icon"
                        >
                          <Github className="h-[16px] w-[16px]" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="cf-nav">
        <button
          type="button"
          className="cf-nav-btn"
          aria-label="Proyecto anterior"
          disabled={active === 0}
          onClick={() => go(-1)}
        >
          <ChevronLeft className="h-[18px] w-[18px]" />
        </button>

        <div className="cf-dots" role="tablist" aria-label="Seleccionar proyecto">
          {projects.map((project, i) => (
            <button
              key={project.slug}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Ir a ${project.title}`}
              className={`cf-dot${i === active ? " cf-dot--active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>

        <button
          type="button"
          className="cf-nav-btn"
          aria-label="Proyecto siguiente"
          disabled={active === last}
          onClick={() => go(1)}
        >
          <ChevronRight className="h-[18px] w-[18px]" />
        </button>
      </div>

      <p className="cf-help">
        Arrastrá, usá las flechas ← → o hacé clic en una tarjeta lateral
      </p>
    </div>
  );
}
