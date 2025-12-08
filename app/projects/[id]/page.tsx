import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPageContent from "@/components/project-page-content";
import { projects } from "@/lib/data/portfolio-data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  await Promise.resolve(); // Ensure function contains an await expression
  const project = projects.find((p) => p.id === params.id);

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
  await Promise.resolve(); // Ensure function contains an await expression
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage(props: Props) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectPageContent project={project} />;
}
