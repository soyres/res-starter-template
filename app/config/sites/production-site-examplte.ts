 import { EnhancedSiteConfig } from "@/app/config/enchanced-types"
export const productionSiteExample: EnhancedSiteConfig = {
  name: 'Apex Studios',
  tagline: 'Cinematic Digital Experiences',
  
  mode: 'single',
  
  seo: {
    title: 'Apex Studios - Award-Winning Digital Agency',
    description: 'We create jaw-dropping digital experiences that convert. From Hollywood-quality video to blazing-fast websites.',
    keywords: ['digital agency', 'web design', 'video production', 'Next.js'],
    ogImage: '/og-apex.jpg',
    twitterHandle: '@apexstudios',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Apex Studios',
      url: 'https://apexstudios.com',
      logo: 'https://apexstudios.com/logo.png',
    },
  },
  
  theme: {
    colors: {
      primary: '#FF3366',
      secondary: '#6366F1',
      accent: '#F59E0B',
      background: '#0A0A0A',
      foreground: '#FFFFFF',
      muted: '#1A1A1A',
    },
    fonts: {
      heading: 'var(--font-display)',
      body: 'var(--font-sans)',
    },
    animations: {
      duration: 'normal',
      easing: 'ease-out',
    },
  },
  
  nav: {
    position: 'top',
    sticky: true,
    transparent: true,
    behavior: 'view-transition',
    links: [
      { href: '#work', label: 'Work' },
      { href: '#services', label: 'Services' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
    drawer: {
      side: 'right',
      backdrop: true,
    },
  },
  
  pages: [
    {
      path: '/',
      title: 'Home',
      transition: 'view-transition',
      seo: {
        title: 'Apex Studios - Home',
        description: 'Creating digital experiences that matter',
      },
      hero: {
        type: 'video',
        background: {
          type: 'remotion',
          src: '/videos/hero.mp4',
          remotionComposition: 'Hero',
          autoplay: true,
          muted: true,
          loop: true,
        },
        title: 'Digital Experiences That Matter',
        subtitle: 'Award-Winning Agency',
        cta: [
          { text: 'View Our Work', href: '#work', variant: 'primary' },
          { text: 'Get Started', href: '#contact', variant: 'outline' },
        ],
        height: 'screen',
        alignment: 'center',
      },
      sections: [
        {
          id: 'work',
          type: 'projects',
          title: 'Featured Work',
          subtitle: 'Projects We\'re Proud Of',
          layout: 'masonry',
          animation: 'fade-up',
          spacing: 'spacious',
          data: {
            projects: [
              {
                title: 'Nike Air Launch',
                description: 'Interactive 3D product experience',
                image: '/projects/nike.jpg',
                video: '/projects/nike.mp4',
                tags: ['3D', 'WebGL', 'E-commerce'],
                href: '/work/nike',
              },
            ],
          },
        },
      ],
      showNav: true,
      showFooter: true,
    },
  ],
  
  features: {
    animations: true,
    analytics: {
      googleAnalytics: 'G-XXXXXXXXXX',
      plausible: {
        domain: 'apexstudios.com',
      },
    },
    forms: {
      contact: {
        provider: 'resend',
        apiKey: process.env.RESEND_API_KEY,
        fields: [
          { name: 'name', label: 'Name', type: 'text', required: true },
          { name: 'email', label: 'Email', type: 'email', required: true },
          { name: 'message', label: 'Message', type: 'textarea', required: true },
        ],
        successMessage: 'Thanks! We\'ll be in touch soon.',
      },
    },
    performance: {
      prefetchLinks: true,
      lazyLoadImages: true,
      optimizeImages: {
        quality: 85,
        formats: ['avif', 'webp'],
      },
      enableViewTransitions: true,
    },
  },
};