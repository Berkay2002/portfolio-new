"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ChevronUp,
  FileText,
  Github,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import { socialLinks } from "@/lib/data/portfolio-data";
import { Button } from "../ui/button";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const reduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <footer className="relative border-border/70 border-t bg-card/45 py-8 backdrop-blur-sm sm:py-10 md:py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 py-4 sm:py-6 md:grid-cols-2 md:gap-12">
          {/* Left column - Info and social links */}
          <motion.div
            className="flex flex-col items-center space-y-3 md:items-start"
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="text-center md:text-left">
              <p className="mb-1 flex items-center justify-center gap-2 font-semibold text-lg md:justify-start">
                <span
                  aria-hidden
                  className="h-2 w-2 rotate-45 bg-primary shadow-[0_0_14px_hsl(var(--primary)/0.7)]"
                />
                Berkay Orhan
              </p>
              <p className="text-muted-foreground text-sm">
                © {currentYear} {t("footer.allRightsReserved")}
              </p>
            </div>
          </motion.div>

          {/* Right column - Share section */}
          <motion.div
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:justify-end">
              <SocialButton
                href={socialLinks.github}
                icon={<Github className="h-4 w-4" />}
                label={t("footer.githubProfile")}
              />
              <SocialButton
                href={socialLinks.linkedin}
                icon={<Linkedin className="h-4 w-4" />}
                label={t("footer.linkedinProfile")}
              />
              <SocialButton
                href={socialLinks.cv}
                icon={<FileText className="h-4 w-4" />}
                label={t("common.download")}
              />
              <Button
                aria-label={t("footer.scrollToTop")}
                className="mt-4 ml-0 w-full sm:mt-0 sm:ml-1 sm:w-auto"
                onClick={scrollToTop}
                size="sm"
                variant="outline"
              >
                <span className="flex items-center">
                  {t("footer.backToTop")} <ChevronUp className="ml-1 h-4 w-4" />
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

// Helper components for cleaner code

type SocialButtonProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

function SocialButton({ href, icon, label }: SocialButtonProps) {
  return (
    <Button
      asChild
      className="h-8 rounded-full transition-all hover:bg-accent hover:text-primary"
      size="sm"
      variant="outline"
    >
      <Link
        aria-label={label}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {icon}
      </Link>
    </Button>
  );
}
