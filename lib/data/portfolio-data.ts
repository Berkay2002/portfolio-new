// PROJECTS IMPORTS:

import type {
  PersonalInfo,
  Project,
  Skill,
  SocialLinks,
  TimelineEvent,
} from "@/types";
import { agentMesh } from "./projects/agent-mesh";
import { aiImageEditor } from "./projects/ai-image-editor";
import { albyradet } from "./projects/albyradet";
import { animatch } from "./projects/animatch";
import { clairvoyant } from "./projects/clairvoyant";
import { claudeXmlAgent } from "./projects/claude-xml-agent";
import { kliv } from "./projects/kliv";
import { litheplan } from "./projects/litheplan";
import { livenotes } from "./projects/livenotes";
import { medieteknik } from "./projects/medieteknik";
import { solarSystem } from "./projects/solar-system";
import { sttService } from "./projects/stt-service";

export const personalInfo: PersonalInfo = {
  name: "Berkay Orhan",
  title: "Machine Learning Student",
  bio: "Engineering student passionate about machine learning and web development. Currently pursuing my master's in ML, web technologies, and cybersecurity. In my free time, I enjoy photography, gaming, and spending time with friends.",
  bioEn:
    "Engineering student passionate about machine learning and web development. Currently pursuing my master's in ML, web technologies, and cybersecurity. In my free time, I enjoy photography, gaming, and spending time with friends.",
  bioSv:
    "Ingenjörsstudent med intresse för maskininlärning och webbutveckling. Läser för närvarande en master inom ML, webbteknologier och cybersäkerhet. På fritiden ägnar jag mig åt fotografi, gaming och att umgås med vänner.",
};

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["TypeScript", "Python", "JavaScript", "C++"],
  },
  {
    category: "Full-Stack Development",
    items: ["Next.js 15", "React 19", "Node.js", "TypeScript", "REST APIs"],
  },
  {
    category: "AI & Machine Learning",
    items: [
      "Vercel AI SDK",
      "Google Gemini",
      "LangChain",
      "PyTorch",
      "FastAPI",
      "CUDA",
    ],
  },
  {
    category: "Databases & Storage",
    items: ["Supabase", "PostgreSQL", "Qdrant", "Neo4j", "MongoDB", "Redis"],
  },
  {
    category: "UI/UX & Styling",
    items: ["Tailwind CSS", "shadcn/ui", "Framer Motion", "Radix UI"],
  },
  {
    category: "Cloud & Deployment",
    items: ["Vercel", "Google Cloud", "Docker", "Firebase", "Upstash"],
  },
];

// Skill detail descriptions for hover cards
export const skillDetails: Record<
  string,
  { description: string; level: number; yearsExperience: number }
