// lib/seo/jsonLd.tsx
"use client";

import { useConfig } from "@/app/config/lib/context/ConfigContext";

interface PersonSchema {
  type: 'person';
  name: string;
  jobTitle?: string;
  url?: string;
  sameAs?: string[];
}

interface OrganizationSchema {
  type: 'organization';
  name: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
}

interface WebsiteSchema {
  type: 'website';
  name: string;
  url: string;
  description?: string;
}

type SchemaType = PersonSchema | OrganizationSchema | WebsiteSchema;

export default function JSONLDSchema({ 
  type = 'person',
  data 
}: { 
  type?: SchemaType['type'];
  data?: Partial<PersonSchema | OrganizationSchema | WebsiteSchema>;
}) {
  const config = useConfig();
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
  const socialProfiles = config.socials?.map(s => s.href) || [];

  let schema: any = {
    '@context': 'https://schema.org',
  };

  switch (type) {
    case 'person':
      schema = {
        ...schema,
        '@type': 'Person',
        name: data?.name || config.name,
        jobTitle: (data as PersonSchema)?.jobTitle || config.tagline,
        url: (data as PersonSchema)?.url || baseUrl,
        sameAs: (data as PersonSchema)?.sameAs || socialProfiles,
      };
      break;
      
    case 'organization':
      schema = {
        ...schema,
        '@type': 'Organization',
        name: data?.name || config.name,
        url: (data as OrganizationSchema)?.url || baseUrl,
        logo: (data as OrganizationSchema)?.logo || config.logo,
        sameAs: (data as OrganizationSchema)?.sameAs || socialProfiles,
      };
      break;
      
    case 'website':
      schema = {
        ...schema,
        '@type': 'WebSite',
        name: data?.name || config.name,
        url: (data as WebsiteSchema)?.url || baseUrl,
        description: (data as WebsiteSchema)?.description || config.seo.description,
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}