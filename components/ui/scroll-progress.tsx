"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      // Show the progress bar after scrolling down a bit
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="fixed top-0 right-0 left-0 z-50 h-1 origin-left bg-primary"
      initial={{ opacity: 0 }}
      style={{ scaleX }}
      transition={{ duration: 0.3 }}
    />
  );
}
