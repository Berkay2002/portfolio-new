import type {
  PersonalInfo,
  Project,
  Skill,
  SocialLinks,
  TimelineEvent,
} from "@/types";

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
    items: ["Python", "C++", "JavaScript", "TypeScript"],
  },
  {
    category: "Machine Learning",
    items: [
      "Deep Learning",
      "Data Mining",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
    ],
  },
  {
    category: "Web Development",
    items: ["React", "Node.js", "Next.js", "Tailwind CSS", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDBAtlas", "Firebase", "Supabase"],
  },
  {
    category: "Deployment",
    items: ["Vercel", "Firebase", "Supabase"],
  },
  {
    category: "Engineering",
    items: ["Automatic control", "Simulations (e.g. MATLAB/Simulink)"],
  },
];

export const projects: Project[] = [
  {
    id: "livenotes",
    title: "LiveNotes",
    description:
      "A real-time collaborative document editor built with Next.js 14 and Liveblocks. It offers a Google Docs-like experience with rich text editing and real-time collaboration features in a modern, responsive interface.",
    descriptionSv:
      "En realtidsbaserad samarbetseditor för dokument byggd med Next.js 14 och Liveblocks. Den erbjuder en Google Docs-liknande upplevelse med funktioner för avancerad textredigering och realtidssamarbete i ett modernt, responsivt gränssnitt.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Liveblocks",
      "Lexical",
      "Tailwind CSS",
      "Clerk",
      "Radix UI",
    ],
    link: "https://livenotes-iota.vercel.app/",
    image: "/images/projects/livenotes.png",
    imageAlt: "LiveNotes collaborative text editor interface",
    detailedDescription:
      "LiveNotes is a real-time collaborative document editor built with Next.js 14 and Liveblocks. It offers a Google Docs-like experience with rich text editing and real-time collaboration features in a modern, responsive interface.",
    detailedDescriptionSv:
      "LiveNotes är en realtidsbaserad samarbetseditor för dokument byggd med Next.js 14 och Liveblocks. Den erbjuder en Google Docs-liknande upplevelse med funktioner för avancerad textredigering och realtidssamarbete i ett modernt, responsivt gränssnitt.",
    features: [
      "Real-time Collaboration - Multiple users can edit documents simultaneously with changes synced instantly",
      "Rich Text Editor - Format text with headings, styling, and alignment options",
      "Commenting System - Add comments to specific text selections and resolve discussions",
      "Document Sharing - Control access with editor and viewer permission levels",
      "User Presence - See who's currently viewing or editing the document",
      "Progressive Web App - Install on mobile and desktop for offline capabilities",
      "Responsive Design - Optimized UI for both desktop and mobile devices",
      "Document Management - Create, search, and organize documents from a central dashboard",
      "Real-time Notifications - Get notified of mentions and document shares",
    ],
    featuresSv: [
      "Realtidssamarbete - Flera användare kan redigera dokument samtidigt med ändringar som synkroniseras direkt",
      "Avancerad textredigerare - Formatera text med rubriker, stilar och justeringsalternativ",
      "Kommentarsystem - Lägg till kommentarer till specifika textmarkeringar och lös diskussioner",
      "Dokumentdelning - Kontrollera åtkomst med behörighetsnivåer för redaktörer och visare",
      "Användarvisning - Se vem som för närvarande visar eller redigerar dokumentet",
      "Progressiv webbapp - Installera på mobil och dator för offlinefunktionalitet",
      "Responsiv design - Optimerat användargränssnitt för både stationära och mobila enheter",
      "Dokumenthantering - Skapa, sök och organisera dokument från en central instrumentpanel",
      "Realtidsaviseringar - Få meddelanden om omnämnanden och dokumentdelningar",
    ],
    solution:
      "Built with Next.js 14, TypeScript, and Tailwind CSS, LiveNotes leverages Liveblocks for real-time collaboration and Lexical for rich text editing. Authentication is handled by Clerk, with UI components from Radix UI for accessibility and consistency.",
    solutionSv:
      "Byggd med Next.js 14, TypeScript och Tailwind CSS, använder LiveNotes Liveblocks för realtidssamarbete och Lexical för avancerad textredigering. Autentisering hanteras av Clerk, med UI-komponenter från Radix UI för tillgänglighet och konsistens.",
    outcome:
      "The application features optimized performance with debounced searches, optimistic UI updates, and progressive enhancement techniques. The server-components architecture of Next.js 14 provides excellent performance while maintaining a great developer experience. This project demonstrates advanced frontend development skills including real-time data synchronization, complex state management, and responsive UI design principles.",
    outcomeSv:
      "Applikationen har optimerad prestanda med fördröjda sökningar, optimistiska UI-uppdateringar och progressiva förbättringstekniker. Serverkomponentarkitekturen i Next.js 14 ger utmärkt prestanda samtidigt som den upprätthåller en bra utvecklarupplevelse. Detta projekt visar avancerade kunskaper inom frontend-utveckling, inklusive realtidsdatasynkronisering, komplex tillståndshantering och responsiva UI-designprinciper.",
    githubLink: "https://github.com/Berkay2002/LiveNotes",
  },
  {
    id: "animatch",
    title: "AniMatch",
    description:
      "An anime recommendation system using BERT to analyze user preferences and suggest personalized anime recommendations based on content similarity.",
    descriptionSv:
      "Ett rekommendationssystem för anime som använder BERT för att analysera användarpreferenser och föreslå personliga animerekommendationer baserat på innehållslikhet.",
    technologies: [
      "Python",
      "TypeScript",
      "Next.js",
      "BERT",
      "MongoDB",
      "Web Workers",
    ],
    link: "https://animatch-chi.vercel.app/",
    image: "/images/projects/animatch.png",
    imageAlt: "AniMatch recommendation system interface",
    detailedDescription:
      "A Next.js-based web application that provides personalized anime recommendations based on content-based filtering. The system employs BERT embeddings to extract meaningful representations of anime metadata and cosine similarity to compute relationships between titles. Unlike traditional recommendation systems that rely on user data (collaborative filtering), AniMatch focuses on metadata analysis, ensuring accurate and contextually relevant recommendations even in cold-start scenarios.",
    detailedDescriptionSv:
      "En webbapplikation byggd med Next.js som ger personliga animerekommendationer baserat på innehållsbaserad filtrering. Systemet använder BERT-inbäddningar för att extrahera meningsfulla representationer av animes metadata och cosinuslikhet för att beräkna relationer mellan titlar. Till skillnad från traditionella rekommendationssystem som förlitar sig på användardata (kollaborativ filtrering), fokuserar AniMatch på metadataanalys, vilket säkerställer exakta och kontextuellt relevanta rekommendationer även i kallstartsscenarier.",
    features: [
      "Intelligent Recommendation Engine: Utilizes BERT embeddings for semantic understanding of descriptions, genres, themes, ratings, and demographics",
      "Weighted Feature Analysis: Custom weighting system (25% descriptions, 25% genres, 25% themes, 15% demographics, 10% age ratings) for balanced recommendations",
      "Interactive Interface: Clean, responsive UI with intuitive controls for browsing and selecting anime",
      "Real-time Recommendations: Web worker implementation for handling vector comparisons without freezing the UI",
      "Advanced Search Functionality: Comprehensive search capabilities with instant results",
      "Personalized Experience: Users can create a custom recommendation list by adding multiple anime they enjoy",
      "Detailed Anime Pages: Comprehensive information including images, descriptions, genres, themes, and ratings",
      "Curated Categories: Trending and top-ranked anime sections for exploration",
    ],
    featuresSv: [
      "Intelligent rekommendationsmotor: Använder BERT-inbäddningar för semantisk förståelse av beskrivningar, genrer, teman, betyg och demografi",
      "Viktad funktionsanalys: Anpassat viktsystem (25% beskrivningar, 25% genrer, 25% teman, 15% demografi, 10% åldersgränser) för balanserade rekommendationer",
      "Interaktivt gränssnitt: Rent, responsivt UI med intuitiva kontroller för att bläddra och välja anime",
      "Rekommendationer i realtid: Web worker-implementering för att hantera vektorjämförelser utan att frysa användargränssnittet",
      "Avancerad sökfunktionalitet: Omfattande sökmöjligheter med omedelbara resultat",
      "Personlig upplevelse: Användare kan skapa en anpassad rekommendationslista genom att lägga till flera anime de tycker om",
      "Detaljerade animesidor: Omfattande information inklusive bilder, beskrivningar, genrer, teman och betyg",
      "Kurerade kategorier: Trendiga och topprankade animesektioner för utforskning",
    ],
    challenges: [
      "Feature Dependencies: Reliance on quality and diversity of metadata for accurate recommendations",
      "Computational Cost: Processing vector calculations for large datasets efficiently",
      "Reinforcement Loops: Avoiding recommendation patterns that reinforce similar content",
      "Serendipity Balance: Ensuring variety in recommendations while maintaining relevance",
    ],
    challengesSv: [
      "Funktionsberoende: Beroende av metadata med hög kvalitet och mångfald för korrekta rekommendationer",
      "Beräkningskostnad: Effektiv bearbetning av vektorberäkningar för stora dataset",
      "Förstärkningsloopar: Undvikande av rekommendationsmönster som förstärker liknande innehåll",
      "Serendipitetsbalans: Säkerställa variation i rekommendationer samtidigt som relevans bibehålls",
    ],
    solution:
      "AniMatch was built with a Python backend for data processing and a Next.js frontend for the user interface. The system processes anime metadata through BERT to generate embeddings that capture semantic meanings. These embeddings are stored in MongoDB for efficient retrieval. The recommendation engine calculates cosine similarity between different embedding types with custom weighting to prioritize certain features.\n\nKey technical implementations include:\n- Preprocessing text data by removing stop words and special characters\n- Tokenizing text fields for BERT embedding generation\n- Normalizing numerical features using min-max scaling\n- Precomputing embeddings to reduce query time\n- Implementing web workers for responsive UI during calculations",
    solutionSv:
      "AniMatch byggdes med en Python-backend för databehandling och en Next.js-frontend för användargränssnittet. Systemet bearbetar anime-metadata genom BERT för att generera inbäddningar som fångar semantiska betydelser. Dessa inbäddningar lagras i MongoDB för effektiv hämtning. Rekommendationsmotorn beräknar cosinuslikhet mellan olika inbäddningstyper med anpassad viktning för att prioritera vissa funktioner.\n\nViktiga tekniska implementeringar inkluderar:\n- Förbehandling av textdata genom att ta bort stoppord och specialtecken\n- Tokenisering av textfält för BERT-inbäddningsgenerering\n- Normalisering av numeriska funktioner med min-max-skalning\n- Förberäkning av inbäddningar för att minska frågetiden\n- Implementering av web workers för responsivt användargränssnitt under beräkningar",
    outcome:
      "The system successfully demonstrates the effectiveness of content-based filtering using BERT embeddings in anime recommendation systems. Testing showed that for anime like 'Attack on Titan', the system recommends contextually relevant titles such as 'Demon Slayer' and 'Jujutsu Kaisen' that share thematic elements and narrative styles.\n\nThe project was implemented as both a research paper and a functional web application, showcasing the practical application of NLP techniques in recommendation systems. The research was conducted as part of a university course project with a fellow student, Jonatan Ebenholm.",
    outcomeSv:
      "Systemet demonstrerar framgångsrikt effektiviteten av innehållsbaserad filtrering med BERT-inbäddningar i rekommendationssystem för anime. Tester visade att för anime som 'Attack on Titan' rekommenderar systemet kontextuellt relevanta titlar som 'Demon Slayer' och 'Jujutsu Kaisen' som delar tematiska element och berättarstilar.\n\nProjektet implementerades både som en forskningsartikel och en funktionell webbapplikation, vilket visar den praktiska tillämpningen av NLP-tekniker i rekommendationssystem. Forskningen genomfördes som en del av ett universitetskursprojekt med medstudenten Jonatan Ebenholm.",
    githubLink: "https://github.com/Berkay2002/AniMatch",
    paperLink: "/papers/animatch-paper-placeholder.md",
  },
  {
    id: "solar-system",
    title: "Interactive Solar System Simulation",
    description:
      "Created an interactive solar system simulation using Euler's approximation, with keyframe animations and a custom Blender UI. Enabled users to design and visualize their own planetary systems while simulating realistic orbits.",
    descriptionSv:
      "Skapade en interaktiv solsystemssimulering med Euler-approximation, med keyframe-animationer och ett anpassat Blender-gränssnitt. Möjliggjorde för användare att designa och visualisera sina egna planetsystem med realistiska omloppsbanor.",
    technologies: [
      "Blender",
      "Python",
      "ODE",
      "Physics Simulation",
      "3D Modeling",
    ],
    institution: "Linköping University",
    image: "/images/projects/solar-system.png",
    imageAlt: "Interactive Solar System Simulation screenshot",
    detailedDescription:
      "A comprehensive solar system simulation built as a Blender add-on that uses Euler approximation to accurately model planetary orbits around a sun, with customizable parameters and visualization capabilities.",
    detailedDescriptionSv:
      "En omfattande solsystemssimulering byggd som ett Blender-tillägg som använder Euler-approximation för att noggrant modellera planetbanor runt en sol, med anpassningsbara parametrar och visualiseringsmöjligheter.",
    features: [
      "Physics-Based Simulation: Uses Euler approximation to calculate accurate planetary orbits",
      "Custom UI Panel: Intuitive interface for creating and customizing solar systems",
      "Keyframe Animation: Automatically animates each planet's movement",
      "Customizable Parameters: Adjust masses, distances, velocities, and other orbital parameters",
      "Advanced Mode: Option for exponentially more precise but computationally intensive simulations",
      "Visual Effects: Custom shaders and lighting for realistic planet and space rendering",
    ],
    featuresSv: [
      "Fysikbaserad simulering: Använder Euler-approximation för att beräkna exakta planetbanor",
      "Anpassad UI-panel: Intuitivt gränssnitt för att skapa och anpassa solsystem",
      "Keyframe-animering: Animerar automatiskt varje planets rörelse",
      "Anpassningsbara parametrar: Justera massor, avstånd, hastigheter och andra banparametrar",
      "Avancerat läge: Alternativ för exponentiellt mer exakta men beräkningsintensiva simuleringar",
      "Visuella effekter: Anpassade shaders och belysning för realistisk planet- och rymdåtergivning",
    ],
    solution:
      "This project was created as part of the TNM085 Modeling Project course at Linköping University. It demonstrates practical application of physics simulation in a 3D environment, combining mathematical modeling with visual representation.",
    solutionSv:
      "Detta projekt skapades som en del av kursen TNM085 Modelleringsprojekt vid Linköpings universitet. Det visar praktisk tillämpning av fysiksimulering i en 3D-miljö, där matematisk modellering kombineras med visuell representation.",
    outcome:
      "The system allows users to create multiple planets with unique properties, visualize their orbits, and generate animations showing the dynamic interactions between celestial bodies. The code has been updated to match modern Blender Python standards, particularly regarding shader node implementation.\n\nThe add-on can be installed directly into Blender, making it accessible as a tool in the sidebar panel. Users can choose between standard simulation for quick results or advanced simulation for more precise orbital mechanics.",
    outcomeSv:
      "Systemet låter användare skapa flera planeter med unika egenskaper, visualisera deras banor och generera animationer som visar de dynamiska interaktionerna mellan himlakroppar. Koden har uppdaterats för att matcha moderna Blender Python-standarder, särskilt när det gäller implementering av shader-noder.\n\nTillägget kan installeras direkt i Blender, vilket gör det tillgängligt som ett verktyg i sidopanelen. Användare kan välja mellan standardsimulering för snabba resultat eller avancerad simulering för mer exakt banmekanik.",
    githubLink: "https://github.com/Berkay2002/blender-solar-system",
  },
  {
    id: "albyradet",
    title: "albyradet.se",
    description:
      "Designed and developed a modern website for Albyrådet, a non-profit youth organization, featuring a responsive layout, integrated blog system, and event calendar.",
    descriptionSv:
      "Designade och utvecklade en modern webbplats för Albyrådet, en ideell ungdomsorganisation, med responsiv layout, integrerat bloggsystem och evenemangskalender.",
    technologies: ["TypeScript", "Next.js", "Material UI", "Responsive Design"],
    link: "https://albyradet.se",
    image: "/images/projects/albyradet.png",
    imageAlt: "Albyradet website homepage",
    detailedDescription:
      "A modern, responsive website developed for Albyrådet, a non-profit youth organization focused on community engagement and social improvement initiatives in Botkyrka, Sweden. This pro bono project provides the organization with a professional web presence to support their community work.",
    detailedDescriptionSv:
      "En modern, responsiv webbplats utvecklad för Albyrådet, en ideell ungdomsorganisation inriktad på samhällsengagemang och sociala förbättringsinitiativ i Botkyrka, Sverige. Detta pro bono-projekt ger organisationen en professionell webbnärvaro för att stödja deras samhällsarbete.",
    features: [
      "Dynamic Hero Section: Full-screen video background with overlay text for impactful first impression",
      "Responsive Design: Optimized layout for mobile, tablet, and desktop viewing experiences",
      "Interactive Navigation: Context-aware header that transforms based on scroll position",
      "Project Showcase: Dedicated sections highlighting the organization's initiatives with carousel displays",
      "Team Presentation: Grid-based layout presenting organization leadership with detailed information",
      "Contact System: Integrated form with email functionality for inquiries and membership applications",
      "Animated Components: Subtle animations and transitions to enhance user experience",
      "Social Media Integration: Direct links to organization's social media presence",
    ],
    featuresSv: [
      "Dynamisk hjältesektion: Fullskärmsvideobakgrund med överlagringstext för starkt första intryck",
      "Responsiv design: Optimerad layout för mobil-, surfplatte- och datorvisningsupplevelser",
      "Interaktiv navigation: Kontextmedveten sidhuvud som förändras baserat på skrollposition",
      "Projektvisning: Dedikerade sektioner som belyser organisationens initiativ med karusellvisningar",
      "Teampresentation: Rutnätsbaserad layout som presenterar organisationens ledarskap med detaljerad information",
      "Kontaktsystem: Integrerat formulär med e-postfunktionalitet för förfrågningar och medlemsansökningar",
      "Animerade komponenter: Subtila animationer och övergångar för att förbättra användarupplevelsen",
      "Sociala medier-integration: Direktlänkar till organisationens närvaro i sociala medier",
    ],
    solution:
      "Built using Next.js 14 with TypeScript and Material UI, this application employs a modern web development stack with server components architecture. The project features custom responsive layout system that adapts margins based on device type, context providers for device detection and responsive rendering, integrated nodemailer for handling form submissions, and server-side API routes for secure email transmission.",
    solutionSv:
      "Byggd med Next.js 14 med TypeScript och Material UI, använder denna applikation en modern webbutvecklingsstacka med serverkomponentarkitektur. Projektet har ett anpassat responsivt layoutsystem som anpassar marginaler baserat på enhetstyp, kontextleverantörer för enhetsdetektering och responsiv rendering, integrerad nodemailer för hantering av formulärinlämningar och API-rutter på serversidan för säker e-postöverföring.",
    outcome:
      "The site includes AOS (Animate On Scroll) integration for scroll-triggered animations, Slick carousel implementation for image galleries, dynamic video backgrounds with fallback options for mobile devices, Auth0 integration for authentication capabilities, and MongoDB integration for storing form submissions and member data.\n\nThe UI design employs a distinctive orange and white color scheme to match the organization's branding, with custom typography using Oswald for headers and Inter for body text. The site's architecture prioritizes accessible information about the organization's mission, projects, and contact information for community engagement.",
    outcomeSv:
      "Webbplatsen inkluderar AOS (Animate On Scroll)-integration för rullningsutlösta animationer, Slick-karusellimplementering för bildgallerier, dynamiska videobakgrunder med reservalternativ för mobila enheter, Auth0-integration för autentiseringsmöjligheter och MongoDB-integration för lagring av formulärinlämningar och medlemsdata.\n\nUI-designen använder ett distinkt orange och vitt färgschema för att matcha organisationens varumärke, med anpassad typografi med Oswald för rubriker och Inter för brödtext. Webbplatsens arkitektur prioriterar tillgänglig information om organisationens uppdrag, projekt och kontaktinformation för samhällsengagemang.",
    githubLink: "https://github.com/Berkay2002/albyradet",
  },
  {
    id: "medieteknik",
    title: "medieteknik.nu",
    description:
      "Collaborated with a team to create and maintain the official program website for Medieteknik program in Linköping University.",
    descriptionSv:
      "Samarbetade med ett team för att skapa och underhålla den officiella programwebbplatsen för Medieteknikprogrammet vid Linköpings universitet.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Framer Motion",
    ],
    link: "https://medieteknik.nu",
    institution: "Linköping University",
    image: "/images/projects/medieteknik.png",
    imageAlt: "Medieteknik program website",
    detailedDescription:
      "A collaborative project developed with a team of 5 students, creating a modern, responsive website for the Medieteknik (Media Technology) program at Linköping University, providing current and prospective students with program information, news, and resources.",
    detailedDescriptionSv:
      "Ett samarbetsprojekt utvecklat med ett team av 5 studenter, som skapade en modern, responsiv webbplats för Medieteknikprogrammet vid Linköpings universitet, vilket ger nuvarande och blivande studenter programinformation, nyheter och resurser.",
    features: [
      "Responsive Design: Fully adaptive layout that works across desktop, tablet, and mobile devices",
      "Dynamic Navigation: Context-aware header that changes appearance based on scroll position",
      "Interactive Elements: Animated components including carousels, cards, and motion effects",
      "Integrated Social Media: Instagram and Facebook feeds for student life showcase",
      "Responsive Typography: Typography that adapts to different screen sizes",
      "Accessible Information Architecture: Well-organized content sections for different user needs",
      "Event Showcase: Timeline layout for displaying program events",
      "Team Presentation: Grid layout with modal details for program leadership",
    ],
    featuresSv: [
      "Responsiv design: Helt anpassningsbar layout som fungerar på stationära datorer, surfplattor och mobila enheter",
      "Dynamisk navigering: Kontextmedvetet sidhuvud som ändrar utseende baserat på rullningsposition",
      "Interaktiva element: Animerade komponenter inklusive karuseller, kort och rörelseeffekter",
      "Integrerade sociala medier: Instagram- och Facebook-flöden för att visa studentlivet",
      "Responsiv typografi: Typografi som anpassar sig till olika skärmstorlekar",
      "Tillgänglig informationsarkitektur: Välorganiserade innehållssektioner för olika användarbehov",
      "Evenemangsvisning: Tidslinje-layout för att visa programevenemang",
      "Teampresentation: Rutnätslayout med modaldetaljer för programledning",
    ],
    solution:
      "Built using Next.js and TypeScript with Material UI as the component library, this project implements a mobile-first responsive design approach. The architecture employs context providers for device detection and theme management, enabling conditional rendering based on screen size.",
    solutionSv:
      "Byggd med Next.js och TypeScript med Material UI som komponentbibliotek, implementerar detta projekt en mobil-först responsiv designmetod. Arkitekturen använder kontextleverantörer för enhetsdetektering och temahantering, vilket möjliggör villkorlig rendering baserad på skärmstorlek.",
    outcome:
      "The site includes several distinctive design elements including wavy background transitions between sections, interactive cards with hover effects, dynamic image loading with Next.js Image optimization, animated page transitions using Framer Motion, mobile-friendly drawer navigation, and context-sensitive styling based on scroll position.\n\nThe codebase is organized around reusable components, with custom hooks for state management. The project connects to external APIs to display real-time content from social media platforms, enhancing the representation of student life and activities.",
    outcomeSv:
      "Webbplatsen innehåller flera distinkta designelement inklusive vågiga bakgrundsövergångar mellan sektioner, interaktiva kort med hover-effekter, dynamisk bildladdning med Next.js Image-optimering, animerade sidövergångar med Framer Motion, mobilanpassad lådnavigering och kontextkänslig styling baserat på rullningsposition.\n\nKodbasen är organiserad kring återanvändbara komponenter, med anpassade hooks för tillståndshantering. Projektet ansluter till externa API:er för att visa realtidsinnehåll från sociala medieplattformar, vilket förbättrar representationen av studentliv och aktiviteter.",
    githubLink: "https://github.com/Berkay2002/medieteknik",
  },
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
