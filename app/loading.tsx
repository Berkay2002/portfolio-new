"use client";

import { motion } from "framer-motion";

const LOADING_DOT_SCALE_START = 1;
const LOADING_DOT_SCALE_PEAK = 1.2;

export default function Loading() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <motion.div
        animate={{ opacity: 1 }}
        className="flex items-center gap-1"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{
            scale: [
              LOADING_DOT_SCALE_START,
              LOADING_DOT_SCALE_PEAK,
              LOADING_DOT_SCALE_START,
            ],
          }}
          className="h-4 w-4 rounded-full bg-blue-500"
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1,
            repeatDelay: 0,
          }}
        />
        <motion.div
          animate={{
            scale: [
              LOADING_DOT_SCALE_START,
              LOADING_DOT_SCALE_PEAK,
              LOADING_DOT_SCALE_START,
            ],
          }}
          className="h-4 w-4 rounded-full bg-blue-600"
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1,
            delay: 0.2,
            repeatDelay: 0,
          }}
        />
        <motion.div
          animate={{
            scale: [
              LOADING_DOT_SCALE_START,
              LOADING_DOT_SCALE_PEAK,
              LOADING_DOT_SCALE_START,
            ],
          }}
          className="h-4 w-4 rounded-full bg-blue-700"
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1,
            delay: 0.4,
            repeatDelay: 0,
          }}
        />
      </motion.div>
      <p className="mt-4 text-muted-foreground text-sm">Loading...</p>
    </div>
  );
}
