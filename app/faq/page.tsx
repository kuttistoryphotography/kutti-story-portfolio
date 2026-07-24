import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { connectDB } from "@/lib/mongodb";
import Faq from "@/models/Faq";
import FaqAccordion from "@/components/FaqAccordion";

export default async function FaqPage() {
  await connectDB();

  const faqs = (
    await Faq.find({
        isActive: true,
    })
        .sort({
        displayOrder: 1,
        createdAt: -1,
        })
        .lean()
    ).map((faq) => ({
    _id: faq._id.toString(),
    question: faq.question,
    answer: faq.answer,
    category: faq.category,
    displayOrder: faq.displayOrder,
    isActive: faq.isActive,
  }));

  return (
    <>
      <Navbar />

      <main className="bg-[#FAFAF8] min-h-screen pt-24 md:pt-32 pb-24">

        {/* Hero */}
          <section className="max-w-6xl mx-auto px-6 pt-8 md:pt-12 pb-8 md:pb-12 text-center">
          <div className="h-10 bg-white-500"></div>
            <p className="uppercase tracking-[6px] text-sm text-[#B79A5F]">
              SUPPORT
            </p>

            <h1 className="mt-5 font-heading text-5xl md:text-7xl font-light leading-[1.1] text-[#2D2D2D]">
              Frequently Asked
              <br />
              Questions
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 font-light text-[#6E6E6E]">
              Find answers to the most common questions about our photography services,
              wedding packages, bookings and everything you need before your special day.
            </p>

          </section>

        {/* FAQ List */}
          <section className="max-w-5xl mx-auto px-6 mt-12 md:mt-20">

          <FaqAccordion faqs={faqs} />

          </section>

      </main>

      <Footer />
    </>
  );
}