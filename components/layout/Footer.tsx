"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-[#849669] border-t border-[#72835A]">
      <div className="mx-auto w-full max-w-[1900px] px-6 sm:px-8 lg:px-16 py-10 sm:py-12">

        <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">

          {/* =========================
              LEFT SIDE
          ========================= */}
          <div className="w-full text-center md:text-left">

            <h3 className="font-heading text-2xl sm:text-3xl font-light text-white">
              Kutti Story Photography
            </h3>

            <p className="mt-2 text-sm tracking-[2px] text-[#EAE7D8]">
              Madurai, Tamil Nadu
            </p>

            <p className="mt-4 text-sm text-[#EAE7D8]">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>

          </div>

          {/* =========================
              SOCIAL ICONS
          ========================= */}
          <div className="flex shrink-0 items-center justify-center gap-4">

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/people/Kutti-Story-Photography/100088807664790/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                text-white
                transition-all
                duration-300
                hover:border-[#B79A5F]
                hover:bg-[#B79A5F]
              "
            >
              <FaFacebookF size={18} />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                text-white
                transition-all
                duration-300
                hover:border-[#B79A5F]
                hover:bg-[#B79A5F]
              "
            >
              <FaInstagram size={18} />
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/+919342013600"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                text-white
                transition-all
                duration-300
                hover:border-[#B79A5F]
                hover:bg-[#B79A5F]
              "
            >
              <FaWhatsapp size={18} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}