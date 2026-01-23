import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="scroll-container">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
