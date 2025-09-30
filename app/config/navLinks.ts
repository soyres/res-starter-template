import { SITE_MODE, SECTIONS } from "./site";

/** Build links based on mode:
 *  - "single": "#about"
 *  - "multi":  "/about"
 */
export const NAV_LINKS = SECTIONS.map((s) => ({
  href: SITE_MODE === "single" ? `#${s.id}` : s.path,
  label: s.label,
}));

export type NavLink = (typeof NAV_LINKS)[number];
