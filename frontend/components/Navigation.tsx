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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-forest-deep/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-8 flex items-center justify-between">
        {/* Logo - 10x larger and white */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Skogbunn Mikromusheri"
            width={2000}
            height={600}
            className="h-32 w-auto brightness-0 invert"
            priority
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>

        {/* Navigation Buttons - Merriweather font */}
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-cream hover:text-chanterelle-gold transition-colors duration-200 text-base font-merriweather font-light"
          >
            Om Skogbunn
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-cream hover:text-chanterelle-gold transition-colors duration-200 text-base font-merriweather font-light"
          >
            Kontakt
          </button>
        </div>
      </div>
    </nav>
  );
}
