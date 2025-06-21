"use client";
import { useState } from "react";
import "./Studies.css";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, Linkedin, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Front End Web Developer - (En curso)",
    issuer: "EducacionIT",
    date: "Marzo 2025",
    description:
      /* "Certificación obtenida tras completar la carrera de Front End Web Developer provista por EducacionIT." */ "Último certificado adquirido",
    image: "/certifications/UltimoEduIT.jpeg",
    certificateLink:
      "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/76136",
    /* linkedinLink:
      "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/76136", */
    subCertifications: [
      {
        title: "Responsive Web Bootstrap",
        date: "Junio 2025",
        certificateLink:
          "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/76136",
      },
      {
        title: "Presupuesto Digital",
        date: "Marzo 2025",
        certificateLink:
          "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/76143?_gl=1*xj21o0*_ga*MjEyODY2MjUzNS4xNzQxODkxNzE3*_ga_R8GR8LL2B8*MTc0MzAwOTMzMS43LjEuMTc0MzAxMTkwOC40Ni4xLjE0MDE5OTIxNzI.",
      },
      {
        title: "Javascript Desarrollador Avanzado",
        date: "Noviembre 2024",
        certificateLink:
          "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/71404",
        linkedinLink:
          "https://www.linkedin.com/posts/lucas-rondinelli-9b83a9267_educacionit-frontendwebdeveloper-gitdesarrollocolaborativo-activity-7225601242704601089-YV32?utm_source=share&utm_medium=member_desktop",
      },
      {
        title: "GIT: Desarrollo Colaborativo",
        date: "Agosto 2024",
        certificateLink:
          "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/72673",
        linkedinLink:
          "https://www.linkedin.com/posts/lucas-rondinelli-9b83a9267_educacionit-frontendwebdeveloper-gitdesarrollocolaborativo-activity-7225601242704601089-YV32?utm_source=share&utm_medium=member_desktop",
      },
      {
        title: "UI: Interfaz de Usuario",
        date: "Junio 2024",
        certificateLink:
          "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/72382",
        linkedinLink:
          "https://www.linkedin.com/posts/lucas-rondinelli-9b83a9267_certificado-lucas-rondinelli-activity-7211829332095242241-7GH2?utm_source=share&utm_medium=member_desktop",
      },
      {
        title: "Maquetador Web Avanzado",
        date: "Junio 2024",
        certificateLink:
          "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/71526",
        linkedinLink:
          "https://www.linkedin.com/posts/lucas-rondinelli-9b83a9267_educacionit-frontendwebdeveloper-maquetadorwebavanzado-activity-7204199891030446080-FTTZ?utm_source=share&utm_medium=member_desktop",
      },
      {
        title: "Introducción al Paradigma de Objetos",
        date: "Mayo 2024",
        certificateLink:
          "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/71262",
        linkedinLink:
          "https://www.linkedin.com/posts/lucas-rondinelli-9b83a9267_educacionit-frontendwebdeveloper-introduccionalparadigmadeobjetos-activity-7196639741872615425-ZWSh?utm_source=share&utm_medium=member_desktop",
      },
      {
        title: "Introducción a UX",
        date: "Abril 2024",
        certificateLink:
          "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/71043",
        linkedinLink:
          "https://www.linkedin.com/posts/lucas-rondinelli-9b83a9267_educacionit-frontendwebdeveloper-introduccionux-activity-7196639242679177217-fUKZ?utm_source=share&utm_medium=member_desktop",
      },
      {
        title: "Javascript desde cero",
        date: "Abril 2024",
        certificateLink:
          "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/71098",
        linkedinLink:
          "https://www.linkedin.com/posts/lucas-rondinelli-9b83a9267_educacionit-frontendwebdeveloper-javascriptdesdecero-activity-7188551723643199488-TGeP?utm_source=share&utm_medium=member_desktop",
      },
      {
        title: "Desarrollo Web con HTML",
        date: "Abril 2024",
        certificateLink:
          "https://www.educacionit.com/perfil/lucas-rondinelli-974361/certificado/71169",
        linkedinLink:
          "https://www.linkedin.com/posts/lucas-rondinelli-9b83a9267_educacionit-frontendwebdeveloper-desarrollowebconhtml-activity-7188548230450692096-7oqw?utm_source=share&utm_medium=member_desktop",
      },
    ],
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp",
    date: "Julio 2024",
    description:
      "Certificación obtenida tras completar el curso de C# de freeCodeCamp.",
    image: "/certifications/freeCodeCamp.jpg",
    certificateLink:
      "https://www.freecodecamp.org/certification/LRondinelli04/foundational-c-sharp-with-microsoft",
    linkedinLink: "https://www.linkedin.com/in/lucas-rondinelli-9b83a9267/",
  },
];

