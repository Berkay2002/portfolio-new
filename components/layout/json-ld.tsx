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
      "url": "https://berkay.live",
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
        "@id": "https://berkay.live",
        "inLanguage": ["en", "sv"],
        "potentialAction": {
          "@type": "ReadAction",
          "target": ["https://berkay.live", "https://berkay.live#projects", "https://berkay.live#about"]
        }
      },
      "workExample": projects.map(project => ({
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        ...(project.link && { "url": project.link })
      }))
    };

    // Add website schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://berkay.live",
      "name": personalInfo.name,
      "description": personalInfo.bio,
      "inLanguage": ["en", "sv"],
      "author": {
        "@type": "Person",
        "name": personalInfo.name
      },
      "potentialAction": {
        "@type": "ViewAction",
        "target": "https://berkay.live"
      }
    };

    // Create the script elements
    const personScript = document.createElement('script');
    personScript.type = 'application/ld+json';
    personScript.text = JSON.stringify(schema);
    document.head.appendChild(personScript);

    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.text = JSON.stringify(websiteSchema);
    document.head.appendChild(websiteScript);

    return () => {
      // Clean up
      document.head.removeChild(personScript);
      document.head.removeChild(websiteScript);
    };
  }, []);

  return null;
} 