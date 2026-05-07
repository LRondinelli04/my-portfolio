"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "@/components/data/certifications";
import SectionHeader from "@/components/sections/SectionHeader";

export default function Studies() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div>
      <SectionHeader label="Estudios" />

      <div className="flex flex-col gap-4">
        <div className="study-card">
          <div className="study-badge study-badge--uni">UNLP</div>
          <div className="flex-1">
            <p className="study-title">Licenciatura en Sistemas / APU</p>
            <p className="study-sub">
              Facultad de Informática · La Plata · En curso
            </p>
            <p className="study-desc">
              Carrera universitaria de grado en la Universidad Nacional de La
              Plata, una de las facultades de informática más destacadas de
              Argentina.
            </p>
          </div>
        </div>

        {CERTIFICATIONS.map((cert, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={cert.title} className="cert-card">
              <div className="cert-top">
                <p className="cert-title">{cert.title}</p>
                <p className="cert-issuer">
                  {cert.issuer} · {cert.date}
                </p>
                <p className="cert-desc">{cert.description}</p>

                <div className="cert-actions">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-btn"
                  >
                    Ver certificado
                    <ExternalLink className="h-[13px] w-[13px]" />
                  </a>

                  {cert.subs && (
                    <button
                      type="button"
                      className="cert-expand-btn"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                    >
                      {isOpen
                        ? "Ocultar cursos"
                        : `Ver ${cert.subs.length} cursos`}
                      <ChevronDown
                        className="cert-chevron h-[14px] w-[14px]"
                        data-open={isOpen}
                      />
                    </button>
                  )}
                </div>
              </div>

              {cert.subs && (
                <div className="cert-subs" data-open={isOpen}>
                  <div className="cert-subs-inner">
                    {cert.subs.map((sub) => (
                      <div key={sub.title} className="cert-sub-item">
                        <span className="cert-sub-title">{sub.title}</span>
                        <span className="cert-sub-date">{sub.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
