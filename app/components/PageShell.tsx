// app/components/PageShell.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SlideDrawer from "./SlideDrawer";
import HamburgerButton from "./HamburgerButton";
import NavBarLinks from "./NavBarLinks"; // <- tiny helper that renders NAV_LINKS inline
import { NAV_LINKS } from "@/app/config/navLinks";
import { SOCIALS } from "@/app/config/socials";
import { SITE_MODE } from "@/app/config/site";

type Anchor = "top" | "bottom" | "hidden";
type ShowMode = "mobile" | "desktop" | "always" | "never";

/** Show/hide children by breakpoint */
export function Show({ on = "always", children }: { on?: ShowMode; children: React.ReactNode }) {
  const map: Record<ShowMode, string> = {
    always: "",
    never: "hidden",
    mobile: "md:hidden",
    desktop: "hidden md:block",
  };
  return <div className={map[on]}>{children}</div>;
}

/**
 * PageShell
 * Fixed edge chrome with left/center/right slots, scroll-aware styling, and a mobile drawer.
 *
 * @param fullHeight  Overlay the nav on top of a full-viewport hero. Disables main padding.
 * @param navAnchor   "top" | "bottom" | "hidden" – where to pin the bar.
 * @param showHamburger  "mobile" | "desktop" | "always" | "never" – visibility of the default hamburger.
 * @param drawerSide  "left" | "right" – side for SlideDrawer.
 * @param containerClassName  Layout container for the bar (e.g. "mx-auto max-w-7xl px-5 py-6").
 * @param navLeft/navCenter/navRight  Slot overrides (ReactNode). Omit to use defaults.
 *
 * @example Basic
 * <PageShell navAnchor="top">
 *   <main>...</main>
 * </PageShell>
 *
 * @example Desktop links top-right, mobile hamburger
 * <PageShell navAnchor="top" showHamburger="mobile">
 *   <Hero />
 * </PageShell>
 *
 * @example Custom slots
 * <PageShell
 *   navLeft={null}
 *   navCenter={<img src="/mark.png" width={40} height={40} />}
 *   navRight={<MyRightSide />}
 * />
 */
export default function PageShell({
  children,
  fullHeight = false,                 // set true on hero pages
  navAnchor = "top",                  // "top" | "bottom" | "hidden"
  showHamburger = "mobile",           // "mobile" | "desktop" | "always" | "never"
  drawerSide = "left",
  footer,
  className = "",
  containerClassName = "mx-auto max-w-7xl px-5 py-6",
  mode = SITE_MODE,                   // "single" | "multi" (passed to SlideDrawer if needed)
  // Optional slot overrides:
  navLeft,
  navCenter,
  navRight,
}: {
  children: React.ReactNode;
  fullHeight?: boolean;
  navAnchor?: Anchor;
  showHamburger?: ShowMode;
  drawerSide?: "left" | "right";
  footer?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  mode?: "single" | "multi";
  navLeft?: React.ReactNode;
  navCenter?: React.ReactNode;
  navRight?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Height used to offset <main> when not fullHeight
  const NAV_H = 80; // ~ h-20 (tune if you change padding)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll styling (matches your previous blur/border vibe)
  const posClass = navAnchor === "top" ? "top-0" : "bottom-0";
  const edgeBorder = navAnchor === "top" ? "border-b border-black/10" : "border-t border-black/10";
  const headerBg =
    scrolled && navAnchor !== "hidden"
      ? `backdrop-blur supports-[backdrop-filter]:bg-white/60 ${edgeBorder}`
      : "bg-transparent";

  // Defaults: desktop links top-right; mobile hamburger top-right
  const defaultLeft = (
    <Link href="/contact" className="tracking-widest text-sm text-white/90 hover:text-white">
      CONTACT
    </Link>
  );
  const defaultCenter = (
    <Image src="/res.png" alt="res" width={40} height={40} className="opacity-90" />
  );
  const defaultRight = (
    <>
      {/* Desktop: links inline (top-right) */}
      <Show on="desktop">
        <NavBarLinks className="text-white/90" />
      </Show>
      {/* Mobile: hamburger (top-right) */}
      {showHamburger !== "never" && (
        <Show on={showHamburger}>
          <HamburgerButton visibleOn="always" corner="tr" onOpen={() => setOpen(true)} />
        </Show>
      )}
    </>
  );

  return (
    <>
      {/* Fixed edge chrome */}
      {navAnchor !== "hidden" && (
        <header
          className={[
            "fixed inset-x-0 z-[60] transition-colors duration-300",
            posClass,
            headerBg,
          ].join(" ")}
        >
          {/* 3-column grid keeps center perfectly centered regardless of side widths */}
          <nav className={[containerClassName, "grid grid-cols-3 items-center"].join(" ")}>
            <div className="justify-self-start">{navLeft ?? defaultLeft}</div>
            <div className="justify-self-center">{navCenter ?? defaultCenter}</div>
            <div className="justify-self-end flex items-center gap-4">{navRight ?? defaultRight}</div>
          </nav>
        </header>
      )}

      {/* Drawer lives here so it can control the page */}
      <SlideDrawer
        side={drawerSide}
        open={open}
        onClose={() => setOpen(false)}
        links={NAV_LINKS}
        socials={SOCIALS}
        title="Menu"
        mode={mode}
      />

      {/* Content */}
      <main
        id="main"
        className={[
          navAnchor !== "hidden" && !fullHeight
            ? navAnchor === "top"
              ? "pt-20"
              : "pb-20"
            : "",
          fullHeight ? "min-h-dvh overflow-hidden" : "",
          className,
        ].join(" ")}
        style={
          navAnchor !== "hidden" && !fullHeight
            ? navAnchor === "top"
              ? { paddingTop: NAV_H }
              : { paddingBottom: NAV_H }
            : undefined
        }
      >
        {children}
      </main>

      {footer ?? null}
    </>
  );
}
