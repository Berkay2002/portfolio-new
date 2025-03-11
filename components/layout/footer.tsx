"use client";

import Link from "next/link";
import { Github, Linkedin, FileText, ChevronUp, Twitter, Facebook, Mail, Share2 } from "lucide-react";
import { motion } from "framer-motion";

import { socialLinks } from "@/lib/data/portfolio-data";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/layout/language-provider";

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
          navigator.share({
            title: "Berkay Orhan's Portfolio",
            text: text,
            url: url,
          }).catch(err => console.error('Error sharing:', err));
          return;
        }
        // Fallback to copying to clipboard
        navigator.clipboard.writeText(url).then(() => {
          alert(t("footer.copiedToClipboard"));
        }).catch(err => {
          console.error('Failed to copy:', err);
        });
        return;
    }
    
    window.open(shareUrl, "_blank");
  };
  
  return (
    <footer className="relative border-t border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-background to-background/80 py-8 sm:py-10 md:py-12">
      {/* Top wave shape */}
      <div className="absolute top-0 inset-x-0 -translate-y-full h-12 sm:h-16 md:h-24 overflow-hidden pointer-events-none">
        <svg 
          className="absolute bottom-0 w-full h-full text-background fill-current" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
        >
          <path d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,208C840,213,960,171,1080,144C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 py-4 sm:py-6">
          {/* Left column - Info and social links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start space-y-3"
          >
            <div className="text-center md:text-left">
              <p className="font-semibold text-lg mb-1">Berkay Orhan</p>
              <p className="text-sm text-muted-foreground">
                © {currentYear} {t("footer.allRightsReserved")}
              </p>
            </div>
          </motion.div>

          {/* Right column - Share section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-3">
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
                onClick={scrollToTop}
                size="sm"
                variant="outline" 
                className="ml-0 sm:ml-1 mt-4 sm:mt-0 w-full sm:w-auto"
                aria-label={t("footer.scrollToTop")}
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
    <Button asChild size="sm" variant="outline" 
      className="h-8 rounded-full hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all">
      <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
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

function ShareButton({ platform, icon, label, hoverColor, onClick }: ShareButtonProps) {
  return (
    <Button 
      onClick={onClick}
      size="sm" 
      variant="outline" 
      className={cn(
        "h-8 rounded-full transition-all hover:scale-105",
        hoverColor
      )}
      aria-label={label}
    >
      {icon}
    </Button>
  );
} 