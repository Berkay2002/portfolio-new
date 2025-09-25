import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { HtmlLangSetter } from "@/components/layout/html-lang-setter";
import { JsonLd } from "@/components/layout/json-ld";
import { LanguageProvider } from "@/components/layout/language-provider";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#111" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://berkay.se"),
  title: {
    default: "Berkay Orhan | Machine Learning Engineer",
    template: "%s | Berkay Orhan",
  },
  description:
    "Machine Learning Engineer showcasing projects and technical skills in AI, data science, and engineering",
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
  authors: [{ name: "Berkay Orhan" }],
  creator: "Berkay Orhan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
    },
  },
  alternates: {
    canonical: "https://berkay.se",
    languages: {
      "en-US": "https://berkay.se?lang=en",
      "sv-SE": "https://berkay.se?lang=sv",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "sv_SE",
    url: "https://berkay.se",
    title: "Berkay Orhan | Machine Learning Engineer",
    description:
      "Machine Learning Engineer showcasing projects and technical skills in AI, data science, and engineering",
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
    description:
      "Machine Learning Engineer showcasing projects and technical skills in AI, data science, and engineering",
    site: "@berkayorhan",
    creator: "@berkayorhan",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
    yandex: "verification_token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical resources */}
        <link as="image" href="/images/profile.png" rel="preload" />

        {/* KaTeX CSS for LaTeX rendering */}
        <link
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
          integrity="sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"
          rel="stylesheet"
        />

        {/* Preconnect to external domains */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        {/* Web app manifest */}
        <link href="/site.webmanifest" rel="manifest" />
      </head>
      <body className={`${inter.className} light antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <HtmlLangSetter />
            <div className="flex min-h-screen flex-col">
              <Header />
              <ScrollProgress />
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
