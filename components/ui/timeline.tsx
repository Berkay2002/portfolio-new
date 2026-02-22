"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, ChevronDown, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/layout/language-provider";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import type { TimelineEvent } from "@/types";

const TIMELINE_ANIMATION_DURATION = 0.5;
const TIMELINE_ANIMATION_DELAY_STEP = 0.1;

type TimelineProps = {
  events: TimelineEvent[];
  className?: string;
};

export function Timeline({ events, className }: TimelineProps) {
  const { locale } = useLanguage();
  const { resolvedTheme } = useTheme();

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

  const renderIconCircle = (event: TimelineEvent) => {
    const logoSrc =
      resolvedTheme === "dark" ? event.iconDark : event.iconLight;

    if (logoSrc) {
      return (
        <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-background overflow-hidden">
          <Image
            src={logoSrc}
            alt={event.location}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
      );
    }

    return (
      <div
        className={cn(
          "absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-background",
          getIconColor(event.type)
        )}
      >
        <span className="text-white">{getIcon(event.type)}</span>
      </div>
    );
  };

  // Get localized content based on the selected language
  const getLocalizedContent = (
    event: TimelineEvent,
    field: "title" | "location" | "description" | "detailedDescription"
  ) => {
    if (locale === "sv") {
      switch (field) {
        case "title":
          return event.titleSv || event.title;
        case "location":
          return event.locationSv || event.location;
        case "description":
          return event.descriptionSv || event.description;
        case "detailedDescription":
          return event.detailedDescriptionSv || event.detailedDescription;
        default:
          return event[field];
      }
    }
    return event[field];
  };

  return (
    <div className={cn("relative space-y-8", className)}>
      {/* Line running down the middle */}
      <div className="absolute top-0 left-[19px] h-full w-[2px] bg-border dark:bg-neutral-800" />

      {events.map((event, index) => (
        <motion.div
          className="relative pl-10"
          initial={{ opacity: 0, x: -20 }}
          key={event.id}
          transition={{
            duration: TIMELINE_ANIMATION_DURATION,
            delay: index * TIMELINE_ANIMATION_DELAY_STEP,
          }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          {/* Icon Circle */}
          {renderIconCircle(event)}

          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-semibold text-xl">
                {getLocalizedContent(event, "title")}
              </h3>
              <time className="rounded-md bg-muted px-2 py-1 font-medium text-xs">
                {event.date}
              </time>
            </div>
            <p className="text-muted-foreground text-sm">
              {getLocalizedContent(event, "location")}
            </p>
            <p className="text-muted-foreground">
              {getLocalizedContent(event, "description")}
            </p>

            {/* Collapsible detailed description */}
            {event.detailedDescription && (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button
                    className="mt-2 h-auto p-0 text-left font-normal"
                    variant="link"
                  >
                    <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                      <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                      Show more details
                    </span>
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3">
                  <div className="rounded-lg border bg-muted/30 p-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {getLocalizedContent(event, "detailedDescription")}
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
