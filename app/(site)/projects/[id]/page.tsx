import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/landing/pages";
import { projects } from "@/lib/data/portfolio-data";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { id } = await props.params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Project`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Project | Berkay Orhan`,
      description: project.description,
      images: project.image ? [project.image] : ["/images/og-image.jpg"],
    },
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectPage(props: Props) {
  const { id } = await props.params;
  if (!projects.some((p) => p.id === id)) notFound();
  return <ProjectDetail id={id} />;
}
