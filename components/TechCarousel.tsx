import { technologies } from "@/components/data/techData";

export function TechCarousel() {
  const items = [...technologies, ...technologies];

  return (
    <div className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Tecnologías
        </h2>
      </div>
      <div className="relative overflow-hidden py-6">
        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 " />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 " />

        <div className="flex animate-marquee gap-12 hover:[animation-play-state:paused] w-max">
          {items.map((tech, i) => (
            <a
              key={`${tech.name}-${i}`}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 min-w-[72px] transition-all duration-200 hover:scale-110 opacity-70 hover:opacity-100"
              title={tech.name}
              aria-label={`Ir a la página oficial de ${tech.name}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.iconUrl}
                alt={`${tech.name} logo`}
                width={48}
                height={48}
                className="h-10 w-10 sm:h-12 sm:w-12 drop-shadow-md"
                loading="lazy"
              />
              <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap font-medium">
                {tech.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