> = {
  Python: {
    description:
      "Primary language for ML/AI, microservices, and backend systems (STT, BERT, Whisper, FastAPI, PyTorch, etc.)",
    level: 92,
    yearsExperience: 5,
  },
  JavaScript: {
    description:
      "Full-stack web development, UI logic, and API integration (React, Next.js, Node.js)",
    level: 82,
    yearsExperience: 5,
  },
  TypeScript: {
    description:
      "Advanced type-safe JavaScript for large-scale, production-grade web apps and microservices. Used across all major projects (Next.js, React, API contracts, real-time collaboration, AI, and admin systems).",
    level: 95,
    yearsExperience: 3,
  },
  "Full-Stack Development": {
    description:
      "Expertise in building, deploying, and maintaining full-stack applications using Next.js, React, TypeScript, Node.js, REST APIs, authentication, real-time collaboration, and cloud-native patterns. Demonstrated in complex, production-ready projects (Clairvoyant, Agent Mesh, Kliv, Albyrådet, LiTHePlan, LiveNotes, AI Image Editor, Animatch, Medieteknik, etc.).",
    level: 94,
    yearsExperience: 3,
  },
  "C++": {
    description:
      "Systems programming, algorithmic problem solving, and performance-critical code",
    level: 70,
    yearsExperience: 5,
  },
  React: {
    description:
      "Modern UI development with hooks, state management, and component design (React 19, shadcn/ui)",
    level: 87,
    yearsExperience: 4,
  },
  "Next.js": {
    description:
      "Expert-level experience with Next.js (v14/v15) for full-stack, production-grade web apps: app router, SSR, API routes, server/client components, authentication, real-time features, and advanced deployment. Used as the foundation for all major projects (Clairvoyant, Agent Mesh, Kliv, Albyrådet, LiTHePlan, LiveNotes, AI Image Editor, Animatch, Medieteknik, etc.).",
    level: 97,
    yearsExperience: 3,
  },
  "Node.js": {
    description:
      "Server-side JavaScript for APIs, real-time services, and microservices (API routes, WebSockets)",
    level: 80,
    yearsExperience: 5,
  },
  "Tailwind CSS": {
    description:
      "Utility-first CSS for rapid, responsive UI (custom design systems, retro/brutalist, shadcn/ui)",
    level: 90,
    yearsExperience: 3,
  },
  // --- STT Service (microservice, real-time pipeline) ---
  "STT Service": {
    description:
      "Microservice for real-time speech-to-text (STT) as part of a FastTalk pipeline (STT→LLM→TTS) using WhisperLive, Faster-Whisper, FastAPI, and GPU acceleration. Handles sub-300ms latency, dual-mode processing, and advanced voice activity detection.",
    level: 90,
    yearsExperience: 1,
  },
  TensorFlow: {
    description:
      "Deep learning framework for neural networks and ML model development",
    level: 75,
    yearsExperience: 2,
  },
  Keras: {
    description: "High-level neural networks API for rapid prototyping",
    level: 70,
    yearsExperience: 2,
  },
  "Deep Learning": {
    description:
      "Neural networks, CNNs, RNNs for computer vision and NLP tasks",
    level: 75,
    yearsExperience: 2,
  },
  "Data Mining": {
    description: "Extracting patterns and insights from large datasets",
    level: 70,
    yearsExperience: 2,
  },
  MongoDBAtlas: {
    description: "NoSQL database for scalable, document-based applications",
    level: 65,
    yearsExperience: 3,
  },
  Firebase: {
    description:
      "Advanced experience with Firebase: authentication, Firestore, real-time database, and cloud functions. Used for secure user management, real-time data sync, and backendless features in production web and mobile apps.",
    level: 88,
    yearsExperience: 3,
  },
  Supabase: {
    description: "Open-source Firebase alternative with PostgreSQL",
    level: 90,
    yearsExperience: 4,
  },
  "REST APIs": {
    description: "Designing and consuming RESTful web services",
    level: 88,
    yearsExperience: 4,
  },
  "Scikit-learn": {
    description:
      "Machine learning library for classification, regression, and clustering",
    level: 77,
    yearsExperience: 2,
  },
  "Automatic control": {
    description: "Control systems theory and implementation",
    level: 79,
    yearsExperience: 4,
  },
  "Simulations (e.g. MATLAB/Simulink)": {
    description: "Mathematical modeling and system simulation",
    level: 81,
    yearsExperience: 5,
  },
  // --- Added missing tooltips below ---
  "Next.js 15": {
    description:
      "Latest major version of the Next.js React framework, used for full-stack web apps.",
    level: 97,
    yearsExperience: 1,
  },
  "React 19": {
    description: "Latest React version for building modern, interactive UIs.",
    level: 87,
    yearsExperience: 1,
  },
  "Vercel AI SDK": {
    description:
      "Advanced use of Vercel AI SDK for building production-grade, multi-agent, and research AI platforms (Clairvoyant, Agent Mesh). Experience includes streaming, tool orchestration, dual-agent architectures, and integration with Gemini/LLM APIs.",
    level: 92,
    yearsExperience: 0.5,
  },

  // ---
  // Why Next.js proficiency is set to 97/100:
  // You have used Next.js (v14/v15) as the foundation for nearly all major projects, including complex, production-ready apps (Clairvoyant, Agent Mesh, Kliv, Albyrådet, LiTHePlan, LiveNotes, AI Image Editor, Animatch, Medieteknik, etc.).
  // Your portfolio demonstrates mastery of the app router, SSR, API routes, server/client component boundaries, authentication, real-time features, and advanced deployment. The breadth and depth of your Next.js usage, including custom design systems, real-time collaboration, and AI integrations, justify an expert-level rating.
  "Google Gemini": {
    description:
      "Extensive experience integrating Google Gemini (Pro/Flash) for LLM-powered chat, research, and multi-agent orchestration (Clairvoyant, Agent Mesh). Used for reasoning, streaming, and tool augmentation in production apps.",
    level: 90,
    yearsExperience: 0.5,
  },
  "Google Gemini SDK": {
    description:
      "Advanced use of Gemini SDK for prompt engineering, streaming, and tool integration in AI platforms (Clairvoyant, Agent Mesh). Experience with both Pro and Flash models, including multi-agent and research workflows.",
    level: 88,
    yearsExperience: 0.5,
  },
  "Google Vertex AI": {
    description:
      "Used Vertex AI for scalable, cloud-based LLM inference and orchestration in multi-agent systems (Agent Mesh). Experience includes deployment, authentication, and integration with Google Cloud Run and Gemini models.",
    level: 85,
    yearsExperience: 0.5,
  },
  LangChain: {
    description:
      "Framework for developing applications powered by language models.",
    level: 65,
    yearsExperience: 0.5,
  },
  PyTorch: {
    description:
      "Deep learning framework for building and training neural networks.",
    level: 79,
    yearsExperience: 2,
  },
  FastAPI: {
    description: "High-performance Python web framework for building APIs.",
    level: 85,
    yearsExperience: 2,
  },
  CUDA: {
    description: "NVIDIA's parallel computing platform for GPU acceleration.",
    level: 85,
    yearsExperience: 2,
  },
  PostgreSQL: {
    description: "Advanced open-source relational database system.",
    level: 90,
    yearsExperience: 4,
  },
  Qdrant: {
    description: "Vector database for semantic search and AI applications.",
    level: 75,
    yearsExperience: 0.5,
  },
  Neo4j: {
    description: "Graph database for connected data and relationships.",
    level: 70,
    yearsExperience: 0.5,
  },
  MongoDB: {
    description: "NoSQL document database for scalable applications.",
    level: 65,
    yearsExperience: 4,
  },
  Redis: {
    description: "In-memory data store for caching and fast data access.",
    level: 75,
    yearsExperience: 2,
  },
  "shadcn/ui": {
    description: "Accessible and customizable React UI component library.",
    level: 95,
    yearsExperience: 2,
  },
  "Framer Motion": {
    description: "Animation library for React to create smooth UI transitions.",
    level: 88,
    yearsExperience: 2,
  },
  "Radix UI": {
    description: "Primitives for building accessible React design systems.",
    level: 90,
    yearsExperience: 2,
  },
  "Google Cloud": {
    description:
      "Extensive experience with Google Cloud: Cloud Run, Compute Engine, Firewall, Firebase, Firestore, Vertex AI, Generative AI, Google TTS, and more. Skilled in deploying, scaling, securing, and integrating fullstack and AI systems using advanced GCP services, CI/CD, and GPU/CPU orchestration.",
    level: 93,
    yearsExperience: 1,
  },
  Vercel: {
    description:
      "Expert-level experience deploying, scaling, and optimizing fullstack Next.js/React apps (Clairvoyant, Kliv, LiTHePlan, LiveNotes, AI Image Editor, Animatch, etc.) on Vercel. Proficient with custom domains, serverless functions, edge middleware, and analytics.",
    level: 95,
    yearsExperience: 3,
  },
  Docker: {
    description:
      "Advanced use of Docker for containerizing microservices, AI inference, and web apps (STT Service, Agent Mesh, etc.). Experience with multi-stage builds, GPU/CPU variants, docker-compose, and production deployment.",
    level: 85,
    yearsExperience: 1,
  },
};

