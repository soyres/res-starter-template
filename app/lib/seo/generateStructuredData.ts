export function generateOrganizationSchema(config: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.name,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    logo: config.logo,
    description: config.seo.description,
    contactPoint: config.contact ? {
      '@type': 'ContactPoint',
      email: config.contact.email,
      telephone: config.contact.phone,
      contactType: 'customer service',
    } : undefined,
    sameAs: config.socials?.map((s: any) => s.href) || [],
  };
}



export function generateWebsiteSchema(config: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.name,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    description: config.seo.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{name: string; url: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: `${baseUrl}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  availability: 'InStock' | 'OutOfStock';
  brand: string;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${baseUrl}${product.image}`,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: `https://schema.org/${product.availability}`,
    },
  };
}

