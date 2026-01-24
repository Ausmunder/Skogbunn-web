'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
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
          src="/images/hero-bg.png"
          alt="Skogbunn mushrooms"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Navigation - Logo and Buttons */}
      {/* Logo - Top left position */}
      <div className="absolute z-[60]" style={{ left: '50px', top: '50px' }}>
        <div className="relative" style={{ width: '400px', height: '120px' }}>
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

      {/* Navigation Buttons - Centered horizontally, 100px from top */}
      <div className="absolute left-0 right-0 z-[60]" style={{ top: '100px' }}>
        <div className="flex justify-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-cream hover:text-chanterelle-gold transition-colors duration-200 text-2xl font-merriweather font-light px-4 py-2"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Om Skogbunn
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-cream hover:text-chanterelle-gold transition-colors duration-200 text-2xl font-merriweather font-light px-4 py-2"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
          >
            Kontakt
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Optional: Add content here later */}
      </div>
    </section>
  );
}
