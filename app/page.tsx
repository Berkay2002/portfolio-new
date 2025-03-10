import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TimelineSection } from "@/components/sections/timeline-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
    </>
  );
}
