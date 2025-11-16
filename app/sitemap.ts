import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://berkay.se";
  const currentDate = new Date().toISOString();

  // Generate sitemap entries for each project
  const projectSitemapEntries = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Generate sitemap entries for papers
  const paperSitemapEntries = projects
    .filter((project) => project.paperLink)
    .map((project) => ({
      url: `${baseUrl}/papers/${project.id}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Add project detail pages
    ...projectSitemapEntries,
    // Add paper pages
    ...paperSitemapEntries,
  ];
}
