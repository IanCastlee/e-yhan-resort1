import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function EyhanVillaCard({ villa }) {
  const navigate = useNavigate();

  return (
    <article className="group relative bg-eyhan-surface border border-eyhan-borderSubtle hover:border-eyhan-border transition-all duration-700 flex flex-col justify-between overflow-hidden shadow-2xl">
      <div>
        {/* Image Container with Slow Zoom */}
        <div className="relative h-80 sm:h-96 overflow-hidden bg-eyhan-dark">
          <img
            src={villa.image}
            alt={villa.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-eyhan-surface via-transparent to-transparent opacity-80" />

          {/* Badge */}
          {villa.badge && (
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1 text-[10px] font-sans uppercase tracking-[0.22em] text-eyhan-gold bg-eyhan-dark/85 backdrop-blur-md border border-eyhan-border">
                {villa.badge}
              </span>
            </div>
          )}

          {/* Category & Size pill */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-eyhan-sand/80">
            <span className="uppercase tracking-widest text-[10px] text-eyhan-goldLight">
              {villa.category}
            </span>
            <span className="text-[11px] text-eyhan-muted">{villa.size}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-7 sm:p-9">
          <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2 group-hover:text-eyhan-gold transition-colors duration-300">
            {villa.name}
          </h3>

          <p className="text-xs uppercase tracking-widest text-eyhan-muted mb-4">
            {villa.capacity}
          </p>

          <p className="text-sm text-eyhan-sand/70 font-light leading-relaxed mb-6">
            {villa.description}
          </p>

          {/* Curated Inclusions */}
          <ul className="space-y-2 mb-8 pt-4 border-t border-eyhan-borderSubtle">
            {villa.features.map((feat) => (
              <li key={feat} className="flex items-center gap-2.5 text-xs text-eyhan-sand/80 font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-eyhan-gold" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pricing & CTA Footer */}
      <div className="px-7 sm:px-9 pb-8 pt-4 border-t border-eyhan-borderSubtle flex items-center justify-between gap-4">
        <div>
          <span className="block text-[10px] uppercase tracking-widest text-eyhan-muted">Tariff</span>
          <span className="font-serif text-lg sm:text-xl text-eyhan-gold">{villa.rate}</span>
        </div>

        <button
          onClick={() => navigate(`/reserve?villa=${encodeURIComponent(villa.name)}`)}
          className="px-6 py-2.5 text-[10px] uppercase tracking-widest text-eyhan-sand hover:text-eyhan-dark border border-eyhan-border hover:bg-eyhan-gold hover:border-eyhan-gold transition-all duration-300 font-sans"
        >
          Inquire Villa &rarr;
        </button>
      </div>
    </article>
  );
}

EyhanVillaCard.propTypes = {
  villa: PropTypes.object.isRequired,
};
