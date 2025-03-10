"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-10 max-w-md"
      >
        <div className="space-y-4">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground mx-auto max-w-md">
            The page you are looking for does not exist or has been moved. Perhaps you mistyped the URL or the page has been relocated.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              or try again later
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 