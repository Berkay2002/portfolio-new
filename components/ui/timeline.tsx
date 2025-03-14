"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { TimelineEvent } from "@/types";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/layout/language-provider";

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export function Timeline({ events, className }: TimelineProps) {
  const { locale } = useLanguage();
  
  const getIcon = (type: TimelineEvent["type"]) => {
    switch (type) {
      case "education":
        return <GraduationCap className="h-5 w-5" />;
      case "work":
        return <Briefcase className="h-5 w-5" />;
      case "achievement":
        return <Award className="h-5 w-5" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };

  const getIconColor = (type: TimelineEvent["type"]) => {
    switch (type) {
      case "education":
        return "bg-blue-500";
      case "work":
        return "bg-green-500";
      case "achievement":
        return "bg-yellow-500";
      default:
        return "bg-neutral-500";
    }
  };
  
  // Get localized content based on the selected language
  const getLocalizedContent = (event: TimelineEvent, field: "title" | "location" | "description") => {
    if (locale === "sv") {
      switch (field) {
        case "title":
          return event.titleSv || event.title;
        case "location":
          return event.locationSv || event.location;
        case "description":
          return event.descriptionSv || event.description;
      }
    }
    return event[field];
  };

  return (
    <div className={cn("relative space-y-8", className)}>
      {/* Line running down the middle */}
      <div className="absolute left-[19px] top-0 h-full w-[2px] bg-border dark:bg-neutral-800" />

      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative pl-10"
        >
          {/* Icon Circle */}
          <div
            className={cn(
              "absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-background",
              getIconColor(event.type)
            )}
          >
            <span className="text-white">{getIcon(event.type)}</span>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold">{getLocalizedContent(event, "title")}</h3>
              <time className="rounded-md bg-muted px-2 py-1 text-xs font-medium">
                {event.date}
              </time>
            </div>
            <p className="text-sm text-muted-foreground">{getLocalizedContent(event, "location")}</p>
            <p className="text-muted-foreground">{getLocalizedContent(event, "description")}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 