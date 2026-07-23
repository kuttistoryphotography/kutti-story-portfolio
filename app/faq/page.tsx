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

      <main className="bg-white min-h-screen pt-20 pb-24">

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-[#8A9A7B] uppercase tracking-[0.3em]">
            Support
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-light">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 leading-8">
            Find answers to the most common questions about our
            photography services.
          </p>

        </section>

        {/* FAQ List */}
        <section className="max-w-4xl mx-auto px-6 mt-20">

         <FaqAccordion faqs={faqs} />

        </section>
        

      </main>

      <Footer />
    </>
  );
}