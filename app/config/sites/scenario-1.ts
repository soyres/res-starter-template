import { SiteConfig } from '../types';

export const scenario1Config: SiteConfig = {
  name: 'My Portfolio',
  tagline: 'Designer & Developer',
  mode: 'single',
  
  seo: {
    title: 'My Portfolio - Designer & Developer',
    description: 'My portfolio showcasing my work',
    keywords: ['design', 'development', 'portfolio'],
    ogImage: '/og-image.png',
    favicon: '/favicon.ico',
  },
  
  theme: {
    colors: {
      primary: '#000000',
      secondary: '#171717',
      accent: '#3b82f6',
      background: '#ffffff',
      foreground: '#171717',
      muted: '#f5f5f5',
    },
    fonts: {
      heading: 'var(--font-geist-sans)',
      body: 'var(--font-geist-sans)',
      mono: 'var(--font-geist-mono)',
    },
    animations: {
      duration: 'normal',
      easing: 'ease-in-out',
    },
  },
  
  nav: {
    position: 'top',
    links: [
      { href: '#about', label: 'About' },
      { href: '#work', label: 'Work' },
      { href: '#contact', label: 'Contact' },
    ],
    showOnMobile: true,
    drawer: {
      side: 'left',
    },
  },
  
  socials: [
    { platform: 'email', href: 'mailto:hello@example.com', label: 'Email' },
  ],
  
  pages: [
    {
      path: '/',
      title: 'Home',
      hero: {
        type: 'hero-nav-overlay',
        heroNavOverlay: {
          bgSrc: '/hero.jpg',
          links: [
            { href: '#about', label: 'About' },
            { href: '#work', label: 'Work' },
            { href: '#contact', label: 'Contact' },
          ],
        },
        height: 'screen',
      },
      sections: [
        {
          id: 'about',
          type: 'about',
          title: 'About Me',
          content: 'I am a designer and developer.',
          layout: 'single',
          spacing: 'normal',
        },
        {
          id: 'work',
          type: 'projects',
          title: 'My Work',
          layout: 'grid',
          spacing: 'spacious',
          data: {
            projects: [
              {
                title: 'Project 1',
                description: 'A cool project',
                image: '/projects/project-1.jpg',
                href: '#',
              },
            ],
          },
        },
        {
          id: 'contact',
          type: 'contact',
          title: 'Get in Touch',
          content: 'Let\'s work together!',
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
      enabled: false,
    },
    animations: true,
  },
};