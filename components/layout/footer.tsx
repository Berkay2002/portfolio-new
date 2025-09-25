"use client";

import { motion } from "framer-motion";
import {
  ChevronUp,
  Facebook,
  FileText,
  Github,
  Linkedin,
  Mail,
  Share2,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/layout/language-provider";
import { socialLinks } from "@/lib/data/portfolio-data";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const shareWebsite = (platform: string) => {
    const url = "https://berkay.live";
    const text = t("footer.shareText");

    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        if (navigator.share) {
          navigator
            .share({
              title: "Berkay Orhan's Portfolio",
              text,
              url,
            })
            .catch((err) => console.error("Error sharing:", err));
          return;
        }
        // Fallback to copying to clipboard
        navigator.clipboard
          .writeText(url)
          .then(() => {
            alert(t("footer.copiedToClipboard"));
          })
          .catch((err) => {
            console.error("Failed to copy:", err);
          });
        return;
    }

    window.open(shareUrl, "_blank");
  };

  return (
    <footer className="relative border-neutral-200 border-t bg-gradient-to-b from-background to-background/80 py-8 sm:py-10 md:py-12 dark:border-neutral-800">
      {/* Top wave shape */}
      <div className="-translate-y-full pointer-events-none absolute inset-x-0 top-0 h-12 overflow-hidden sm:h-16 md:h-24">
        <svg
          className="absolute bottom-0 h-full w-full fill-current text-background"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,208C840,213,960,171,1080,144C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>

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
              <p className="mb-1 font-semibold text-lg">Berkay Orhan</p>
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

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialButton({ href, icon, label }: SocialButtonProps) {
  return (
    <Button
      asChild
      className="h-8 rounded-full transition-all hover:bg-blue-50 hover:text-blue-500 dark:hover:bg-blue-950/30"
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

interface ShareButtonProps {
  platform: string;
  icon: React.ReactNode;
  label: string;
  hoverColor: string;
  onClick: () => void;
}

function ShareButton({
  platform,
  icon,
  label,
  hoverColor,
  onClick,
}: ShareButtonProps) {
  return (
    <Button
      aria-label={label}
      className={cn(
        "h-8 rounded-full transition-all hover:scale-105",
        hoverColor
      )}
      onClick={onClick}
      size="sm"
      variant="outline"
    >
      {icon}
    </Button>
  );
}
