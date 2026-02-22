import { personalInfo, projects, socialLinks } from "@/lib/data/portfolio-data";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    givenName: "Berkay",
    familyName: "Orhan",
    alternateName: "Berkay",
    jobTitle: personalInfo.title,
    description: `Berkay is a Machine Learning Engineer based in Sweden. ${personalInfo.bio}`,
    url: "https://berkay.se",
    sameAs: [
      socialLinks.github,
      socialLinks.linkedin,
      "https://berkay.se",
      "https://www.instagram.com/berkayorhan",
    ],
    knowsAbout: [
      "Machine Learning",
      "Artificial Intelligence",
      "Control Systems",
      "Cybersecurity",
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "PyTorch",
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://berkay.se",
      inLanguage: ["en", "sv"],
    },
    workExample: projects.map((project) => ({
      "@type": "SoftwareSourceCode",
      name: project.title,
      description: project.description,
      ...(project.link && { codeRepository: project.link }),
      ...(project.githubLink && { url: project.githubLink }),
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://berkay.se",
    name: "Berkay Orhan",
    alternateName: "Berkay",
    description: `Berkay is a Machine Learning Engineer based in Sweden. ${personalInfo.bio}`,
    inLanguage: ["en", "sv"],
    author: {
      "@type": "Person",
      name: "Berkay Orhan",
      alternateName: "Berkay",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
