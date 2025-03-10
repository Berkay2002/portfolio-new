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
  metadataBase: new URL('https://your-portfolio-domain.com'),
  title: {
    default: "Berkay Orhan | Machine Learning & Control Systems Engineer",
    template: "%s | Berkay Orhan",
  },
  description: "Machine Learning & Control Systems Engineer showcasing projects and technical skills in AI, data science, and engineering",
  keywords: [
    "Machine Learning", 
    "Control Systems", 
    "Portfolio", 
    "Engineer", 
    "Developer", 
    "TypeScript",
    "Python",
    "BERT",
    "Next.js",
    "Berkay Orhan"
  ],
  authors: [{ name: "Berkay Orhan" }],
  creator: "Berkay Orhan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-domain.com",
    title: "Berkay Orhan | Machine Learning & Control Systems Engineer",
    description: "Machine Learning & Control Systems Engineer showcasing projects and technical skills in AI, data science, and engineering",
    siteName: "Berkay Orhan Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Berkay Orhan - Machine Learning & Control Systems Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Berkay Orhan | Machine Learning & Control Systems Engineer",
    description: "Machine Learning & Control Systems Engineer showcasing projects and technical skills in AI, data science, and engineering",
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
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/images/profile.png" as="image" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
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
