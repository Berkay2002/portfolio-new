import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXFrontmatter } from '@/types';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMDXContent(slug: string, type: 'projects' = 'projects') {
  try {
    const fullPath = path.join(contentDirectory, type, `${slug}.mdx`);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      frontmatter: data as MDXFrontmatter,
      content,
      slug
    };
  } catch (error) {
    console.error(`Error reading MDX file for ${slug}:`, error);
    return null;
  }
}

export async function getAllMDXSlugs(type: 'projects' = 'projects'): Promise<string[]> {
  try {
    const fullPath = path.join(contentDirectory, type);
    
    if (!fs.existsSync(fullPath)) {
      return [];
    }
    
    const files = fs.readdirSync(fullPath);
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error(`Error reading MDX directory ${type}:`, error);
    return [];
  }
}

// Helper function to merge MDX frontmatter with existing project data
export function mergeMDXWithProjectData<T extends { id: string }>(projectData: T, mdxData: any): T {
  if (!mdxData) return projectData;
  
  return {
    ...projectData,
    // Override with MDX frontmatter if available
    ...(mdxData.frontmatter.title && { title: mdxData.frontmatter.title }),
    ...(mdxData.frontmatter.description && { description: mdxData.frontmatter.description }),
    ...(mdxData.frontmatter.technologies && { technologies: mdxData.frontmatter.technologies }),
    // Add MDX-specific fields
    mdxContent: mdxData.content,
    mdxFrontmatter: mdxData.frontmatter
  };
}