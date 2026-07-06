import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Stefan Gislason | IT Support Professional & Emerging Developer",
    template: "%s | Stefan Gislason",
  },
  description:
    "Portfolio of Stefan Gislason — IT Support Professional and Emerging Developer with experience in troubleshooting, digital systems, AI workflows, and modern web development.",
  keywords: [
    "Stefan Gislason",
    "IT Support",
    "Developer Portfolio",
    "Next.js",
    "Datacom",
    "PawMatch",
    "OpenTrackr",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteConfig.url,
    title: "Stefan Gislason | IT Support Professional & Emerging Developer",
    description:
      "Portfolio showcasing IT support experience, development projects, and professional identity.",
    siteName: "Stefan Gislason Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stefan Gislason | IT Support Professional & Emerging Developer",
    description:
      "Portfolio showcasing IT support experience, development projects, and professional identity.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.tagline,
  email: siteConfig.email,
  url: siteConfig.url,
  sameAs: [siteConfig.linkedin, siteConfig.github],
  address: {
    "@type": "PostalAddress",
    addressCountry: siteConfig.location,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
