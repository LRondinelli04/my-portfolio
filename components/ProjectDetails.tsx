"use client";
import Image from "next/image";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";

export default function ProjectDetails({ project }: { project: any }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateAuraPosition = (e: MouseEvent) => {
      if (auraRef.current) {
        auraRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        auraRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };
    window.addEventListener("pointermove", updateAuraPosition);

    return () => {
      window.removeEventListener("pointermove", updateAuraPosition);
    };
  }, []);
  return (
    <>
      <div ref={auraRef} className="mouse-aura" />
      <h1 className="text-3xl font-bold mb-4 border-b pb-4">{project.title}</h1>

      <main className="lg:flex lg:justify-between lg:gap-4">
        {project.images && project.images.length > 0 && (
          <div className="flex justify-center w-full">
            <Carousel
              orientation="vertical"
              opts={{ align: "start" }}
              className="w-full max-w-lg mb-8 lg:mt-24 lg:h-fit border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200 duration-300 lg:hover:scale-105 lg:hover:shadow-lg rounded-lg p-2"
              setApi={setApi}
            >
              <CarouselContent className="-mt-1 h-[350px]">
                {project.images.map((image: any, index: number) => (
                  <CarouselItem key={index} className="pt-1">
                    <div className="p-1 flex justify-center">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={600}
                        height={350}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="text-muted-foreground py-2 pt-0 text-center text-sm">
                Slide {current} de {count}
              </div>
            </Carousel>
          </div>
        )}

        <div className="w-full max-w-2xl">
          <p className="mb-4">{project.description}</p>
          {project.details && (
            <div className="mb-8">
              {project.details.map((section: any, idx: number) => (
                <div key={idx} className="mb-4">
                  <h2 className="font-semibold">{section.title}</h2>
                  <ul className="list-disc ml-6">
                    {section.items.map((item: any, i: number) => (
                      <li key={i}>
                        {item.data}
                        {item.subData && (
                          <ul className="list-circle ml-4">
                            {item.subData.map((sub: string, j: number) => (
                              <li key={j}>{sub}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
