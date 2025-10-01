// config/index.ts
import { SiteConfig } from './types';
import { defaultSiteConfig } from './sites/default';
import { clientExampleConfig } from './sites/client-example';
import { scenario1Config } from './sites/scenario-1';
import { scenario2Config } from './sites/scenario-2';

export const siteConfigs: Record<string, SiteConfig> = {
  default: defaultSiteConfig,
  'client-example': clientExampleConfig,
  'scenario-1': scenario1Config,
  'scenario-2': scenario2Config,
};
export function getActiveConfig(): SiteConfig {
  const configName = process.env.NEXT_PUBLIC_SITE_CONFIG;
  if (configName && siteConfigs[configName]) {
    return siteConfigs[configName];
  }
  
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    const hostnameMap: Record<string, string> = {
      'creativestudio.com': 'client-example',
    };
    
    const configKey = hostnameMap[hostname];
    if (configKey && siteConfigs[configKey]) {
      return siteConfigs[configKey];
    }
  }
  
  return defaultSiteConfig;
}

export * from './types';
export * from './themes/presets';