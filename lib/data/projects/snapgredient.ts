import type { Project } from "@/types";

export const snapgredient: Project = {
  id: "snapgredient",
  title: "Snapgredient: AI Recipe Generator",
  description:
    "Flutter + Firebase mobile app that scans ingredient photos, detects items with Gemini, and generates personalized recipes with saved history and profiles.",
  descriptionSv:
    "Flutter + Firebase-mobilapp som skannar ingrediensfoton, identifierar dem med Gemini och genererar personliga recept med sparad historik och profiler.",
  technologies: [
    "Flutter",
    "Firebase Auth",
    "Firestore",
    "Firebase Storage",
    "Gemini AI",
    "CameraX",
    "Riverpod",
  ],
  link: "https://github.com/Berkay2002/tdde02",
  imageAlt: "Snapgredient mobile recipe flow",
  detailedDescription:
    "AI-powered recipe assistant that captures pantry photos, uses Gemini to detect ingredients, and proposes tailored recipes. Stores recipe history and user preferences in Firebase with Google Sign-In and App Check hardening. Includes extensive setup guides and troubleshooting for first-time Flutter/Firebase developers.",
  detailedDescriptionSv:
    "AI-baserad receptassistent som fångar skafferifoton, använder Gemini för att identifiera ingredienser och föreslår skräddarsydda recept. Sparar recepthistorik och användarpreferenser i Firebase med Google-inloggning och App Check-skydd. Innehåller omfattande setup-guider och felsökning för nya Flutter/Firebase-utvecklare.",
  features: [
    "Camera capture and ingredient detection via Gemini AI",
    "Recipe generation tailored to available ingredients",
    "User profiles with dietary preferences and cooking skill",
    "Recipe history storage with save/favorite flows",
    "Firebase Auth + Firestore + Storage integration",
  ],
  featuresSv: [
    "Kamerafångst och ingrediensdetektion via Gemini AI",
    "Receptgenerering anpassad till tillgängliga ingredienser",
    "Användarprofiler med kostpreferenser och matlagningsnivå",
    "Recepthistorik med spara-/favoritflöden",
    "Firebase Auth + Firestore + Storage-integration",
  ],
  challenges: [
    "Onboarding developers through Firebase SHA/App Check setup",
    "Keeping AI detections reliable across varied lighting and inputs",
    "Synchronizing camera, AI, and storage flows on mobile",
  ],
  challengesSv: [
    "Onboarda utvecklare genom Firebase SHA/App Check-setup",
    "Hålla AI-detektioner pålitliga över varierande ljus och input",
    "Synka kamera-, AI- och lagringsflöden på mobil",
  ],
  solution:
    "Documented Quick Start and troubleshooting guides, Riverpod-driven state management around capture→detect→generate→save, and Firebase-backed auth/storage pipelines with Gemini prompt tuning for stable ingredient detection.",
  solutionSv:
    "Dokumenterade Quick Start- och felsökningsguider, Riverpod-baserad statehantering kring fånga→detektera→generera→spara samt Firebase-backad auth-/lagringspipeline med Gemini-promptjustering för stabil ingrediensdetektion.",
  outcome:
    "Delivers a polished mobile experience that turns pantry snapshots into actionable recipes while teaching teammates the full Firebase + Gemini setup for future features.",
  outcomeSv:
    "Levererar en polerad mobilupplevelse som omvandlar skafferibilder till användbara recept samtidigt som teamet lär sig hela Firebase + Gemini-setupen för framtida funktioner.",
  githubLink: "https://github.com/Berkay2002/tdde02",
};
