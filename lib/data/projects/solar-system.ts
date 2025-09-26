import type { Project } from "@/types";

export const solarSystem: Project = {
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
};