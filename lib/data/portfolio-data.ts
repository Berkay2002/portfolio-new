// PROJECTS IMPORTS:

import type {
  PersonalInfo,
  Project,
  SocialLinks,
} from "@/types";
import { alertz } from "./projects/alertz";
import { retrofy } from "./projects/ai-image-editor";
import { albyradet } from "./projects/albyradet";
import { animatch } from "./projects/animatch";
import { chatbot } from "./projects/chatbot";
import { clairvoyant } from "./projects/clairvoyant";
import { fasttalk } from "./projects/fasttalk";
import { fracturedCrown } from "./projects/fractured-crown";
import { kliv } from "./projects/kliv";
import { litheplan } from "./projects/litheplan";
import { medieteknik } from "./projects/medieteknik";
import { oversee } from "./projects/oversee";
import { primitiveUi } from "./projects/primitive-ui";
import { researcher } from "./projects/researcher";
import { snapgredient } from "./projects/snapgredient";
import { solarSystem } from "./projects/solar-system";
import { statsforspotify } from "./projects/statsforspotify";
import { voxelProject } from "./projects/voxel-project";
import { wikillm } from "./projects/wikillm";

export const personalInfo: PersonalInfo = {
  name: "Berkay Orhan",
  title: "Software Developer",
  bio: "Berkay is a software developer at Ericsson in Linköping, building AI systems: agentic retrieval, voice pipelines and the web apps around them.",
};

export const projects: Project[] = [
  wikillm,
  fracturedCrown,
  voxelProject,
  statsforspotify,
  chatbot,
  alertz,
  fasttalk,
  researcher,
  oversee,
  primitiveUi,
  snapgredient,
  retrofy,
  albyradet,
  animatch,
  clairvoyant,
  kliv,
  litheplan,
  medieteknik,
  solarSystem,
];

// The year each project started (its repository's creation date) and its groups on /projects.
export type ProjectTag = "ai" | "web" | "graphics" | "mobile";
export const projectMeta: Record<string, { year: number; tags: ProjectTag[] }> = {
  wikillm: { year: 2026, tags: ["ai"] },
  "fractured-crown": { year: 2026, tags: ["web"] },
  "voxel-project": { year: 2026, tags: ["graphics"] },
  statsforspotify: { year: 2026, tags: ["web"] },
  "municipality-chatbot": { year: 2025, tags: ["ai", "web"] },
  alertz: { year: 2026, tags: ["web"] },
  fasttalk: { year: 2025, tags: ["ai"] },
  researcher: { year: 2025, tags: ["ai"] },
  oversee: { year: 2025, tags: ["web", "ai"] },
  "primitive-ui": { year: 2025, tags: ["mobile", "graphics"] },
  snapgredient: { year: 2025, tags: ["mobile", "ai"] },
  retrofy: { year: 2025, tags: ["ai", "web"] },
  albyradet: { year: 2024, tags: ["web"] },
  animatch: { year: 2024, tags: ["ai", "web"] },
  clairvoyant: { year: 2025, tags: ["ai"] },
  kliv: { year: 2025, tags: ["web"] },
  litheplan: { year: 2025, tags: ["web"] },
  medieteknik: { year: 2022, tags: ["web"] },
  "solar-system": { year: 2025, tags: ["graphics"] },
};

export const socialLinks: SocialLinks = {
  github: "https://github.com/Berkay2002",
  linkedin: "https://linkedin.com/in/berkay-orhan-b71256204",
  cv: "/Resume.pdf",
};
