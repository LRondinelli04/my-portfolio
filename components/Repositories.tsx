"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/sections/SectionHeader";
import type { RepoWithLanguages } from "@/components/data/githubLanguages";
import { Github } from "lucide-react";

type Props = {
  repos: RepoWithLanguages[];
};

export default function Repositories({ repos }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [Autoplay({ delay: 7000, stopOnInteraction: false })],
  );
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  if (repos.length === 0) return null;

  return (
    <div>
      <SectionHeader label="Repositorios de GitHub" />

      <div className="repo-carousel" ref={emblaRef}>
        <div className="repo-track">
          {repos.map((repo, i) => (
            <div className="repo-slide" key={repo.slug}>
              <article className="repo-card">
                <div>
                  <h3 className="repo-title">{repo.title}</h3>
                  <p className="repo-slug">{repo.slug}</p>
                </div>

                <p className="repo-desc">{repo.description}</p>

                {repo.languages.length > 0 ? (
                  <>
                    <div
                      className="repo-langbar"
                      role="img"
                      aria-label="Distribución de lenguajes"
                    >
                      {repo.languages.map((lang) => (
                        <span
                          key={lang.name}
                          className="repo-langbar-seg"
                          style={{
                            width: `${lang.pct}%`,
                            background: lang.color,
                          }}
                        />
                      ))}
                    </div>
                    <div className="repo-legend">
                      {repo.languages.map((lang) => (
                        <div className="repo-legend-item" key={lang.name}>
                          <span
                            className="repo-legend-dot"
                            style={{ background: lang.color }}
                          />
                          <span className="repo-legend-name">{lang.name}</span>
                          <span className="repo-legend-pct">
                            {lang.pct.toFixed(2)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="repo-langs-empty">
                    Lenguajes no disponibles por el momento.
                  </p>
                )}

                <div className="repo-footer">
                  <span className="repo-counter">
                    {i + 1} / {repos.length} repos
                  </span>
                  <a
                    href={repo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${repo.title} en GitHub`}
                    className="proj-icon-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-[16px] w-[16px]" />
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="cf-nav">
        <button
          type="button"
          className="cf-nav-btn"
          aria-label="Repositorio anterior"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-[18px] w-[18px]" />
        </button>

        <div
          className="cf-dots"
          role="tablist"
          aria-label="Seleccionar repositorio"
        >
          {repos.map((repo, i) => (
            <button
              key={repo.slug}
              type="button"
              role="tab"
              aria-selected={i === selected}
              aria-label={`Ir a ${repo.title}`}
              className={`cf-dot${i === selected ? " cf-dot--active" : ""}`}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>

        <button
          type="button"
          className="cf-nav-btn"
          aria-label="Repositorio siguiente"
          onClick={scrollNext}
        >
          <ChevronRight className="h-[18px] w-[18px]" />
        </button>
      </div>
    </div>
  );
}
