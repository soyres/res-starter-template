// config/themes/presets.ts
import { SiteTheme } from '../types';

export const lightTheme: SiteTheme = {
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
};

export const darkTheme: SiteTheme = {
  colors: {
    primary: '#ffffff',
    secondary: '#ededed',
    accent: '#60a5fa',
    background: '#0a0a0a',
    foreground: '#ededed',
    muted: '#171717',
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
};

export const vibrantTheme: SiteTheme = {
  colors: {
    primary: '#8b5cf6',
    secondary: '#6366f1',
    accent: '#ec4899',
    background: '#fafafa',
    foreground: '#171717',
    muted: '#f0f0f0',
  },
  fonts: {
    heading: 'var(--font-geist-sans)',
    body: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
  animations: {
    duration: 'fast',
    easing: 'ease-out',
  },
};

export const minimalTheme: SiteTheme = {
  colors: {
    primary: '#18181b',
    secondary: '#27272a',
    accent: '#52525b',
    background: '#fafafa',
    foreground: '#18181b',
    muted: '#f4f4f5',
  },
  fonts: {
    heading: 'var(--font-geist-sans)',
    body: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
  animations: {
    duration: 'slow',
    easing: 'ease',
  },
};

export const themePresets = {
  light: lightTheme,
  dark: darkTheme,
  vibrant: vibrantTheme,
  minimal: minimalTheme,
};

export function getThemePreset(name: keyof typeof themePresets): SiteTheme {
  return themePresets[name] || lightTheme;
}