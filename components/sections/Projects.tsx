"use client";

import Image from "next/image";
import { Github, ExternalLink, Info } from "lucide-react";
import { jobProjects, type Project } from "@/components/data/projectsData";
import SectionHeader from "@/components/sections/SectionHeader";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ProjectDetailsSheet({ project }: { project: Project }) {
  if (!project.details) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="proj-details-trigger"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Ver detalles de ${project.title}`}
        >
          <Info className="h-[14px] w-[14px]" />
          Ver detalles
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <SheetHeader>
          <SheetTitle>{project.title}</SheetTitle>
          <SheetDescription>{project.description}</SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-7 p-6 font-body">
          {project.details.map((block) => (
            <section key={block.title} className="flex flex-col gap-3">
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

          {/* Galería de imágenes */}
          {project.images && project.images.length > 0 && (
            <section className="flex flex-col gap-3">
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
                          alt={img.alt || `${project.title} – Imagen ${index + 1}`}
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

          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--portfolio-border)] mt-2">
            {project.skills.map((s) => (
              <span key={s.name} className="tag-blue">
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

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

        <div className="proj-footer">
          <div className="proj-tags">
            {project.skills.map((s) => (
              <span key={s.name} className="tag-blue">
                {s.name}
              </span>
            ))}
          </div>
          {project.details && <ProjectDetailsSheet project={project} />}
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
