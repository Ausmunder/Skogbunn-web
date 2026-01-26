'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '../Footer';

export default function ContactSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col bg-moss-green overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={isMobile ? "/images/hero-bg3-mobile.png" : "/images/hero-bg3.jpg"}
          alt="Skogbunn contact background"
          fill
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-moss-green/40 via-transparent to-moss-green/60" />

      <div
        className="flex-1 flex items-end justify-start relative z-10"
        style={{
          paddingBottom: isMobile ? '70px' : '110px',
          paddingLeft: isMobile ? '20px' : '100px'
        }}
      >
        <div className="max-w-2xl">
          <div className="text-left">
            <h2
              className={`${isMobile ? 'text-3xl mb-6' : 'text-4xl md:text-5xl mb-8'} font-merriweather font-light text-cream tracking-wide`}
            >
              Kontakt
            </h2>
            <div className={`${isMobile ? 'space-y-3 text-base' : 'space-y-4 text-lg'} leading-relaxed font-merriweather font-light text-cream/90`}>
              <p>
                Skogbunn Mikromusheri AS
              </p>
              <p>
                Org.nr: 936473806
              </p>
              <p>
                Mail: aasmund@skogbunn.com
              </p>
              <p>
                Telefon: 95 16 09 85
              </p>
              <p>
                Adresse: Sørvaldveien 2A, 1923 Sørum
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
