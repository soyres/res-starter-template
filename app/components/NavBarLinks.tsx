"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/app/config/navLinks";

export default function NavLinksInline({
  links = NAV_LINKS,
  className = "",
  linkClassName = "",
  activeClassName = "opacity-100",
  inactiveClassName = "opacity-80 hover:opacity-100",
}: {
  links?: { href: string; label: string }[];
  className?: string;
  linkClassName?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}) {
  const pathname = usePathname();

  return (
    <ul className={["flex items-center gap-6 text-sm", className].join(" ")}>
      {links.map((l) => {
        const isHash = l.href.startsWith("#");
        const active = !isHash && pathname === l.href;
        const aClasses = [
          "transition-opacity underline-offset-8",
          linkClassName,
          active ? activeClassName : inactiveClassName,
        ].join(" ");

        return (
          <li key={l.href}>
            {isHash ? (
              <a href={l.href} className={aClasses}>{l.label}</a>
            ) : (
              <Link href={l.href} className={aClasses}>{l.label}</Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
