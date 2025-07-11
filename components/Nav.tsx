"use client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Instagram } from "lucide-react";
import { ModeToggle } from "./ui/toggle-mode";
import { Badge } from "@/components/ui/badge";
import useActiveSection from "@/hooks/useActiveSection";

type NavItem = {
  name: string;
  href: string;
};

export default function Nav() {
  const activeSection = useActiveSection([
    "about",
    "experience",
    "studies",
    "projects",
    "contact",
  ]);

  const navItems: NavItem[] = [
    { name: "Sobre mí", href: "#about" },
    { name: "Experiencia", href: "#experience" },
    { name: "Estudios", href: "#studies" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  const getNavItemClasses = (href: string) => {
    const isActive = activeSection === href.substring(1);
    return {
      linkClass: isActive ? "active" : "",
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
        isActive
          ? "active w-16 bg-foreground h-2"
          : "group-hover:w-16 group-hover:bg-foreground group-hover:h-px"
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive
          ? "text-foreground"
          : "text-slate-500 group-hover:text-foreground"
      }`,
    };
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4">
      <div className="flex flex-col gap-4 mt-6 lg:mt-0 ">
        <div className="w-full flex lg:items-center lg:justify-start ">
          <Avatar className="avatar-glow w-24 lg:w-36 h-auto border-2 border-primary bg-secondary transition-trasnform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary hover:border-2 hover:border-primary">
            <a
              href="/pdf/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AvatarImage src="./avatar.png" />
              <AvatarFallback className="w-24 h-24 lg:w-36 lg:h-36 rounded-full border-1 border-primary">
                LR
              </AvatarFallback>
            </a>
          </Avatar>
        </div>
        <h1 className="text-[42px] font-bold lg:text-start">
          Hola, soy Lucas 👋
        </h1>
        <h2 className="text-xl lg:text-start">
          Estudiante de Licenciatura en Sistemas y Analista Programador
          Universitario en La Plata, Argentina 🇦🇷.
        </h2>
        <a
          href="https://www.linkedin.com/in/lucas-rondinelli-9b83a9267/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer w-fit"
        >
          <Badge variant="ready">Disponible para trabajar</Badge>
        </a>
        {/* <p className="text-lg lg:text-start text-muted-foreground">
          I help innovative startups in AI, Web3, and Finance craft exceptional
          user experiences, translating complex technologies into intuitive
          interfaces that resonate with humans.
        </p> */}
      </div>
      <nav className="lg:flex hidden">
        <ul className="flex flex-col w-max text-start gap-6 uppercase text-xs font-medium">
          {navItems.map((item: NavItem) => {
            const { linkClass, indicatorClass, textClass } = getNavItemClasses(
              item.href
            );
            return (
              <li key={item.name} className="group">
                <a href={item.href} className={`py-3 ${linkClass}`}>
                  <span className={indicatorClass}></span>
                  <span className={textClass}>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="flex flex-row gap-6 mt-6 lg:mt-0">
        <Button variant="outline" size="icon">
          <a
            href="https://github.com/LRondinelli04"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a
            href="https://www.instagram.com/lucasrondinelli_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a
            href="https://www.linkedin.com/in/lucas-rondinelli-9b83a9267/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <ModeToggle />
      </ul>
    </header>
  );
}
