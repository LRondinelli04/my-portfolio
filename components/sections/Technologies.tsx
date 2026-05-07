import { TECH_GROUPS } from "@/components/data/technologies";
import SectionHeader from "@/components/sections/SectionHeader";

export default function Technologies() {
  return (
    <div>
      <SectionHeader label="Tecnologías" />
      <div className="flex flex-col gap-7">
        {TECH_GROUPS.map((group) => (
          <div key={group.label}>
            <span
              className={`tech-group-label tech-group-label--${group.color}`}
            >
              {group.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((tech) => (
                <span key={tech.name} className="tech-pill">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="tech-pill-icon"
                    loading="lazy"
                  />
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
