"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "Films", href: "/films" },
    { name: "About", href: "/about" },
    {
      name: "Contact",
      href: "https://www.kuttistoryphotography.com",
      external: true,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isHome
          ? scrolled
            ? "bg-[#849669]/95 backdrop-blur-xl border-b border-[#72835A] shadow-md"
            : "bg-transparent"
          : "bg-[#849669]/95 backdrop-blur-xl border-b border-[#72835A] shadow-md"
      }`}
    >
      <nav className="mx-auto flex max-w-[1800px] items-center justify-between px-10 py-7 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo.png"
            alt="Kutti Story Photography"
            width={120}
            height={120}
            priority
            className="h-auto w-[120px] object-contain"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[60] lg:hidden text-white"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navigation */}
        <ul
         className="hidden lg:flex items-center gap-14 uppercase tracking-[6px] text-[13px] font-medium">
          {navItems.map((item) => {
            const active = !item.external && pathname === item.href;

            return (
              <li key={item.name}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative pb-2 text-white transition-all duration-500 hover:text-[#F3D7A2]"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative pb-2 transition-all duration-500 ease-out
                    ${
                      active
                        ? "text-[#F3D7A2]"
                        : "text-white hover:text-[#F3D7A2]"
                    }
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-[2px]
                    after:bg-[#B79A5F]
                    after:transition-all
                    after:duration-300
                    ${active ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
             
        </ul>
        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`fixed inset-0 z-50 bg-[#849669]/95 backdrop-blur-xl lg:hidden flex items-center justify-center transform transition-all duration-300 ease-out ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <li key={item.name} className="py-3">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="uppercase tracking-[3px] text-white hover:text-[#F3D7A2]"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`uppercase tracking-[3px] ${
                        pathname === item.href
                          ? "text-[#F3D7A2]"
                          : "text-white hover:text-[#F3D7A2]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}