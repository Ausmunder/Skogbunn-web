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
          src="/images/hero-bg4.jpeg"
          alt="Skogbunn background"
          fill
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-bark-brown/40 via-transparent to-bark-brown/60" />

      {/* Content */}
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-merriweather font-light text-cream mb-20 tracking-wide" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)' }}>
            Om Skogbunn
          </h2>
          <div className="space-y-8 text-lg text-cream/90 font-merriweather font-light">
            <p style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)', whiteSpace: 'nowrap' }}>
              Skogbunn Mikromusheri dyrker høykvalitets Østerssopp og Lions Mane på Vårum Gård i Sørum,
            </p>
            <p style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)', whiteSpace: 'nowrap' }}>
              med økologiske og kortreiste råvarer fra regionen.
            </p>
            <p style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)', whiteSpace: 'nowrap' }}>
              Substratet lager vi av halm fra gården, sagflis fra skogen og kaffegrut fra lokale kafeer.
            </p>
            <p style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)', whiteSpace: 'nowrap' }}>
              Når soppen er høstet, går substratet tilbake til jorden som kompost,
            </p>
            <p style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)', whiteSpace: 'nowrap' }}>
              og ren energi fra solcellene på taket drifter produksjonen.
            </p>
            <p style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9)', whiteSpace: 'nowrap' }}>
              Vi leverer fersk lokal sopp til restauranter, grossister og privatpersoner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
