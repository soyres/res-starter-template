// app/page.tsx
"use client";

import PageShell from "./components/PageShell";
import { useState, useEffect } from "react";
import { SplashIntro } from "./components/SplashIntro";
import { SITE_MODE, SiteModes } from "./config/site";
import HeroNavOverlay from "@/app/components/HeroNavOverlay";
import { useConfig } from "@/app/config/lib/context/ConfigContext";

export default function Home() {
  const config = useConfig();
  const [showMain, setShowMain] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const splashConfig = config.features?.splash;
  const showSplash = splashConfig?.enabled !== false;

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Skip splash if disabled
  useEffect(() => {
    if (!showSplash) {
      setShowMain(true);
    }
  }, [showSplash]);

  if (!mounted) return null;

  return (
    <>
      {!showMain && showSplash && (
        <SplashIntro 
          onComplete={() => setShowMain(true)}
          config={splashConfig}
        />
      )}

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