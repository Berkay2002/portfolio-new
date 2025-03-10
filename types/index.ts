export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  institution?: string;
  image?: string;  // Path to screenshot/image
  imageAlt?: string; // Alternative text for the image
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  bioEn?: string;
  bioSv?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  cv: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  location: string;
  description: string;
  date: string;
  icon?: string;
  type: "education" | "work" | "achievement";
}

// Language Definitions
export type Locale = "en" | "sv";

export interface Translation {
  [key: string]: string | Translation;
}

export interface Translations {
  [locale: string]: Translation;
} 