import { PersonalInfo, Project, Skill, SocialLinks, TimelineEvent } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Berkay Orhan",
  title: "Machine Learning & Control Systems Engineer",
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
      "A collaborative rich text editor with real-time capabilities, allowing multiple users to edit documents simultaneously with instant updates.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://livenotes-iota.vercel.app/",
    image: "/images/projects/livenotes.png",
    imageAlt: "LiveNotes collaborative text editor interface"
  },
  {
    id: "animatch",
    title: "AniMatch",
    description:
      "An anime recommendation system using BERT to analyze user preferences and suggest personalized anime recommendations based on content similarity.",
    technologies: ["Python", "TypeScript", "Next.js", "BERT"],
    link: "https://animatch-chi.vercel.app/",
    image: "/images/projects/animatch.png",
    imageAlt: "AniMatch recommendation system interface"
  },
  {
    id: "solar-system",
    title: "Interactive Solar System Simulation",
    description:
      "Created an interactive solar system simulation using Euler's approximation, with keyframe animations and a custom Blender UI. Enabled users to design and visualize their own planetary systems while simulating realistic orbits.",
    technologies: ["Blender", "Python", "ODE"],
    institution: "Linköping University",
    image: "/images/projects/simulation.png",
    imageAlt: "Interactive Solar System Simulation screenshot"
  },
  {
    id: "albyradet",
    title: "albyradet.se",
    description:
      "Designed and developed a fully functional website for a non-profit organization, improving user engagement.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://albyradet.se",
    image: "/images/projects/alby.png",
    imageAlt: "Albyradet website homepage"
  },
  {
    id: "medieteknik",
    title: "medieteknik.nu",
    description:
      "Collaborated with a team to create and maintain the official program website for Medieteknik program in Linköping University.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://medieteknik.nu",
    institution: "Linköping University",
    image: "/images/projects/MT.png",
    imageAlt: "Medieteknik program website"
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