import type { Project } from "@/types";

export const retrofyEnhanced: Project = {
  id: "retrofy",
  title: "Retrofy",
  description:
    "A modern, mobile-first AI-powered image editing application built with Next.js 15 and Google's Generative AI. Transform images with natural language prompts and maintain complete editing history with a custom retro/brutalist design system.",
  descriptionSv:
    "En modern, mobilanpassad AI-driven bildredigeringsapplikation byggd med Next.js 15 och Google's Generative AI. Transformera bilder med naturliga språkprompts och behåll komplett redigeringshistorik med ett anpassat retro/brutalistiskt designsystem.",
  technologies: [
    "Next.js 15",
    "TypeScript",
    "Google Generative AI",
    "Tailwind CSS",
    "React 19",
    "PWA",
    "Canvas API",
    "Radix UI",
  ],
  link: "https://github.com/Berkay2002/image-editor",
  image: "/images/projects/retrofy.png",
  imageAlt:
    "Retrofy interface showing retro design with image editing capabilities",
  
  // Enhanced features
  contentPath: "/content/projects/ai-image-editor.mdx",
  
  architectureDiagram: {
    image: "/images/projects/retrofy-architecture.png",
    alt: "Retrofy application architecture diagram showing client-server communication flow",
    description: "System architecture showcasing the hybrid client-server approach with Google Gemini AI integration, Progressive Web App features, and mobile-first design patterns.",
    descriptionSv: "Systemarkitektur som visar den hybrida klient-server-metoden med Google Gemini AI-integration, Progressive Web App-funktioner och mobilanpassade designmönster."
  },
  
  liveDemo: {
    url: "https://retrofy-demo.vercel.app",
    title: "Interactive Demo",
    height: 700,
    description: "Try out Retrofy's AI-powered image editing features directly in your browser. Upload an image and transform it using natural language prompts.",
    descriptionSv: "Prova Retrofys AI-drivna bildredigeringsfunktioner direkt i din webbläsare. Ladda upp en bild och transformera den med naturliga språkprompts."
  },
  
  installation: {
    prerequisites: [
      "Node.js 18+ and npm/yarn",
      "Google Generative AI API key",
      "Git for version control"
    ],
    steps: [
      "Clone the repository: `git clone https://github.com/Berkay2002/image-editor.git`",
      "Navigate to project directory: `cd image-editor`",
      "Install dependencies: `npm install`",
      "Copy `.env.example` to `.env.local` and add your Google AI API key",
      "Run development server: `npm run dev`",
      "Open http://localhost:3000 in your browser"
    ],
    stepsSv: [
      "Klona repositoriet: `git clone https://github.com/Berkay2002/image-editor.git`",
      "Navigera till projektmappen: `cd image-editor`",
      "Installera beroenden: `npm install`",
      "Kopiera `.env.example` till `.env.local` och lägg till din Google AI API-nyckel",
      "Kör utvecklingsservern: `npm run dev`",
      "Öppna http://localhost:3000 i din webbläsare"
    ],
    additionalNotes: "Make sure to configure your Google AI API key with proper rate limits and safety settings for production use.",
    additionalNotesSv: "Se till att konfigurera din Google AI API-nyckel med korrekta hastighetsgränser och säkerhetsinställningar för produktionsanvändning."
  },
  
  contributing: {
    guidelines: [
      "Follow the existing code style and TypeScript conventions",
      "Write descriptive commit messages using conventional commits",
      "Add tests for new features and bug fixes",
      "Update documentation for any API changes",
      "Ensure all linting and type checks pass before submitting PR"
    ],
    guidelinesSv: [
      "Följ befintlig kodstil och TypeScript-konventioner",
      "Skriv beskrivande commit-meddelanden med conventional commits",
      "Lägg till tester för nya funktioner och buggfixar",
      "Uppdatera dokumentation för API-ändringar",
      "Säkerställ att alla linting- och typkontroller passerar innan PR skickas"
    ],
    setupSteps: [
      "Fork the repository on GitHub",
      "Follow the installation steps above",
      "Create a new branch for your feature: `git checkout -b feature/amazing-feature`",
      "Make your changes and test thoroughly",
      "Run `npm run lint` and `npm run type-check` to ensure code quality",
      "Submit a pull request with a clear description of changes"
    ],
    setupStepsSv: [
      "Forka repositoriet på GitHub",
      "Följ installationsstegen ovan",
      "Skapa en ny gren för din funktion: `git checkout -b feature/amazing-feature`",
      "Gör dina ändringar och testa noggrant",
      "Kör `npm run lint` och `npm run type-check` för att säkerställa kodkvalitet",
      "Skicka en pull request med en tydlig beskrivning av ändringarna"
    ]
  },
  
  // Existing fields (condensed for brevity)
  detailedDescription:
    "Retrofy is a sophisticated, mobile-first web application that leverages Google's Gemini 2.5 Flash Image Preview API to transform images through natural language prompts. Built with Next.js 15 and featuring a distinctive retro/brutalist design system, the application provides both text-to-image generation and image-to-image editing capabilities.",
  detailedDescriptionSv:
    "Retrofy är en sofistikerad, mobilanpassad webbapplikation som utnyttjar Google's Gemini 2.5 Flash Image Preview API för att transformera bilder genom naturliga språkprompts. Byggd med Next.js 15 och med ett distinkt retro/brutalistiskt designsystem, tillhandahåller applikationen både text-till-bild-generering och bild-till-bild-redigeringsmöjligheter.",
  
  features: [
    "AI-Powered Image Editing with Google Gemini 2.5 Flash",
    "Mobile-First Zero-Scroll Interface Design",
    "Smart History Management with Visual Thumbnails",
    "Advanced Client-Side Image Processing",
    "Progressive Web App with Offline Support",
    "Real-time Processing with React Transitions",
    "Custom Retro/Brutalist Design System",
    "Production-Ready Error Handling"
  ],
  
  challenges: [
    "Mobile-First Optimization for Zero-Scroll Interface",
    "AI API Integration with Rate Limiting and Error Handling",
    "Client-Side Image Processing Performance",
    "Complex State Management for Editing History",
    "Memory Management for Blob URLs and Image Data",
    "Progressive Web App Implementation"
  ],
  
  solution:
    "Built using Next.js 15 with App Router architecture and React 19 for cutting-edge performance. AI integration uses Google's Gemini 2.5 Flash through secure server actions. Client-side processing leverages Canvas API for efficient image handling. Custom blob URL manager prevents memory leaks while smart history system enables professional editing workflows.",
  
  outcome:
    "Successfully demonstrates cutting-edge web technologies in a practical application. The mobile-first approach ensures excellent usability across all devices. AI integration delivers consistent, high-quality transformations while maintaining reasonable processing times. Technical achievements include sophisticated image processing workflows, memory-efficient management, and production-ready error handling.",
  
  githubLink: "https://github.com/Berkay2002/image-editor",
  
  gallery: [
    {
      image: "/images/projects/retrofy-mobile.png",
      alt: "Retrofy mobile interface showing zero-scroll design",
      caption: "Mobile-optimized interface with zero-scroll navigation",
      captionSv: "Mobiloptimerat gränssnitt med zero-scroll-navigering"
    },
    {
      image: "/images/projects/retrofy-processing.png",
      alt: "Retrofy AI processing interface with loading states",
      caption: "Real-time AI processing with comprehensive loading states",
      captionSv: "Realtids AI-bearbetning med omfattande laddningstillstånd"
    },
    {
      image: "/images/projects/retrofy-history.png",
      alt: "Retrofy history management with visual thumbnails",
      caption: "Smart history management with one-click revert functionality",
      captionSv: "Smart historikhantering med ett-klicks återställningsfunktion"
    }
  ]
};