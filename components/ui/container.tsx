import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: "default" | "small" | "large" | "full";
};

export const Container = forwardRef<HTMLElement, ContainerProps>(
  ({ children, className, id, size = "default" }, ref) => (
    <section
      className={cn("py-16 sm:py-24 md:py-32", className)}
      id={id}
      ref={ref}
    >
      <div
        className={cn("mx-auto w-full px-4", {
          "max-w-7xl": size === "default",
          "max-w-5xl": size === "small",
          "max-w-screen-2xl": size === "large",
          "": size === "full",
        })}
      >
        {children}
      </div>
    </section>
  )
);

Container.displayName = "Container";
