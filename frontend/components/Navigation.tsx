'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-[60]" style={{ position: 'absolute' }}>
      <div className="w-full flex flex-col items-center">
        {/* Logo - Centered at top, 30% larger */}
        <div className="pt-4" style={{ width: '1170px', height: '351px' }}>
          <Image
            src="/images/logo.png"
            alt="Skogbunn Mikromusheri"
            fill
            className="brightness-0 invert"
            priority
            style={{ filter: 'brightness(0) invert(1)', objectFit: 'contain' }}
          />
        </div>

        {/* Navigation Buttons - Centered below logo, closer to logo */}
        <div className="flex justify-center gap-8 mt-2">
          <button
            onClick={() => scrollToSection('about')}
            className="text-cream hover:text-chanterelle-gold transition-colors duration-200 text-xl font-merriweather font-light"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Om Skogbunn
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-cream hover:text-chanterelle-gold transition-colors duration-200 text-xl font-merriweather font-light"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Kontakt
          </button>
        </div>
      </div>
    </div>
  );
}
