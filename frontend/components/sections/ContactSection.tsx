import Footer from '../Footer';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col bg-moss-green"
    >
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-merriweather font-light text-cream mb-8 tracking-wide">
              Kontakt
            </h2>
            <div className="space-y-6 text-lg text-cream/90 leading-relaxed font-merriweather font-light">
              <p>
                Ta gjerne kontakt for mer informasjon.
              </p>
              {/* Contact information can be added here */}
              <div className="mt-8 space-y-2">
                <p className="text-chanterelle-gold">
                  {/* Email placeholder */}
                </p>
                <p className="text-chanterelle-gold">
                  {/* Phone placeholder */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
