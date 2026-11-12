import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function EyhanNavbar({ brand, navigation, contact = {} }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneDisplay = contact?.vipPhone ? contact.vipPhone.split('/')[0] : '+63 (2) 8899-EYHAN';

  return (
    <header className="fixed top-0 left-0 right-0 z-[110]">
      {/* Top Utility Bar (Hidden on mobile to keep header clean and compact) */}
      <div
        className={`overflow-hidden hidden sm:block transition-[max-height,opacity] duration-300 ${
          isScrolled
            ? 'max-h-0 py-0 opacity-0 border-transparent'
            : 'max-h-16 py-2 px-2 sm:px-8 lg:px-10 border-b border-white/10 bg-eyhan-dark/70 backdrop-blur-md opacity-100'
        } text-[11px] font-sans text-eyhan-sand/80`}
      >
        <div className="max-w-[1536px] mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-6 text-[10px] sm:text-[11px] tracking-widest uppercase">
            <span className="flex items-center gap-1.5 text-eyhan-gold">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{brand?.location}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-eyhan-sand/90">
              <svg className="w-3.5 h-3.5 text-eyhan-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{phoneDisplay}</span>
            </span>
          </div>

          <div className="flex items-center gap-5 text-[10px] tracking-ultra uppercase text-eyhan-sand/70">
            <span className="text-eyhan-gold font-medium">VIP Concierge</span>
            <span className="text-white/20">|</span>
            <button
              onClick={() => navigate('/reserve')}
              className="hover:text-eyhan-gold transition-colors"
            >
              Inquire
            </button>
            <span className="text-white/20">|</span>
            <span className="text-eyhan-goldLight">EN &middot; USD ($)</span>
          </div>
        </div>
      </div>

      {/* Main Luxury Brand & Nav Bar (Always visible and solid on mobile) */}
      <div
        className={`px-2 sm:px-8 lg:px-10 transition-[background-color,padding,border-color,box-shadow] duration-300 ${
          isScrolled
            ? 'py-2.5 sm:py-3.5 bg-eyhan-dark/95 backdrop-blur-xl border-b border-eyhan-border shadow-2xl'
            : 'py-3 sm:py-5 bg-eyhan-dark/95 sm:bg-gradient-to-b sm:from-eyhan-dark/95 sm:via-eyhan-dark/60 sm:to-transparent backdrop-blur-xl sm:backdrop-blur-none border-b border-eyhan-border/60 sm:border-transparent'
        }`}
      >
        <div className="max-w-[1536px] mx-auto flex items-center justify-between">
          {/* Logo with Imperial Wings/Crest look */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none"
          >
            <div
              className={`rounded-full border border-eyhan-gold flex items-center justify-center font-serif tracking-wider text-eyhan-gold bg-eyhan-surface/80 shadow-goldGlow group-hover:scale-105 transition-all duration-300 ${
                isScrolled ? 'w-7 h-7 sm:w-9 sm:h-9 text-xs sm:text-base' : 'w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-base'
              }`}
            >
              {brand?.name ? brand.name.charAt(0) : 'E'}
            </div>
            <div>
              <span
                className={`font-sans tracking-[0.16em] sm:tracking-[0.28em] text-white font-bold block transition-all duration-300 ${
                  isScrolled ? 'text-sm sm:text-lg' : 'text-sm sm:text-xl'
                }`}
              >
                {brand?.name || 'E-YHAN'}
              </span>
              <span className="text-[7px] sm:text-[9px] uppercase tracking-[0.18em] sm:tracking-[0.28em] text-eyhan-gold block font-medium">
                Resort &amp; Private Reserve
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.22em] font-sans">
            {navigation?.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="text-white/90 hover:text-eyhan-gold transition-colors py-1 relative group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-eyhan-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Direct Inquire CTA button on scrolled navbar for high conversion */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => navigate('/reserve')}
              className={`text-[10px] uppercase tracking-[0.24em] font-sans px-5 py-2 transition-all duration-300 border ${
                isScrolled
                  ? 'bg-eyhan-gold text-eyhan-dark border-eyhan-gold hover:bg-eyhan-goldLight shadow-goldGlow'
                  : 'bg-transparent text-eyhan-gold border-eyhan-gold/60 hover:bg-eyhan-gold hover:text-eyhan-dark'
              }`}
            >
              Book Stay
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-eyhan-gold"
            aria-label="Toggle Navigation"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-eyhan-dark/98 backdrop-blur-2xl border-b border-eyhan-border px-8 py-6 space-y-4 shadow-2xl">
          {navigation?.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                setMobileMenuOpen(false);
                navigate(item.path);
              }}
              className="block w-full text-left text-xs uppercase tracking-[0.24em] text-eyhan-sand hover:text-eyhan-gold py-2 border-b border-white/5"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/reserve');
              }}
              className="w-full py-3 bg-eyhan-gold text-eyhan-dark text-xs uppercase tracking-[0.25em] font-medium"
            >
              Book Stay
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

EyhanNavbar.propTypes = {
  brand: PropTypes.object.isRequired,
  navigation: PropTypes.array.isRequired,
  contact: PropTypes.object,
};
