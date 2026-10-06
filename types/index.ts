export type Project = {
  id: string;
  title: string;
  description: string;
  descriptionSv?: string;
  technologies: string[];
  projectInfo?: {
    label: string;
    labelSv?: string;
    value: string;
    valueSv?: string;
    href?: string;
  }[];
  projectLinks?: {
    label: string;
    labelSv?: string;
    icon?: "npm" | "claude" | "openai" | "agent-stack";
    href?: string;
    command?: string;
    items?: {
      label: string;
      labelSv?: string;
      icon?: "npm" | "claude" | "openai" | "agent-stack";
      href?: string;
      command?: string;
    }[];
  }[];
  link?: string;
  linkLabel?: string; // Custom label for the link button (default: "View Live Project")
  linkLabelSv?: string; // Swedish custom label for the link button
  frontendLink?: string; // Optional link to dedicated frontend UI
  institution?: string;
  image?: string; // Path to screenshot/image
  imageAlt?: string; // Alternative text for the image
  video?: string; // Path to hero video (takes precedence over image)
  detailedDescription?: string; // Longer description for project detail page
  detailedDescriptionSv?: string; // Swedish longer description for project detail page
  features?: string[]; // List of key features
  featuresSv?: string[]; // Swedish list of key features
  challenges?: string[]; // Challenges faced during development
  challengesSv?: string[]; // Swedish challenges faced during development
  solution?: string; // How challenges were solved
  solutionSv?: string; // Swedish version of how challenges were solved
  outcome?: string; // Results or impact of the project
  outcomeSv?: string; // Swedish results or impact of the project
  githubLink?: string; // Link to GitHub repository
  playgroundLink?: string; // Link to interactive playground/demo
  paperLink?: string; // Link to research paper PDF
  microservices?: {
    name: string;
    description: string;
    descriptionSv?: string;
    technologies?: string[];
    link?: string;
  }[];
  gallery?: {
    image: string;
    alt: string;
    video?: string; // Video source — when set, renders a looping video instead of a static image
    caption?: string;
    captionSv?: string;
  }[]; // Additional images/videos for the project
};

export type PersonalInfo = {
  name: string;
  title: string;
  bio: string;
};

export type SocialLinks = {
  github: string;
  linkedin: string;
  cv: string;
};

// Language Definitions
export type Locale = "en" | "sv";
