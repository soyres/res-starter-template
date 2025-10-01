// lib/seo/utils.ts

/**
 * Generate a proper Open Graph image URL
 */
export function getOGImageUrl(path?: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
  const defaultOg = process.env.NEXT_PUBLIC_OG_IMAGE_URL || '/og-image.png';
  
  if (path) {
    return `${baseUrl}${path}`;
  }
  
  return `${baseUrl}${defaultOg}`;
}

/**
 * Generate canonical URL for a page
 */
export function getCanonicalUrl(path: string = '/'): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yoursite.com';
  return `${baseUrl}${path}`;
}

/**
 * Truncate description to optimal length for meta tags
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}

/**
 * Generate page title with proper formatting
 */
export function generatePageTitle(
  pageTitle: string, 
  siteName: string,
  separator: string = '|'
): string {
  return `${pageTitle} ${separator} ${siteName}`;
}

/**
 * Extract keywords from text content
 */
export function extractKeywords(text: string, count: number = 10): string[] {
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 
    'to', 'for', 'of', 'with', 'by', 'from', 'as', 'is', 'was'
  ]);
  
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));
  
  const frequency: Record<string, number> = {};
  words.forEach(word => {
    frequency[word] = (frequency[word] || 0) + 1;
  });
  
  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([word]) => word);
}

/**
 * Validate and format URL
 */
export function formatUrl(url: string): string {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
}