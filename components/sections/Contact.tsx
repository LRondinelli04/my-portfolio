import { Mail, Linkedin, Github } from "lucide-react";
import SectionHeader from "@/components/sections/SectionHeader";

export default function Contact() {
  return (
    <div>
      <SectionHeader label="Contacto" />
      <h2 className="contact-heading">Trabajemos juntos</h2>
      <p className="contact-sub">
        Si estás considerando mi colaboración, tenés una pregunta o simplemente
        querés saludar — ¡siempre estoy disponible para responder!
      </p>

      <div className="contact-options">
        <a href="mailto:lrondinelli2004@gmail.com" className="contact-primary">
          <Mail className="h-[16px] w-[16px]" />
          lrondinelli2004@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-rondinelli-9b83a9267/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-secondary"
        >
          <Linkedin className="h-[15px] w-[15px]" />
          LinkedIn
        </a>
        <a
          href="https://github.com/LRondinelli04"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-secondary"
        >
          <Github className="h-[15px] w-[15px]" />
          GitHub
        </a>
      </div>
    </div>
  );
}
