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

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    navigate(
      `/reserve?villa=${encodeURIComponent(selectedVilla)}&checkIn=${arrival}&checkOut=${departure}&adults=${adults}&children=${children}`
    );
  };

  return (
    <section className="relative h-screen min-h-[680px] w-full flex flex-col justify-between overflow-hidden bg-eyhan-dark">
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

      {/* Top spacing to give room for the absolute Navbar */}
      <div className="h-28 sm:h-32 shrink-0 z-10" />

      {/* Centerpiece Headline (Unique Experience — ENJOY WITH US) */}
      <div className="relative z-10 max-w-5xl mx-auto px-2 sm:px-6 text-center my-auto">
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal tracking-wide drop-shadow-2xl mb-3 sm:mb-4">
          Unique Experience
        </h1>

        {/* Symmetrical Gold Accent Divider with Sub-motto */}
        <div className="inline-flex items-center justify-center gap-4 sm:gap-6 my-2 sm:my-3">
          <span className="w-10 sm:w-20 h-px bg-eyhan-gold" />
          <span className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.38em] text-eyhan-goldLight font-sans font-semibold drop-shadow">
            ENJOY WITH US
          </span>
          <span className="w-10 sm:w-20 h-px bg-eyhan-gold" />
        </div>

        <p className="max-w-xl mx-auto text-xs sm:text-sm text-white/85 font-light leading-relaxed mt-3 sm:mt-5 drop-shadow hidden sm:block">
          Immerse yourself in Sorsogon’s premier private reserve. Bespoke cliffside villas, illuminated infinity pools, and quiet Pacific elegance.
        </p>
      </div>

      {/* Bottom Booking Picker - 100% inside the 100vh viewport */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-2 sm:px-8 pb-4 sm:pb-8 shrink-0">
        <form
          onSubmit={handleCheckAvailability}
          className="bg-white rounded-none shadow-2xl border border-gray-100 grid grid-cols-2 lg:grid-cols-5 text-eyhan-dark divide-y lg:divide-y-0 lg:divide-x divide-gray-200"
        >
          {/* Arrival Date */}
          <div className="p-3.5 sm:p-5 flex flex-col justify-between group hover:bg-amber-50/40 transition-colors col-span-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 font-sans font-medium">
                Arrival Date
              </span>
              <svg className="w-3.5 h-3.5 text-eyhan-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              type="date"
              required
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="font-serif text-sm sm:text-lg text-gray-900 bg-transparent focus:outline-none cursor-pointer"
            />
          </div>

          {/* Departure Date */}
          <div className="p-3.5 sm:p-5 flex flex-col justify-between group hover:bg-amber-50/40 transition-colors col-span-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 font-sans font-medium">
                Departure Date
              </span>
              <svg className="w-3.5 h-3.5 text-eyhan-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              type="date"
              required
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="font-serif text-sm sm:text-lg text-gray-900 bg-transparent focus:outline-none cursor-pointer"
            />
          </div>

          {/* Adults Count */}
          <div className="p-3.5 sm:p-5 flex flex-col justify-between group hover:bg-amber-50/40 transition-colors col-span-1">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 font-sans font-medium mb-1">
              Adults
            </span>
            <select
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="font-serif text-lg sm:text-2xl text-gray-900 bg-transparent focus:outline-none cursor-pointer w-full font-normal"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </div>

          {/* Children Count */}
          <div className="p-3.5 sm:p-5 flex flex-col justify-between group hover:bg-amber-50/40 transition-colors col-span-1">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500 font-sans font-medium mb-1">
              Children
            </span>
            <select
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              className="font-serif text-lg sm:text-2xl text-gray-900 bg-transparent focus:outline-none cursor-pointer w-full font-normal"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
          </div>

          {/* Gold Action Button ("CHECK AVAILABILITY") */}
          <button
            type="submit"
            className="w-full bg-[#c59f27] hover:bg-[#b08c1e] text-white p-3.5 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-300 font-sans group shadow-md col-span-2 lg:col-span-1"
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold block leading-tight">
              Check Availability
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest text-amber-100 opacity-80 group-hover:translate-x-1 transition-transform mt-0.5 inline-block">
              Best Rates Guaranteed &rarr;
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
