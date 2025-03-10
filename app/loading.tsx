"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <motion.div
        className="flex items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-4 w-4 rounded-full bg-blue-500"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1, repeatDelay: 0 }}
        />
        <motion.div
          className="h-4 w-4 rounded-full bg-blue-600"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.2, repeatDelay: 0 }}
        />
        <motion.div
          className="h-4 w-4 rounded-full bg-blue-700"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.4, repeatDelay: 0 }}
        />
      </motion.div>
      <p className="mt-4 text-muted-foreground text-sm">Loading...</p>
    </div>
  );
} 