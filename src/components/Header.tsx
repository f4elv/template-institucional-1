"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

import { Button } from "./Button";

import { scrolltoSection, scrollToTop } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  ``;
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className={`text-2xl font-extrabold transition-colors duration-300 cursor-pointer ${isScrolled ? "text-black" : "text-white"}`}
          >
            {siteConfig.businessName}
          </button>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-4 font-medium">
            <Button
              variant="transparent"
              onClick={() => scrolltoSection("services")}
              className={`${isScrolled ? "text-black" : "text-white"}`}
            >
              Services
            </Button>
            <Button
              variant="transparent"
              className={`${isScrolled ? "text-black" : "text-white"}`}
              onClick={() => scrolltoSection("gallery")}
            >
              Gallery
            </Button>
            <Button
              variant="transparent"
              className={`${isScrolled ? "text-black" : "text-white"}`}
              onClick={() => scrolltoSection("about")}
            >
              About
            </Button>
            <Button
              variant="transparent"
              className={`${isScrolled ? "text-black" : "text-white"}`}
              onClick={() => scrolltoSection("contact")}
            >
              Contact
            </Button>
            <a
              href={`https://wa.me/${siteConfig.contact.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 font-extrabold"
            >
              <Button variant="primary">Agendar </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
