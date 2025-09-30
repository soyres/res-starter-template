import { IconInstagram, IconLinkedIn, IconMail, IconX } from "@/app/components/Icons";

export const SOCIALS = [
  { href: "https://x.com/your", label: "X", icon: <IconX /> },
  { href: "https://instagram.com/your", label: "Instagram", icon: <IconInstagram /> },
  { href: "https://linkedin.com/in/your", label: "LinkedIn", icon: <IconLinkedIn /> },
  { href: "mailto:you@example.com", label: "Email", icon: <IconMail /> },
] as const;

export type Social = (typeof SOCIALS)[number];
