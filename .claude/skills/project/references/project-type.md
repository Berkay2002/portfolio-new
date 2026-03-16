# Project Type Definition

Source: `types/index.ts`

```ts
export type Project = {
  id: string;
  // Unique, URL-safe identifier. Used to generate /projects/[id] routes.
  // Must be kebab-case (e.g. "solar-system", "fasttalk").

  title: string;
  // Display name shown in cards and page headings.

  description: string;
  // Short English summary (1-2 sentences) for project cards on the homepage.

  descriptionSv?: string;
  // Swedish translation of description. Required for bilingual support.

  technologies: string[];
  // Tech stack tags rendered as badges. Include frameworks, languages, and key libraries.

  link?: string;
  // Primary external URL (e.g. live demo or main repo). Rendered as the main CTA link.

  frontendLink?: string;
  // Separate frontend repo URL. Use when the project has a dedicated frontend codebase
  // distinct from the main backend/monorepo link.

  institution?: string;
  // Academic institution name (e.g. "Linköping University"). Include for course/university projects.

  image?: string;
  // Path to project screenshot or hero image, relative to /public (e.g. "/images/projects/foo.png").
  // Set to undefined if no image is available.

  imageAlt?: string;
  // Alt text for the image. Always include when image is set. Also used as fallback context
  // when image is undefined.

  detailedDescription?: string;
  // Longer English description for the project detail page (/projects/[id]).
  // Expands on the short description with architecture and scope details.

  detailedDescriptionSv?: string;
  // Swedish translation of detailedDescription.

  features?: string[];
  // Key features as bullet points. Format: "Feature Name: brief explanation" for consistency.
  // Typically 4-6 items.

  featuresSv?: string[];
  // Swedish translation of features. Must match the same number of items.

  challenges?: string[];
  // Technical challenges faced during development. Omit for simpler projects
  // where the challenge/solution narrative is not meaningful.

  challengesSv?: string[];
  // Swedish translation of challenges.

  solution?: string;
  // How the challenges were addressed, or general approach/methodology.
  // For simple projects without challenges, can describe the overall approach instead.

  solutionSv?: string;
  // Swedish translation of solution.

  outcome?: string;
  // Results, impact, or current state of the project. Can include metrics
  // (e.g. latency targets) or qualitative outcomes. Supports \n for paragraphs.

  outcomeSv?: string;
  // Swedish translation of outcome.

  githubLink?: string;
  // GitHub repository URL. Rendered as a GitHub icon/button on the detail page.

  playgroundLink?: string;
  // Internal route to an interactive demo page (e.g. "/playground/tdde19").
  // Only use for projects with embedded playground pages in this portfolio.

  paperLink?: string;
  // Path to a research paper PDF (e.g. "/papers/syngraph.pdf").
  // Use for academic projects that have an associated paper.

  microservices?: {
    name: string;
    // Display name of the microservice (e.g. "STT Service").

    description: string;
    // English description of what this service does.

    descriptionSv?: string;
    // Swedish translation.

    technologies?: string[];
    // Tech stack specific to this microservice.

    link?: string;
    // Repository or docs URL for this individual service.
  }[];
  // Array of independently deployable sub-components. Only include when the project
  // is architected as separate services with their own repos/endpoints.

  gallery?: {
    image: string;
    // Path relative to /public.

    alt: string;
    // Alt text for the gallery image.

    caption?: string;
    // Optional English caption displayed below the image.

    captionSv?: string;
    // Swedish translation of caption.
  }[];
  // Additional images beyond the main hero image. Use for screenshots, diagrams,
  // or architecture visuals that add context on the detail page.
};
```

## Field Usage Summary

| Field | Required | When to include |
|-------|----------|-----------------|
| `id`, `title`, `description`, `technologies` | Always | Every project |
| `descriptionSv` and all `*Sv` variants | Strongly recommended | All user-facing text needs EN + SV |
| `image`, `imageAlt` | When available | Include screenshot if one exists |
| `detailedDescription`, `features`, `solution`, `outcome` | Recommended | Populate for the detail page |
| `challenges` | Optional | When there is a meaningful challenge/solution narrative |
| `institution` | Optional | Academic/course projects |
| `link`, `githubLink` | Optional | When external URLs exist |
| `frontendLink` | Optional | Separate frontend repo |
| `playgroundLink` | Optional | Projects with embedded interactive demos |
| `paperLink` | Optional | Projects with associated research papers |
| `microservices` | Optional | Distributed architectures with independent sub-services |
| `gallery` | Optional | Additional screenshots or diagrams |
