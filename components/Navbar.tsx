"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
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

        {/* Navigation */}
        <ul
         className="flex items-center gap-14 uppercase tracking-[6px] text-[13px] font-medium">
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
      </nav>
    </header>
  );
}