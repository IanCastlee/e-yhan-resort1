import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function EyhanFooter({ brand, navigation, contact }) {
  const navigate = useNavigate();

  return (
    <footer className="bg-eyhan-dark border-t border-eyhan-border pt-20 pb-12 text-eyhan-sand/80">
      <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-eyhan-borderSubtle">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-eyhan-gold flex items-center justify-center font-serif text-lg text-eyhan-gold">
                E
              </div>
              <div>
                <span className="font-sans text-xl tracking-[0.28em] text-white font-medium block">
                  {brand.name}
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-eyhan-gold block">
                  Luxury Private Sanctuary
                </span>
              </div>
            </div>

            <p className="text-sm font-light leading-relaxed max-w-md text-eyhan-sand/70">
              {brand.shortDescription}
            </p>

            <div className="text-xs space-y-1 font-light text-eyhan-muted">
              <p>Coordinates: {contact.coordinates}</p>
              <p>{contact.address}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-ultra text-eyhan-gold font-sans font-medium">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              {navigation.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className="hover:text-eyhan-gold transition-colors tracking-widest uppercase text-[10px]"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Concierge & Inquiries */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[11px] uppercase tracking-ultra text-eyhan-gold font-sans font-medium">
              VIP Concierge
            </h4>
            <p className="text-xs text-eyhan-sand/70 font-light leading-relaxed">
              For private island charters, helicopter transfers, or discreet estate buyouts, please contact our head concierge.
            </p>
            <div className="space-y-2 text-xs font-light text-eyhan-sand">
              <p className="text-eyhan-gold">{contact.conciergeEmail}</p>
              <p>{contact.vipPhone}</p>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-widest text-eyhan-muted uppercase">
          <span>{brand.copyright}</span>
          <span className="text-eyhan-gold/80">Discretion · Elegance · Seclusion</span>
        </div>
      </div>
    </footer>
  );
}

EyhanFooter.propTypes = {
  brand: PropTypes.object.isRequired,
  navigation: PropTypes.array.isRequired,
  contact: PropTypes.object.isRequired,
};
