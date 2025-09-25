"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md space-y-10"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <h1 className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text font-bold text-7xl text-transparent">
            404
          </h1>
          <h2 className="font-semibold text-3xl">Page Not Found</h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            The page you are looking for does not exist or has been moved.
            Perhaps you mistyped the URL or the page has been relocated.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link className="flex items-center gap-2" href="/">
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
