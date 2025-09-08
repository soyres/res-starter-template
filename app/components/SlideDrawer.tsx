"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import useActiveSection from "@/app/hooks/useActiveSection";

type Side = "left" | "right";
export type DrawerLink = { href: string; label: string };
export type DrawerSocial = { href: string; label: string; icon: React.ReactNode };

export default function SlideDrawer({
  side = "left",
  open,
  onClose,
  links = [],
  socials = [],
  title = "Menu",
}: {
  side?: Side;
  open: boolean;
  onClose: () => void;
  links?: DrawerLink[];
  socials?: DrawerSocial[];
  title?: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  // IDs from "#about" → "about"
  const sectionIds = links
    .map((l) => (l.href.startsWith("#") ? l.href.slice(1) : null))
    .filter(Boolean) as string[];

  const activeId = useActiveSection(sectionIds);

  // esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // lock scroll
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const isLeft = side === "left";
  const sideTranslateClosed = isLeft ? "-translate-x-full" : "translate-x-full";

  return (
    <div
      aria-hidden={!open}
      className={[
        "fixed inset-0 z-[60]",
        "transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
      onMouseDown={onBackdropClick}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={[
          "absolute top-0 h-full w-[84%] max-w-sm bg-white text-black shadow-xl",
          "flex flex-col",
          "transition-transform duration-300 will-change-transform",
          isLeft ? "left-0" : "right-0",
          open ? "translate-x-0" : sideTranslateClosed,
        ].join(" ")}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-black/10">
          <div className="text-xs tracking-widest uppercase">{title}</div>
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="h-9 w-9 grid place-items-center rounded hover:bg-black/5"
          >
            <span className="inline-block h-5 w-5">✕</span>
          </button>
        </div>

        {/* Links */}
        <nav className="px-4 py-4 grow">
          <ul className="flex flex-col gap-1 text-base">
            {links.map((l) => {
              const id = l.href.startsWith("#") ? l.href.slice(1) : "";
              const isActive = id && activeId === id;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      // smooth-scroll for hash links
                      if (l.href.startsWith("#")) {
                        e.preventDefault();
                        const el = document.getElementById(id);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                      onClose();
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "block px-2 py-2 rounded",
                      "transition-colors",
                      isActive
                        ? "bg-black/5 font-medium"
                        : "opacity-90 hover:opacity-100",
                    ].join(" ")}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Socials */}
        {socials.length > 0 && (
          <div className="px-4 py-4 border-t border-black/10">
            <ul className="flex items-center justify-between">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 opacity-80 hover:opacity-100"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
