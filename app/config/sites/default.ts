// config/sites/default.ts - Enhanced version with splash animations
import { SiteConfig } from '../types';

export const defaultSiteConfig: SiteConfig = {
  name: 'Res Pizarro',
  tagline: 'Designer & Engineer',
  
  mode: 'single',
  
  seo: {
    title: 'Res Pizarro - Designer & Engineer',
    description: 'I design and engineer thoughtful digital experiences using code, creativity, and ancestral intuition.',
    keywords: ['design', 'engineering', 'web development', 'creative', 'portfolio'],
    ogImage: '/og-image.png',
    twitterHandle: '@respizarro',
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
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact' },
    ],
    showOnMobile: true,
    drawer: {
      side: 'left',
    },
  },
  
  socials: [
    { platform: 'twitter', href: 'https://twitter.com/respizarro', label: 'Twitter' },
    { platform: 'instagram', href: 'https://instagram.com/respizarro', label: 'Instagram' },
    { platform: 'linkedin', href: 'https://linkedin.com/in/respizarro', label: 'LinkedIn' },
    { platform: 'email', href: 'mailto:res@example.com', label: 'Email' },
  ],
  
  pages: [
    {
      path: '/',
      title: 'Home',
      hero: {
        type: 'hero-nav-overlay',
        heroNavOverlay: {
          bgSrc: '/og-image.png',
          links: [
            { href: '#about', label: 'About' },
            { href: '#projects', label: 'Projects' },
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
          subtitle: 'Designer, Engineer, Creator',
          content: [
            'I blend design and engineering to create digital experiences that feel both innovative and intuitive.',
            'With a background in both creative and technical fields, I bring a unique perspective to every project.',
          ],
          layout: 'single',
          spacing: 'normal',
        },
        {
          id: 'projects',
          type: 'projects',
          title: 'Selected Work',
          subtitle: 'Recent projects and collaborations',
          layout: 'grid',
          spacing: 'spacious',
          data: {
            projects: [
              {
                title: 'Project One',
                description: 'A modern web application',
                image: '/projects/project-1.jpg',
                href: '/projects/project-one',
              },
            ],
          },
        },
        {
          id: 'contact',
          type: 'contact',
          title: 'Get in Touch',
          subtitle: "Let's create something together",
          content: 'I\'m always open to discussing new projects, creative ideas, or opportunities.',
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
      enabled: true,
      duration: 3500,
      animation: 'scale', // Options: 'fade' | 'scale' | 'slide-up' | 'slide-down' | 'zoom' | 'blur' | 'glow' | 'typewriter'
      content: 'Res Pizarro',
      backgroundColor: 'from-black via-gray-900 to-black',
      textColor: 'white',
    },
    animations: true,
  },
};