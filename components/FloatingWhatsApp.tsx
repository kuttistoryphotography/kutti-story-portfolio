"use client";

import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-20 right-3 z-[999] hidden flex-col gap-2 md:flex">

      {/* Instagram */}
      <a
        href="https://www.instagram.com/kuttistory_photography/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaInstagram className="h-6 w-6" />
      </a>

      {/* YouTube */}
      <a
        href="https://www.youtube.com/@kuttistoryphotography"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]"
      >
        <FaYoutube className="h-6 w-6" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/17MKRZ2Pgi/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(24,119,242,0.5)]"
      >
        <FaFacebookF className="h-6 w-6" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919342013600"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.7)]"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>

    </div>
  );
}