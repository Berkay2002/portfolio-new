import type { MetadataRoute } from "next";
import { papers } from "@/lib/data/papers";
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
  const paperSitemapEntries = papers.map((paper) => ({
    url: `${baseUrl}/papers/${paper.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const pageSitemapEntries = ["/projects", "/papers", "/playground", "/playground/tdde19", "/photography"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...pageSitemapEntries,
    // Add project detail pages
    ...projectSitemapEntries,
    // Add paper pages
    ...paperSitemapEntries,
  ];
}
