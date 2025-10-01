// config/sites/client-example.ts - Enhanced version
import { SiteConfig } from '../types';
import { vibrantTheme } from '../themes/presets';

export const clientExampleConfig: SiteConfig = {
  name: 'Creative Studio',
  tagline: 'Where Ideas Come to Life',
  
  // ✨ Different mode for this project
  mode: 'multi', // ← This project uses multi-page mode
  
  seo: {
    title: 'Creative Studio - Digital Design & Development',
    description: 'Award-winning creative studio specializing in brand identity, web design, and digital experiences.',
    keywords: ['creative studio', 'design', 'branding'],
    ogImage: '/client-og.png',
    twitterHandle: '@creativestudio',
    favicon: '/client-favicon.ico',
  },
  
  theme: vibrantTheme,
  
  nav: {
    position: 'top',
    links: [
      { href: '/work', label: 'Work' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
    showOnMobile: true,
    drawer: {
      side: 'right',
    },
  },
  
  socials: [
    { platform: 'instagram', href: 'https://instagram.com/creativestudio', label: 'Instagram' },
    { platform: 'email', href: 'mailto:hello@creativestudio.com', label: 'Email' },
  ],
  
  pages: [
    {
      path: '/',
      title: 'Home',
      // ✨ Standard text hero (NO overlay)
      hero: {
        type: 'text', // ← Regular hero
        title: 'We Create Digital Magic',
        subtitle: 'Transform Your Vision Into Reality',
        description: 'A full-service creative studio pushing the boundaries of digital design.',
        height: 'screen',
        alignment: 'center',
        background: {
          type: 'solid',
          value: '#8b5cf6',
        },
        cta: [
          { text: 'See Our Work', href: '/work', variant: 'primary' },
        ],
      },
      sections: [
        {
          id: 'intro',
          type: 'about',
          title: 'Welcome',
          content: 'We build amazing digital experiences.',
          layout: 'single',
          spacing: 'normal',
        },
      ],
      showNav: true,
      showFooter: true,
    },
  ],
  
  features: {
    splash: {
      enabled: false, // No splash for this client
    },
    animations: true,
  },
};