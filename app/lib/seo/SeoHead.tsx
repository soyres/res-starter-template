"use client";

import { useConfig } from "@/app/config/lib/context/ConfigContext";

interface SeoHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  path?: string;
  type?: 'website' | 'article' | 'product';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
  noindex?: boolean;
}

export default function SeoHead(props: SeoHeadProps) {
  const config = useConfig();
  const seo = config.seo;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
  
  // Merge site defaults with page-specific SEO
  const fullTitle = props.title ? `${props.title} | ${seo.title}` : seo.title;
  const description = props.description || seo.description;
  const ogImage = props.ogImage || seo.ogImage;
  const keywords = [...(seo.keywords || []), ...(props.tags || [])];
  const canonicalUrl = `${baseUrl}${props.path || '/'}`;
  const ogType = props.type || seo.ogType || 'website';
  
  return (
    <>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {props.author && <meta name="author" content={props.author} />}
      
      {/* Robots */}
      {props.noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={`${baseUrl}${ogImage}`} />}
      <meta property="og:site_name" content={config.name} />
      {props.publishedTime && (
        <meta property="article:published_time" content={props.publishedTime} />
      )}
      {props.modifiedTime && (
        <meta property="article:modified_time" content={props.modifiedTime} />
      )}
      
      {/* Twitter */}
      <meta property="twitter:card" content={seo.twitterCard || 'summary_large_image'} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      {ogImage && <meta property="twitter:image" content={`${baseUrl}${ogImage}`} />}
      {seo.twitterHandle && (
        <meta property="twitter:creator" content={seo.twitterHandle} />
      )}
      
      {/* Favicon & App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content={config.theme.colors.primary} />
    </>
  );
}
