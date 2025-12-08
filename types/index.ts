export type Project = {
  id: string;
  title: string;
  description: string;
  descriptionSv?: string;
  technologies: string[];
  link?: string;
  frontendLink?: string; // Optional link to dedicated frontend UI
  institution?: string;
  image?: string; // Path to screenshot/image
  imageAlt?: string; // Alternative text for the image
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
    caption?: string;
    captionSv?: string;
  }[]; // Additional images for the project
};

export type Skill = {
  category: string;
  items: string[];
};

export type PersonalInfo = {
  name: string;
  title: string;
  bio: string;
  bioEn?: string;
  bioSv?: string;
};

export type SocialLinks = {
  github: string;
  linkedin: string;
  cv: string;
};

export type TimelineEvent = {
  id: string;
  title: string;
  titleSv?: string; // Swedish title
  location: string;
  locationSv?: string; // Swedish location
  description: string;
  descriptionSv?: string; // Swedish description
  detailedDescription?: string; // Detailed description for collapsible section
  detailedDescriptionSv?: string; // Swedish detailed description
  date: string;
  icon?: string;
  type: "education" | "work" | "achievement";
};

// Language Definitions
export type Locale = "en" | "sv";

export type Translation = {
  [key: string]: string | Translation;
};

export type Translations = {
  [locale: string]: Translation;
};
