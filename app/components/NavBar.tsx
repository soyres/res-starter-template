"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SlideDrawer, { DrawerLink, DrawerSocial } from "./SlideDrawer";
import useActiveSection from "@/app/hooks/useActiveSection";
// ...icons etc.

const LINKS: DrawerLink[] = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<"left" | "right">("left");
  const [scrolled, setScrolled] = useState(false);

  const ids = LINKS.map((l) => l.href.startsWith("#") ? l.href.slice(1) : "").filter(Boolean) as string[];
  const activeId = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={[
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled ? "backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/10" : "bg-transparent",
      ].join(" ")}>
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-sm tracking-widest uppercase">
            <span className="font-semibold">Res</span>&nbsp;Pizarro
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-sm">
            {LINKS.map((l) => {
              const id = l.href.slice(1);
              const isActive = activeId === id;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={[
                      "transition-opacity",
                      isActive ? "opacity-100 font-medium underline underline-offset-8" : "opacity-80 hover:opacity-100"
                    ].join(" ")}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* mobile controls unchanged ... */}
        </nav>
      </header>

      <SlideDrawer
        side={side}
        open={open}
        onClose={() => setOpen(false)}
        links={LINKS}
        socials={[] /* your socials here */}
        title="Menu"
      />
    </>
  );
}
