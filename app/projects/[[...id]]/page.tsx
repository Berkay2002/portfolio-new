import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/portfolio-data";
import ProjectPageContent from "@/components/project-page-content";

type Props = {
  params: { id: string }
}

// Generate metadata for the project page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }
  
  return <ProjectPageContent project={project} />;
} 