import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <div className="scroll-container">
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
