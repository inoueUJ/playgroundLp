"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 py-2 shadow-sm backdrop-blur-md"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <Link
          href="/"
          className="font-bold text-4xl text-black transition-transform duration-300 hover:scale-105"
        >
          Boss Baby
        </Link>
        <ul className="flex flex-wrap items-center space-x-5 font-medium text-black text-sm">
          {[
            { href: "/", label: "HOME" },
            { href: "/information", label: "INFORMATION" },
            { href: "/profile", label: "PROFILE" },
            { href: "/video", label: "VIDEO" },
            { href: "/contact", label: "CONTACT" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative inline-block py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:text-gray-600 hover:after:w-full ${pathname === href ? "after:w-full" : ""}
                `}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="flex items-center space-x-6 pl-6">
            {[
              { href: "https://www.instagram.com/", Icon: FaInstagram },
              { href: "https://www.youtube.com/", Icon: FaYoutube },
              { href: "https://www.tiktok.com/", Icon: FaTiktok },
            ].map(({ href, Icon }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block p-1"
              >
                <span className="-inset-2 -z-10 absolute scale-50 rounded-full bg-gray-100 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </Link>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
