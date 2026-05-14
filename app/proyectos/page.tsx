import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import { MouseAura } from "@/components/MouseAura";
import SectionHeader from "@/components/sections/SectionHeader";
import ProjectsGridWithModal from "@/components/ProjectsGridWithModal";
import Repositories from "@/components/Repositories";
import { jobProjects } from "@/components/data/projectsData";
import { MAIN_REPOS } from "@/components/data/repos";
import { getReposWithLanguages } from "@/components/data/githubLanguages";

export const metadata: Metadata = {
  title: "Todos los proyectos | Lucas Rondinelli",
  description:
    "Listado completo de proyectos desplegados y repositorios de GitHub de Lucas Rondinelli, con su distribución de lenguajes.",
};

export default async function ProyectosPage() {
  const repos = await getReposWithLanguages(MAIN_REPOS);

  return (
    <div className="mx-auto min-h-screen max-w-[1180px] px-6 md:px-8 lg:px-6">
      <MouseAura />
      <div className="lg:flex lg:items-start lg:gap-0">
        <Nav />
        <main className="flex flex-col gap-14 pt-6 lg:pt-[60px] lg:pl-14 lg:flex-1 lg:py-[60px]">
          <Link href="/#projects" className="back-link">
            <ArrowLeft className="h-[16px] w-[16px]" />
            Volver al portfolio
          </Link>

          <header>
            <h1 className="proyectos-title">Todos los proyectos</h1>
            <p className="proyectos-sub">
              Una vista completa del trabajo realizado — proyectos desplegados,
              prácticas universitarias y repositorios de GitHub con su
              distribución de lenguajes.
            </p>
          </header>

          <section>
            <SectionHeader label="Proyectos desplegados" />
            <ProjectsGridWithModal projects={jobProjects} />
          </section>

          <section>
            <Repositories repos={repos} />
          </section>
        </main>
      </div>
    </div>
  );
}
