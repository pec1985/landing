import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeInit } from "../.flowbite-react/init";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Enrique - Founder of Orbitali & Software Engineer",
  description:
    "Pedro Enrique is a senior software engineer with 15+ years of experience across mobile apps, full-stack product engineering, infrastructure, AI systems, and startup product development. Founder and CEO/CTO of Orbitali, a real-time AI voice agent platform, and founder of Volandoo, serving 18,000+ users worldwide.",
  openGraph: {
    title: "Pedro Enrique - Founder of Orbitali & Software Engineer",
    description:
      "Founder and CEO/CTO of Orbitali. Building real-time AI voice agents, mobile apps, full-stack systems, and infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
