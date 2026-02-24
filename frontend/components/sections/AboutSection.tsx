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
          src={isMobile ? "/images/hero-bg2-mobile.png" : "/images/hero-bg7.png"}
          alt="Skogbunn background"
          fill
          className="object-cover"
          quality={90}
          unoptimized
        />
      </div>

      {/* Header - Only shown on mobile */}
      {isMobile && (
        <div className="absolute left-0 right-0 top-0 flex justify-center z-10" style={{ paddingTop: '30px' }}>
          <h2
            className="text-3xl font-merriweather font-light text-cream tracking-wide"
            style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)' }}
          >
            Om Skogbunn
          </h2>
        </div>
      )}

      {/* Content - Only shown on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 flex items-start justify-center z-10" style={{ paddingTop: '50px' }}>
          <div className="container mx-auto px-6 text-center">
            <div className="font-merriweather font-light" style={{ fontSize: '15px', color: '#f5f0e8', textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)', lineHeight: '1.8' }}>
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
      )}
    </section>
  );
}
