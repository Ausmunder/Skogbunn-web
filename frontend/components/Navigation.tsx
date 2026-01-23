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
      <div className="w-full">
        {/* Logo - Fixed top left corner with grey shadow */}
        <div className="fixed top-6 left-6 z-50">
          <div className="relative">
            {/* Grey shadow behind logo */}
            <div className="absolute inset-0 bg-gray-800/40 blur-xl rounded-lg" />
            <Image
              src="/images/logo.png"
              alt="Skogbunn Mikromusheri"
              width={6000}
              height={1800}
              className="h-96 w-auto brightness-0 invert relative z-10"
              priority
              style={{ filter: 'brightness(0) invert(1)', position: 'relative' }}
            />
          </div>
        </div>

        {/* Navigation Buttons - Centered, 50px lower, larger font */}
        <div className="flex justify-center gap-8 pt-16" style={{ paddingTop: '62px' }}>
          <button
            onClick={() => scrollToSection('about')}
            className="text-cream hover:text-chanterelle-gold transition-colors duration-200 text-xl font-merriweather font-light"
          >
            Om Skogbunn
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-cream hover:text-chanterelle-gold transition-colors duration-200 text-xl font-merriweather font-light"
          >
            Kontakt
          </button>
        </div>
      </div>
    </nav>
  );
}
