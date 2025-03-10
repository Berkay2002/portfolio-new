import { cn } from "@/lib/utils";
import { Separator } from "./separator";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "space-y-6",
        {
          "text-center": align === "center",
          "text-right": align === "right",
        },
        className
      )}
    >
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground max-w-[42rem] mx-auto">
            {description}
          </p>
        )}
      </div>
      <Separator className={cn({
        "mx-auto w-[70%]": align === "center",
        "ml-auto": align === "right",
      })} />
    </motion.div>
  );
} 