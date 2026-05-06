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
import type { Project } from "@/components/data/projectsData";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const cardContent = (
    <Card className="group lg:p-6 p-5 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200 duration-300 lg:hover:scale-105 lg:hover:shadow-lg">
      <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
        <Image
          src={project.imagePath}
          alt={`Screenshot of ${project.title}`}
          width={1920}
          height={1080}
          priority={priority}
          className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
        />
      </CardHeader>
      <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
        <div className="flex items-center justify-between">
          <p className="text-primary font-bold">
            {project.title}{" "}
            <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
          </p>
          {project.github && (
            <Button
              variant="outline"
              size="icon"
              aria-label={`Ver repositorio de ${project.title} en GitHub`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.github, "_blank", "noopener,noreferrer");
              }}
            >
              <GitHubIcon />
            </Button>
          )}
        </div>
        <CardDescription className="py-3 text-muted-foreground">
          {project.description}
        </CardDescription>
        <CardFooter className="p-0 flex flex-wrap gap-2">
          {project.skills.map((skill, i) => (
            <a
              href={skill.link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-200"
              title={`Ver más sobre ${skill.name}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Badge variant="readyBlue">{skill.name}</Badge>
            </a>
          ))}
          {project.details && (
            <Link
              href={`/projects/${project.slug}`}
              onClick={(e) => e.stopPropagation()}
            >
              <Button>Ver detalles</Button>
            </Link>
          )}
        </CardFooter>
      </CardContent>
    </Card>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:cursor-pointer"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
