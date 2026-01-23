import Image from 'next/image';

export default function HeroSection() {
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

      {/* Overlay for better contrast and depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/40 via-transparent to-forest-deep/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Optional: Add content here later */}
      </div>
    </section>
  );
}
