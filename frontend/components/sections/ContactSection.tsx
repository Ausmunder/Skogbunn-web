import Image from 'next/image';
import Footer from '../Footer';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col bg-moss-green overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg3.jpg"
          alt="Skogbunn contact background"
          fill
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-moss-green/40 via-transparent to-moss-green/60" />

      <div className="flex-1 flex items-end justify-start relative z-10" style={{ paddingBottom: '100px', paddingLeft: '100px' }}>
        <div className="max-w-2xl">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-merriweather font-light text-cream mb-8 tracking-wide">
              Kontakt
            </h2>
            <div className="space-y-4 text-lg leading-relaxed font-merriweather font-light text-cream/90">
              <p>
                Skogbunn Mikromusheri AS
              </p>
              <p>
                Org.nr: 936473806
              </p>
              <p>
                Mail: aasmund@skogbunn.com
              </p>
              <p>
                Telefon: 95 16 09 85
              </p>
              <p>
                Adresse: Sørvaldveien 2A, 1923 Sørum
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
