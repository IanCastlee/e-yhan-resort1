import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function EyhanScrollytelling({ scrollytelling }) {
  const [activeStep, setActiveStep] = useState(0);
  const chapterRefs = useRef([]);

  const { eyebrow, heading, subtitle, chapters = [] } = scrollytelling;

  useEffect(() => {
    const observers = [];

    chapterRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStep(index);
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '-10% 0px -25% 0px',
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [chapters]);

  const scrollToChapter = (index) => {
    const target = chapterRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative py-28 bg-eyhan-dark border-b border-eyhan-borderSubtle">
      {/* Section Header */}
      <div className="max-w-[1536px] mx-auto px-2 sm:px-8 lg:px-10 mb-16 sm:mb-24 text-center">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-eyhan-gold" />
          <span className="text-[10px] uppercase tracking-ultra text-eyhan-gold font-sans font-semibold">
            {eyebrow}
          </span>
          <span className="w-8 h-px bg-eyhan-gold" />
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal mb-4">
          {heading}
        </h2>
        <p className="text-xs sm:text-sm text-eyhan-sand/70 font-light max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Quick Chapter Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-8">
          {chapters.map((ch, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={ch.id}
                onClick={() => scrollToChapter(idx)}
                className={`px-3.5 sm:px-5 py-2 text-[10px] sm:text-xs font-sans uppercase tracking-[0.2em] transition-all duration-300 border ${
                  isActive
                    ? 'bg-eyhan-gold text-eyhan-dark border-eyhan-gold font-semibold shadow-goldGlow scale-105'
                    : 'bg-eyhan-surface/60 text-eyhan-sand/70 border-white/10 hover:border-eyhan-gold/50 hover:text-white'
                }`}
              >
                <span>{ch.step} &middot; {ch.time}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Scrollytelling Stage: Pinned Visual Canvas on Left + Narrative Stream on Right */}
      <div className="max-w-[1536px] mx-auto px-2 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative">
          {/* Sticky Visual Stage (Sticks on desktop & mobile) */}
          <div className="lg:col-span-6 sticky top-20 lg:top-28 z-20">
            <div className="relative h-[48vh] sm:h-[60vh] lg:h-[75vh] w-full rounded-2xl overflow-hidden border border-eyhan-gold/30 shadow-2xl bg-eyhan-surface">
              {/* Stacked Chapter Images with Cross-Fade */}
              {chapters.map((ch, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={ch.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-out ${
                      isActive
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                  >
                    <img
                      src={ch.image}
                      alt={ch.title}
                      className="w-full h-full object-cover"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-eyhan-dark/95 via-eyhan-dark/30 to-black/40" />
                  </div>
                );
              })}

              {/* Top Floating Ambient Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="px-3.5 py-1.5 bg-eyhan-dark/85 backdrop-blur-md border border-eyhan-gold/40 rounded-full flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-eyhan-gold animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-eyhan-goldLight font-sans font-semibold">
                    {chapters[activeStep]?.time} &middot; CHAPTER {chapters[activeStep]?.step} OF {chapters.length}
                  </span>
                </div>

                <span className="hidden sm:inline-block text-[9px] uppercase tracking-ultra text-white/70 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-sans">
                  Live Viewport Sync
                </span>
              </div>

              {/* Bottom Quote & Title Overlay on Active Image */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 bg-gradient-to-t from-eyhan-dark via-eyhan-dark/80 to-transparent">
                <blockquote className="font-serif italic text-sm sm:text-base text-eyhan-sand mb-2 leading-relaxed">
                  {chapters[activeStep]?.quote}
                </blockquote>
                <p className="text-[11px] font-sans uppercase tracking-[0.22em] text-eyhan-gold font-medium">
                  {chapters[activeStep]?.title}
                </p>

                {/* Linear Luxury Progress Track */}
                <div className="w-full bg-white/15 h-1 rounded-full overflow-hidden mt-4">
                  <div
                    className="bg-eyhan-gold h-full transition-all duration-700 ease-out"
                    style={{
                      width: `${((activeStep + 1) / chapters.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Narrative Stream on the Right */}
          <div className="lg:col-span-6 space-y-16 sm:space-y-24 py-8 lg:py-16">
            {chapters.map((ch, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={ch.id}
                  ref={(el) => (chapterRefs.current[idx] = el)}
                  className={`transition-all duration-700 p-6 sm:p-10 rounded-2xl border ${
                    isActive
                      ? 'bg-eyhan-surface/90 border-eyhan-gold/60 shadow-goldGlow scale-[1.02]'
                      : 'bg-eyhan-surface/30 border-eyhan-borderSubtle opacity-60 hover:opacity-90'
                  }`}
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl sm:text-4xl text-eyhan-gold">
                      {ch.step}
                    </span>
                    <span className="px-3 py-1 text-[10px] font-sans uppercase tracking-[0.24em] text-eyhan-sand/80 bg-eyhan-dark/60 rounded-full border border-white/10 font-medium">
                      {ch.time}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2">
                    {ch.title}
                  </h3>
                  <h4 className="text-xs uppercase tracking-widest text-eyhan-goldLight mb-4 font-sans font-medium">
                    {ch.subtitle}
                  </h4>

                  <p className="text-xs sm:text-sm text-eyhan-sand/80 font-light leading-relaxed mb-6">
                    {ch.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 pt-4 border-t border-eyhan-borderSubtle">
                    {ch.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-xs text-eyhan-sand/90 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-eyhan-gold shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

EyhanScrollytelling.propTypes = {
  scrollytelling: PropTypes.shape({
    eyebrow: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    chapters: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        step: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
        quote: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
