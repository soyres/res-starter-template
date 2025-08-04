"use client";
import { useState } from 'react';
import { SplashIntro } from '@/app/components/SplashIntro';
// import { NavBar } from '@/app/components/NavBar';
import { Hero } from '@/app/components/Hero';
// other imports...

export default function Home() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      {!showMain && <SplashIntro onComplete={() => setShowMain(true)} />}
      {showMain && (
        <div className="animate-fadeIn">
          {/* <NavBar /> */}
          <main className="font-sans text-gray-900 ">
            <Hero />
            {/* More sections here */}
          </main>
        </div>
      )}
    </>
  );
}
