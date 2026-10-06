import type { Metadata } from "next";

import { ProjectList } from "@/components/landing/pages";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of all projects by Berkay Orhan.",
};

export default function ProjectsPage() {
  return <ProjectList />;
}
