import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image"; // added import
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "./button";

const ANIMATION_DURATION_SECONDS = 0.5;
const ANIMATION_DELAY_STEP_SECONDS = 0.1;

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  category: string;
  thumbnail?: string;
  slug: string;
};

type BlogCardProps = {
  post: BlogPost;
  index?: number;
  className?: string;
};

export function BlogCard({ post, index = 0, className }: BlogCardProps) {
  return (
    <motion.div
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-background shadow-xs transition-shadow hover:shadow-md dark:border-neutral-800",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      transition={{
        duration: ANIMATION_DURATION_SECONDS,
        delay: index * ANIMATION_DELAY_STEP_SECONDS,
      }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {post.thumbnail && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            height={360}
            priority={index === 0}
            src={post.thumbnail}
            width={640}
            // Optionally add sizes for responsive images
          />
          <div className="absolute top-3 left-3">
            <span className="rounded-full bg-primary/80 px-3 py-1 font-medium text-primary-foreground text-xs">
              {post.category}
            </span>
          </div>
        </div>
      )}

      <div className="flex grow flex-col p-5">
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
