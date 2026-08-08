"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-18 bg-[#849669] border-t border-[#72835A]">
      <div className="mx-auto max-w-[1900px] px-8 py-12 lg:px-16">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Left Side */}
          <div className="text-center md:text-left">
            <h3 className="font-heading text-3xl font-light text-white">
              Kutti Story Photography
            </h3>

            <p className="mt-2 text-sm tracking-[2px] text-[#EAE7D8]">
              Madurai, Tamil Nadu
            </p>

            <p className="mt-4 text-sm text-[#EAE7D8]">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex gap-4">

            <a
              href="https://www.facebook.com/people/Kutti-Story-Photography/100088807664790/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-[#B79A5F] hover:border-[#B79A5F]"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-[#B79A5F] hover:border-[#B79A5F]"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://wa.me/+919342013600"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:bg-[#B79A5F] hover:border-[#B79A5F]"
            >
              <FaWhatsapp size={18} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}