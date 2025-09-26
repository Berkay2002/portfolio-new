export type Project = {
  id: string;
  title: string;
  description: string;
  descriptionSv?: string;
  technologies: string[];
  link?: string;
  institution?: string;
  image?: string; // Path to screenshot/image
  imageAlt?: string; // Alternative text for the image
  
  // Content paths for MDX files
  contentPath?: string; // Path to main MDX content file
  
  // Enhanced features
  architectureDiagram?: {
    image: string;
    alt: string;
    description?: string;
    descriptionSv?: string;
  };
  
  liveDemo?: {
    url: string;
    title: string;
    height?: number; // iframe height, default 600px
    description?: string;
    descriptionSv?: string;
  };
  
  installation?: {
    prerequisites?: string[];
    steps: string[];
    stepsSv?: string[];
    additionalNotes?: string;
    additionalNotesSv?: string;
  };
  
  contributing?: {
    guidelines: string[];
    guidelinesSv?: string[];
    setupSteps?: string[];
    setupStepsSv?: string[];
  };
  
  // Existing fields
  detailedDescription?: string;
  detailedDescriptionSv?: string;
  features?: string[];
  featuresSv?: string[];
  challenges?: string[];
  challengesSv?: string[];
  solution?: string;
  solutionSv?: string;
  outcome?: string;
  outcomeSv?: string;
  githubLink?: string;
  paperLink?: string;
  gallery?: {
    image: string;
    alt: string;
    caption?: string;
    captionSv?: string;
  }[];
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
  titleSv?: string;
  location: string;
  locationSv?: string;
  description: string;
  descriptionSv?: string;
  detailedDescription?: string;
  detailedDescriptionSv?: string;
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

// MDX Content type for frontmatter
export type MDXFrontmatter = {
  title: string;
  description: string;
  technologies: string[];
  status?: "completed" | "in-progress" | "archived";
  difficulty?: 1 | 2 | 3 | 4 | 5;
  duration?: string;
  teamSize?: number;
  projectType?: "academic" | "personal" | "client" | "open-source";
};