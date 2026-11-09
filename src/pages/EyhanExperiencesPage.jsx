import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import EyhanReveal from '../components/EyhanReveal';
import eyhanResortData from '../data/eyhanResort';

export default function EyhanExperiencesPage() {
  const navigate = useNavigate();
  const { brand, experiences } = eyhanResortData;

  return (
    <div className="pt-36 pb-28 px-6 sm:px-12 max-w-7xl mx-auto">
      <Helmet>
        <title>{`Haute Experiences & Expeditions | ${brand.name}`}</title>
      </Helmet>

      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <span className="text-[10px] uppercase tracking-ultra text-eyhan-gold font-sans block">
          Curated Luxury
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal">
          Haute Experiences &amp; Adventures
        </h1>
        <p className="text-sm text-eyhan-sand/70 font-light leading-relaxed">
          From private helicopter safaris over Mount Bulusan to subterranean volcanic grottos and yacht charters, every moment at E-YHAN is tailored to your taste.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {experiences.map((exp, idx) => (
          <EyhanReveal key={exp.id} delay={(idx % 2) * 150}>
            <div className="bg-eyhan-surface border border-eyhan-borderSubtle hover:border-eyhan-gold transition-all duration-500 overflow-hidden shadow-2xl flex flex-col justify-between h-full">
              <div className="h-80 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-ultra text-eyhan-gold font-sans block mb-2">
                    {exp.tagline}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-eyhan-sand/70 font-light leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>
                <button
                  onClick={() => navigate('/reserve')}
                  className="text-xs font-sans uppercase tracking-[0.22em] text-eyhan-gold hover:text-eyhan-goldLight transition-colors text-left"
                >
                  Inquire For Private Booking &rarr;
                </button>
              </div>
            </div>
          </EyhanReveal>
        ))}
      </div>
    </div>
  );
}
