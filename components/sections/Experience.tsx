import { ExternalLink } from "lucide-react";
import SectionHeader from "@/components/sections/SectionHeader";

const TAGS = [".NET", "C#", "Angular", "TypeScript", "Git"];

export default function Experience() {
  return (
    <div>
      <SectionHeader label="Experiencia" />

      <div className="timeline">
        <span className="timeline-line" aria-hidden="true" />
        <div className="timeline-entry">
          <span className="timeline-dot" aria-hidden="true" />
          <div className="timeline-header">
            <div>
              <p className="timeline-role">Desarrollador de Software</p>
              <p className="timeline-company">
                Fiscalía de Estado — Buenos Aires
              </p>
            </div>
            <span className="timeline-date">Jun 2024 — Actualidad</span>
          </div>
          <p className="timeline-desc">
            Pasantía en colaboración con la Facultad de Informática (UNLP).
            Desarrollo de aplicaciones Back-End y Front-End con tecnologías
            modernas, participando en soluciones que optimizan los procesos
            internos de la institución.
          </p>
          <div className="timeline-tags">
            {TAGS.map((t) => (
              <span key={t} className="tag-blue">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a href="/pdf/cv.pdf" download className="cv-link">
        <span>Ver curriculum completo</span>
        <ExternalLink className="h-[13px] w-[13px]" />
      </a>
    </div>
  );
}
