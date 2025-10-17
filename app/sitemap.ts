import { MetadataRoute } from 'next';
import { getActiveConfig } from '@/app/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const config = getActiveConfig();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
  
  const routes: MetadataRoute.Sitemap = [];
  
  // Add all pages
  config.pages.forEach(page => {
    routes.push({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.path === '/' ? 'daily' : 'weekly',
      priority: page.path === '/' ? 1.0 : 0.8,
    });
    
    // Add section anchors for single-page sites
    if (config.mode === 'single' && page.sections) {
      page.sections.forEach(section => {
        if (section.id !== 'hero') {
          routes.push({
            url: `${baseUrl}${page.path}#${section.id}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.6,
          });
        }
      });
    }
  });
  
  return routes;
}