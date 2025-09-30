// "use client";
// import NavBar from "./components/NavBar";
// import { useState } from "react";
// import { SplashIntro } from "./components/SplashIntro"; // if you use it

// export default function Home() {
//   const [showMain, setShowMain] = useState(true); // flip if splash first

//   return (
//     <>
//       {!showMain && <SplashIntro onComplete={() => setShowMain(true)} />}

//       {showMain && (
//         <>
//           <NavBar />
//           <main id="main" className="pt-20">
//             <section className="min-h-[60vh] flex items-center justify-center text-center bg-black/5">
//               <div>
//                 <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Res Pizarro</h1>
//                 <p className="mt-3 text-base md:text-lg opacity-80 max-w-2xl mx-auto">
//                   I design and engineer thoughtful digital experiences.
//                 </p>
//               </div>
//             </section>

//             <section id="about" className="scroll-mt-24 min-h-[60vh] px-4 py-20">
//               <h2 className="text-xl font-semibold mb-4">About</h2>
//               <p className="opacity-80 max-w-3xl">About content…</p>
//             </section>

//             <section id="projects" className="scroll-mt-24 min-h-[60vh] px-4 py-20">
//               <h2 className="text-xl font-semibold mb-6">Projects</h2>
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 <div className="aspect-[4/3] bg-black/5 rounded" />
//                 <div className="aspect-[4/3] bg-black/5 rounded" />
//                 <div className="aspect-[4/3] bg-black/5 rounded" />
//               </div>
//             </section>

//             <section id="contact" className="scroll-mt-24 min-h-[60vh] px-4 py-20">
//               <h2 className="text-xl font-semibold mb-4">Contact</h2>
//               <p className="opacity-80">Email • LinkedIn • Instagram</p>
//             </section>
//           </main>
//         </>
//       )}
//     </>
//   );
// }
"use client";

import PageShell from "./components/PageShell";
import { useState } from "react";
import { SplashIntro } from "./components/SplashIntro"; // if you use it
import { SITE_MODE, SiteModes } from "./config/site";
import Hero from "./components/Hero";
import HeroNavOverlay from "@/app/components/HeroNavOverlay";
import Image from "next/image";

export default function Home() {
  const [showMain, setShowMain] = useState(false); // flip if splash first
  console.log("SHOW:", )
  return (
    <>
      {!showMain && <SplashIntro onComplete={() => setShowMain(true)} />}

      {showMain && 
        <PageShell
          navAnchor="top" fullHeight    
        >
          <HeroNavOverlay />
          

          {/* Sections for active highlight demo */}
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
            )
          }
        </PageShell>
        }
    </>
  );
  // return (
  //   <main className="relative">
  //     <HeroNavOverlay />
  //   </main>
  // )
}
