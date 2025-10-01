// lib/utils/imageUtils.ts

/**
 * Generates a tiny blur placeholder for images
 * This improves perceived performance during image loading
 */
export function getBlurDataURL(color: string = '#1a1a1a'): string {
  // Convert hex to RGB
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  
  // Create a 10x10 SVG with the color
  const svg = `
    <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" fill="rgb(${r},${g},${b})"/>
    </svg>
  `;
  
  // Convert to base64
  const base64 = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

// Pre-generated blur data URLs for common scenarios
export const BLUR_DATA_URLS = {
  dark: getBlurDataURL('#1a1a1a'),
  light: getBlurDataURL('#f5f5f5'),
  gray: getBlurDataURL('#808080'),
  black: getBlurDataURL('#000000'),
  white: getBlurDataURL('#ffffff'),
};