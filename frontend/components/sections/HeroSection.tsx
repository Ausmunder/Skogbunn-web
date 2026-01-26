'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-forest-deep overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={isMobile ? "/images/hero-bg-mobile.png" : "/images/hero-bg.png"}
          alt="Skogbunn mushrooms"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Logo - Top centered with space */}
      <div className="absolute left-0 right-0 top-0 flex justify-center z-[60]" style={{ paddingTop: isMobile ? '40px' : '60px' }}>
        <div
          className="relative"
          style={{
            width: isMobile ? '240px' : '400px',
            height: isMobile ? '72px' : '120px'
          }}
        >
          <Image
            src="/images/logo.png"
            alt="Skogbunn Mikromusheri"
            fill
            className="brightness-0 invert"
            priority
            style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain' }}
          />
        </div>
      </div>

      {/* Navigation Buttons - Bottom position */}
      <div className="absolute left-0 right-0 bottom-0 z-[60]" style={{ paddingBottom: isMobile ? '60px' : '100px' }}>
        <div className={`flex justify-center ${isMobile ? 'gap-4' : 'gap-8'}`}>
          <button
            onClick={() => scrollToSection('about')}
            className={`text-cream hover:text-chanterelle-gold transition-colors duration-200 ${isMobile ? 'text-lg' : 'text-2xl'} font-merriweather font-light px-4 py-2`}
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Om Skogbunn
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`text-cream hover:text-chanterelle-gold transition-colors duration-200 ${isMobile ? 'text-lg' : 'text-2xl'} font-merriweather font-light px-4 py-2`}
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Kontakt
          </button>
        </div>
      </div>
    </section>
  );
}
