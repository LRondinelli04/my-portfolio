"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { jobProjects, type Project } from "@/components/data/projectsData";
import SectionHeader from "@/components/sections/SectionHeader";
import Projects3DCarousel from "@/components/Projects3DCarousel";
import ProjectDetailsModal from "@/components/ProjectDetailsModal";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  const top3 = jobProjects.slice(0, 3);
  const remaining = jobProjects.length - top3.length;

  return (
    <div>
      <SectionHeader label="Proyectos" />

      <Projects3DCarousel projects={top3} onDetails={setSelected} />

      <div className="cta-band">
        <div>
          <p className="cta-band-title">
            {remaining > 0
              ? `Hay ${remaining} proyecto${remaining === 1 ? "" : "s"} más`
              : "Explorá todos los proyectos"}
          </p>
          <p className="cta-band-sub">
            Repositorios completos, lenguajes y código fuente
          </p>
        </div>
        <Link href="/proyectos" className="cta-band-btn">
          Ver todos los proyectos
          <ArrowRight className="h-[16px] w-[16px]" />
        </Link>
      </div>

      <ProjectDetailsModal
        project={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
