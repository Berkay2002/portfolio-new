"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { personalInfo } from "@/lib/data/portfolio-data";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { useLanguage } from "./language-provider";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  // Navigation items with translations
  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/?section=about" },
    { name: t("nav.experience"), href: "/?section=timeline" },
    { name: t("nav.projects"), href: "/?section=projects" },
  ];

  // Monitor scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['about', 'timeline', 'projects'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`/?section=${section}`);
            return;
          }
        }
      }
      // If no section is active, default to home
      setActiveSection("/");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-500", // Lower z-index to allow particles to show through
        scrolled ? 
          "bg-background/60 backdrop-blur-md shadow-sm border-b border-neutral-200/10 dark:border-neutral-800/10 py-2" :
          "bg-transparent backdrop-blur-[2px] py-4" // Very subtle blur when not scrolled
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Link
            href="/"
            className="text-xl font-bold transition-colors hover:text-primary relative group z-50"
          >
            <span className="relative z-10">{personalInfo.name}</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-6"
          >
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative group py-2 px-1 z-50",
                    activeSection === item.href ? "text-blue-500" : "text-foreground"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span 
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300",
                      activeSection === item.href ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  ></span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex items-center gap-1 pl-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 md:hidden"
        >
          <LanguageSwitcher />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? 
              <X className="h-5 w-5" /> : 
              <Menu className="h-5 w-5" />
            }
          </Button>
        </motion.div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto md:hidden overflow-hidden border-t border-neutral-200/10 dark:border-neutral-800/10 bg-background/80 backdrop-blur-md"
          >
            <nav className="flex flex-col gap-2 py-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary block py-3 px-2 rounded-lg",
                      activeSection === item.href 
                        ? "text-blue-500 bg-blue-50/30 dark:bg-blue-950/30" 
                        : "text-foreground hover:bg-neutral-100/30 dark:hover:bg-neutral-800/30"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 