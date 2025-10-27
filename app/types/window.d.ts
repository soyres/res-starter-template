declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (...args: any[]) => void;
    fathom?: {
      trackPageview: () => void;
      trackGoal: (goal: string, value: number) => void;
    };
    mixpanel?: {
      track: (event: string, properties?: any) => void;
      init: (token: string) => void;
    };
  }
}

export {};