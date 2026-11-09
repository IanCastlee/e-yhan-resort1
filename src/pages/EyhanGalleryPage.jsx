import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import EyhanReveal from '../components/EyhanReveal';
import eyhanResortData from '../data/eyhanResort';

export default function EyhanGalleryPage() {
  const { brand, gallery } = eyhanResortData;
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="pt-36 pb-28 px-6 sm:px-12 max-w-7xl mx-auto">
      <Helmet>
        <title>{`Visual Gallery & Estates | ${brand.name}`}</title>
      </Helmet>

      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <span className="text-[10px] uppercase tracking-ultra text-eyhan-gold font-sans block">
          Visual Anthology
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal">
          Moments of Seclusion
        </h1>
        <p className="text-sm text-eyhan-sand/70 font-light leading-relaxed">
          Glimpses into cliffside living, tranquil volcanic grottos, overwater catamaran nets, and private catamaran expeditions.
        </p>
      </div>

      {/* Masonry-Style Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gallery.map((item, idx) => (
          <EyhanReveal key={item.id} delay={(idx % 3) * 100}>
            <div
              onClick={() => setActiveImage(item)}
              className="group relative cursor-pointer bg-eyhan-surface border border-eyhan-borderSubtle hover:border-eyhan-gold transition-all duration-500 overflow-hidden shadow-2xl"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-eyhan-dark/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[9px] uppercase tracking-widest text-eyhan-gold mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg text-white">{item.title}</h3>
              </div>
            </div>
          </EyhanReveal>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-eyhan-dark/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <div className="relative max-w-4xl w-full border border-eyhan-gold p-2 bg-eyhan-surface">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 text-white hover:text-eyhan-gold text-2xl font-light focus:outline-none"
            >
              &times;
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.title}
              className="w-full max-h-[75vh] object-contain"
            />
            <div className="p-4 text-center">
              <span className="text-[10px] uppercase tracking-widest text-eyhan-gold block">
                {activeImage.category}
              </span>
              <h4 className="font-serif text-xl text-white mt-1">{activeImage.title}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
