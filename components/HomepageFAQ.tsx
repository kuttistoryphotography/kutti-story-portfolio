import FaqList from "@/components/FaqList";
import Link from "next/link";
import { faqs, type HomepageFaq } from "@/lib/homepageFaqs";

export default function HomepageFAQ() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[6px] text-sm text-[#B79A5F]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-light text-[#3F5A4A]">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6E6E6E]">
            Here are some of the most common questions couples ask before
            booking with Kutti Story Photography.
          </p>
        </div>

        {/* FAQ List */}
        <FaqList
          faqs={faqs.map((faq: HomepageFaq, index) => ({
            _id: index.toString(),
            ...faq,
          }))}
        />

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-light text-[#3F5A4A]">
            Still Have Questions?
          </h3>

          <p className="mt-4 text-gray-600">
            Visit our complete FAQ page or contact us directly.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/faq"
              className="rounded-full border border-[#7F977B] px-8 py-3 font-medium text-[#3F5A4A] transition hover:bg-[#7F977B] hover:text-white"
            >
              View All FAQs
            </Link>

            <a
              href="https://www.kuttistoryphotography.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#7F977B] px-8 py-3 font-medium text-white transition hover:opacity-90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}