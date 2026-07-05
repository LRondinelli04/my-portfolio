"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/components/data/projectsData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectDetailsModal({ project, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!mounted || !project) return null;

  return createPortal(
    <div className="modal-overlay">
      <button
        type="button"
        className="modal-overlay-backdrop"
        aria-label="Cerrar"
        onClick={onClose}
      />
      <div
        className="modal-box"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        <div className="modal-hero">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.imagePath}
            alt={project.title}
            className="modal-hero-img"
          />
          <div className="modal-hero-overlay" aria-hidden="true" />
          <button
            type="button"
            className="modal-close"
            aria-label="Cerrar"
            onClick={onClose}
          >
            <X className="h-[18px] w-[18px]" />
          </button>
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-desc">{project.description}</p>

          <div className="flex flex-wrap gap-1.5">
            {project.skills.map((s) => (
              <span key={s.name} className="tag-blue">
                {s.name}
              </span>
            ))}
          </div>

          {(project.link || project.github) && (
            <div className="modal-links">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link modal-link--primary"
                >
                  Abrir proyecto
                  <ExternalLink className="h-[14px] w-[14px]" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-link modal-link--secondary"
                >
                  <Github className="h-[14px] w-[14px]" />
                  Ver código
                </a>
              )}
            </div>
          )}

          {project.details?.map((block) => (
            <section key={block.title} className="modal-section">
              <h3 className="proj-details-block-title">{block.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {block.items.map((item) => (
                  <li key={item.data} className="proj-details-item">
                    <span className="proj-details-bullet" aria-hidden="true" />
                    <div className="flex-1">
                      <p className="proj-details-data">{item.data}</p>
                      {item.subData && item.subData.length > 0 && (
                        <ul className="proj-details-sublist">
                          {item.subData.map((sub) => (
                            <li key={sub}>{sub}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {project.images && project.images.length > 0 && (
            <section className="modal-section">
              <h3 className="proj-details-block-title">
                Galería ({project.images.length})
              </h3>
              <Carousel
                orientation="vertical"
                opts={{ align: "start", loop: true }}
                className="w-full px-1 py-6"
              >
                <CarouselContent className="h-[280px]">
                  {project.images.map((img, index) => (
                    <CarouselItem key={img.src} className="basis-full pt-2">
                      <div className="relative h-full w-full overflow-hidden rounded-[var(--portfolio-radius)] border border-[var(--portfolio-border)] bg-[var(--bg-card)]">
                        <Image
                          src={img.src}
                          alt={
                            img.alt || `${project.title} – Imagen ${index + 1}`
                          }
                          fill
                          sizes="(max-width: 860px) 100vw, 480px"
                          className="object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </section>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
