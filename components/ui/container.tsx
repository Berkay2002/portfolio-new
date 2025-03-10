import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: "default" | "small" | "large" | "full";
}

export const Container = forwardRef<HTMLElement, ContainerProps>(({ 
  children, 
  className, 
  id,
  size = "default" 
}, ref) => {
  return (
    <section 
      id={id} 
      className={cn("py-16 sm:py-24 md:py-32", className)}
      ref={ref}
    >
      <div className={cn(
        "px-4 mx-auto w-full",
        {
          "max-w-7xl": size === "default",
          "max-w-5xl": size === "small",
          "max-w-screen-2xl": size === "large",
          "": size === "full"
        }
      )}>
        {children}
      </div>
    </section>
  );
});

Container.displayName = "Container"; 