export default function Studies() {
  const [openCertification, setOpenCertification] = useState<number | null>(
    null
  );

  interface SubCertification {
    title: string;
    date: string;
    certificateLink: string;
    linkedinLink?: string;
  }

  interface Certification {
    title: string;
    issuer: string;
    date: string;
    description: string;
    image: string;
    certificateLink: string;
    linkedinLink: string;
    subCertifications?: SubCertification[];
  }

  const toggleSubCertifications = (index: number) => {
    setOpenCertification(openCertification === index ? null : index);
  };

  const transitionStyles = {
    transition: "max-height 500ms ease-in-out, opacity 500ms ease-in-out",
    overflow: "hidden",
    opacity: 0,
    maxHeight: 0,
  };

  const openStyles = {
    opacity: 1,
    maxHeight: "1000px",
  };

  return (
    <div className="flex flex-col gap-y-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Estudios
        </h2>
      </div>
      {certifications.map((certification, index) => (
        <article
          key={index}
          className="flex flex-col space-y-8 group md:flex-row md:space-x-8 md:space-y-0"
        >
          <div className="w-full md:w-1/2">
            <div className="relative flex flex-col items-center transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
              <Image
                alt={certification.title}
                className="object-cover w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                src={certification.image}
                width={600}
                height={224}
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:max-w-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {certification.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-400">
              {certification.issuer} - {certification.date}
            </p>
            <p className="mt-2 text-gray-700 dark:text-gray-400">
              {certification.description}
            </p>
            <div className="buttonsCertification flex flex-col sm:flex-row gap-2 w-full mt-4">
              <a
                href={certification.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="linkCertification inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors w-fit sm:w-auto"
              >
                <FileCode className="size-4" />
                Certificado
              </a>
              {certification.linkedinLink && (
                <a
                  href={certification.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="publicCertification inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors w-fit sm:w-auto"
                >
                  <Linkedin className="size-4" />
                  <p> Publicación </p>
                </a>
              )}
              <div className="moreCertifications w-full">
                {certification.subCertifications && (
                  <Button
                    className="moreCertifications inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    onClick={() => toggleSubCertifications(index)}
                  >
                    {openCertification === index ? (
                      <>
                        <Minus className="size-4 text-white" />
                      </>
                    ) : (
                      <>
                        <Plus className="size-4 text-white" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>

            <div
              style={{
                ...transitionStyles,
                ...(openCertification === index ? openStyles : {}),
              }}
            >
              {certification.subCertifications && (
                <div
                  className="mt-4"
                  style={{
                    display: openCertification === index ? "block" : "none",
                  }}
                >
                  <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                    Certificados de Cursos:
                  </h4>
                  <ul className="subCertList list-disc ml-4 text-gray-700 dark:text-gray-400">
                    {certification.subCertifications.map(
                      (subCert, subIndex) => (
                        <li key={subIndex} className="mt-5">
                          <p>
                            <strong>{subCert.title}</strong> - {subCert.date}
                          </p>
                          <div className="buttonsSubCertification flex flex-col sm:flex-row gap-2 mt-2 w-fit">
                            <a
                              href={subCert.certificateLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="subCertification inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors w-full sm:w-auto"
                            >
                              <FileCode className="size-4" />
                              Certificado
                            </a>
                            {subCert.linkedinLink && (
                              <a
                                href={subCert.linkedinLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="subCertification inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors w-full sm:w-auto"
                              >
                                <Linkedin className="size-4" />
                                <p> Publicación </p>
                              </a>
                            )}
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
