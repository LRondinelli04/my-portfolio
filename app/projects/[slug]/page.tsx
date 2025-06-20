import { notFound } from "next/navigation";
import { jobProjects } from "@/components/data/projectsData";
import { Button } from "@/components/ui/button";
import ProjectDetails from "@/components/ProjectDetails";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export default function ProjectPage({ params }: Props) {
  const project = jobProjects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background">
      <ProjectDetails project={project} />
      <Link href="/" className="mt-8">
        <Button className="text-white">Volver a la página principal</Button>
      </Link>
    </div>
  );
}
