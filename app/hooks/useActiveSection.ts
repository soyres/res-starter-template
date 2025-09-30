"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks which section id is most visible in the viewport.
 * Also marks the last section active when the user reaches the bottom of the page.
 */
export default function useActiveSection(ids: string[], initial?: string | null) {
  const [activeId, setActiveId] = useState<string | null>(initial ?? ids[0] ?? null);
  const lastIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!ids.length) return;

    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!targets.length) return;

    // Keep a reference to the last section's id for bottom fallback
    lastIdRef.current = ids[ids.length - 1];

    const observer = new IntersectionObserver(
      (entries) => {
        // Choose the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        // Tighter "activation window" so the section triggers earlier,
        // and bottom sections (like #contact) can still become active.
        root: null,
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join("|")]);

  // Bottom-of-page fallback: when we reach the bottom, force the last section active.
  useEffect(() => {
    if (!ids.length) return;

    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= (document.documentElement.scrollHeight ?? document.body.scrollHeight) - 2;

      if (atBottom && lastIdRef.current) {
        setActiveId(lastIdRef.current);
      }
    };

    // Run once to catch an initial “already at bottom” state (short pages)
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join("|")]);

  return activeId;
}
