# SEO Option A — Technical Fixes + Entity Strengthening

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix broken SEO signals and strengthen the "Berkay = ML engineer" entity so berkay.se ranks for the standalone name "Berkay".

**Architecture:** Five targeted changes across `robots.txt`, `app/layout.tsx`, `components/layout/json-ld.tsx`, and page copy — no new dependencies, no structural changes.

**Tech Stack:** Next.js App Router, TypeScript, Schema.org JSON-LD

---

### Task 1: Fix robots.txt sitemap URL

**Files:**
- Modify: `public/robots.txt`

**Step 1: Open the file**

Current content:
```
# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://berkay.se/
```

**Step 2: Fix the sitemap line**

Replace with:
```
# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://berkay.se/sitemap.xml
```

**Step 3: Verify**

Visit `https://berkay.se/sitemap.xml` mentally — Next.js auto-generates it from `app/sitemap.ts`. The URL must match exactly.

**Step 4: Commit**
```bash
git add public/robots.txt
git commit -m "fix: correct sitemap URL in robots.txt"
```

---

### Task 2: Strengthen metadata keywords + description

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Update the `keywords` array**

Find:
```ts
keywords: [
  "Machine Learning",
  "Control Systems",
  "Cybersecurity",
  "Web Development",
  "Portfolio",
  "Engineer",
  "Developer",
  "TypeScript",
  "Python",
  "Next.js",
  "Berkay Orhan",
],
```

Replace with:
```ts
keywords: [
  "Berkay",
  "Berkay Orhan",
  "Machine Learning",
  "Machine Learning Engineer",
  "AI Engineer",
  "Control Systems",
  "Cybersecurity",
  "Web Development",
  "Portfolio",
  "Engineer",
  "Developer",
  "TypeScript",
  "Python",
  "Next.js",
  "Linköping",
  "Sweden",
],
```

**Step 2: Update the root description**

Find:
```ts
description:
  "Machine Learning Engineer showcasing projects and technical skills in AI, data science, and engineering",
```

Replace with:
```ts
description:
  "Berkay is a Machine Learning Engineer based in Sweden, showcasing projects and research in AI, data science, and full-stack engineering.",
```

**Step 3: Update openGraph description**

Find (in `openGraph`):
```ts
description:
  "Machine Learning Engineer showcasing projects and technical skills in AI, data science, and engineering",
```

Replace with:
```ts
description:
  "Berkay is a Machine Learning Engineer based in Sweden, showcasing projects and research in AI, data science, and full-stack engineering.",
```

**Step 4: Update twitter description**

Find (in `twitter`):
```ts
description:
  "Machine Learning Engineer showcasing projects and technical skills in AI, data science, and engineering",
```

Replace with:
```ts
description:
  "Berkay is a Machine Learning Engineer based in Sweden, showcasing projects and research in AI, data science, and full-stack engineering.",
```

**Step 5: Remove placeholder verification tokens**

Find:
```ts
verification: {
  google: "verification_token",
  yandex: "verification_token",
},
```

Replace with (already verified via Search Console, so remove the placeholder to avoid invalid token errors):
```ts
// Google Search Console: verified via DNS/HTML — token managed separately
```

Or simply delete the `verification` block entirely if there's no real token to add.

**Step 6: Commit**
```bash
git add app/layout.tsx
git commit -m "seo: strengthen keywords, description, and remove placeholder verification token"
```

---

### Task 3: Move JSON-LD to server-side

**Files:**
- Modify: `components/layout/json-ld.tsx`
- Modify: `app/layout.tsx`

**Context:** The current `JsonLd` component uses `useEffect` — it's a client component, meaning the schema is injected after hydration. Google's crawler may never execute it. Fixing this makes schema visible to all crawlers immediately.

**Step 1: Rewrite `components/layout/json-ld.tsx` as a server component**

