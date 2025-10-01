// lib/context/ConfigContext.tsx
"use client";

import { createContext, useContext, ReactNode } from 'react';
import { SiteConfig } from '@/app/config/types';

const ConfigContext = createContext<SiteConfig | null>(null);

export function ConfigProvider({ 
  config, 
  children 
}: { 
  config: SiteConfig; 
  children: ReactNode;
}) {
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfig(): SiteConfig {
  const config = useContext(ConfigContext);
  if (!config) {
    throw new Error('useConfig must be used within ConfigProvider');
  }
  return config;
}

export function useTheme() {
  const config = useConfig();
  return config.theme;
}

export function useNav() {
  const config = useConfig();
  return config.nav;
}

export function useSocials() {
  const config = useConfig();
  return config.socials || [];
}

export function useSEO() {
  const config = useConfig();
  return config.seo;
}

export function useFeatures() {
  const config = useConfig();
  return config.features || {};
}