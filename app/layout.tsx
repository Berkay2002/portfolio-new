import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { LanguageProvider } from "@/components/layout/language-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { JsonLd } from "@/components/layout/json-ld";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#111" }
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://berkay.live'),
  title: {
    default: "Berkay Orhan | Machine Learning Engineer",
    template: "%s | Berkay Orhan",
  },
  description: "Machine Learning Engineer showcasing projects and technical skills in AI, data science, and engineering",
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
    "Berkay Orhan"
  ],
  authors: [{ name: "Berkay Orhan" }],
  creator: "Berkay Orhan",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    languages: {
      'en': '/',
      'sv': '/',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "sv_SE",
    url: "https://berkay.live",
    title: "Berkay Orhan | Machine Learning Engineer",
    description: "Machine Learning Engineer showcasing projects and technical skills in AI, data science, and engineering",
    siteName: "Berkay Orhan Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Berkay Orhan - Machine Learning Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berkay Orhan | Machine Learning Engineer",
    description: "Machine Learning Engineer showcasing projects and technical skills in AI, data science, and engineering",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/profile.png" as="image" />
        
        {/* KaTeX CSS for LaTeX rendering */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
          integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"
          crossOrigin="anonymous"
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased light`}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <ScrollToTop />
              <JsonLd />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
