// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ConfigProvider } from "@/app/config/lib/context/ConfigContext";
import { ThemeProvider } from "@/app/config/lib/context/ThemeProvider";
import { getActiveConfig } from "@/app/config";
import JSONLDSchema from "@/app/lib/seo/jsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteConfig = getActiveConfig();
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: siteConfig.seo.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.seo.description,
    keywords: siteConfig.seo.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: baseUrl,
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      siteName: siteConfig.name,
      images: siteConfig.seo.ogImage ? [
        {
          url: siteConfig.seo.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      images: siteConfig.seo.ogImage ? [siteConfig.seo.ogImage] : [],
      creator: siteConfig.seo.twitterHandle,
    },
    icons: {
      icon: siteConfig.seo.favicon || '/favicon.ico',
      shortcut: siteConfig.seo.favicon || '/favicon.ico',
      apple: siteConfig.seo.favicon || '/favicon.ico',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConfigProvider config={siteConfig}>
          <ThemeProvider>
            <JSONLDSchema type="person" />
            {children}
          </ThemeProvider>
        </ConfigProvider>
      </body>
    </html>
  );
}