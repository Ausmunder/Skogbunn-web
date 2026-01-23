export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-cream"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-light text-forest-deep mb-8 tracking-wide">
            Om Skogbunn
          </h2>
          <div className="space-y-6 text-lg text-moss-green leading-relaxed">
            <p>
              Velkommen til Skogbunn Mikromusheri.
            </p>
            <p>
              Her dyrker vi kortreist matsopp, rett fra gården.
            </p>
            {/* More content can be added here */}
          </div>
        </div>
      </div>
    </section>
  );
}
