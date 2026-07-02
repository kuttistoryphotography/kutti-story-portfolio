"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[#D9D0B4] bg-[#F8EFDA]">
      <div className="w-full px-8 lg:px-16 xl:px-20 py-10">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* Left Side */}
          <div className="text-center md:text-left">
            <p className="text-sm text-[#7A8450]">
              © {new Date().getFullYear()} Kutti Story Photography
            </p>

            <p className="mt-1 text-sm text-[#7A8450]">
              Madurai, Tamil Nadu
            </p>
          </div>

          {/* Right Side */}
          <div className="flex justify-center md:justify-end gap-4">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/Kutti-Story-Photography/100088807664790/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#BFB58D] text-[#7A8450] transition-all duration-300 hover:bg-[#1877F2] hover:text-white"
            >
              <FaFacebookF size={17} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#BFB58D] text-[#7A8450] transition-all duration-300 hover:bg-[#E4405F] hover:text-white"
            >
              <FaInstagram size={17} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/+919342013600"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#BFB58D] text-[#7A8450] transition-all duration-300 hover:bg-[#25D366] hover:text-white"
            >
              <FaWhatsapp size={17} />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}