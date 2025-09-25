"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "./separator";

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
        "space-y-6",
        {
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          {icon && <div className="text-primary">{icon}</div>}
          <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </div>
        {description && (
          <p className="mx-auto max-w-[42rem] text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      <Separator
        className={cn({
          "mx-auto w-[70%]": align === "center",
          "ml-auto": align === "right",
        })}
      />
    </motion.div>
  );
}
