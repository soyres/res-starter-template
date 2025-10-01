"use client";

import PageShell from "./components/PageShell";
import { useState, useEffect } from "react";
import { SplashIntro } from "./components/SplashIntro";
import HeroNavOverlay from "@/app/components/HeroNavOverlay";
import { Hero } from "@/app/components/Hero";
import { Section } from "@/app/components/Section";
import { useConfig, useFeatures } from "@/app/config/lib/context/ConfigContext";

export default function Home() {
  const config = useConfig();
  const features = useFeatures();
  const [showMain, setShowMain] = useState(!features.splash?.enabled);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const homePage = config.pages.find(p => p.path === '/');
  if (!homePage) return <div>No home page configured</div>;

  // ✨ Determine which hero to show based on config
  const renderHero = () => {
    if (!homePage.hero) return null;

    if (homePage.hero.type === 'hero-nav-overlay') {
      return (
        <HeroNavOverlay
          bgSrc={homePage.hero.heroNavOverlay?.bgSrc || '/hero.jpg'}
          links={homePage.hero.heroNavOverlay?.links || config.nav.links}
        />
      );
    }

    // Standard hero types (text, video, image)
    return <Hero config={homePage.hero} />;
  };

  return (
    <>
      {features.splash?.enabled && !showMain && (
        <SplashIntro
          onComplete={() => setShowMain(true)}
          content={features.splash.content || config.name}
          duration={features.splash.duration || 3000}
        />
      )}

      {showMain && (
        <PageShell navAnchor="top" fullHeight={homePage.hero?.height === 'screen'}>
          {renderHero()}

          {/* Render sections only in single-page mode */}
          {config.mode === 'single' && homePage.sections.map((section) => (
            <Section key={section.id} {...section} />
          ))}
        </PageShell>
      )}
    </>
  );
}