# MDX Migration Guide

This guide covers the implementation of enhanced project pages with .mdx support, architecture diagrams, live demo embeds, and installation guides.

## 🎯 New Features Added

### 1. Architecture Diagrams
- **Visual system overviews** with expandable images
- **Localized descriptions** in English and Swedish
- **Clean presentation** with proper spacing and borders

### 2. Live Demo Embeds
- **Secure iframe embedding** with sandbox restrictions
- **Configurable height** (default 600px)
- **Descriptive introductions** before the embed
- **Responsive design** that works on all devices

### 3. Installation Guides
- **Prerequisites listing** with clear requirements
- **Step-by-step instructions** with code formatting
- **Additional notes** for production considerations
- **Bilingual support** for international users

### 4. Contributing Guidelines
- **Development setup** instructions
- **Code style guidelines** with best practices
- **Pull request workflow** documentation
- **Quality assurance** requirements

## 🏗️ Architecture Overview

### File Structure
```
portfolio-new/
├── content/
│   └── projects/
│       ├── ai-image-editor.mdx
│       ├── agent-mesh.mdx
│       └── ...
├── components/
│   ├── project-page-content-enhanced.tsx
│   └── ui/
│       └── tabs.tsx (new)
├── lib/
│   ├── mdx.ts (new)
│   └── data/
│       └── projects/
│           ├── ai-image-editor-enhanced.ts
│           └── ...
└── types/
    └── index.ts (enhanced)
```

### Data Flow
1. **Project metadata** stored in TypeScript files
2. **Rich content** written in .mdx files
3. **Runtime merging** of data and content
4. **Component rendering** with enhanced features

## 📝 Implementation Steps

### Step 1: Install Dependencies
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter remark-gfm
```

### Step 2: Update Next.js Configuration
Create or update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Your existing Next.js config
})
```

### Step 3: Update Project Page
Modify `app/projects/[id]/page.tsx`:

```typescript
import { getMDXContent } from '@/lib/mdx';
import ProjectPageContentEnhanced from '@/components/project-page-content-enhanced';
import { projects } from '@/lib/data/portfolio-data';

export default async function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();
  
  // Try to load MDX content
  const mdxData = await getMDXContent(params.id);
  
  return (
    <ProjectPageContentEnhanced 
      project={project} 
      mdxContent={mdxData?.content}
    />
  );
}
```

### Step 4: Create MDX Content Files
For each project, create a corresponding `.mdx` file in `content/projects/`:

```mdx
---
title: "Your Project Title"
description: "Brief description"
technologies: ["Next.js", "TypeScript"]
status: "completed"
difficulty: 4
---

# Your Project Title

Detailed content with **markdown** formatting...

## Architecture

Explain your system design...

## Key Features

- Feature 1 with detailed explanation
- Feature 2 with code examples
```

### Step 5: Add Enhanced Project Data
Update your project data files with new fields:

```typescript
export const yourProject: Project = {
  // ... existing fields
  
  // Architecture diagram
  architectureDiagram: {
    image: "/images/projects/your-project-architecture.png",
    alt: "System architecture diagram",
    description: "Overview of the system components...",
  },
  
  // Live demo
  liveDemo: {
    url: "https://your-demo.vercel.app",
    title: "Interactive Demo",
    height: 700,
    description: "Try the application features...",
  },
  
  // Installation guide
  installation: {
    prerequisites: ["Node.js 18+", "Git"],
    steps: [
      "Clone the repository",
      "Install dependencies: `npm install`",
      "Run: `npm run dev`"
    ],
    additionalNotes: "Additional setup information..."
  },
  
  // Contributing guidelines
  contributing: {
    guidelines: [
      "Follow TypeScript conventions",
      "Write descriptive commits",
      "Add tests for new features"
    ],
    setupSteps: [
      "Fork the repository",
      "Create feature branch",
      "Submit pull request"
    ]
  }
};
```

## 🎨 UI Components

### Tabbed Interface
Content is organized into four main tabs:
- **Overview**: MDX content and project outcomes
- **Features**: Key features and image gallery
- **Technical**: Challenges and solutions
- **Setup**: Installation and contributing guides

### Architecture Diagrams
- Expandable images with proper alt text
- Descriptive text above the diagram
- Clean card presentation with padding

### Live Demo Embeds
- Secure iframe with sandbox restrictions
- Configurable height for different demos
- Loading states and error handling

### Installation Guides
- Prerequisites with bullet points
- Sequential steps with code formatting
- Additional notes in highlighted boxes

## 🌐 Internationalization

All new features support bilingual content:
- `description` / `descriptionSv`
- `steps` / `stepsSv`
- `guidelines` / `guidelinesSv`
- `additionalNotes` / `additionalNotesSv`

## 🚀 Migration Strategy

### Phase 1: Core Setup
1. Install dependencies
2. Update type definitions
3. Create enhanced component
4. Test with one project

### Phase 2: Content Migration
1. Create MDX files for key projects
2. Add architecture diagrams
3. Set up live demo embeds
4. Write installation guides

### Phase 3: Enhancement
1. Add contributing guidelines
2. Create project-specific components
3. Optimize performance
4. Test across devices

## 📊 Benefits

### For Developers
- **Rich content editing** with MDX
- **Component reusability** in content
- **Better maintainability** with separated concerns
- **Enhanced SEO** with structured content

### For Visitors
- **Interactive demos** show real functionality
- **Visual architecture** aids understanding
- **Clear setup instructions** enable replication
- **Comprehensive documentation** builds trust

### For Portfolio Impact
- **Professional presentation** of technical skills
- **Detailed case studies** demonstrate expertise
- **Interactive elements** increase engagement
- **Documentation quality** shows attention to detail

## 🔧 Troubleshooting

### Common Issues

**MDX files not loading:**
- Verify file paths in `content/projects/`
- Check frontmatter syntax
- Ensure proper file extensions

**iframe security errors:**
- Verify CORS settings on demo URLs
- Check sandbox permissions
- Test with different browsers

**Missing dependencies:**
- Run `npm install` after adding new packages
- Clear Next.js cache: `rm -rf .next`
- Restart development server

## 📈 Next Steps

1. **Create architecture diagrams** for your main projects
2. **Set up demo environments** on Vercel/Netlify
3. **Write comprehensive MDX content** for featured projects
4. **Test thoroughly** across devices and browsers
5. **Deploy and iterate** based on user feedback

This enhanced system provides a professional, comprehensive way to showcase your technical projects while maintaining excellent performance and user experience.