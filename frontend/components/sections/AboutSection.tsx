export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-bark-brown"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-merriweather font-light text-cream mb-8 tracking-wide">
            Om Skogbunn
          </h2>
          <div className="space-y-6 text-lg text-cream/90 leading-relaxed font-merriweather font-light">
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
