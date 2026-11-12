import { Helmet } from 'react-helmet-async';
import EyhanVillaCard from '../components/EyhanVillaCard';
import EyhanReveal from '../components/EyhanReveal';
import eyhanResortData from '../data/eyhanResort';

export default function EyhanVillasPage() {
  const { brand, villas } = eyhanResortData;

  return (
    <div className="pt-36 pb-28 px-2 sm:px-8 lg:px-10 max-w-[1536px] mx-auto">
      <Helmet>
        <title>{`Private Villas & Estates | ${brand.name}`}</title>
      </Helmet>

      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <span className="text-[10px] uppercase tracking-ultra text-eyhan-gold font-sans block">
          Bespoke Residences
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal">
          The Private Villa Collection
        </h1>
        <p className="text-sm text-eyhan-sand/70 font-light leading-relaxed">
          Each residence at E-YHAN is architecturally oriented toward unobstructed ocean panoramas, complemented by private infinity pools and dedicated round-the-clock butler service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {villas.map((villa, idx) => (
          <EyhanReveal key={villa.id} delay={(idx % 2) * 150}>
            <EyhanVillaCard villa={villa} />
          </EyhanReveal>
        ))}
      </div>
    </div>
  );
}
