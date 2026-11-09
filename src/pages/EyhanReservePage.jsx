import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import EyhanBookingForm from '../components/EyhanBookingForm';
import eyhanResortData from '../data/eyhanResort';

export default function EyhanReservePage() {
  const [searchParams] = useSearchParams();
  const preselectedVilla = searchParams.get('villa') || '';
  const initialCheckIn = searchParams.get('checkIn') || '';
  const initialCheckOut = searchParams.get('checkOut') || '';
  const initialAdults = searchParams.get('adults') || '2';
  const initialChildren = searchParams.get('children') || '0';

  const { brand, villas, contact } = eyhanResortData;

  return (
    <div className="pt-36 pb-28 px-6 sm:px-12 max-w-7xl mx-auto">
      <Helmet>
        <title>{`Reserve An Estate | ${brand.name}`}</title>
      </Helmet>

      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-[10px] uppercase tracking-ultra text-eyhan-gold font-sans block">
          Discreet Private Hosting
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-white font-normal">
          Begin Your Private Stay
        </h1>
        <p className="text-sm text-eyhan-sand/70 font-light leading-relaxed">
          {initialCheckIn ? (
            <span className="text-eyhan-gold font-medium">
              Checking availability for {initialCheckIn} to {initialCheckOut} ({initialAdults} Adults, {initialChildren} Children).
            </span>
          ) : (
            'Submit your stay dates and preferences below. Our VIP Guest Atelier will review availability and prepare your bespoke itinerary.'
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8">
          <EyhanBookingForm
            villas={villas}
            preselectedVilla={preselectedVilla}
            initialCheckIn={initialCheckIn}
            initialCheckOut={initialCheckOut}
          />
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-eyhan-surface border border-eyhan-border p-8 shadow-2xl space-y-6">
            <h3 className="font-serif text-2xl text-white">Concierge &amp; Transfers</h3>
            <p className="text-xs text-eyhan-sand/70 font-light leading-relaxed">
              Every stay at E-YHAN includes round-the-clock dedicated butler hosting, discreet private check-in, and complimentary speed boat transfers from the mainland.
            </p>

            <div className="pt-4 border-t border-eyhan-borderSubtle space-y-3 text-xs font-light">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-eyhan-muted block">Direct VIP Telephone</span>
                <span className="text-eyhan-gold">{contact.vipPhone}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-eyhan-muted block">Concierge Atelier</span>
                <span className="text-eyhan-sand">{contact.conciergeEmail}</span>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-eyhan-muted block">Helipad / Coordinates</span>
                <span className="text-eyhan-sand">{contact.coordinates}</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-eyhan-card border border-eyhan-borderSubtle">
            <span className="text-[10px] uppercase tracking-widest text-eyhan-gold block mb-2 font-medium">
              Estate Buyout Note
            </span>
            <p className="text-xs text-eyhan-sand/70 font-light leading-relaxed">
              Seeking exclusive use of the entire 18-villa sanctuary for weddings, private summits, or family reunions? Please request a Private Island Buyout in the form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
