'use client';
import { useEffect, useState } from 'react';

export const SplashIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 4000); // 3 seconds splash duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return visible ? (
    <div
      className={`fixed inset-0 top-0 left-0 w-screen h-screen bg-black text-white flex items-center justify-center z-50 splash-hero ${!visible ? 'animate-fadeOut' : 'animate-fadeIn'}`}
      
    >
      <div className="text-4xl inset-0 text-white text-2xl  font-bold animate-pulseSoft">
        Res Pizarro
      </div>
    </div>
  ) : null;
};
