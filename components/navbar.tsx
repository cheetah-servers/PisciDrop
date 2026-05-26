"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll to update navbar padding
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Image */}
          <Link href="/" className="flex items-center group">
            <img
              src="https://ik.imagekit.io/dypkhqxip/picsihoriz?updatedAt=1778919009480"
              alt="PicsiDrop Logo"
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Right Side Group */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Desktop Nav Links */}
            <nav className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-sm font-semibold text-zinc-700 hover:text-orange-500 transition-colors relative py-1 group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-zinc-700 hover:text-orange-500 transition-colors relative py-1 group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/#how-it-works"
                className="text-sm font-semibold text-zinc-700 hover:text-orange-500 transition-colors relative py-1 group"
              >
                How it Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/#become-traveler"
                className="text-sm font-semibold text-zinc-700 hover:text-orange-500 transition-colors relative py-1 group"
              >
                For Travelers
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/#pricing"
                className="text-sm font-semibold text-zinc-700 hover:text-orange-500 transition-colors relative py-1 group"
              >
                Pricing
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold text-zinc-700 hover:text-orange-500 transition-colors relative py-1 group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Desktop CTA Button */}
            <Link
              href="/#download"
              className="inline-flex items-center justify-center px-4.5 py-2.5 rounded-xl text-sm font-medium text-zinc-700 bg-transparent border border-zinc-300/80 hover:bg-zinc-100 hover:border-zinc-400 hover:text-zinc-900 transition-all duration-200"
            >
              {/* Real Google Play Store 4-Color SVG Icon */}
              <svg
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                className="w-4.5 h-4.5 mr-2.5"
              >
                <path
                  d="M12.788 3.968A22.33 22.33 0 0 0 11 11.968v232.064c0 3.003.585 5.86 1.788 8.487l1.096 1.096L143.918 128 13.884 2.872l-1.096 1.096z"
                  fill="#00a0e9"
                />
                <path
                  d="M185.748 86.17l-41.83 41.83 41.83 41.83 50.147-28.742c13.12-7.518 13.12-19.82 0-27.338l-50.147-28.58z"
                  fill="#ffc20e"
                />
                <path
                  d="M143.918 128L185.75 86.17 18.064 6.843c-6.19-3.553-12.753-2.884-18.064.93L143.918 128z"
                  fill="#e41e26"
                />
                <path
                  d="M143.918 128L0 248.227c5.31 3.814 11.874 4.483 18.064.93l167.684-79.327L143.918 128z"
                  fill="#39b54a"
                />
              </svg>
              Download the app
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-zinc-205/50 transition-colors focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-3 bg-white border-b border-zinc-200/50 shadow-lg">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-zinc-700 hover:bg-zinc-200/30 hover:text-orange-500 transition-all"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-zinc-700 hover:bg-zinc-200/30 hover:text-orange-500 transition-all"
            >
              About
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-zinc-700 hover:bg-zinc-200/30 hover:text-orange-500 transition-all"
            >
              How it Works
            </Link>
            <Link
              href="/#become-traveler"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-zinc-700 hover:bg-zinc-200/30 hover:text-orange-500 transition-all"
            >
              For Travelers
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-zinc-700 hover:bg-zinc-200/30 hover:text-orange-500 transition-all"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-zinc-700 hover:bg-zinc-200/30 hover:text-orange-500 transition-all"
            >
              Contact
            </Link>
            <hr className="border-zinc-200 my-2" />
            <div className="px-3">
              <Link
                href="/#download"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center py-2.5 rounded-xl text-sm font-medium text-zinc-700 bg-transparent border border-zinc-300/80 hover:bg-zinc-100 transition-colors w-full"
              >
                {/* Real Google Play Store SVG Icon for mobile */}
                <svg
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  className="w-4.5 h-4.5 mr-2.5"
                >
                  <path
                    d="M12.788 3.968A22.33 22.33 0 0 0 11 11.968v232.064c0 3.003.585 5.86 1.788 8.487l1.096 1.096L143.918 128 13.884 2.872l-1.096 1.096z"
                    fill="#00a0e9"
                  />
                  <path
                    d="M185.748 86.17l-41.83 41.83 41.83 41.83 50.147-28.742c13.12-7.518 13.12-19.82 0-27.338l-50.147-28.58z"
                    fill="#ffc20e"
                  />
                  <path
                    d="M143.918 128L185.75 86.17 18.064 6.843c-6.19-3.553-12.753-2.884-18.064.93L143.918 128z"
                    fill="#e41e26"
                  />
                  <path
                    d="M143.918 128L0 248.227c5.31 3.814 11.874 4.483 18.064.93l167.684-79.327L143.918 128z"
                    fill="#39b54a"
                  />
                </svg>
                Download the app
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
