"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

import { personalInfo } from "@/lib/data/portfolio-data";
import { Button } from "../ui/button";
import { useLanguage } from "../layout/language-provider";

// Particle animation component
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size - extending it further to create smoother transition
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.5; // Make canvas even taller for better transition
    };
    
    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();
    
    // Particle properties
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
    }
    
    const particles: Particle[] = [];
    // Increase particle count slightly for denser effect
    const particleCount = Math.min(window.innerWidth / 8, 150); 
    const colors = ['#3b82f6', '#06b6d4', '#0ea5e9']; // Blue shades
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.1 // Slightly increased opacity range
      });
    }
    
    // Animation function
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        // Create a more gradual fade-out effect toward the bottom
        const fadeOutFactor = 1 - Math.pow((particle.y / canvas.height) * 0.7, 2);
        ctx.globalAlpha = particle.opacity * fadeOutFactor;
        
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 opacity-25 dark:opacity-35 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export function HeroSection() {
  const { t, locale } = useLanguage();
  
  return (
    <section className="relative min-h-screen py-16 md:py-0 overflow-hidden flex flex-col justify-center">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-background/80 via-background/60 to-transparent pointer-events-none" />
      
      {/* Particle effect - now with z-index to ensure it's behind content but shows through header */}
      <ParticleBackground />
      
      {/* Animated gradient blur - reduced opacity */}
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl animate-blob" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-blue-400/5 blur-3xl animate-blob animation-delay-4000" />
      
      {/* Container with vertical centering */}
      <div className="container relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-6 mx-auto max-w-7xl mt-0 md:-mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 max-w-3xl text-center"
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("sections.hero.greeting")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl text-muted-foreground md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {personalInfo.title}
          </motion.h2>
          
          <motion.p 
            className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {locale === "sv" && personalInfo.bioSv ? 
              personalInfo.bioSv : 
              personalInfo.bioEn || personalInfo.bio}
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button asChild size="lg" className="relative group">
              <Link href="#projects">
                <span className="relative z-10">{t("common.viewProjects")}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#about">{t("common.aboutMe")}</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 hidden md:block"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-10 w-10 animate-bounce"
            asChild
          >
            <Link href="#about" aria-label={t("common.aboutMe")}>
              <ArrowDown className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Fade-out gradient at the bottom for smoother transition - increased height and adjusted gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </section>
  );
} 