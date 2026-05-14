"use client";

import Image from "next/image";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import useActiveSection from "@/hooks/useActiveSection";
import { Badge } from "@/components/ui/badge";

type NavItem = { id: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "Sobre mí" },
  { id: "technologies", label: "Tecnologías" },
  { id: "experience", label: "Experiencia" },
  { id: "studies", label: "Estudios" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

const LINKEDIN_URL = "https://www.linkedin.com/in/lucas-rondinelli-9b83a9267/";
const GITHUB_URL = "https://github.com/LRondinelli04";
const INSTAGRAM_URL = "https://www.instagram.com/lucasrondinelli_/";
const EMAIL = "lrondinelli2004@gmail.com";

export default function Nav() {
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id));

  return (
    <header
      className="
        header-v2
        flex flex-col gap-10
        lg:sticky lg:top-0 lg:h-screen lg:w-[320px]
        lg:py-16 lg:justify-between
        font-body text-[var(--fg)]
      "
    >
      {/* Top: avatar + hero text */}
      <div className="flex flex-col gap-6">
        <div className="relative w-[150px] h-[150px]">
          <Image
            src="/avatar.png"
            alt="Lucas Rondinelli"
            width={150}
            height={150}
            priority
            className="rounded-full object-cover w-full h-full"
          />
          <div className="avatar-ring" aria-hidden="true" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="hidden font-head font-semibold text-4xl leading-[1.05] tracking-tight lg:block">
            Lucas
            <br />
            Rondinelli
          </h1>
          <h1 className="font-head font-semibold text-4xl leading-[1.05] tracking-tight lg:hidden">
              Lucas Rondinelli
          </h1>
          <p className="text-[15px] text-[var(--fg)] mt-1">
            Desarrollador Full Stack
          </p>
          <p className="text-[14px] text-[var(--fg-muted)]">
            📍 La Plata, Buenos Aires
          </p>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button-disponible"
          >
            <Badge variant="ready">
              <span className="badge-dot--ready mr-2" /> Disponible para
              trabajar
            </Badge>
          </a>

          {/* 
            <Badge variant="notReady">
              <span className="badge-dot--notReady mr-2" /> No disponible para
              trabajar
            </Badge>
    
          */}
        </div>
      </div>

      {/* Vertical nav (desktop only) */}
      <nav className="hidden lg:block">
        <ul className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-item-v2 group ${isActive ? "is-active" : ""}`}
                >
                  <span className="nav-indicator-v2" />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Socials */}
      <ul className="flex flex-row gap-3">
        {[
          { href: GITHUB_URL, label: "GitHub", Icon: Github },
          { href: LINKEDIN_URL, label: "LinkedIn", Icon: Linkedin },
          { href: INSTAGRAM_URL, label: "Instagram", Icon: Instagram },
          { href: `mailto:${EMAIL}`, label: "Email", Icon: Mail },
        ].map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="
                flex h-9 w-9 items-center justify-center rounded-md
                border border-[var(--portfolio-border-mid)]
                text-[var(--fg-muted)]
                hover:text-[var(--fg)] hover:border-[var(--portfolio-accent)]
                transition-colors
              "
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
