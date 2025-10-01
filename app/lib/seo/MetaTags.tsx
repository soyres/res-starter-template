// lib/seo/MetaTags.tsx
"use client";

import { useConfig } from "@/app/config/lib/context/ConfigContext";

interface MetaTagsProps {
  title?: string;
  description?: string;
  ogImage?: string;
  path?: string;
}

export default function MetaTags({ 
  title, 
  description, 
  ogImage,
  path = '/'
}: MetaTagsProps) {
  const config = useConfig();
  const seo = config.seo;
  
  const fullTitle = title ? `${title} | ${seo.title}` : seo.title;
  const fullDescription = description || seo.description;
  const fullOgImage = ogImage || seo.ogImage;
  
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com'}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={fullDescription} />
      {seo.keywords && (
        <meta name="keywords" content={seo.keywords.join(', ')} />
      )}

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      {fullOgImage && <meta property="og:image" content={fullOgImage} />}
      <meta property="og:site_name" content={config.name} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={fullDescription} />
      {fullOgImage && <meta property="twitter:image" content={fullOgImage} />}
      {seo.twitterHandle && (
        <meta property="twitter:creator" content={seo.twitterHandle} />
      )}

      {seo.favicon && <link rel="icon" href={seo.favicon} />}
    </>
  );
}