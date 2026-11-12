import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function EyhanHero({ hero, villas = [] }) {
  const navigate = useNavigate();

  // Booking Widget States
  const [arrival, setArrival] = useState('2026-11-15');
  const [departure, setDeparture] = useState('2026-11-18');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [selectedVilla] = useState(villas[0]?.name || 'The Presidential Ocean Estate');

  const formatDateLabel = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T00:00:00');
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatDayName = (dateStr) => {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T00:00:00');
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    navigate(
      `/reserve?villa=${encodeURIComponent(selectedVilla)}&checkIn=${arrival}&checkOut=${departure}&adults=${adults}&children=${children}`
    );
  };

  return (
    <section className="relative min-h-[100dvh] lg:h-screen w-full flex flex-col justify-between bg-eyhan-dark">
      {/* Background Image: Night-lit luxury infinity pool */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=90"
          alt="E-YHAN Nightlit Pool & Columns"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          loading="eager"
        />
        {/* Cinematic dark gradients tailored to keep text visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-eyhan-dark via-eyhan-dark/60 to-eyhan-dark/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-eyhan-dark/85 via-transparent to-eyhan-dark" />
      </div>

      {/* Top spacing to give room for the fixed Navbar */}
      <div className="h-16 sm:h-20 lg:h-24 shrink-0 z-10" />

      {/* Centerpiece Headline (Unique Experience — ENJOY WITH US) */}
      <div className="relative z-10 max-w-5xl mx-auto px-2 sm:px-6 lg:px-10 text-center my-auto py-3 sm:py-6">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-normal tracking-wide drop-shadow-2xl mb-1.5 sm:mb-3">
          Unique Experience
        </h1>

        {/* Symmetrical Gold Accent Divider with Sub-motto */}
        <div className="inline-flex items-center justify-center gap-2.5 sm:gap-6 my-1 sm:my-2.5">
          <span className="w-6 sm:w-16 h-px bg-eyhan-gold" />
          <span className="text-[9px] sm:text-xs md:text-sm uppercase tracking-[0.24em] sm:tracking-[0.38em] text-eyhan-goldLight font-sans font-semibold drop-shadow">
            ENJOY WITH US
          </span>
          <span className="w-6 sm:w-16 h-px bg-eyhan-gold" />
        </div>

        <p className="max-w-xl mx-auto text-xs sm:text-sm text-white/85 font-light leading-relaxed mt-1.5 sm:mt-4 drop-shadow hidden sm:block">
          Immerse yourself in Sorsogon’s premier private reserve. Bespoke cliffside villas, illuminated infinity pools, and quiet Pacific elegance.
        </p>
      </div>

      {/* Bottom Booking Picker - Ultra Luxury Dark Glass Console (Fully Mobile & Tablet Responsive) */}
      <div className="relative z-20 w-full max-w-[1536px] mx-auto px-2 sm:px-6 lg:px-10 pb-3 sm:pb-6 lg:pb-8 shrink-0">
        <form
          onSubmit={handleCheckAvailability}
          className="bg-eyhan-dark/95 backdrop-blur-2xl border border-eyhan-gold/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] rounded-sm grid grid-cols-2 md:grid-cols-5 overflow-hidden ring-1 ring-white/10"
        >
          {/* Arrival Date */}
          <div className="relative p-2.5 sm:p-3.5 md:p-3.5 lg:p-5 flex flex-col justify-between group hover:bg-white/[0.04] transition-all col-span-1 border-r border-b md:border-b-0 border-eyhan-border/50 cursor-pointer">
            {/* Invisible native date picker covering the cell to eliminate duplicate browser icons */}
            <input
              type="date"
              required
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20 [color-scheme:dark]"
            />
            <div className="flex items-center justify-between mb-1 pointer-events-none">
              <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-eyhan-gold font-sans font-medium">
                Arrival Date
              </span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-eyhan-gold transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="pointer-events-none">
              <div className="font-serif text-xs sm:text-base md:text-lg lg:text-xl text-white font-normal tracking-wide group-hover:text-eyhan-goldLight transition-colors">
                {formatDateLabel(arrival)}
              </div>
              <div className="text-[8px] sm:text-[9px] md:text-[10px] font-sans text-eyhan-sand/60 tracking-wider uppercase mt-0.5">
                {formatDayName(arrival)}
              </div>
            </div>
          </div>

          {/* Departure Date */}
          <div className="relative p-2.5 sm:p-3.5 md:p-3.5 lg:p-5 flex flex-col justify-between group hover:bg-white/[0.04] transition-all col-span-1 border-b md:border-b-0 md:border-r border-eyhan-border/50 cursor-pointer">
            <input
              type="date"
              required
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20 [color-scheme:dark]"
            />
            <div className="flex items-center justify-between mb-1 pointer-events-none">
              <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-eyhan-gold font-sans font-medium">
                Departure Date
              </span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-eyhan-gold transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="pointer-events-none">
              <div className="font-serif text-xs sm:text-base md:text-lg lg:text-xl text-white font-normal tracking-wide group-hover:text-eyhan-goldLight transition-colors">
                {formatDateLabel(departure)}
              </div>
              <div className="text-[8px] sm:text-[9px] md:text-[10px] font-sans text-eyhan-sand/60 tracking-wider uppercase mt-0.5">
                {formatDayName(departure)}
              </div>
            </div>
          </div>

          {/* Adults Count */}
          <div className="relative p-2.5 sm:p-3.5 md:p-3.5 lg:p-5 flex flex-col justify-between group hover:bg-white/[0.04] transition-all col-span-1 border-r border-b md:border-b-0 border-eyhan-border/50 cursor-pointer">
            <select
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20 bg-eyhan-dark text-white"
            >
              <option value="1" className="bg-eyhan-surface text-white">1 Adult</option>
              <option value="2" className="bg-eyhan-surface text-white">2 Adults</option>
              <option value="3" className="bg-eyhan-surface text-white">3 Adults</option>
              <option value="4" className="bg-eyhan-surface text-white">4 Adults</option>
              <option value="5+" className="bg-eyhan-surface text-white">5+ Adults</option>
            </select>
            <div className="flex items-center justify-between mb-1 pointer-events-none">
              <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-eyhan-gold font-sans font-medium">
                Adults
              </span>
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-eyhan-gold/80 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="pointer-events-none">
              <div className="font-serif text-xs sm:text-base md:text-lg lg:text-xl text-white font-normal group-hover:text-eyhan-goldLight transition-colors">
                {adults} {adults === '1' ? 'Adult' : 'Adults'}
              </div>
              <div className="text-[8px] sm:text-[9px] md:text-[10px] font-sans text-eyhan-sand/60 tracking-wider uppercase mt-0.5">
                Ages 13+
              </div>
            </div>
          </div>

          {/* Children Count */}
          <div className="relative p-2.5 sm:p-3.5 md:p-3.5 lg:p-5 flex flex-col justify-between group hover:bg-white/[0.04] transition-all col-span-1 border-b md:border-b-0 md:border-r border-eyhan-border/50 cursor-pointer">
            <select
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20 bg-eyhan-dark text-white"
            >
              <option value="0" className="bg-eyhan-surface text-white">0 Children</option>
              <option value="1" className="bg-eyhan-surface text-white">1 Child</option>
              <option value="2" className="bg-eyhan-surface text-white">2 Children</option>
              <option value="3" className="bg-eyhan-surface text-white">3 Children</option>
              <option value="4+" className="bg-eyhan-surface text-white">4+ Children</option>
            </select>
            <div className="flex items-center justify-between mb-1 pointer-events-none">
              <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-eyhan-gold font-sans font-medium">
                Children
              </span>
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-eyhan-gold/80 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="pointer-events-none">
              <div className="font-serif text-xs sm:text-base md:text-lg lg:text-xl text-white font-normal group-hover:text-eyhan-goldLight transition-colors">
                {children === '0' ? 'None' : `${children} ${children === '1' ? 'Child' : 'Children'}`}
              </div>
              <div className="text-[8px] sm:text-[9px] md:text-[10px] font-sans text-eyhan-sand/60 tracking-wider uppercase mt-0.5">
                Ages 0 - 12
              </div>
            </div>
          </div>

          {/* Gold Action Button ("CHECK AVAILABILITY") */}
          <button
            type="submit"
            className="relative w-full bg-gradient-to-r from-eyhan-gold via-eyhan-goldLight to-eyhan-gold text-eyhan-dark p-3 sm:p-3.5 md:p-4 lg:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 font-sans group shadow-goldGlow hover:brightness-105 active:scale-[0.99] col-span-2 md:col-span-1 overflow-hidden"
          >
            {/* Shimmer sweep animation on hover */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <span className="relative z-10 text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.24em] font-bold block flex items-center gap-1.5">
              <span>Check Availability</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
            </span>
            <span className="relative z-10 text-[8px] sm:text-[9px] tracking-[0.16em] sm:tracking-[0.2em] font-medium text-eyhan-dark/85 mt-0.5 block uppercase">
              Best Rate Guaranteed
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

EyhanHero.propTypes = {
  hero: PropTypes.object.isRequired,
  villas: PropTypes.array,
};
