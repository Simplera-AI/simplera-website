import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Simplera AI — Intelligence Simplified",
  description:
    "AI-powered tools that transform complex workflows into simple, actionable insights. Privacy-first, enterprise-ready.",
  openGraph: {
    title: "Simplera AI — Intelligence Simplified",
    description:
      "AI-powered tools that transform complex workflows into simple, actionable insights. Privacy-first, enterprise-ready.",
    url: "https://simpleraai.com",
    siteName: "Simplera AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simplera AI — Intelligence Simplified",
    description:
      "AI-powered tools that transform complex workflows into simple, actionable insights.",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-bg-primary text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
