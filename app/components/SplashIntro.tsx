// app/components/SplashIntro.tsx
'use client';
import { useEffect, useState } from 'react';

export const SplashIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState<'show' | 'fadeOut' | 'done'>('show');

  useEffect(() => {
    // Stage 1: Show splash with pulse animation
    const showTimer = setTimeout(() => {
      setStage('fadeOut');
    }, 3500); // Increased from 3000ms to 3500ms for better rhythm

    // Stage 2: Fade out
    const fadeTimer = setTimeout(() => {
      setStage('done');
      onComplete();
    }, 4300); // 3500ms + 800ms fade = 4300ms total

    return () => {
      clearTimeout(showTimer);
      clearTimeout(fadeTimer);
    };
  }, [onComplete]);

  if (stage === 'done') return null;

  return (
    <div
      className={[
        "fixed inset-0 z-[100]",
        "bg-gradient-to-br from-black via-gray-900 to-black", // Subtle gradient instead of flat black
        "flex items-center justify-center",
        "transition-opacity duration-[800ms] ease-out",
        stage === 'fadeOut' ? 'opacity-0' : 'opacity-100',
      ].join(" ")}
    >
      <div className="relative">
        {/* Glow effect behind text */}
        <div 
          className="absolute inset-0 blur-3xl opacity-30 animate-pulseSoft"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
          }}
        />
        
        {/* Main text with improved animation */}
        <h1 
          className={[
            "relative z-10 text-white",
            "text-4xl md:text-5xl font-bold",
            "tracking-wide",
            stage === 'show' ? 'animate-fadeInScale' : '',
          ].join(" ")}
        >
          Res Pizarro
        </h1>
      </div>
    </div>
  );
};