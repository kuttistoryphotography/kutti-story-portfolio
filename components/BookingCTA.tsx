import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="bg-white py-18">
      <div className="mx-auto max-w-5xl px-3">

        <div className="rounded-[32px] bg-[#849669] px-8 py-10 md:px-20 md:py-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

          <p className="uppercase tracking-[8px] text-white/80 text-sm">
            Ready to Begin?
          </p>

          <h2 className="mt-3 font-heading text-4xl md:text-5xl font-light leading-tight text-white">
            Let's Tell Your Story
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80">
            Every celebration deserves to be remembered beautifully.
            We'd be honoured to capture your story with timeless
            photographs and cinematic films.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white px-10 text-base font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#849669]"
          >
            Book Your Session
          </Link>

          <a
            href="https://wa.me/919342013600"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white px-10 text-base font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#849669]"
          >
            Chat on WhatsApp
          </a>

        </div>

        </div>

      </div>
    </section>
  );
}