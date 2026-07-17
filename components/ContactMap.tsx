export default function ContactMap() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-10 text-center">

          <p className="uppercase tracking-[6px] text-[#7A8450] text-sm">
            Visit Us
          </p>

          <h2 className="mt-4 text-4xl font-light text-[#3D3D3D]">
            Our Studio
          </h2>

        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg">

          <iframe
            src="https://www.google.com/maps?q=Madurai&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
          />

        </div>

      </div>
    </section>
  );
}