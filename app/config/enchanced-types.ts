// app/config/enhanced-types.ts - Production-grade config system

export type VideoConfig = {
  type: 'youtube' | 'vimeo' | 'hosted' | 'remotion';
  src: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  // Remotion-specific
  remotionComposition?: string;
  remotionProps?: Record<string, any>;
};

export type AnimationPreset = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right'
  | 'scale' 
  | 'parallax' 
  | 'reveal'
  | 'none';

export type SEOConfig = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image' | 'player';
  twitterHandle?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  structuredData?: Record<string, any>; // JSON-LD
};

export type AnalyticsConfig = {
  googleAnalytics?: string; // GA4 measurement ID
  plausible?: {
    domain: string;
    trackLocalhost?: boolean;
  };
  fathom?: string;
  mixpanel?: string;
  hotjar?: string;
};

export type FormConfig = {
  provider: 'mailchimp' | 'convertkit' | 'sendgrid' | 'resend' | 'custom';
  endpoint?: string;
  apiKey?: string;
  listId?: string;
  successMessage?: string;
  errorMessage?: string;
  fields: {
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
    required?: boolean;
    placeholder?: string;
    options?: string[]; // for select
  }[];
};

export type IntegrationConfig = {
  shopify?: {
    domain: string;
    storefrontAccessToken: string;
    collections?: string[];
  };
  stripe?: {
    publishableKey: string;
    products?: string[];
  };
  calendly?: {
    url: string;
  };
};

export type PerformanceConfig = {
  prefetchLinks?: boolean;
  lazyLoadImages?: boolean;
  optimizeImages?: {
    quality: number;
    formats: ('webp' | 'avif' | 'jpg' | 'png')[];
  };
  enableViewTransitions?: boolean;
  criticalCSS?: boolean;
};

export type SectionConfig = {
  id: string;
  type: 'hero' | 'about' | 'projects' | 'services' | 'testimonials' | 
        'logos' | 'video' | 'cta' | 'contact' | 'custom';
  title?: string;
  subtitle?: string;
  content?: string | string[];
  layout?: 'single' | 'two-column' | 'three-column' | 'grid' | 'masonry';
  background?: 'default' | 'muted' | 'accent' | 'gradient' | 'video' | 'image';
  backgroundMedia?: VideoConfig | { type: 'image'; src: string };
  spacing?: 'compact' | 'normal' | 'spacious';
  animation?: AnimationPreset;
  parallax?: boolean;
  data?: any;
  seo?: Partial<SEOConfig>;
};

export type NavigationBehavior = 'smooth-scroll' | 'instant' | 'view-transition';

export type EnhancedNavConfig = {
  position: 'top' | 'bottom' | 'left' | 'right';
  links: NavLink[];
  showOnMobile?: boolean;
  sticky?: boolean;
  transparent?: boolean;
  behavior?: NavigationBehavior;
  drawer?: {
    side: 'left' | 'right';
    backdrop?: boolean;
  };
};

export type PageTransition = 
  | 'fade' 
  | 'slide' 
  | 'scale' 
  | 'view-transition' 
  | 'none';

export type EnhancedPageConfig = {
  path: string;
  title: string;
  hero?: HeroConfig;
  sections: SectionConfig[];
  showNav?: boolean;
  showFooter?: boolean;
  seo?: SEOConfig;
  transition?: PageTransition;
  layout?: 'default' | 'full-width' | 'centered' | 'sidebar';
};

export type EnhancedSiteConfig = {
  // Identity
  name: string;
  tagline?: string;
  logo?: string;
  favicon?: string;
  
  // Architecture
  mode: 'single' | 'multi';
  
  // SEO (site-wide defaults)
  seo: SEOConfig;
  
  // Theme & Design
  theme: SiteTheme;
  
  // Navigation
  nav: EnhancedNavConfig;
  
  // Social & Contact
  socials?: SocialLink[];
  contact?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  
  // Pages
  pages: EnhancedPageConfig[];
  
  // Features & Integrations
  features?: {
    splash?: SplashConfig;
    animations?: boolean;
    analytics?: AnalyticsConfig;
    forms?: Record<string, FormConfig>;
    integrations?: IntegrationConfig;
    performance?: PerformanceConfig;
  };
  
  // Legal
  legal?: {
    privacy?: string; // URL or markdown
    terms?: string;
    cookies?: boolean;
  };
};

// Example: Production-ready config
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