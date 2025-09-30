"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/app/config/navLinks";

export default function HeroMegaLinks({
  bgSrc = "/hero.jpg",
  links = NAV_LINKS,
}: {
  bgSrc?: string;
  links?: { href: string; label: string }[];
}) {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image src={bgSrc} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Panels */}
      <div className="relative z-10 h-dvh w-full">
        <ul className={[
          "grid h-full grid-rows-3 divide-y divide-white/50",             // mobile: 3 rows
          "md:grid md:grid-rows-1 md:grid-cols-3 md:divide-y-0 md:divide-x md:divide-white/50", // desktop: 3 cols
        ].join(" ")}>
          {links.map((l) => (
            <li key={l.href} className="relative row-span-1 md:col-span-1">
              <Link
                href={l.href}
                className={[
                  // Mobile: centered in the row
                  "flex h-full items-center justify-center",
                  // Desktop: pin to bottom (60px from bottom)
                  "md:absolute md:inset-x-0 md:bottom-[160px] md:h-auto",
                  "px-4 text-center text-white/95 hover:text-white transition-opacity",
                  "font-semibold leading-tight whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
                  // Safe responsive size + tighter tracking to avoid spill
                  "text-[clamp(26px,8vw,56px)] md:text-[clamp(28px,4.5vw,60px)]",
                  "tracking-[0.10em] md:tracking-[0.14em]",
                  "max-w-[92%] mx-auto",
                ].join(" ")}
              >
                {l.label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
