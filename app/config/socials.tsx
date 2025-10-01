// app/config/socials.tsx
import { IconInstagram, IconLinkedIn, IconMail, IconX } from "@/app/components/Icons";

export const SOCIALS = [
  { 
    href: "https://x.com/your", 
    label: "X", 
    platform: "twitter", // ← Add this
    icon: <IconX /> 
  },
  { 
    href: "https://instagram.com/your", 
    label: "Instagram", 
    platform: "instagram", // ← Add this
    icon: <IconInstagram /> 
  },
  { 
    href: "https://linkedin.com/in/your", 
    label: "LinkedIn", 
    platform: "linkedin", // ← Add this
    icon: <IconLinkedIn /> 
  },
  { 
    href: "mailto:you@example.com", 
    label: "Email", 
    platform: "email", // ← Add this
    icon: <IconMail /> 
  },
] as const;

export type Social = (typeof SOCIALS)[number];