"use client";

import { useEffect } from "react";
import { personalInfo, socialLinks, projects } from "@/lib/data/portfolio-data";

export function JsonLd() {
  useEffect(() => {
    // Only run on client side
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": personalInfo.name,
      "jobTitle": personalInfo.title,
      "description": personalInfo.bio,
      "url": "https://your-portfolio-domain.com",
      "sameAs": [
        socialLinks.github,
        socialLinks.linkedin
      ],
      "knowsAbout": [
        "Machine Learning",
        "Control Systems",
        "Cybersecurity",
        "TypeScript",
        "React",
        "Next.js",
        "Python"
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://your-portfolio-domain.com"
      },
      "workExample": projects.map(project => ({
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        ...(project.link && { "url": project.link })
      }))
    };

    // Create the script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      // Clean up
      document.head.removeChild(script);
    };
  }, []);

  return null;
} 