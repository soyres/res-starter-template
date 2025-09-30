"use client";

import { useEffect, useState } from "react";

type Anchor = "top" | "bottom";
type ShowMode = "mobile" | "desktop" | "always" | "never";

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
 * Slot-based NavBar with scroll-aware styling.
 * Put anything into left / center / right.
 */
export default function NavBar({
  position = "top",
  solidOnScroll = true,
  containerClassName = "mx-auto max-w-7xl px-5 py-6",
  left,
  center,
  right,
  blurClass = "backdrop-blur supports-[backdrop-filter]:bg-white/60",
  borderClassTop = "border-t border-black/10",
  borderClassBottom = "border-b border-black/10",
  transparentClass = "bg-transparent",
  className = "",
}: {
  position?: Anchor;
  solidOnScroll?: boolean;
  containerClassName?: string;
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  blurClass?: string;
  borderClassTop?: string;
  borderClassBottom?: string;
  transparentClass?: string;
  className?: string;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!solidOnScroll) return;
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solidOnScroll]);

  const posClass = position === "top" ? "top-0" : "bottom-0";
  const edgeBorder = position === "top" ? borderClassBottom : borderClassTop;
  const bgClass = scrolled && solidOnScroll ? [blurClass, edgeBorder].join(" ") : transparentClass;

  return (
    <header
      className={[
        "fixed inset-x-0 z-[60] transition-colors duration-300",
        posClass,
        bgClass,
        className,
      ].join(" ")}
    >
      {/* 3-column grid keeps the center perfectly centered regardless of side widths */}
      <nav className={[containerClassName, "grid grid-cols-3 items-center"].join(" ")}>
        <div className="justify-self-start">{left}</div>
        <div className="justify-self-center">{center}</div>
        <div className="justify-self-end">{right}</div>
      </nav>
    </header>
  );
}
