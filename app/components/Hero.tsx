// Hero.tsx
"use client";
import { SITE_MODE, SiteModes } from "../config/site";

export default function Hero({
  title,
  subtitle,
  actions,
  fullHeight = true,
  background,
}: {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  actions?: React.ReactNode;
  fullHeight?: boolean;
  background?: React.ReactNode;
}) {
  return (
    <section
      className={[
        fullHeight ? "h-dvh" : "min-h-[60vh]",
        "relative flex flex-col items-center justify-center text-center px-4 overflow-hidden",
      ].join(" ")}
    >
      {background && <div className="absolute inset-0 -z-10">{background}</div>}

      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight m-0">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg opacity-80">{subtitle}</p>
        )}
        {actions && (
          <div className="mt-6 flex items-center justify-center gap-3">
            {actions}
          </div>
        )}
      </div>

      {SITE_MODE === SiteModes.single && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-70 pointer-events-none">
          <span className="animate-bounce">↓</span>
        </div>
      )}
    </section>
  );
}
