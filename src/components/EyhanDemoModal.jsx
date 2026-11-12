import { useState, useEffect } from 'react';

export default function EyhanDemoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('eyhan_demo_dismissed');
    if (!dismissed) {
      setIsOpen(true);
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
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 pt-16 sm:p-6 overflow-y-auto"
    >
      <div className="bg-eyhan-surface border-2 border-eyhan-gold w-full max-w-[calc(100vw-24px)] sm:max-w-lg mx-auto p-4 sm:p-8 shadow-goldGlow relative text-left box-border my-auto">
        {/* Badge & Close */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <span className="px-2.5 sm:px-3 py-1 bg-eyhan-gold/15 border border-eyhan-gold text-[9px] sm:text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.24em] text-eyhan-gold font-sans font-medium">
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

        <h3 className="font-serif text-xl sm:text-3xl text-white font-normal mb-3 sm:mb-4">
          Website Demonstration Notice
        </h3>

        <p className="text-xs sm:text-sm text-eyhan-sand/80 font-light leading-relaxed mb-4">
          This website is an interactive prototype created for design demonstration and portfolio review purposes. All brand names, locations, rates, and imagery are sample placeholders (dummy data).
        </p>

        <div className="bg-eyhan-dark border-l-2 border-eyhan-gold p-3.5 sm:p-4 mb-6 sm:mb-8 text-xs text-eyhan-sand/90 font-light leading-relaxed">
          No real bookings, reservations, or financial transactions will be processed.
        </div>

        <div className="flex justify-end w-full">
          <button
            onClick={handleDismiss}
            className="w-full sm:w-auto text-center px-4 sm:px-8 py-3 sm:py-3.5 bg-eyhan-gold hover:bg-eyhan-goldLight text-eyhan-dark font-sans text-[11px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.22em] font-semibold transition-all shadow-md whitespace-normal leading-snug"
          >
            I Understand, Open Demo Website
          </button>
        </div>
      </div>
    </div>
  );
}
