"use client";
import Image from "next/image";
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

const jobProjects = [
  {
    imagePath: "/projects/Presupuesto.jpg",
    title: "Gestor de Presupuesto",
    description:
      "Aplicación web para gestionar un presupuesto y sus gastos, desarrollada con Angular. Permite ingresar un presupuesto inicial, agregar servicios con sus respectivos gastos, sumar al presupuesto existente y reiniciarlo.",
    skills: ["Angular", "Typescript", "HTML", "CSS", "Bootstrap"],
    link: "https://presupuesto-ashen.vercel.app",
    github: "https://github.com/LRondinelli04/Presupuesto",
  },
  {
    imagePath: "/projects/TPFinalJS.jpg",
    title: "Preguntas y Respuestas",
    description:
      "Juego interactivo para dos jugadores, diseñado con JavaScript, HTML y CSS, que utiliza Socket.io para establecer una conexión local. Esta implementación garantiza una experiencia de juego fluida y en tiempo real.",
    skills: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    /* link: "https://l3x.com", */
    github: "https://github.com/LRondinelli04/Preguntas-y-Respuestas",
  },
  {
    imagePath: "/projects/ITResto.jpg",
    title: "IT Resto",
    description:
      "Página web responsive para un restaurante, que permite visualizar promociones, menú, información de contacto y un formulario para realizar pedidos de delivery. Desarrollada con HTML, CSS, SCSS y JavaScript para ofrecer una experiencia de usuario atractiva y funcional en cualquier dispositivo.",
    skills: ["HTML", "CSS", "SCSS", "JavaScript"],
    link: "https://it-resto.vercel.app/",
    github: "https://github.com/LRondinelli04/IT_Resto",
  },
  {
    imagePath: "/projects/monitoreo/m1.jpg",
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
    skills: ["Angular", "TypeScript", "TaigaUI", "DotNet", "C#"],
    /* link: "https://app.mtopswap.com", */
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
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
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
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
