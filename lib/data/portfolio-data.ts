import { PersonalInfo, Project, Skill, SocialLinks, TimelineEvent } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Berkay Orhan",
  title: "Machine Learning Engineer",
  bio: "Engineering student passionate about machine learning and web development. Currently pursuing my master's in ML, web technologies, and cybersecurity. In my free time, I enjoy photography, gaming, and spending time with friends.",
  bioEn: "Engineering student passionate about machine learning and web development. Currently pursuing my master's in ML, web technologies, and cybersecurity. In my free time, I enjoy photography, gaming, and spending time with friends.",
  bioSv: "Ingenjörsstudent med intresse för maskininlärning och webbutveckling. Läser för närvarande en master inom ML, webbteknologier och cybersäkerhet. På fritiden ägnar jag mig åt fotografi, gaming och att umgås med vänner."
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
    technologies: ["TypeScript", "Next.js", "Liveblocks", "Lexical", "Tailwind CSS", "Clerk", "Radix UI"],
    link: "https://livenotes-iota.vercel.app/",
    image: "/images/projects/livenotes.png",
    imageAlt: "LiveNotes collaborative text editor interface",
    detailedDescription: "LiveNotes is a real-time collaborative document editor built with Next.js 14 and Liveblocks. It offers a Google Docs-like experience with rich text editing and real-time collaboration features in a modern, responsive interface.",
    features: [
      "Real-time Collaboration - Multiple users can edit documents simultaneously with changes synced instantly",
      "Rich Text Editor - Format text with headings, styling, and alignment options",
      "Commenting System - Add comments to specific text selections and resolve discussions",
      "Document Sharing - Control access with editor and viewer permission levels",
      "User Presence - See who's currently viewing or editing the document",
      "Progressive Web App - Install on mobile and desktop for offline capabilities",
      "Responsive Design - Optimized UI for both desktop and mobile devices",
      "Document Management - Create, search, and organize documents from a central dashboard",
      "Real-time Notifications - Get notified of mentions and document shares"
    ],
    solution: "Built with Next.js 14, TypeScript, and Tailwind CSS, LiveNotes leverages Liveblocks for real-time collaboration and Lexical for rich text editing. Authentication is handled by Clerk, with UI components from Radix UI for accessibility and consistency.",
    outcome: "The application features optimized performance with debounced searches, optimistic UI updates, and progressive enhancement techniques. The server-components architecture of Next.js 14 provides excellent performance while maintaining a great developer experience. This project demonstrates advanced frontend development skills including real-time data synchronization, complex state management, and responsive UI design principles.",
    githubLink: "https://github.com/Berkay2002/LiveNotes"
  },
  {
    id: "animatch",
    title: "AniMatch",
    description:
      "An anime recommendation system using BERT to analyze user preferences and suggest personalized anime recommendations based on content similarity.",
    technologies: ["Python", "TypeScript", "Next.js", "BERT", "MongoDB", "Web Workers"],
    link: "https://animatch-chi.vercel.app/",
    image: "/images/projects/animatch.png",
    imageAlt: "AniMatch recommendation system interface",
    detailedDescription: "A Next.js-based web application that provides personalized anime recommendations based on content-based filtering. The system employs BERT embeddings to extract meaningful representations of anime metadata and cosine similarity to compute relationships between titles. Unlike traditional recommendation systems that rely on user data (collaborative filtering), AniMatch focuses on metadata analysis, ensuring accurate and contextually relevant recommendations even in cold-start scenarios.",
    features: [
      "Intelligent Recommendation Engine: Utilizes BERT embeddings for semantic understanding of descriptions, genres, themes, ratings, and demographics",
      "Weighted Feature Analysis: Custom weighting system (25% descriptions, 25% genres, 25% themes, 15% demographics, 10% age ratings) for balanced recommendations",
      "Interactive Interface: Clean, responsive UI with intuitive controls for browsing and selecting anime",
      "Real-time Recommendations: Web worker implementation for handling vector comparisons without freezing the UI",
      "Advanced Search Functionality: Comprehensive search capabilities with instant results",
      "Personalized Experience: Users can create a custom recommendation list by adding multiple anime they enjoy",
      "Detailed Anime Pages: Comprehensive information including images, descriptions, genres, themes, and ratings",
      "Curated Categories: Trending and top-ranked anime sections for exploration"
    ],
    challenges: [
      "Feature Dependencies: Reliance on quality and diversity of metadata for accurate recommendations",
      "Computational Cost: Processing vector calculations for large datasets efficiently",
      "Reinforcement Loops: Avoiding recommendation patterns that reinforce similar content",
      "Serendipity Balance: Ensuring variety in recommendations while maintaining relevance"
    ],
    solution: "AniMatch was built with a Python backend for data processing and a Next.js frontend for the user interface. The system processes anime metadata through BERT to generate embeddings that capture semantic meanings. These embeddings are stored in MongoDB for efficient retrieval. The recommendation engine calculates cosine similarity between different embedding types with custom weighting to prioritize certain features.\n\nKey technical implementations include:\n- Preprocessing text data by removing stop words and special characters\n- Tokenizing text fields for BERT embedding generation\n- Normalizing numerical features using min-max scaling\n- Precomputing embeddings to reduce query time\n- Implementing web workers for responsive UI during calculations",
    outcome: "The system successfully demonstrates the effectiveness of content-based filtering using BERT embeddings in anime recommendation systems. Testing showed that for anime like 'Attack on Titan', the system recommends contextually relevant titles such as 'Demon Slayer' and 'Jujutsu Kaisen' that share thematic elements and narrative styles.\n\nThe project was implemented as both a research paper and a functional web application, showcasing the practical application of NLP techniques in recommendation systems. The research was conducted as part of a university course project with a fellow student, Jonatan Ebenholm.",
    githubLink: "https://github.com/Berkay2002/AniMatch",
    paperLink: "/papers/animatch-paper-placeholder.md"
  },
  {
    id: "solar-system",
    title: "Interactive Solar System Simulation",
    description:
      "Created an interactive solar system simulation using Euler's approximation, with keyframe animations and a custom Blender UI. Enabled users to design and visualize their own planetary systems while simulating realistic orbits.",
    technologies: ["Blender", "Python", "ODE", "Physics Simulation", "3D Modeling"],
    institution: "Linköping University",
    image: "/images/projects/solar-system.png",
    imageAlt: "Interactive Solar System Simulation screenshot",
    detailedDescription: "A comprehensive solar system simulation built as a Blender add-on that uses Euler approximation to accurately model planetary orbits around a sun, with customizable parameters and visualization capabilities.",
    features: [
      "Physics-Based Simulation: Uses Euler approximation to calculate accurate planetary orbits",
      "Custom UI Panel: Intuitive interface for creating and customizing solar systems",
      "Keyframe Animation: Automatically animates each planet's movement",
      "Customizable Parameters: Adjust masses, distances, velocities, and other orbital parameters",
      "Advanced Mode: Option for exponentially more precise but computationally intensive simulations",
      "Visual Effects: Custom shaders and lighting for realistic planet and space rendering"
    ],
    solution: "This project was created as part of the TNM085 Modeling Project course at Linköping University. It demonstrates practical application of physics simulation in a 3D environment, combining mathematical modeling with visual representation.",
    outcome: "The system allows users to create multiple planets with unique properties, visualize their orbits, and generate animations showing the dynamic interactions between celestial bodies. The code has been updated to match modern Blender Python standards, particularly regarding shader node implementation.\n\nThe add-on can be installed directly into Blender, making it accessible as a tool in the sidebar panel. Users can choose between standard simulation for quick results or advanced simulation for more precise orbital mechanics.",
    githubLink: "https://github.com/Berkay2002/blender-solar-system"
  },
  {
    id: "albyradet",
    title: "albyradet.se",
    description:
      "Designed and developed a modern website for Albyrådet, a non-profit youth organization, featuring a responsive layout, integrated blog system, and event calendar.",
    technologies: ["TypeScript", "Next.js", "Material UI", "Responsive Design"],
    link: "https://albyradet.se",
    image: "/images/projects/albyradet.png",
    imageAlt: "Albyradet website homepage",
    detailedDescription: "A modern, responsive website developed for Albyrådet, a non-profit youth organization focused on community engagement and social improvement initiatives in Botkyrka, Sweden. This pro bono project provides the organization with a professional web presence to support their community work.",
    features: [
      "Dynamic Hero Section: Full-screen video background with overlay text for impactful first impression",
      "Responsive Design: Optimized layout for mobile, tablet, and desktop viewing experiences",
      "Interactive Navigation: Context-aware header that transforms based on scroll position",
      "Project Showcase: Dedicated sections highlighting the organization's initiatives with carousel displays",
      "Team Presentation: Grid-based layout presenting organization leadership with detailed information",
      "Contact System: Integrated form with email functionality for inquiries and membership applications",
      "Animated Components: Subtle animations and transitions to enhance user experience",
      "Social Media Integration: Direct links to organization's social media presence"
    ],
    solution: "Built using Next.js 14 with TypeScript and Material UI, this application employs a modern web development stack with server components architecture. The project features custom responsive layout system that adapts margins based on device type, context providers for device detection and responsive rendering, integrated nodemailer for handling form submissions, and server-side API routes for secure email transmission.",
    outcome: "The site includes AOS (Animate On Scroll) integration for scroll-triggered animations, Slick carousel implementation for image galleries, dynamic video backgrounds with fallback options for mobile devices, Auth0 integration for authentication capabilities, and MongoDB integration for storing form submissions and member data.\n\nThe UI design employs a distinctive orange and white color scheme to match the organization's branding, with custom typography using Oswald for headers and Inter for body text. The site's architecture prioritizes accessible information about the organization's mission, projects, and contact information for community engagement.",
    githubLink: "https://github.com/Berkay2002/albyradet"
  },
  {
    id: "medieteknik",
    title: "medieteknik.nu",
    description:
      "Collaborated with a team to create and maintain the official program website for Medieteknik program in Linköping University.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Material UI", "Framer Motion"],
    link: "https://medieteknik.nu",
    institution: "Linköping University",
    image: "/images/projects/medieteknik.png",
    imageAlt: "Medieteknik program website",
    detailedDescription: "A collaborative project developed with a team of 5 students, creating a modern, responsive website for the Medieteknik (Media Technology) program at Linköping University, providing current and prospective students with program information, news, and resources.",
    features: [
      "Responsive Design: Fully adaptive layout that works across desktop, tablet, and mobile devices",
      "Dynamic Navigation: Context-aware header that changes appearance based on scroll position",
      "Interactive Elements: Animated components including carousels, cards, and motion effects",
      "Integrated Social Media: Instagram and Facebook feeds for student life showcase",
      "Responsive Typography: Typography that adapts to different screen sizes",
      "Accessible Information Architecture: Well-organized content sections for different user needs",
      "Event Showcase: Timeline layout for displaying program events",
      "Team Presentation: Grid layout with modal details for program leadership"
    ],
    solution: "Built using Next.js and TypeScript with Material UI as the component library, this project implements a mobile-first responsive design approach. The architecture employs context providers for device detection and theme management, enabling conditional rendering based on screen size.",
    outcome: "The site includes several distinctive design elements including wavy background transitions between sections, interactive cards with hover effects, dynamic image loading with Next.js Image optimization, animated page transitions using Framer Motion, mobile-friendly drawer navigation, and context-sensitive styling based on scroll position.\n\nThe codebase is organized around reusable components, with custom hooks for state management. The project connects to external APIs to display real-time content from social media platforms, enhancing the representation of student life and activities.",
    githubLink: "https://github.com/Berkay2002/medieteknik"
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
    location: "Linköping University",
    description: "Completed my bachelor's with a focus on programming and applied mathematics.",
    date: "2021 - 2024",
    type: "education"
  },
  {
    id: "masters",
    title: "Master's Degree in Engineering",
    location: "Linköping University",
    description: "Studying machine learning, automatic control and cybersecurity in my master's program.",
    date: "2024 - Present",
    type: "education"
  },
  {
    id: "internship",
    title: "Machine Learning Intern",
    location: "Loading...",
    description: "",
    date: "Summer 2025",
    type: "work"
  },
]; 