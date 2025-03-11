"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TimelineSection } from "@/components/sections/timeline-section";

export default function Home() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Get the section from URL query parameter
    const section = searchParams.get("section");
    if (section) {
      // Find the section element and scroll to it
      const element = document.getElementById(section);
      if (element) {
        // Use a small timeout to ensure the DOM is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [searchParams]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
    </>
  );
}
