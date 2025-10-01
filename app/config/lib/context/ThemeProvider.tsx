// lib/context/ThemeProvider.tsx
"use client";

import { useEffect } from 'react';
import { useTheme } from './ConfigContext';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    
    // Colors
    root.style.setProperty('--color-primary', theme.colors.primary);
    root.style.setProperty('--color-secondary', theme.colors.secondary);
    root.style.setProperty('--color-accent', theme.colors.accent);
    root.style.setProperty('--color-background', theme.colors.background);
    root.style.setProperty('--color-foreground', theme.colors.foreground);
    root.style.setProperty('--color-muted', theme.colors.muted);
    
    // Fonts
    root.style.setProperty('--font-heading', theme.fonts.heading);
    root.style.setProperty('--font-body', theme.fonts.body);
    if (theme.fonts.mono) {
      root.style.setProperty('--font-mono', theme.fonts.mono);
    }
    
    // Animation duration
    const durationMap = {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    };
    root.style.setProperty('--anim-duration', durationMap[theme.animations.duration]);
    root.style.setProperty('--anim-easing', theme.animations.easing);
  }, [theme]);

  return <>{children}</>;
}