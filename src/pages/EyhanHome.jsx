import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import EyhanHero from '../components/EyhanHero';
import EyhanVillaCard from '../components/EyhanVillaCard';
import EyhanReveal from '../components/EyhanReveal';
import eyhanResortData from '../data/eyhanResort';

export default function EyhanHome() {
  const navigate = useNavigate();
  const { brand, hero, overview, villas, experiences, testimonials } = eyhanResortData;

  return (
    <>
      <Helmet>
        <title>{`${brand.name} | ${brand.tagline}`}</title>
        <meta name="description" content={brand.shortDescription} />
      </Helmet>

      {/* Hero Section: Exact 100vh with headline + picker fully inside the viewport */}
      <EyhanHero hero={hero} villas={villas} />

      {/* The Sanctuary Philosophy & Overview */}
      <section className="py-24 px-2 sm:px-8 lg:px-12 max-w-7xl mx-auto border-b border-eyhan-borderSubtle">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-px bg-eyhan-gold" />
              <span className="text-[10px] uppercase tracking-ultra text-eyhan-gold font-sans font-medium">
                {overview.eyebrow}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal leading-tight">
              {overview.heading}
            </h2>

            <p className="text-sm sm:text-base text-eyhan-sand/80 font-light leading-relaxed">
              {overview.description}
            </p>

            <blockquote className="border-l-2 border-eyhan-gold pl-6 py-2 my-6 font-serif italic text-lg text-eyhan-goldLight">
              {overview.quote}
              <cite className="block text-xs uppercase tracking-widest text-eyhan-muted font-sans not-italic mt-3">
                — {overview.founder}
              </cite>
            </blockquote>

            <div>
              <button
                onClick={() => navigate('/villas')}
                className="px-8 py-3.5 text-xs font-sans uppercase tracking-[0.25em] text-eyhan-sand border border-eyhan-gold hover:bg-eyhan-gold hover:text-eyhan-dark transition-all duration-300"
              >
                Discover The Residences &rarr;
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative border border-eyhan-border p-3 bg-eyhan-surface shadow-2xl">
              <img
                src={overview.highlightImage}
                alt="E-YHAN Architecture"
                className="w-full h-[450px] object-cover opacity-90"
              />
              <div className="absolute -bottom-6 -left-6 bg-eyhan-card border border-eyhan-border p-6 max-w-xs hidden sm:block shadow-goldGlow">
                <span className="font-serif text-2xl text-eyhan-gold block mb-1">
                  Private Sanctuary
                </span>
                <span className="text-xs text-eyhan-sand/70 font-light">
                  Unrivaled privacy across 45 hectares of protected Pacific coastline.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Private Villas Showcase */}
      <section className="py-28 px-2 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[10px] uppercase tracking-ultra text-eyhan-gold font-sans block">
            Exclusive Residences
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-normal">
            Private Villas &amp; Coastal Estates
          </h2>
          <p className="text-sm text-eyhan-sand/70 font-light">
            Every estate is a private sanctuary featuring cantilevered infinity pools, dedicated butlers, and sweeping Pacific horizons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {villas.map((villa, idx) => (
            <EyhanReveal key={villa.id} delay={(idx % 2) * 150}>
              <EyhanVillaCard villa={villa} />
            </EyhanReveal>
          ))}
        </div>
      </section>

      {/* Haute Experiences Carousel/Grid */}
      <section className="py-28 bg-eyhan-surface border-y border-eyhan-border">
        <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-ultra text-eyhan-gold font-sans block mb-2">
                Curated Indulgence
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
                Haute Experiences
              </h2>
            </div>
            <button
              onClick={() => navigate('/experiences')}
              className="text-xs font-sans uppercase tracking-[0.22em] text-eyhan-gold hover:text-eyhan-goldLight transition-colors"
            >
              View All Experiences &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((exp, idx) => (
              <EyhanReveal key={exp.id} delay={(idx % 4) * 120}>
                <div className="group relative bg-eyhan-dark border border-eyhan-borderSubtle hover:border-eyhan-gold transition-all duration-500 overflow-hidden h-full flex flex-col justify-between">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-eyhan-gold block mb-1">
                        {exp.tagline}
                      </span>
                      <h3 className="font-serif text-xl text-white mb-2 group-hover:text-eyhan-goldLight transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xs text-eyhan-sand/70 font-light leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </EyhanReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Testimonials */}
      <section className="py-28 px-2 sm:px-8 lg:px-12 max-w-5xl mx-auto text-center space-y-12">
        <span className="text-[10px] uppercase tracking-ultra text-eyhan-gold font-sans block">
          Private Guest Accolades
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((test, idx) => (
            <EyhanReveal key={test.author} delay={(idx % 2) * 150}>
              <div className="p-8 sm:p-10 bg-eyhan-surface border border-eyhan-borderSubtle relative h-full flex flex-col justify-between">
                <div>
                  <div className="text-eyhan-gold font-serif text-4xl mb-4">&ldquo;</div>
                  <p className="font-serif italic text-base sm:text-lg text-eyhan-sand/90 leading-relaxed mb-6">
                    {test.quote}
                  </p>
                </div>
                <div className="pt-4 border-t border-eyhan-borderSubtle">
                  <span className="font-sans text-xs uppercase tracking-widest text-white block font-medium">
                    {test.author}
                  </span>
                  <span className="text-[10px] text-eyhan-muted tracking-widest uppercase block mt-1">
                    {test.residence}
                  </span>
                </div>
              </div>
            </EyhanReveal>
          ))}
        </div>
      </section>

      {/* Grand Reserve CTA */}
      <section className="relative py-32 px-6 text-center bg-gradient-to-t from-eyhan-surface via-eyhan-dark to-eyhan-dark border-t border-eyhan-border">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-ultra text-eyhan-gold font-sans block">
            Your Private Escape Awaits
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-normal">
            Begin Your Journey to E-YHAN
          </h2>
          <p className="text-sm sm:text-base text-eyhan-sand/80 font-light leading-relaxed max-w-xl mx-auto">
            Experience unhurried luxury crafted around your desires. Our Guest Ambassadors stand ready to orchestrate your arrival.
          </p>
          <div className="pt-6">
            <button
              onClick={() => navigate('/reserve')}
              className="px-12 py-4 text-xs font-sans uppercase tracking-[0.28em] text-eyhan-dark bg-eyhan-gold hover:bg-eyhan-goldLight transition-all duration-300 shadow-goldGlow font-medium border border-eyhan-gold"
            >
              Inquire Your Private Stay
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
