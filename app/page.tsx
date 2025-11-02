// app/page.tsx - FIXED VERSION
"use client";

import { useState, useEffect } from "react";
import { SplashIntro } from "./components/SplashIntro";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { useConfig } from "@/app/config/lib/context/ConfigContext";
import NavBar from "./components/NavBar";

export default function Home() {
  const config = useConfig();
  const [showMain, setShowMain] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  const splashConfig = config.features?.splash;
  const showSplash = splashConfig?.enabled !== false;

  // Get the home page config
  const homePage = config.pages.find(p => p.path === '/') || config.pages[0];

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

 // FIX: Prevent white flash by matching body background to splash
  useEffect(() => {
    if (showSplash && !showMain) {
      document.body.style.background = 'linear-gradient(to bottom right, #000000, #1f2937, #000000)';
      document.body.style.overflow = 'hidden';
    } else {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        document.body.style.background = '';
        document.body.style.overflow = '';
      }, 100);
    }
    
    return () => {
      document.body.style.background = '';
      document.body.style.overflow = '';
    };
  }, [showSplash, showMain]);

  if (!mounted) return null;



  return (
    <>
      {/* Splash Screen */}
      {!showMain && showSplash && (
        <SplashIntro 
          onComplete={() => setShowMain(true)}
          config={splashConfig}
        />
      )}

      {/* Main Content */}
      {showMain && (
        <>
          {/* Navigation */}
          {homePage.showNav && <NavBar />}

          {/* Hero Section */}
          {homePage.hero && <Hero config={homePage.hero} />}

          {/* All Sections from Config */}
          {homePage.sections.map((section) => (
            <Section key={section.id} {...section} />
          ))}
        </>
      )}
    </>
  );
}