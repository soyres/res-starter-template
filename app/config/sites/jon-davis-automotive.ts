// app/config/sites/jon-davis-automotive.ts
import { SiteConfig } from '../types';

/**
 * Jon Davis Automotive Brokerage Configuration
 * 
 * A premium automotive brokerage template for sourcing rare and exceptional vehicles.
 * Features: Hero with automotive imagery, services showcase, process walkthrough,
 * featured finds gallery, testimonials, and contact section.
 * 
 * To use this config, set: NEXT_PUBLIC_SITE_CONFIG=jon-davis-automotive
 */

export const jonDavisAutomotiveConfig: SiteConfig = {
  name: 'Jon Davis',
  tagline: 'Automotive Curator & Broker',
  
  mode: 'single',
  
  seo: {
    title: 'Jon Davis - Premium Automotive Brokerage',
    description: 'Expert automotive curator connecting discerning collectors with rare and exceptional vehicles. Specialized in sourcing dream cars, classic automobiles, and unique finds.',
    keywords: ['automotive broker', 'car broker', 'classic cars', 'luxury cars', 'rare vehicles', 'car sourcing', 'automotive consultant'],
    ogImage: '/og-automotive.jpg',
    twitterHandle: '@jondavisauto',
    favicon: '/favicon-auto.ico',
  },
  
  theme: {
    colors: {
      primary: '#C41E3A', // Racing red
      secondary: '#1A1A1A', // Carbon black
      accent: '#D4AF37', // Luxury gold
      background: '#FFFFFF',
      foreground: '#1A1A1A',
      muted: '#F5F5F5',
    },
    fonts: {
      heading: 'var(--font-geist-sans)',
      body: 'var(--font-geist-sans)',
      mono: 'var(--font-geist-mono)',
    },
    animations: {
      duration: 'normal',
      easing: 'ease-out',
    },
  },
  
  nav: {
    position: 'top',
    links: [
      { href: '#services', label: 'Services' },
      { href: '#process', label: 'How It Works' },
      { href: '#featured', label: 'Featured Finds' },
      { href: '#testimonials', label: 'Testimonials' },
      { href: '#contact', label: 'Get Started' },
    ],
    showOnMobile: true,
    drawer: {
      side: 'right',
    },
  },
  
  socials: [
    { platform: 'instagram', href: 'https://instagram.com/jondavisauto', label: 'Instagram' },
    { platform: 'linkedin', href: 'https://linkedin.com/in/jondavisautomotive', label: 'LinkedIn' },
    { platform: 'email', href: 'mailto:jon@davisautomotive.com', label: 'Email' },
  ],
  
  pages: [
    {
      path: '/',
      title: 'Home',
      hero: {
        type: 'image',
        title: 'Find Your Dream Car',
        subtitle: 'Premium Automotive Brokerage',
        description: 'From rare classics to modern exotics, I connect passionate collectors with extraordinary vehicles.',
        cta: [
          { text: 'Start Your Search', href: '#contact', variant: 'primary' },
          { text: 'View Services', href: '#services', variant: 'outline' },
        ],
        height: 'screen',
        alignment: 'center',
        background: {
          type: 'image',
          value: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80', // Classic car
        },
      },
      sections: [
        // About Section
        {
          id: 'about',
          type: 'about',
          title: 'Your Automotive Curator',
          subtitle: 'Experience & Expertise',
          content: [
            'With over 15 years in the automotive industry, I specialize in connecting discerning collectors and enthusiasts with vehicles that match their vision and passion. Whether you\'re searching for a pristine classic, a modern exotic, or that one-of-a-kind dream car, I have the network and expertise to find it.',
            'My background spans luxury dealerships, private collections, and auction houses. This experience has given me unprecedented access to the most exclusive automotive circles and an eye for exceptional vehicles that most never see.',
          ],
          layout: 'single',
          spacing: 'spacious',
        },
        
        // Services Section
        {
          id: 'services',
          type: 'custom',
          title: 'What I Offer',
          subtitle: 'Comprehensive Brokerage Services',
          layout: 'three-column',
          spacing: 'spacious',
          background: 'muted',
          data: {
            services: [
              {
                icon: '🔍',
                title: 'Vehicle Sourcing',
                description: 'Leveraging my extensive network to find rare, unique, and exceptional vehicles that match your exact specifications and budget.',
              },
              {
                icon: '✓',
                title: 'Pre-Purchase Inspection',
                description: 'Comprehensive evaluations including mechanical inspection, documentation review, and history verification to ensure authenticity and condition.',
              },
              {
                icon: '💼',
                title: 'Negotiation & Acquisition',
                description: 'Expert negotiation on your behalf to secure the best possible terms, followed by seamless transaction management and delivery coordination.',
              },
              {
                icon: '📊',
                title: 'Market Analysis',
                description: 'In-depth market research and valuation services to help you make informed decisions about purchases, sales, or collection planning.',
              },
              {
                icon: '🎯',
                title: 'Collection Consulting',
                description: 'Strategic guidance for building, curating, or refining your automotive collection with an eye toward value, passion, and future appreciation.',
              },
              {
                icon: '🤝',
                title: 'Selling Services',
                description: 'Discreet marketing and sale of your vehicles to qualified buyers through my network, maximizing value while maintaining privacy.',
              },
            ],
          },
        },
        
        // Process Section
        {
          id: 'process',
          type: 'about',
          title: 'How It Works',
          subtitle: 'A Seamless Journey from Dream to Driveway',
          layout: 'single',
          spacing: 'spacious',
          content: [
            '1. Initial Consultation - We discuss your vision, preferences, budget, and timeline. I learn what makes your ideal vehicle and what success looks like for you.',
            '2. Research & Sourcing - Using my network of dealers, collectors, and auction houses, I begin the search. I monitor markets, review listings, and tap private sources most buyers never access.',
            '3. Vehicle Evaluation - Once potential matches are identified, I conduct thorough evaluations including documentation review, history reports, and often in-person inspection.',
            '4. Presentation & Guidance - I present only the most compelling options with honest assessments, market comparisons, and clear recommendations based on your goals.',
            '5. Negotiation & Acquisition - I handle all negotiations, paperwork, and transaction details. My relationships and experience often secure better terms than individual buyers can achieve.',
            '6. Delivery & Follow-Up - I coordinate transportation and ensure a smooth handoff. The relationship doesn\'t end at delivery—I\'m available for ongoing advice and support.',
          ],
        },
        
        // Featured Finds Section
        {
          id: 'featured',
          type: 'projects',
          title: 'Recent Success Stories',
          subtitle: 'Exceptional Vehicles for Exceptional Clients',
          layout: 'grid',
          spacing: 'spacious',
          data: {
            projects: [
              {
                title: '1967 Porsche 911S',
                description: 'Numbers-matching, fully restored example in rare Irish Green. Sourced from a private European collection for a West Coast enthusiast.',
                image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
                tags: ['Classic', 'Porsche', 'Restored'],
                href: '#contact',
              },
              {
                title: '2023 Ferrari SF90 Stradale',
                description: 'Limited allocation hybrid supercar with bespoke Rosso Corsa exterior and custom interior specification.',
                image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
                tags: ['Modern', 'Ferrari', 'Exotic'],
                href: '#contact',
              },
              {
                title: '1973 BMW 3.0 CSL',
                description: 'Batmobile homologation special with documented racing history. Acquired from a prominent Midwest collection.',
                image: 'https://images.unsplash.com/photo-1617654112368-307921291f42?w=800&q=80',
                tags: ['Classic', 'BMW', 'Race Heritage'],
                href: '#contact',
              },
              {
                title: '1955 Mercedes-Benz 300SL Gullwing',
                description: 'Iconic gullwing coupe in original Silver with red interior. Comprehensive restoration with detailed documentation.',
                image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
                tags: ['Classic', 'Mercedes', 'Iconic'],
                href: '#contact',
              },
              {
                title: 'McLaren 765LT',
                description: 'Limited production longtail variant in MSO Volcano Yellow. Sourced directly from McLaren Special Operations allocation.',
                image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80',
                tags: ['Modern', 'McLaren', 'Limited Edition'],
                href: '#contact',
              },
              {
                title: '1963 Chevrolet Corvette Split Window',
                description: 'One-year-only split-window design in Daytona Blue. Frame-off restoration with NCRS Top Flight certification.',
                image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
                tags: ['Classic', 'American', 'Corvette'],
                href: '#contact',
              },
            ],
          },
        },
        
        // Testimonials Section
        {
          id: 'testimonials',
          type: 'about',
          title: 'Client Testimonials',
          subtitle: 'What Collectors Say',
          background: 'muted',
          spacing: 'spacious',
          content: [
            '"Jon found me a car I didn\'t even know existed. His knowledge of the market and access to private collections is unmatched. The entire process was professional, transparent, and actually enjoyable." - Michael R., Scottsdale, AZ',
            '"After months of searching on my own, I reached out to Jon. Within three weeks, he presented me with two perfect options. His pre-purchase inspection saved me from a costly mistake, and he negotiated a price better than I could have imagined." - Sarah L., Miami, FL',
            '"I\'ve worked with several brokers over the years. Jon is different. He genuinely cares about finding the right car, not just making a sale. His integrity and expertise make him my only call for acquisitions." - David K., Newport Beach, CA',
          ],
        },
        
        // Expertise Section
        {
          id: 'expertise',
          type: 'about',
          title: 'Areas of Expertise',
          subtitle: 'Specialized Knowledge Across Categories',
          layout: 'single',
          spacing: 'normal',
          content: [
            'Classic European Sports Cars: Porsche, Ferrari, Mercedes-Benz, Jaguar, Aston Martin',
            'Modern Exotics & Supercars: Ferrari, Lamborghini, McLaren, Pagani, Koenigsegg',
            'American Muscle & Classics: Corvette, Shelby, GT40, Plymouth, Chevrolet',
            'Limited Production Vehicles: Homologation specials, limited editions, one-off builds',
            'Investment-Grade Collectibles: Blue-chip classics with proven appreciation',
            'Pre-War & Vintage Automobiles: Brass era, pre-war European coachwork',
          ],
        },
        
        // Contact Section
        {
          id: 'contact',
          type: 'about',
          title: 'Start Your Search',
          subtitle: 'Let\'s Find Your Dream Car',
          layout: 'single',
          spacing: 'spacious',
          content: [
            'Ready to begin your search for that perfect vehicle? Whether you have a specific car in mind or need guidance on what to pursue, I\'m here to help.',
            'Initial consultations are complimentary and confidential. Reach out today and let\'s start the conversation about your automotive dreams.',
            '📧 jon@davisautomotive.com',
            '📱 (555) 123-4567',
            '📍 Based in Los Angeles, CA | Serving Clients Nationwide',
          ],
        },
      ],
      showNav: true,
      showFooter: true,
    },
  ],
  
  features: {
    splash: {
      enabled: true,
      duration: 2500,
      animation: 'fade',
      content: 'Jon Davis Automotive',
      backgroundColor: 'from-black via-gray-900 to-black',
      textColor: 'white',
    },
    animations: true,
    analytics: {
      google: 'G-XXXXXXXXXX', // Replace with actual GA4 ID
    },
  },
};