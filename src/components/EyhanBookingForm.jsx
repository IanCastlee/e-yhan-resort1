import { useState } from 'react';
import PropTypes from 'prop-types';

export default function EyhanBookingForm({
  villas = [],
  preselectedVilla = '',
  initialCheckIn = '',
  initialCheckOut = '',
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    villa: preselectedVilla || (villas[0]?.name || ''),
    checkIn: initialCheckIn || '',
    checkOut: initialCheckOut || '',
    guests: '2 Guests',
    heliTransfer: false,
    specialRequests: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-eyhan-surface border border-eyhan-gold p-10 sm:p-14 text-center shadow-goldGlow max-w-2xl mx-auto">
        <div className="w-12 h-12 mx-auto mb-6 border border-eyhan-gold flex items-center justify-center text-eyhan-gold font-serif text-xl">
          E
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4">
          Reservation Request Received
        </h3>
        <p className="text-sm font-light text-eyhan-sand/80 leading-relaxed mb-8">
          Thank you, <strong className="text-eyhan-gold">{formData.fullName}</strong>. Your private reservation request for{' '}
          <strong className="text-white">{formData.villa}</strong> has been transmitted to our VIP Concierge Atelier. Our Private Guest Ambassador will contact you at {formData.email} within 2 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-8 py-3 text-xs uppercase tracking-widest text-eyhan-dark bg-eyhan-gold hover:bg-eyhan-goldLight transition-colors font-sans"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-eyhan-surface border border-eyhan-border p-8 sm:p-12 shadow-2xl space-y-6 max-w-3xl mx-auto"
    >
      <div className="text-center pb-6 border-b border-eyhan-borderSubtle">
        <span className="text-[10px] uppercase tracking-ultra text-eyhan-gold font-sans block mb-2">
          Private Client Reservation
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-white">
          Request An Estate Sanctuary
        </h3>
      </div>

      {/* Full Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-eyhan-muted mb-2 font-sans">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Lord / Lady / Mr. / Ms. Alexander"
            className="w-full bg-eyhan-card border border-eyhan-borderSubtle focus:border-eyhan-gold px-4 py-3 text-sm text-eyhan-sand placeholder:text-eyhan-muted/50 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-eyhan-muted mb-2 font-sans">
            Confidential Email Address *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="guest@domain.com"
            className="w-full bg-eyhan-card border border-eyhan-borderSubtle focus:border-eyhan-gold px-4 py-3 text-sm text-eyhan-sand placeholder:text-eyhan-muted/50 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Phone & Guests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-eyhan-muted mb-2 font-sans">
            Mobile / Concierge WhatsApp *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 / +63 900 000 0000"
            className="w-full bg-eyhan-card border border-eyhan-borderSubtle focus:border-eyhan-gold px-4 py-3 text-sm text-eyhan-sand placeholder:text-eyhan-muted/50 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-eyhan-muted mb-2 font-sans">
            Number of Guests
          </label>
          <select
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className="w-full bg-eyhan-card border border-eyhan-borderSubtle focus:border-eyhan-gold px-4 py-3 text-sm text-eyhan-sand focus:outline-none transition-colors"
          >
            <option>1–2 Guests (Couple Sanctuary)</option>
            <option>3–4 Guests (Family Suite)</option>
            <option>5–8 Guests (Private Estate)</option>
            <option>Full Private Island Buyout (Inquire)</option>
          </select>
        </div>
      </div>

      {/* Villa Selection */}
      <div>
        <label className="block text-[10px] uppercase tracking-widest text-eyhan-muted mb-2 font-sans">
          Select Private Villa Estate
        </label>
        <select
          value={formData.villa}
          onChange={(e) => setFormData({ ...formData, villa: e.target.value })}
          className="w-full bg-eyhan-card border border-eyhan-borderSubtle focus:border-eyhan-gold px-4 py-3 text-sm text-eyhan-sand focus:outline-none transition-colors"
        >
          {villas.map((v) => (
            <option key={v.id} value={v.name}>
              {v.name} ({v.rate})
            </option>
          ))}
        </select>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-eyhan-muted mb-2 font-sans">
            Target Arrival Date *
          </label>
          <input
            type="date"
            required
            value={formData.checkIn}
            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
            className="w-full bg-eyhan-card border border-eyhan-borderSubtle focus:border-eyhan-gold px-4 py-3 text-sm text-eyhan-sand focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest text-eyhan-muted mb-2 font-sans">
            Target Departure Date *
          </label>
          <input
            type="date"
            required
            value={formData.checkOut}
            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
            className="w-full bg-eyhan-card border border-eyhan-borderSubtle focus:border-eyhan-gold px-4 py-3 text-sm text-eyhan-sand focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Helicopter transfer checkbox */}
      <div className="flex items-center gap-3 pt-2">
        <input
          type="checkbox"
          id="heliTransfer"
          checked={formData.heliTransfer}
          onChange={(e) => setFormData({ ...formData, heliTransfer: e.target.checked })}
          className="w-4 h-4 accent-eyhan-gold rounded-none"
        />
        <label htmlFor="heliTransfer" className="text-xs text-eyhan-sand/90 font-light cursor-pointer">
          Request private helicopter transfer directly from Manila or Legazpi Airport.
        </label>
      </div>

      {/* Special Requests */}
      <div>
        <label className="block text-[10px] uppercase tracking-widest text-eyhan-muted mb-2 font-sans">
          Special Dietary, Butler, or Excursion Requests
        </label>
        <textarea
          rows={3}
          value={formData.specialRequests}
          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
          placeholder="Share your private dining preferences, wine cellar selections, or surprise anniversary itineraries..."
          className="w-full bg-eyhan-card border border-eyhan-borderSubtle focus:border-eyhan-gold px-4 py-3 text-sm text-eyhan-sand placeholder:text-eyhan-muted/50 focus:outline-none transition-colors"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 text-xs font-sans uppercase tracking-[0.28em] text-eyhan-dark bg-eyhan-gold hover:bg-eyhan-goldLight transition-all duration-300 shadow-goldGlow font-medium border border-eyhan-gold"
      >
        Submit Bespoke Stay Inquiry
      </button>
    </form>
  );
}

EyhanBookingForm.propTypes = {
  villas: PropTypes.array,
  preselectedVilla: PropTypes.string,
  initialCheckIn: PropTypes.string,
  initialCheckOut: PropTypes.string,
};
