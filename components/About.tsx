"use client";
/* eslint-disable */

import { Button } from "@/components/ui/button";
import { FileCode } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Sobre mí
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          Me llamo <span className="no-wrap text-primary dark:text-white">Lucas Rondinelli</span> , un
          estudiante de Licenciatura en Sistemas y Analista Programador
          Universitario (APU) en la Facultad de Informática de La Plata - UNLP.
        </p>
        <p className="text-start  text-muted-foreground lg:px-6">
          Actualmente, realizo una pasantía como desarrollador de software en
          colaboración con la
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://www2.fepba.gov.ar/"
            target="blank"
            rel="noopener noreferrer"
          >
            {" "}
            Fiscalía de Estado
          </a>
          , donde estoy adquiriendo experiencia trabajando con tecnologías como
          .NET, C#, Angular y TypeScript, además de fortalecer mis conocimientos
          en Git. Al mismo tiempo, estoy cursando la carrera de Desarrollador
          Front End en{" "}
          <a
            className="no-wrap text-primary dark:text-white"
            href="https://www.educacionit.com/"
            target="blank"
            rel="noopener noreferrer"
          >
            {" "}
            EducaciónIT
          </a>
          , lo que me permite combinar mis habilidades y aplicar lo aprendido en
          un entorno real a través de proyectos significativos.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Resido en La Plata, Buenos Aires, y mi objetivo a corto plazo es
          finalizar la carrera de Analista Programador Universitario (APU) para
          ingresar al ámbito laboral del desarrollo de software. A largo plazo,
          aspiro a completar la Licenciatura en Sistemas, fortaleciendo mis
          habilidades y conocimientos en este campo.
        </p>
      </div>
    </section>
  );
}
