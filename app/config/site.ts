export const SiteModes = {
  single: "single",
  multi: "multi",
} as const;

export type SiteMode = keyof typeof SiteModes;

/** Switch the whole site between single-page and multi-page */
export const SITE_MODE: SiteMode = "single"; // ← change to "multi" when you want routes

/** Source of truth for your sections/pages */
export const SECTIONS = [
  { id: "about", label: "About", path: "/about" },
  { id: "projects", label: "Projects", path: "/projects" },
  { id: "contact", label: "Contact", path: "/contact" },
] as const;

export type Section = (typeof SECTIONS)[number];
