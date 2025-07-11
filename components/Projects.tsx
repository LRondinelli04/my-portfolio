"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/GitHub";
import { Button } from "@/components/ui/button";

export type Project = {
  slug: string;
  imagePath: string;
  title: string;
  description: string;
  skills: { name: string; link: string }[];
  link?: string;
  github?: string;
  details?: {
    title: string;
    items: {
      data: string;
      subData?: string[];
    }[];
  }[];
  images?: { src: string; alt: string }[];
};

export const jobProjects: Project[] = [
  {
    slug: "gestor-presupuesto",
    imagePath: "/projects/Presupuesto.jpg",
    title: "Gestor de Presupuesto",
    description:
      "Aplicación web para gestionar un presupuesto y sus gastos, desarrollada con Angular. Permite ingresar un presupuesto inicial, agregar servicios con sus respectivos gastos, sumar al presupuesto existente y reiniciarlo.",
    skills: [
      { name: "Angular", link: "https://angular.dev/" },
      { name: "Typescript", link: "https://www.typescriptlang.org/" },
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Bootstrap", link: "https://getbootstrap.com/" },
    ],

    link: "https://presupuesto-ashen.vercel.app",
    github: "https://github.com/LRondinelli04/Presupuesto",
  },
  {
    slug: "preguntas-y-respuestas",
    imagePath: "/projects/TPFinalJS.jpg",
    title: "Preguntas y Respuestas",
    description:
      "Juego interactivo para dos jugadores, diseñado con JavaScript, HTML y CSS, que utiliza Socket.io para establecer una conexión local. Esta implementación garantiza una experiencia de juego fluida y en tiempo real.",
    skills: [
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Bootstrap", link: "https://getbootstrap.com/" },
    ],

    github: "https://github.com/LRondinelli04/Preguntas-y-Respuestas",
  },
  {
    slug: "it-resto",
    imagePath: "/projects/ITResto.jpg",
    title: "IT Resto",
    description:
      "Página web responsive para un restaurante, que permite visualizar promociones, menú, información de contacto y un formulario para realizar pedidos de delivery. Desarrollada con HTML, CSS, SCSS y JavaScript para ofrecer una experiencia de usuario atractiva y funcional en cualquier dispositivo.",
    skills: [
      {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "SCSS", link: "https://sass-lang.com/" },
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
    link: "https://it-resto.vercel.app/",
    github: "https://github.com/LRondinelli04/IT_Resto",
  },
  {
    slug: "monitoreo-servicios",
    imagePath: "/projects/monitoreo/m1.jpg",
    images: [
      { src: "/projects/monitoreo/m1.jpg", alt: "Monitoreo" },
      { src: "/projects/monitoreo/m2.jpg", alt: "Monitoreo" },
      { src: "/projects/monitoreo/m3.jpg", alt: "Monitoreo" },
      { src: "/projects/monitoreo/m4.jpg", alt: "Monitoreo" },
      { src: "/projects/monitoreo/m5.jpg", alt: "Monitoreo" },
      { src: "/projects/monitoreo/m6.jpg", alt: "Monitoreo" },
      { src: "/projects/monitoreo/m7.jpg", alt: "Monitoreo" },
      { src: "/projects/monitoreo/m8.jpg", alt: "Monitoreo" },
    ],
    title: "Monitoreo de Servicios y Servidores",
    description:
      "Aplicación web para monitorear servicios y servidores, desarrollada con Angular (TypeScript y TaigaUI) para el frontend y .NET (C#) para el backend.",
    details: [
      {
        title: "Arquitectura Modular",
        items: [
          {
            data: "Organización jerárquica de servicios agrupados por aplicaciones.",
          },
          {
            data: "Sistema de cards interactivas con semáforo de estado (🟢 OK | 🟠 WARNING | 🔴 ERROR).",
          },
          {
            data: "Monitoreo de métricas clave:",
            subData: [
              "Servicios: Tiempo de respuesta (ms).",
              "Servidores: Espacio en disco (GB/libre).",
            ],
          },
        ],
      },
      {
        title: "Gestión Dinámica",
        items: [
          {
            data: "▶️ Configuración de intervalos de actualización automática.",
          },
          { data: "✏️ Edición en línea de parámetros de monitoreo." },
          { data: "🗑️ Eliminación segura de elementos obsoletos." },
          {
            data: "🚫 Deshabilitación selectiva de checks (evita llamadas a endpoints).",
          },
          {
            data: "➕ Creación de nuevos elementos mediante formularios contextuales:",
            subData: [
              "Servicios (con validación de endpoints).",
              "Servidores",
              "Aplicaciones (agrupadores lógicos).",
            ],
          },
        ],
      },
      {
        title: "Personalización Avanzada",
        items: [
          {
            data: "⇅ Drag-and-Drop para reordenar aplicaciones y organizar cards según preferencia del usuario modificando su valor de orden.",
            subData: [
              "Reordenar aplicaciones (agrupaciones de servicios)",
              "Organizar cards según preferencia del usuario",
            ],
          },
          {
            data: "Persistencia de configuración personalizada (localStorage + backend).",
          },
          {
            data: "Sistema de priorización visual mediante ordenamiento manual.",
          },
        ],
      },
      {
        title: "Funcionalidades Técnicas",
        items: [
          {
            data: "Histórico gráfico temporal para: ",
            subData: [
              "Performance de servicios (series temporales)",
              "Evolución de capacidad en servidores",
            ],
          },
          {
            data: "Detalle expandible por card con: ",
            subData: [
              "Métricas específicas por disco (servidores)",
              "Logs de últimos checks (servicios)",
              "Acciones rápidas de gestión",
            ],
          },
          { data: "Modo mantenimiento (pausa temporal de monitoreo)" },
          { data: "Notificaciones visuales para cambios de estado" },
        ],
      },
      {
        title: "Experiencia de Usuario:",
        items: [
          {
            data: "Interfaz responsive con 3 vistas diferentes (mobile/tablet/desktop)",
          },
          { data: "Auto-guardado de configuraciones" },
          { data: "Feedback visual en tiempo real durante operaciones" },
        ],
      },
    ],
    skills: [
      { name: "Angular", link: "https://angular.dev/" },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "TaigaUI", link: "https://taiga-ui.dev/" },
      { name: "DotNet", link: "https://dotnet.microsoft.com/" },
      { name: "C#", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    ],
    /* link: "https://app.mtopswap.com", */
  },
  {
    slug: "mi-portafolio",
    imagePath: "/projects/my-portfolio.jpg",
    title: "Mi Portafolio",
    description:
      "Un portafolio personal con proyectos y habilidades desarrolladas.",
    skills: [
      { name: "Next.js", link: "https://nextjs.org/" },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "React", link: "https://react.dev/" },
      { name: "Shadcn UI", link: "https://ui.shadcn.com/" },
    ],
    link: "https://my-portfolio-ashy-tau-74.vercel.app/",
    github: "https://github.com/LRondinelli04/my-portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Proyectos
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) =>
          project.link ? (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer"
            >
              <Card className="group lg:p-6 p-5 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200 duration-300 lg:hover:scale-105 lg:hover:shadow-lg">
                <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                  <Image
                    src={project.imagePath}
                    alt={`Screenshot of ${project.title}`}
                    width={1920}
                    height={1080}
                    priority
                    className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                  />
                </CardHeader>
                <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                  <div className="flex items-center justify-between">
                    <p className="text-primary font-bold">
                      {project.title}{" "}
                      <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                    </p>
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="GitHub"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Abre el repositorio en una nueva pestaña
                        window.open(
                          project.github,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }}
                      // Opcional: si quieres que el botón no sea "focusable" por tabulación cuando no hay github
                      disabled={!project.github}
                    >
                      <GitHubIcon />
                    </Button>{" "}
                  </div>
                  <CardDescription className="py-3 text-muted-foreground">
                    {project.description}
                  </CardDescription>
                  <CardFooter className="p-0 flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <a
                        href={skill.link}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-105 transition-transform duration-200"
                        title={`Ver más sobre ${skill.name}`}
                      >
                        <Badge variant="readyBlue">{skill.name}</Badge>
                      </a>
                    ))}
                    {project.details && (
                      <Link href={`/projects/${project.slug}`}>
                        <Button>Ver detalles</Button>
                      </Link>
                    )}
                  </CardFooter>
                </CardContent>
              </Card>
            </a>
          ) : (
            <Card
              key={index}
              className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200 duration-300 lg:hover:scale-105 lg:hover:shadow-lg"
            >
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <div className="flex items-center justify-between">
                  <p className="text-primary font-bold">
                    {project.title}{" "}
                    <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                  </p>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="GitHub"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Abre el repositorio en una nueva pestaña
                      window.open(
                        project.github,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                    // Opcional: si quieres que el botón no sea "focusable" por tabulación cuando no hay github
                    disabled={!project.github}
                  >
                    <GitHubIcon />
                  </Button>{" "}
                </div>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <a
                      href={skill.link}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Ver más sobre ${skill.name}`}
                    >
                      <Badge variant="readyBlue">{skill.name}</Badge>
                    </a>
                  ))}
                  {project.details && (
                    <Link href={`/projects/${project.slug}`}>
                      <Button>Ver detalles</Button>
                    </Link>
                  )}
                </CardFooter>
              </CardContent>
            </Card>
          )
        )}
      </>
    </section>
  );
}
