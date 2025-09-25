import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "./button";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  category: string;
  thumbnail?: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  className?: string;
}

export function BlogCard({ post, index = 0, className }: BlogCardProps) {
  return (
    <motion.div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-background shadow-sm transition-shadow hover:shadow-md dark:border-neutral-800",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {post.thumbnail && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={post.thumbnail}
          />
          <div className="absolute top-3 left-3">
            <span className="rounded-full bg-primary/80 px-3 py-1 font-medium text-primary-foreground text-xs">
              {post.category}
            </span>
          </div>
        </div>
      )}

      <div className="flex flex-grow flex-col p-5">
        <div className="mb-3 flex items-center gap-4 text-muted-foreground text-sm">
          <div className="flex items-center">
            <Calendar className="mr-1 h-3.5 w-3.5" />
            <span>{post.date}</span>
          </div>
          {post.readTime && (
            <div className="flex items-center">
              <Clock className="mr-1 h-3.5 w-3.5" />
              <span>{post.readTime}</span>
            </div>
          )}
        </div>

        <h3 className="mb-2 line-clamp-2 font-semibold text-xl">
          {post.title}
        </h3>

        <p className="mb-4 line-clamp-3 text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-auto">
          <Link href={`/papers/${post.slug}`} passHref>
            <Button
              className="px-0 transition-colors group-hover:text-primary"
              variant="ghost"
            >
              Read More{" "}
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
