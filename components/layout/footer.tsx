"use client";

import Link from "next/link";
import { Github, Linkedin, FileText, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

import { socialLinks } from "@/lib/data/portfolio-data";
import { Button } from "../ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-background to-background/80 py-12 md:py-16">
      {/* Top wave shape */}
      <div className="absolute top-0 inset-x-0 -translate-y-full h-16 md:h-24 overflow-hidden pointer-events-none">
        <svg 
          className="absolute bottom-0 w-full h-full text-background fill-current" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
        >
          <path d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,208C840,213,960,171,1080,144C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1 text-center md:text-left"
          >
            <p className="font-semibold text-lg mb-1">Berkay Orhan</p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 md:gap-2"
          >
            <Button 
              onClick={scrollToTop}
              size="icon" 
              variant="outline" 
              className="h-9 w-9 rounded-full hover:text-blue-500 hover:scale-105 transition-all"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
            <div className="h-8 border-r mx-2 opacity-20"></div>
            <Button asChild size="icon" variant="ghost" className="h-9 w-9 rounded-full hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all">
              <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="icon" variant="ghost" className="h-9 w-9 rounded-full hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all">
              <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="icon" variant="ghost" className="h-9 w-9 rounded-full hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all">
              <Link href={socialLinks.cv} target="_blank" rel="noopener noreferrer" aria-label="Download CV">
                <FileText className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>


      </div>
    </footer>
  );
} 