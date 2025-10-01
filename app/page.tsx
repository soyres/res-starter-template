// app/page.tsx
"use client";

import PageShell from "./components/PageShell";
import { useState, useEffect } from "react";
import { SplashIntro } from "./components/SplashIntro";
import { SITE_MODE, SiteModes } from "./config/site";
import HeroNavOverlay from "@/app/components/HeroNavOverlay";

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {!showMain && <SplashIntro onComplete={() => setShowMain(true)} />}

      {showMain && (
        <PageShell navAnchor="top" fullHeight>
          <HeroNavOverlay />

          {SITE_MODE === SiteModes.single && (
            <>
              <section id="about" className="scroll-mt-24 min-h-[60vh] px-4 py-20">
                <h2 className="text-xl font-semibold mb-4">About</h2>
                <p className="opacity-80 max-w-3xl">About content…</p>
              </section>
              
              <section id="projects" className="scroll-mt-24 min-h-[60vh] px-4 py-20">
                <h2 className="text-xl font-semibold mb-6">Projects</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="aspect-[4/3] bg-black/5 rounded" />
                  <div className="aspect-[4/3] bg-black/5 rounded" />
                  <div className="aspect-[4/3] bg-black/5 rounded" />
                </div>
              </section>

              <section id="contact" className="scroll-mt-24 min-h-screen px-4 py-20">
                <h2 className="text-xl font-semibold mb-4">Contact</h2>
                <p className="opacity-80">Email • LinkedIn • Instagram</p>
              </section>
            </>
          )}
        </PageShell>
      )}
    </>
  );
}