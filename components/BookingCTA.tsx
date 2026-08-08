import Link from "next/link";
import { Calendar, MessageCircle } from "lucide-react";
import { CityData } from "@/lib/cities";

type BookingCTAProps = {
  city?: CityData;
};

export default function BookingCTA({
  city,
}: BookingCTAProps) {
  return (
    <section className="bg-white pt-18 pb-32">
      <div className="h-5 bg-white-500"></div> 
      
      <div className="mt-8 flex flex-col gap-4 px-4 md:px-0 md:flex-row md:justify-center">

        <div className="mx-auto max-w-4xl rounded-[32px] bg-[#849669] px-6 py-14 md:px-16 md:py-16 text-center shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

          <p className="mt-4 uppercase tracking-[8px] text-white/80 text-sm">
            {city ? `Wedding Photography in ${city.city}` : "Ready to Begin?"}
          </p>

          <h2 className="mt-3 font-heading text-3xl md:text-5xl font-light leading-tight text-white">
            {city
              ? `Book Your Wedding Photography in ${city.city}`
              : "Let's Tell Your Story"}
          </h2>

          <div className="mx-auto max-w-4xl">

            <p className="mt-6 text-base md:text-lg leading-8 text-white/90">
              {city ? (
                <>
                  Looking for the best wedding photographer in{" "}
                  <strong>{city.city}</strong>? Contact Kutti Story Photography today
                  to book your wedding photography, candid photography, cinematic
                  wedding films, engagement shoot, or pre-wedding session.
                </>
              ) : (
                <>
                  Every celebration deserves to be remembered beautifully.
                  We'd be honoured to capture your story with timeless
                  photographs and cinematic films.
                </>
              )}
            </p>
          
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex justify-center gap-4 mt-10">

            <Link
              href="https://www.kuttistoryphotography.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white px-10 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#849669]"
            >
              <Calendar className="h-5 w-5" />
              Book Your Session
            </Link>

            <a
              href="https://wa.me/919342013600"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white px-10 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#849669]"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
            
          </div>
          {/* gap*/}
          <div className="h-4 bg-white-500"></div> 

          {/* Mobile Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 md:hidden">

            <Link
              href="https://www.kuttistoryphotography.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-55 items-center justify-center gap-2 rounded-full border border-white text-white font-semibold"
            >
              <Calendar className="h-5 w-5" />
              Book Your Session
            </Link>

            <a
              href="https://wa.me/919342013600"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-55 items-center justify-center gap-2 rounded-full border border-white text-white font-semibold"
            >
              <MessageCircle className="h-4 w-5" />
              Chat on WhatsApp
            </a>
            <div className="h-2 bg-white-500"></div> 
          </div>

        </div>

      </div>
      <div className="h-5 bg-white-500"></div> 
    </section>
  );
}