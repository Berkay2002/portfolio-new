"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BlogCard, type BlogPost } from "@/components/ui/blog-card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

// Example blog posts/papers - replace with your real data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Machine Learning Approaches for Predictive Maintenance",
    excerpt:
      "An exploration of how machine learning can be used to predict equipment failures before they occur, reducing downtime and maintenance costs.",
    date: "March 15, 2023",
    readTime: "8 min read",
    category: "Machine Learning",
    thumbnail: "/images/blog/ml-maintenance.webp",
    slug: "machine-learning-predictive-maintenance",
  },
  {
    id: "2",
    title: "The Future of Web Development: Server Components",
    excerpt:
      "An analysis of React Server Components and how they're changing the way we think about building performant web applications.",
    date: "January 10, 2023",
    readTime: "6 min read",
    category: "Web Development",
    thumbnail: "/images/blog/server-components.webp",
    slug: "future-web-development-server-components",
  },
  {
    id: "3",
    title: "Cybersecurity Best Practices for Modern Web Applications",
    excerpt:
      "A comprehensive guide to securing modern web applications against common vulnerabilities and emerging threats.",
    date: "November 25, 2022",
    readTime: "10 min read",
    category: "Cybersecurity",
    thumbnail: "/images/blog/cybersecurity.webp",
    slug: "cybersecurity-best-practices",
  },
];

export function BlogPreviewSection() {
  return (
    <section className="py-20" id="blog">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <SectionHeading className="md:mb-0" title="Latest Articles" />

          <Link href="/papers" passHref>
            <Button className="group mt-6 md:mt-0" variant="outline">
              View All Articles
              <ArrowUpRight className="group-hover:-translate-y-0.5 ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard index={index} key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
