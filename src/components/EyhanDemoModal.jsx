import { useState, useEffect } from 'react';

export default function EyhanDemoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('eyhan_demo_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('eyhan_demo_dismissed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
    >
      <div className="bg-eyhan-surface border-2 border-eyhan-gold max-w-lg w-full p-5 sm:p-10 shadow-goldGlow relative text-left">
        {/* Badge & Close */}
        <div className="flex items-center justify-between mb-6">
          <span className="px-3 py-1 bg-eyhan-gold/15 border border-eyhan-gold text-[10px] uppercase tracking-[0.24em] text-eyhan-gold font-sans font-medium">
            Demonstration Prototype
          </span>
          <button
            onClick={handleDismiss}
            aria-label="Close"
            className="text-white/60 hover:text-eyhan-gold p-1 text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-4">
          Website Demonstration Notice
        </h3>

        <p className="text-xs sm:text-sm text-eyhan-sand/80 font-light leading-relaxed mb-4">
          This website is an interactive prototype created for design demonstration and portfolio review purposes. All brand names, locations, rates, and imagery are sample placeholders (dummy data).
        </p>

        <div className="bg-eyhan-dark border-l-2 border-eyhan-gold p-4 mb-8 text-xs text-eyhan-sand/90 font-light">
          No real bookings, reservations, or financial transactions will be processed.
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleDismiss}
            className="px-8 py-3.5 bg-eyhan-gold hover:bg-eyhan-goldLight text-eyhan-dark font-sans text-xs uppercase tracking-[0.22em] font-medium transition-all shadow-md"
          >
            I Understand, Open Demo Website
          </button>
        </div>
      </div>
    </div>
  );
}
