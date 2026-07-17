"use client";

export default function ContactForm() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">

        <div className="rounded-3xl bg-white p-8 md:p-12 shadow-sm">

          <div className="mb-12 text-center">
            <p className="uppercase tracking-[6px] text-[#7A8450] text-sm">
              Booking Enquiry
            </p>

            <h2 className="mt-4 text-4xl font-light text-[#3D3D3D]">
              Let's Create Beautiful Memories
            </h2>

            <p className="mt-4 text-gray-600">
              Fill in your details and we'll contact you shortly.
            </p>
          </div>

          <form className="grid gap-8 md:grid-cols-2">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm text-[#7A8450]">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-[#DDD2B4] px-5 py-4 outline-none transition focus:border-[#7A8450]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm text-[#7A8450]">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="w-full rounded-xl border border-[#DDD2B4] px-5 py-4 outline-none transition focus:border-[#7A8450]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm text-[#7A8450]">
                Email
              </label>

              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full rounded-xl border border-[#DDD2B4] px-5 py-4 outline-none transition focus:border-[#7A8450]"
              />
            </div>

            {/* Event Date */}
            <div>
              <label className="mb-2 block text-sm text-[#7A8450]">
                Event Date
              </label>

              <input
                type="date"
                className="w-full rounded-xl border border-[#DDD2B4] px-5 py-4 outline-none transition focus:border-[#7A8450]"
              />
            </div>

            {/* Event Type */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-[#7A8450]">
                Event Type
              </label>

              <select className="w-full rounded-xl border border-[#DDD2B4] px-5 py-4 outline-none transition focus:border-[#7A8450]">
                <option>Wedding</option>
                <option>Engagement</option>
                <option>Pre Wedding</option>
                <option>Reception</option>
                <option>Maternity</option>
                <option>Kids</option>
                <option>Commercial</option>
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-[#7A8450]">
                Tell us about your event
              </label>

              <textarea
                rows={6}
                placeholder="Share your story with us..."
                className="w-full rounded-xl border border-[#DDD2B4] px-5 py-4 outline-none transition focus:border-[#7A8450]"
              />
            </div>

            {/* Button */}
            <div className="md:col-span-2 text-center">

              <button
                type="submit"
                className="rounded-full bg-[#7A8450] px-12 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-[#66703F]"
              >
                Send Enquiry
              </button>

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}