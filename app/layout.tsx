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
  metadataBase: new URL("https://pec1985.com"),
  title: "Pedro Enrique - Founder of Orbitali & Software Engineer",
  description:
    "Pedro Enrique is a senior software engineer with 15+ years of experience across mobile apps, full-stack product engineering, infrastructure, AI systems, and startup product development. Founder and CEO/CTO of Orbitali, a real-time AI voice agent platform, and founder of Volandoo, serving 18,000+ users worldwide.",
  openGraph: {
    title: "Pedro Enrique - Founder of Orbitali & Software Engineer",
    description:
      "Founder and CEO/CTO of Orbitali. Building real-time AI voice agents, mobile apps, full-stack systems, and infrastructure.",
    type: "website",
    images: [
      {
        url: "/photos/pedro-square.webp",
        width: 1458,
        height: 1458,
        alt: "Pedro Enrique",
        type: "image/webp",
      },
    ],
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
        <script defer src="https://analytics.volandoo.com/script.js" data-website-id="1520e7db-7ad7-4b08-9c90-c91cf3eca18a"></script>
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
