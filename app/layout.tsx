import type { Metadata } from "next";
import { Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import GlassNavbar from "@/components/ui/GlassNavbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nareshkumar A | AI Engineering & AI-Driven Security",
  description:
    "Portfolio of Nareshkumar A — B.Tech Artificial Intelligence & Data Science student at Kathir College of Engineering. Exploring Generative AI, ML, RAG, AI Agents, and Cybersecurity.",
  keywords: [
    "Nareshkumar A",
    "AI Engineering",
    "AI-Driven Security",
    "Kathir College of Engineering",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "RAG Systems",
    "AI Agents",
    "MCP",
    "Cybersecurity",
    "Python",
    "Coimbatore"
  ],
  authors: [{ name: "Nareshkumar A" }],
  creator: "Nareshkumar A",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nareshkumar-portfolio.vercel.app",
    title: "Nareshkumar A | AI Engineer & Web Designer",
    description: "Building intelligent systems, immersive digital experiences, and practical AI solutions.",
    siteName: "Nareshkumar A Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nareshkumar A | AI Engineer & Web Designer",
    description: "Building intelligent systems, immersive digital experiences, and practical AI solutions.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark scroll-smooth ${inter.variable} ${dmMono.variable}`}>
      <body suppressHydrationWarning className="bg-[#05070a] text-[#f3f6f8] font-sans antialiased selection:bg-cyber-acid selection:text-black overflow-x-hidden min-h-screen">
        <SmoothScrollProvider>
          <CustomCursor />
          <GlassNavbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
