"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  image?: string;
}

// Example testimonials - replace with your real testimonials
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jane Smith",
    position: "Senior Developer",
    company: "Tech Innovations",
    content: "Berkay is an exceptional collaborator with strong technical skills. His ability to solve complex problems while maintaining clear communication made our project successful.",
    image: "/images/testimonials/jane.webp",
  },
  {
    id: "2",
    name: "Alex Johnson",
    position: "Project Manager",
    company: "Digital Solutions Inc.",
    content: "Working with Berkay was a pleasure. His attention to detail and commitment to quality ensured our application exceeded client expectations.",
    image: "/images/testimonials/alex.webp",
  },
  {
    id: "3",
    name: "Professor Martinez",
    position: "Professor of Computer Science",
    company: "Linköping University",
    content: "Berkay demonstrated exceptional analytical skills in machine learning concepts. His research was thorough and his implementation was innovative.",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-neutral-50/30 dark:bg-neutral-900/30">
      <div className="container px-4 mx-auto">
        <SectionHeading 
          title="Testimonials" 
          description="What people say about working with me"
          align="center"
        />
        
        <div className="mt-16 relative">
          {/* Testimonial Cards */}
          <div className="relative overflow-hidden h-[350px] md:h-[300px] mx-auto max-w-3xl">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 200 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  x: index === activeIndex ? 0 : (index < activeIndex ? -200 : 200),
                  display: index === activeIndex ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-background border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-sm p-6 md:p-8"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <Quote className="h-10 w-10 text-primary/20" />
                  </div>
                  
                  <p className="text-muted-foreground italic mb-6">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  <div className="mt-auto flex items-center">
                    {testimonial.image ? (
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={`${testimonial.name}'s profile`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <span className="text-primary font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={goToPrevious}
              className="h-10 w-10 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    index === activeIndex ? "bg-primary" : "bg-neutral-300 dark:bg-neutral-700"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={goToNext}
              className="h-10 w-10 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 