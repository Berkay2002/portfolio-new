import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group flex flex-col h-full bg-background border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow",
        className
      )}
    >
      {post.thumbnail && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs font-medium bg-primary/80 text-primary-foreground rounded-full">
              {post.category}
            </span>
          </div>
        </div>
      )}
      
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            <span>{post.date}</span>
          </div>
          {post.readTime && (
            <div className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span>{post.readTime}</span>
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="mt-auto">
          <Link href={`/papers/${post.slug}`} passHref>
            <Button variant="ghost" className="px-0 group-hover:text-primary transition-colors">
              Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 