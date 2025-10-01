import { SiteConfig } from '../types';

export const scenario2Config: SiteConfig = {
  name: 'Simple Portfolio',
  tagline: 'Creative Designer',
  mode: 'single',
  
  seo: {
    title: 'Simple Portfolio - Creative Designer',
    description: 'Welcome to my simple portfolio',
    keywords: ['design', 'portfolio'],
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
        type: 'text',
        title: 'Hello, I\'m a Designer',
        subtitle: 'Creative Portfolio',
        description: 'Welcome to my portfolio where I showcase my work',
        cta: [
          { text: 'View Work', href: '#work', variant: 'primary' },
          { text: 'Contact Me', href: '#contact', variant: 'outline' },
        ],
        height: 'screen',
        alignment: 'center',
        background: {
          type: 'solid',
          value: '#000000',
        },
      },
      sections: [
        {
          id: 'work',
          type: 'projects',
          title: 'My Work',
          subtitle: 'Selected Projects',
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