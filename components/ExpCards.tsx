"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight, FileCode } from "lucide-react";
import { link } from "fs";

const jobPositions = [
  {
    timeline: "Jun 2024 — Actualidad",
    currentPosition: "Desarrollador de Software - Pasantía",
    place: "Fiscalía de Estado - Buenos Aires",
    previousPositions: [""],
    description:
      "Actualmente, realizo una pasantía en colaboración con la Facultad de Informática de La Plata (UNLP), donde amplío mis conocimientos en desarrollo tanto Back-End como Front-End. Trabajo con diversas tecnologías y frameworks modernos, participando activamente en la creación de soluciones innovadoras y eficientes. Este rol me permite aplicar mis habilidades técnicas en un entorno profesional, contribuyendo al desarrollo de aplicaciones que optimizan los procesos internos de la institución.",
    link: "",
    /* skills: [
      "Brand Identity",
      "Product Design",
      "UI/UX Design",
      "Design Systems",
      "Design Strategy",
      "Team Leadership",
    ], */
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200 duration-300 lg:hover:scale-105 lg:hover:shadow-lg"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap text-blue-400">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">{job.currentPosition}</p>
              <p className="text-slate-500 text-sm dark:text-slate-300 font-bold">
                • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {/*  {job.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))} */}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="/pdf/cv.pdf"
          download
          className="inline-flex items-center font-medium leading-tight text-foreground group hover:text-primary focus-visible:text-primary transition-colors duration-200"
        >
          <FileCode className="h-[1.2rem] w-[1.2rem]" />
          Descargar curriculum
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
