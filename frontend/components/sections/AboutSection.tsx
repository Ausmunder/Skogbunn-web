'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-bark-brown overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={isMobile ? "/images/hero-bg5-mobile.png" : "/images/hero-bg5.png"}
          alt="Skogbunn background"
          fill
          className="object-cover"
          quality={90}
          unoptimized
        />
      </div>

      {/* Header - Top centered, 10px higher */}
      <div className="absolute left-0 right-0 top-0 flex justify-center z-10" style={{ paddingTop: isMobile ? '80px' : '100px' }}>
        <h2
          className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-merriweather font-light text-cream tracking-wide`}
          style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)' }}
        >
          Om Skogbunn
        </h2>
      </div>

      {/* Content - Starts 20px below header */}
      <div className={`container mx-auto ${isMobile ? 'px-4' : 'px-6'} relative z-10`} style={{ paddingTop: isMobile ? 'calc(80px + 3rem + 20px)' : 'calc(100px + 3.75rem + 20px)' }}>
        <div className="text-center">
          <div className="font-merriweather font-light text-cream" style={{ fontSize: isMobile ? '17px' : '19px', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)', lineHeight: '1.8' }}>
            <p>
              Skogbunn Mikromusheri dyrker østerssopp og Lions Mane av høy kvalitet<br />
              på Vårum Gård i Sørum, med økologiske og kortreiste råvarer fra nærområdet.
            </p>
            <br />
            <p>
              Substratet lager vi selv, av halm fra gården, sagflis fra skogen rundt oss<br />
              og kaffegrut samlet inn fra lokale kafeer.
            </p>
            <br />
            <p>
              Vi holder karbonavtrykket lavt ved å gjenvinne brukt substrat som jordforbedring,<br />
              og solcellene på taket leverer energien som holder produksjonen i gang.
            </p>
            <br />
            <p>
              Vi leverer fersk, lokalprodusert sopp til<br />
              restauranter, grossister og privatpersoner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
