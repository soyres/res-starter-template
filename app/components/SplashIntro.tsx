// app/components/SplashIntro.tsx
'use client';
import { useEffect, useState } from 'react';

type SplashIntroProps = {
  onComplete: () => void;
  content?: string;
  duration?: number;
};

export const SplashIntro = ({ 
  onComplete, 
  content = 'Res Pizarro', 
  duration = 3000 
}: SplashIntroProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  return visible ? (
    <div
      className={`fixed inset-0 top-0 left-0 w-screen h-screen bg-black text-white flex items-center justify-center z-50 splash-hero ${!visible ? 'animate-fadeOut' : 'animate-fadeIn'}`}
    >
      <div className="text-4xl md:text-6xl font-bold animate-pulseSoft">
        {content}
      </div>
    </div>
  ) : null;
};
