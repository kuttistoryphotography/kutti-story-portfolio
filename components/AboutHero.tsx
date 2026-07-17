import Image from "next/image";


export default function AboutHero() {
  return (
    <section className="relative h-[70vh] overflow-hidden">

      <Image
        src="/images/hero/hero1.jpg"
        alt="About Kutti Story"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        <p className="uppercase tracking-[8px] text-white text-sm">
          About Us
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-light text-white">
          Kutti Story
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/90 leading-8">
          Capturing emotions, preserving memories,
          and telling stories that last a lifetime.
        </p>

      </div>

    </section>
  );
}