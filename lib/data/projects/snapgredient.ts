import type { Project } from "@/types";

export const snapgredient: Project = {
  id: "snapgredient",
  title: "Snapgredient: AI Recipe Generator",
  description:
    "Flutter + Firebase mobile app that scans ingredient photos, detects items with Gemini, and generates personalized recipes with a pantry, favorites and an in-app cooking chat.",
  descriptionSv:
    "Flutter + Firebase-mobilapp som skannar ingrediensfoton, identifierar dem med Gemini och genererar personliga recept med skafferi, favoriter och en matlagningschatt i appen.",
  technologies: [
    "Flutter",
    "Firebase Auth",
    "Firestore",
    "Firebase AI",
    "Gemini AI",
    "Riverpod",
    "Hive",
  ],
  link: "https://github.com/Berkay2002/tdde02",
  imageAlt: "Snapgredient mobile recipe flow",
  imageAltSv: "Snapgredients receptflöde i mobilen",
  detailedDescription:
    "AI-powered recipe assistant that captures pantry photos, uses Gemini to detect ingredients, and proposes tailored recipes. Gemini 3 Pro runs through Firebase AI with Google Search grounding, per-user rate limits keep usage in check, and recipes, pantry and preferences are stored in Firebase with Google Sign-In and App Check hardening. Includes extensive setup guides and troubleshooting for first-time Flutter/Firebase developers.",
  detailedDescriptionSv:
    "AI-baserad receptassistent som fångar skafferifoton, använder Gemini för att identifiera ingredienser och föreslår skräddarsydda recept. Gemini 3 Pro körs via Firebase AI med förankring i Google Search, användningsgränser per användare håller nere belastningen, och recept, skafferi och preferenser sparas i Firebase med Google-inloggning och App Check-skydd. Innehåller omfattande setup-guider och felsökning för nya Flutter/Firebase-utvecklare.",
  features: [
    "Camera capture and ingredient detection via Gemini AI",
    "Recipe generation tailored to available ingredients",
    "User profiles with dietary preferences and cooking skill",
    "Pantry of detected ingredients and a favorites list for saved recipes",
    "Ask Chef chat for cooking questions, with Google Search sources",
    "Firebase Auth + Firestore sync with per-user rate limits",
  ],
  featuresSv: [
    "Kamerafångst och ingrediensdetektion via Gemini AI",
    "Receptgenerering anpassad till tillgängliga ingredienser",
    "Användarprofiler med kostpreferenser och matlagningsnivå",
    "Skafferi med identifierade ingredienser och favoritlista för sparade recept",
    "Ask Chef-chatt för matlagningsfrågor, med källor från Google Search",
    "Firebase Auth + Firestore-synk med användningsgränser per användare",
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
    "Documented Quick Start and troubleshooting guides, Riverpod-driven state management around capture→detect→generate→save, Firebase Auth with Firestore sync of pantry and favorites, and Gemini prompt templates for more stable ingredient detection.",
  solutionSv:
    "Dokumenterade Quick Start- och felsökningsguider, Riverpod-baserad statehantering kring fånga→detektera→generera→spara samt Firebase Auth med Firestore-synk av skafferi och favoriter, och promptmallar för Gemini som ger stabilare ingrediensdetektion.",
  outcome:
    "A university course project: a mobile app that turns pantry snapshots into recipes, with setup and troubleshooting guides covering the full Firebase + Gemini configuration.",
  outcomeSv:
    "Ett universitetsprojekt: en mobilapp som gör om bilder på skafferiet till recept, med guider för installation och felsökning som täcker hela Firebase + Gemini-konfigurationen.",
  githubLink: "https://github.com/Berkay2002/tdde02",
};
