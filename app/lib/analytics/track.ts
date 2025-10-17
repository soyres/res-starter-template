// app/lib/analytics/track.ts - Universal tracking functions
export function trackPageView(url: string, config: any) {
  // Google Analytics
  if (config.googleAnalytics && typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', config.googleAnalytics, {
      page_path: url,
    });
  }

  // Plausible
  if (config.plausible && typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible('pageview');
  }

  // Fathom
  if (config.fathom && typeof window !== 'undefined' && (window as any).fathom) {
    (window as any).fathom.trackPageview();
  }

  // Mixpanel
  if (config.mixpanel && typeof window !== 'undefined' && (window as any).mixpanel) {
    (window as any).mixpanel.track('Page View', {
      url,
    });
  }
}

export function trackEvent(
  eventName: string,
  properties?: Record<string, any>,
  config?: any
) {
  if (typeof window === 'undefined') return;

  // Google Analytics
  if (config?.googleAnalytics && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties);
  }

  // Plausible
  if (config?.plausible && (window as any).plausible) {
    (window as any).plausible(eventName, { props: properties });
  }

  // Fathom
  if (config?.fathom && (window as any).fathom) {
    (window as any).fathom.trackGoal(eventName, properties?.value || 0);
  }

  // Mixpanel
  if (config?.mixpanel && (window as any).mixpanel) {
    (window as any).mixpanel.track(eventName, properties);
  }
}

// Example: Track CTA clicks
export function trackCTAClick(ctaText: string, destination: string) {
  trackEvent('CTA Click', {
    cta_text: ctaText,
    destination,
  });
}

// Example: Track form submissions
export function trackFormSubmit(formName: string, success: boolean) {
  trackEvent('Form Submit', {
    form_name: formName,
    success,
  });
}

// Example: Track video plays
export function trackVideoPlay(videoTitle: string, videoUrl: string) {
  trackEvent('Video Play', {
    video_title: videoTitle,
    video_url: videoUrl,
  });
}

// Example: Track scroll depth
export function setupScrollTracking() {
  if (typeof window === 'undefined') return;

  const scrollDepths = [25, 50, 75, 100];
  const reached: number[] = [];

  const checkScrollDepth = () => {
    const scrollPercentage = 
      (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;

    scrollDepths.forEach(depth => {
      if (scrollPercentage >= depth && !reached.includes(depth)) {
        reached.push(depth);
        trackEvent('Scroll Depth', {
          percentage: depth,
        });
      }
    });
  };

  window.addEventListener('scroll', checkScrollDepth, { passive: true });
  
  return () => window.removeEventListener('scroll', checkScrollDepth);
}

