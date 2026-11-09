import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import EyhanReveal from '../components/EyhanReveal';
import eyhanResortData from '../data/eyhanResort';

export default function EyhanWellnessPage() {
  const navigate = useNavigate();
  const { brand } = eyhanResortData;

  const treatments = [
    {
      title: 'Geothermal Mineral Ritual',
      duration: '120 Minutes',
      description: 'Warm volcanic mud wrap, hydro-mineral bath soak, and deep restorative bamboo muscle therapy.',
    },
    {
      title: 'Pacific Pearl Luminescence Facial',
      duration: '90 Minutes',
      description: 'Indigenous marine collagen, crushed pearl exfoliation, and cold stone lymphatic drainage.',
    },
    {
      title: 'Subterranean Stone Grotto Soak',
      duration: '60 Minutes',
      description: 'Exclusive evening reservation in natural volcanic thermal grottos infused with coastal botanicals.',
    },
  ];

  return (
    <div className="pt-36 pb-28 px-6 sm:px-12 max-w-7xl mx-auto">
      <Helmet>
        <title>{`Atelier & Ocean Spa | ${brand.name}`}</title>
      </Helmet>

      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <span className="text-[10px] uppercase tracking-ultra text-eyhan-gold font-sans block">
          Holistic Restoration
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal">
          The Hydrothermal Ocean Spa
        </h1>
        <p className="text-sm text-eyhan-sand/70 font-light leading-relaxed">
          Rooted in ancient Philippine healing traditions and enriched by Mount Bulusan’s natural volcanic thermal veins, our wellness atelier invites deep renewal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {treatments.map((item, idx) => (
          <EyhanReveal key={item.title} delay={(idx % 3) * 120}>
            <div className="p-8 sm:p-10 bg-eyhan-surface border border-eyhan-borderSubtle hover:border-eyhan-gold transition-colors flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-eyhan-gold font-sans block mb-2">
                  {item.duration}
                </span>
                <h3 className="font-serif text-2xl text-white mb-3">{item.title}</h3>
                <p className="text-xs text-eyhan-sand/70 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <button
                onClick={() => navigate('/reserve')}
                className="text-[11px] font-sans uppercase tracking-[0.22em] text-eyhan-gold hover:text-eyhan-goldLight text-left"
              >
                Book Consultation &rarr;
              </button>
            </div>
          </EyhanReveal>
        ))}
      </div>

      {/* Spa Sanctuary Image Banner */}
      <div className="border border-eyhan-border p-3 bg-eyhan-surface shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
          alt="E-YHAN Ocean Spa Grotto"
          className="w-full h-96 object-cover opacity-85"
        />
      </div>
    </div>
  );
}
