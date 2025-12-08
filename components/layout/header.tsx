"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { personalInfo } from "@/lib/data/portfolio-data";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useLanguage } from "./language-provider";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  // Offset in pixels from the top of the viewport to consider a section active
  const SECTION_ACTIVATION_OFFSET = 100;

  // Threshold in pixels to trigger header scrolled state
  const HEADER_SCROLLED_OFFSET = 50;

  // Animation delay for nav items (in seconds)
  const NAV_ITEM_ANIMATION_DELAY = 0.1;
  // Animation delay for mobile nav items (in seconds)
  const MOBILE_NAV_ITEM_ANIMATION_DELAY = 0.05;

  // Navigation items with translations
  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/?section=about" },
    { name: t("nav.experience"), href: "/?section=timeline" },
    { name: t("nav.projects"), href: "/?section=projects" },
    { name: t("nav.papers"), href: "/?section=papers" },
    { name: t("nav.contact"), href: "/?section=contact" },
  ];

  // Monitor scroll position and active section
  // Sync active section with pathname for non-home routes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveSection(pathname || "/");
  }, [pathname]);

  // Monitor scroll position and active section only on home page
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      setScrolled(window.scrollY > HEADER_SCROLLED_OFFSET);

      const sections = ["about", "timeline", "projects", "papers", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= SECTION_ACTIVATION_OFFSET &&
            rect.bottom >= SECTION_ACTIVATION_OFFSET
          ) {
            setActiveSection(`/?section=${section}`);
            return;
          }
        }
      }
      setActiveSection("/");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-500", // Lower z-index to allow particles to show through
        scrolled
          ? "border-neutral-200/10 border-b bg-background/60 py-2 shadow-xs backdrop-blur-md dark:border-neutral-800/10"
          : "bg-transparent py-4 backdrop-blur-[2px]" // Very subtle blur when not scrolled
      )}
    >
      {/* Local particle overlay for header - Removed to match clean design */}
      
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
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
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
                transition={{ delay: NAV_ITEM_ANIMATION_DELAY * (index + 1) }}
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
                      "absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-blue-500 to-cyan-500 transition-all duration-300",
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
                  transition={{
                    delay: MOBILE_NAV_ITEM_ANIMATION_DELAY * index,
                  }}
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
