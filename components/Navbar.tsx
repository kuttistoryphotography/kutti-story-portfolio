"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? "text-[#7A8450]" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#F8EFDA]/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1700px] items-center justify-between px-8 py-10 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo.png"
            alt="Kutti Story Logo"
            width={90}
            height={90}
            priority
            className="object-contain"
          />
        </Link>

        {/* Navigation */}
        <ul
          className={`flex items-center gap-14 uppercase tracking-[4px] text-base font-medium transition-colors duration-500 ${textColor}`}
        >
          <li>
            <Link href="/" className="hover:opacity-70 transition duration-300">
              Home
            </Link>
          </li>

          <li>
            <Link
              href="#portfolio"
              className="hover:opacity-70 transition duration-300"
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              href="#films"
              className="hover:opacity-70 transition duration-300"
            >
              Films
            </Link>
          </li>

          <li>
            <Link
              href="#about"
              className="hover:opacity-70 transition duration-300"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="#contact"
              className="hover:opacity-70 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}