export const projects: Project[] = [
  agentMesh,
  aiImageEditor,
  albyradet,
  animatch,
  clairvoyant,
  claudeXmlAgent,
  kliv,
  litheplan,
  livenotes,
  medieteknik,
  solarSystem,
  sttService,
];

export const socialLinks: SocialLinks = {
  github: "https://github.com/Berkay2002",
  linkedin: "https://linkedin.com/in/berkay-orhan-b71256204",
  cv: "/resume.pdf",
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: "bachelors",
    title: "Bachelor's Degree in Engineering",
    titleSv: "Bachelor's Degree in Engineering",
    location: "Linköping University",
    locationSv: "Linköpings universitet",
    description:
      "Completed my bachelor's with a focus on programming and applied mathematics.",
    descriptionSv:
      "Avslutade min kandidatexamen med fokus på programmering och tillämpad matematik.",
    detailedDescription:
      "Graduated with a Bachelor of Science in Engineering, specializing in Media Technology. The program combined technical skills with creative applications, covering programming, mathematics, signal processing, and human-computer interaction. Key coursework included algorithms and data structures, linear algebra, digital signal processing, computer graphics, and web development. Completed several significant projects including interactive visualizations, web applications, and multimedia systems.",
    detailedDescriptionSv:
      "Examen som Civilingenjör inom Medieteknik. Programmet kombinerade tekniska färdigheter med kreativa tillämpningar, täckande programmering, matematik, signalbehandling och människa-datorinteraktion. Viktiga kurser inkluderade algoritmer och datastrukturer, linjär algebra, digital signalbehandling, datorgrafik och webbutveckling. Genomförde flera betydande projekt inklusive interaktiva visualiseringar, webbapplikationer och multimediasystem.",
    date: "2021 - 2024",
    type: "education",
  },
  {
    id: "masters",
    title: "Master's Degree in Engineering",
    titleSv: "Master's Degree in Engineering",
    location: "Linköping University",
    locationSv: "Linköpings universitet",
    description:
      "Studying machine learning, image processing and cybersecurity in my master's program.",
    descriptionSv:
      "Studerar maskininlärning, bildbehandling och cybersäkerhet i mitt masterprogram.",
    detailedDescription:
      "Currently pursuing a Master of Science in Engineering with a focus on advanced machine learning techniques, computer vision, and cybersecurity. The program includes deep learning architectures, neural networks, image processing algorithms, security protocols, and ethical AI considerations. Working on cutting-edge research projects in natural language processing and computer vision, while developing expertise in Python, TensorFlow, PyTorch, and various ML frameworks.",
    detailedDescriptionSv:
      "Läser för närvarande en Master of Science in Engineering med fokus på avancerade maskininlärningstekniker, datorseende och cybersäkerhet. Programmet inkluderar djuplärningsarkitekturer, neurala nätverk, bildbehandlingsalgoritmer, säkerhetsprotokoll och etiska AI-överväganden. Arbetar med banbrytande forskningsprojekt inom naturlig språkbehandling och datorseende, samtidigt som jag utvecklar expertis inom Python, TensorFlow, PyTorch och olika ML-ramverk.",
    date: "2024 - Present",
    type: "education",
  },
  /* Temporarily commented out
  {
    id: "internship",
    title: "Machine Learning Intern",
    location: "Loading...",
    description: "",
    date: "Summer 2025",
    type: "work"
  },
  */
];
