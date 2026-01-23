'use client';

import { useState, useEffect } from 'react';

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
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-cream text-2xl font-light tracking-wider">
            SKOGBUNN
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-cream hover:text-chanterelle-gold transition-colors duration-200 text-sm uppercase tracking-wider font-light"
          >
            Om Skogbunn
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-cream hover:text-chanterelle-gold transition-colors duration-200 text-sm uppercase tracking-wider font-light"
          >
            Kontakt
          </button>
        </div>
      </div>
    </nav>
  );
}
