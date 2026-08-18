"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
  icon?: ReactNode;
};

export function SectionHeading({
  title,
  description,
  className,
  align = "left",
  icon,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        "flex flex-col gap-5",
        {
          "items-center text-center": align === "center",
          "items-end text-right": align === "right",
          "items-start": align === "left",
        },
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="space-y-3">
        <div
          className={cn("flex items-center gap-3", {
            "justify-center": align === "center",
            "justify-end": align === "right",
          })}
        >
          <span
            aria-hidden
            className="h-2.5 w-2.5 rotate-45 bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.55)]"
          />
          {icon && <div className="text-primary">{icon}</div>}
          <h2 className="font-bold text-3xl tracking-[-0.04em] sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </div>
        {description && (
          <p
            className={cn("max-w-2xl text-muted-foreground", {
              "mx-auto": align === "center",
              "ml-auto": align === "right",
            })}
          >
            {description}
          </p>
        )}
      </div>
      <div className="flex w-full max-w-44 items-center gap-2" aria-hidden>
        <span className="h-px flex-1 bg-linear-to-r from-primary via-cyan-400 to-transparent" />
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      </div>
    </motion.div>
  );
}
