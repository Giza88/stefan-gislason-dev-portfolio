import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stefangislason.dev"),
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
  authors: [{ name: "Stefan Gislason", url: "https://stefangislason.dev" }],
  creator: "Stefan Gislason",
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://stefangislason.dev",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
