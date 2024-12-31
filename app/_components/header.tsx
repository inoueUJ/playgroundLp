"use client";

import { useState, useEffect, useCallback } from "react";
import { FaInstagram, FaYoutube, FaTiktok, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/information", label: "INFORMATION" },
    { href: "/profile", label: "PROFILE" },
    { href: "/video", label: "VIDEO" },
    { href: "/contact", label: "CONTACT" },
  ];

  const socialLinks = [
    {
      href: "https://www.instagram.com/bossbaby_2002?igsh=MWFsbHFxajZrbXZ6YQ==/",
      Icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://www.youtube.com/@Bossbaby_officialYouTube",
      Icon: FaYoutube,
      label: "YouTube",
    },
    {
      href: "https://www.tiktok.com/@bossbaby_official.2002?_t=8sgPv6Zudzs&_r=1",
      Icon: FaTiktok,
      label: "TikTok",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "bg-white/90 py-2 shadow-sm backdrop-blur-md"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <Link
          href="/"
          className="font-bold text-2xl text-black transition-transform duration-300 hover:scale-105 sm:text-3xl md:text-4xl"
        >
          Boss Baby
        </Link>
        <Button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
        </Button>
        <ul
          className={`${
            isMenuOpen ? "flex bg-white/90 backdrop-blur-md" : "hidden"
          } w-full flex-col items-center space-y-4 font-medium text-black text-sm md:mt-0 md:flex md:w-auto md:flex-row md:space-x-5 md:space-y-0 ${
            isMenuOpen ? "absolute top-full right-0 left-0 p-4 shadow-md" : ""
          }`}
        >
          {navItems.map(({ href, label }) => (
            <li key={href} className="w-full md:w-auto">
              <Link
                href={href}
                className={`relative inline-block py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:text-gray-600 hover:after:w-full ${
                  pathname === href ? "after:w-full" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="flex items-center space-x-6 md:pl-6">
            {socialLinks.map(({ href, Icon, label }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block p-1"
                aria-label={label}
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
