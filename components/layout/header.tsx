"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { personalInfo } from "@/lib/data/portfolio-data";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useLanguage } from "./language-provider";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

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
    { name: t("nav.contact"), href: "/?section=contact" },
  ];

  // Monitor scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = ["about", "timeline", "projects", "contact"];
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
        scrolled
          ? "border-neutral-200/10 border-b bg-background/60 py-2 shadow-sm backdrop-blur-md dark:border-neutral-800/10"
          : "bg-transparent py-4 backdrop-blur-[2px]" // Very subtle blur when not scrolled
      )}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
        >
          <Link
            className="group relative z-50 font-bold text-xl transition-colors hover:text-primary"
            href="/"
          >
            <span className="relative z-10">{personalInfo.name}</span>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-4 md:flex">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-6"
            initial={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.1 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -10 }}
                key={item.name}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Link
                  className={cn(
                    "group relative z-50 px-1 py-2 font-medium text-sm transition-colors hover:text-primary",
                    activeSection === item.href
                      ? "text-blue-500"
                      : "text-foreground"
                  )}
                  href={item.href}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300",
                      activeSection === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
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
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 md:hidden"
          initial={{ opacity: 0, scale: 0.9 }}
        >
          <LanguageSwitcher />
          <ThemeToggle />
          <Button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-full md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            size="icon"
            variant="ghost"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </motion.div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="mx-auto max-w-7xl overflow-hidden border-neutral-200/10 border-t bg-background/80 px-4 backdrop-blur-md sm:px-6 md:hidden lg:px-8 dark:border-neutral-800/10"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col gap-3 py-6">
              {navItems.map((item, index) => (
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -10 }}
                  key={item.name}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    className={cn(
                      "flex items-center rounded-md px-2 py-3 transition-colors",
                      activeSection === item.href
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-foreground hover:bg-muted"
                    )}
                    href={item.href}
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
