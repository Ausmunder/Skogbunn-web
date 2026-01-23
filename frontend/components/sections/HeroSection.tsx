export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-forest-deep overflow-hidden"
    >
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-moss-green/50 to-forest-deep">
        {/* Temporary gradient background until real image is added */}
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-deep/30 to-forest-deep/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Optional: Add content here later */}
      </div>
    </section>
  );
}
