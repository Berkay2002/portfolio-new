"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

// Replace interface with a type alias per project rules
type Testimonial = {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  image?: string;
};

// Example testimonials - replace with your real testimonials
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jane Smith",
    position: "Senior Developer",
    company: "Tech Innovations",
    content:
      "Berkay is an exceptional collaborator with strong technical skills. His ability to solve complex problems while maintaining clear communication made our project successful.",
    image: "/images/testimonials/jane.webp",
  },
  {
    id: "2",
    name: "Alex Johnson",
    position: "Project Manager",
    company: "Digital Solutions Inc.",
    content:
      "Working with Berkay was a pleasure. His attention to detail and commitment to quality ensured our application exceeded client expectations.",
    image: "/images/testimonials/alex.webp",
  },
  {
    id: "3",
    name: "Professor Martinez",
    position: "Professor of Computer Science",
    company: "Linköping University",
    content:
      "Berkay demonstrated exceptional analytical skills in machine learning concepts. His research was thorough and his implementation was innovative.",
  },
];

// Add a named constant to avoid magic numbers
const OFFSCREEN_DISTANCE = 200;

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="bg-neutral-50/30 py-20 dark:bg-neutral-900/30"
      id="testimonials"
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          align="center"
          description="What people say about working with me"
          title="Testimonials"
        />

        <div className="relative mt-16">
          {/* Testimonial Cards */}
          <div className="relative mx-auto h-[350px] max-w-3xl overflow-hidden md:h-[300px]">
            {testimonials.map((testimonial, index) => {
              // compute x position without nested ternary — use block statements per style rules
              const xPosition = (() => {
                if (index === activeIndex) {
                  return 0;
                }
                if (index < activeIndex) {
                  return -OFFSCREEN_DISTANCE;
                }
                return OFFSCREEN_DISTANCE;
              })();

              return (
                <motion.div
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    x: xPosition,
                    display: index === activeIndex ? "block" : "none",
                  }}
                  className="absolute inset-0 rounded-lg border border-neutral-200 bg-background p-6 shadow-xs md:p-8 dark:border-neutral-800"
                  initial={{ opacity: 0, x: OFFSCREEN_DISTANCE }}
                  key={testimonial.id}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex h-full flex-col">
                    <div className="mb-6">
                      <Quote className="h-10 w-10 text-primary/20" />
                    </div>

                    <p className="mb-6 text-muted-foreground italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    <div className="mt-auto flex items-center">
                      {testimonial.image ? (
                        <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            alt={`${testimonial.name}'s profile`}
                            className="object-cover"
                            height={48}
                            src={testimonial.image}
                            width={48}
                          />
                        </div>
                      ) : (
                        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <span className="font-semibold text-primary">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      )}

                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.position} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex justify-center gap-4">
            <Button
              aria-label="Previous testimonial"
              className="h-10 w-10 rounded-full"
              onClick={goToPrevious}
              size="icon"
              variant="outline"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials.map((t, idx) => (
                <button
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    idx === activeIndex
                      ? "bg-primary"
                      : "bg-neutral-300 dark:bg-neutral-700"
                  )}
                  key={t.id}
                  onClick={() => setActiveIndex(idx)}
                  type="button"
                />
              ))}
            </div>

            <Button
              aria-label="Next testimonial"
              className="h-10 w-10 rounded-full"
              onClick={goToNext}
              size="icon"
              variant="outline"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
