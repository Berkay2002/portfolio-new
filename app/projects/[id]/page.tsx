import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPageContent from "@/components/project-page-content";
import { projects } from "@/lib/data/portfolio-data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Project | Berkay Orhan`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Project | Berkay Orhan`,
      description: project.description,
      images: project.image ? [project.image] : ["/images/og-image.jpg"],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function ProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return <ProjectPageContent project={project} />;
}

export default ProjectPage;