Replace the entire file with:
```tsx
import { personalInfo, projects, socialLinks } from "@/lib/data/portfolio-data";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    givenName: "Berkay",
    familyName: "Orhan",
    alternateName: "Berkay",
    jobTitle: personalInfo.title,
    description: `Berkay is a Machine Learning Engineer based in Sweden. ${personalInfo.bio}`,
    url: "https://berkay.se",
    sameAs: [
      socialLinks.github,
      socialLinks.linkedin,
      "https://berkay.se",
      "https://instagram.com/berkay",
    ],
    knowsAbout: [
      "Machine Learning",
      "Artificial Intelligence",
      "Control Systems",
      "Cybersecurity",
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "PyTorch",
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://berkay.se",
      inLanguage: ["en", "sv"],
    },
    workExample: projects.map((project) => ({
      "@type": "SoftwareSourceCode",
      name: project.title,
      description: project.description,
      ...(project.link && { codeRepository: project.link }),
      ...(project.github && { url: project.github }),
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://berkay.se",
    name: "Berkay Orhan",
    alternateName: "Berkay",
    description: `Berkay is a Machine Learning Engineer based in Sweden. ${personalInfo.bio}`,
    inLanguage: ["en", "sv"],
    author: {
      "@type": "Person",
      name: "Berkay Orhan",
      alternateName: "Berkay",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
```

**Step 2: Move `<JsonLd />` into `<head>` in `app/layout.tsx`**

In `app/layout.tsx`, find the `<head>` block and add `<JsonLd />` inside it (before the closing `</head>`):

```tsx
<head>
  {/* ...existing links... */}
  <JsonLd />
</head>
```

Remove `<JsonLd />` from the `<body>` section if it's currently there.

**Step 3: Verify no TypeScript errors**

Run:
```bash
cd ~/dev/portfolio-new && bun run build 2>&1 | tail -20
```

Expected: build succeeds with no type errors.

**Step 4: Commit**
```bash
git add components/layout/json-ld.tsx app/layout.tsx
git commit -m "seo: move JSON-LD schema to server-side rendering for crawler visibility"
```

---

### Task 4: Update personalInfo bio to lead with "Berkay"

**Files:**
- Modify: `lib/data/portfolio-data.ts`

**Step 1: Update `bioEn`**

Find:
```ts
bioEn:
  "Engineering student passionate about machine learning and web development. Currently pursuing my master's in ML, web technologies, and cybersecurity. In my free time, I enjoy photography, gaming, and spending time with friends.",
```

Replace with:
```ts
bioEn:
  "Berkay is an engineering student passionate about machine learning and web development. Currently pursuing a master's in ML, web technologies, and cybersecurity. In free time: photography, gaming, and friends.",
```

**Step 2: Update `bio` (same as bioEn)**
```ts
bio:
  "Berkay is an engineering student passionate about machine learning and web development. Currently pursuing a master's in ML, web technologies, and cybersecurity. In free time: photography, gaming, and friends.",
```

**Step 3: Leave `bioSv` in Swedish — no change needed there.**

**Step 4: Commit**
```bash
git add lib/data/portfolio-data.ts
git commit -m "seo: update bio to lead with standalone 'Berkay' for entity disambiguation"
```

---

### Task 5: Push and submit sitemap to Search Console

**Step 1: Push all commits**
```bash
git push origin main
```

**Step 2: Validate sitemap (manual)**

Open a browser and visit `https://berkay.se/sitemap.xml` — confirm it returns XML with project and paper URLs.

**Step 3: Submit sitemap in Search Console (manual — Berkay does this)**

- Go to [search.google.com/search-console](https://search.google.com/search-console)
- Select `berkay.se` property
- Left sidebar → **Sitemaps**
- Enter `sitemap.xml` and hit **Submit**

**Step 4: Request indexing for homepage (manual — Berkay does this)**

- In Search Console → top search bar → paste `https://berkay.se` → hit Enter
- Click **Request Indexing**

---

## Checklist

- [ ] Task 1: robots.txt sitemap URL fixed
- [ ] Task 2: keywords + description updated
- [ ] Task 3: JSON-LD server-side
- [ ] Task 4: bio updated
- [ ] Task 5: push + Search Console steps

## Notes

- The Instagram `sameAs` URL in Task 3 should be updated to your actual Instagram profile URL if it differs.
- `og-image.jpg` is referenced in metadata but doesn't exist in `public/images/` — worth adding eventually but out of scope for Option A.
