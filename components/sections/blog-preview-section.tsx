"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/ui/section-heading";
import { BlogCard, BlogPost } from "@/components/ui/blog-card";
import { Button } from "@/components/ui/button";

// Example blog posts/papers - replace with your real data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Machine Learning Approaches for Predictive Maintenance",
    excerpt: "An exploration of how machine learning can be used to predict equipment failures before they occur, reducing downtime and maintenance costs.",
    date: "March 15, 2023",
    readTime: "8 min read",
    category: "Machine Learning",
    thumbnail: "/images/blog/ml-maintenance.webp",
    slug: "machine-learning-predictive-maintenance",
  },
  {
    id: "2",
    title: "The Future of Web Development: Server Components",
    excerpt: "An analysis of React Server Components and how they're changing the way we think about building performant web applications.",
    date: "January 10, 2023",
    readTime: "6 min read",
    category: "Web Development",
    thumbnail: "/images/blog/server-components.webp",
    slug: "future-web-development-server-components",
  },
  {
    id: "3",
    title: "Cybersecurity Best Practices for Modern Web Applications",
    excerpt: "A comprehensive guide to securing modern web applications against common vulnerabilities and emerging threats.",
    date: "November 25, 2022",
    readTime: "10 min read",
    category: "Cybersecurity",
    thumbnail: "/images/blog/cybersecurity.webp",
    slug: "cybersecurity-best-practices",
  },
];

export function BlogPreviewSection() {
  return (
    <section id="blog" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading 
            title="Latest Articles" 
            className="md:mb-0"
          />
          
          <Link href="/papers" passHref>
            <Button variant="outline" className="group mt-6 md:mt-0">
              View All Articles
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 