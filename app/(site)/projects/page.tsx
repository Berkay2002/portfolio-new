import type { Metadata } from "next";

import { ProjectList } from "@/components/landing/pages";
import { projectMeta, projects } from "@/lib/data/portfolio-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of all projects by Berkay Orhan.",
};

export default function ProjectsPage() {
  const rows = projects.map(({ id, title, description, descriptionSv, technologies, image }) => ({
    id,
    title,
    description,
    descriptionSv,
    technologies,
    image,
    year: projectMeta[id]?.year,
    tags: projectMeta[id]?.tags ?? [],
  }));
  return <ProjectList projects={rows} />;
}
