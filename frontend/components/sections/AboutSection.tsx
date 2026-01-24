import Image from 'next/image';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-bark-brown overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg2.png"
          alt="Skogbunn background"
          fill
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-merriweather font-light text-cream tracking-wide" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)', marginBottom: '50px' }}>
            Om Skogbunn
          </h2>
          <div className="space-y-6 text-lg text-cream/70 font-merriweather font-light">
            <p style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)' }}>
              Skogbunn Mikromusheri dyrker høykvalitets Østerssopp og Lions Mane på Vårum Gård i Sørum, med økologiske og kortreiste råvarer fra regionen.
            </p>
            <p style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)' }}>
              Substratet lager vi av halm fra gården, sagflis fra skogen og kaffegrut fra lokale kafeer.
            </p>
            <p style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)' }}>
              Når soppen er høstet, går substratet tilbake til jorden som kompost, og ren energi fra solcellene på taket drifter produksjonen.
            </p>
            <p style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)' }}>
              Vi leverer fersk lokalprodusert sopp til restauranter, grossister og privatpersoner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
