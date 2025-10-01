// config/types.ts - Enhanced version

export type SiteMode = 'single' | 'multi';

export type SiteTheme = {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
  };
  fonts: {
    heading: string;
    body: string;
    mono?: string;
  };
  animations: {
    duration: 'fast' | 'normal' | 'slow';
    easing: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
  };
};

export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type SocialLink = {
  platform: 'twitter' | 'instagram' | 'linkedin' | 'github' | 'email' | 'custom';
  href: string;
  label: string;
};

export type SEOConfig = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterHandle?: string;
  favicon?: string;
};

export type HeroConfig = {
  type: 'text' | 'video' | 'image' | 'hero-nav-overlay'; // ← Added new type
  title?: string;
  subtitle?: string;
  description?: string;
  cta?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  }[];
  background?: {
    type: 'solid' | 'gradient' | 'image' | 'video';
    value: string;
  };
  height?: 'screen' | 'auto' | 'tall' | 'short';
  alignment?: 'left' | 'center' | 'right';
  // For hero-nav-overlay type
  heroNavOverlay?: {
    bgSrc: string;
    links?: NavLink[];
  };
};

export type SectionConfig = {
  id: string;
  type: 'about' | 'projects' | 'contact' | 'testimonials' | 'logos' | 'custom';
  title?: string;
  subtitle?: string;
  content?: string | string[];
  layout?: 'single' | 'two-column' | 'three-column' | 'grid';
  background?: 'default' | 'muted' | 'accent';
  spacing?: 'compact' | 'normal' | 'spacious';
  data?: any;
};

export type PageConfig = {
  path: string;
  title: string;
  hero?: HeroConfig;
  sections: SectionConfig[];
  showNav?: boolean;
  showFooter?: boolean;
};

export type SiteConfig = {
  name: string;
  tagline?: string;
  logo?: string;
  seo: SEOConfig;
  theme: SiteTheme;
  
  // ✨ NEW: Site mode per project
  mode: SiteMode; // ← 'single' or 'multi' per project
  
  nav: {
    position: 'top' | 'bottom';
    links: NavLink[];
    showOnMobile?: boolean;
    drawer?: {
      side: 'left' | 'right';
    };
  };
  socials?: SocialLink[];
  pages: PageConfig[];
  features?: {
    splash?: {
      enabled: boolean;
      duration?: number;
      content?: string;
    };
    animations?: boolean;
    analytics?: {
      google?: string;
      plausible?: string;
    };
  };
};