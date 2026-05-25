"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white text-zinc-500 border-t border-zinc-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-zinc-200">
          
          {/* Brand Info (Span 4) */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="flex items-center group">
              <img
                src="https://ik.imagekit.io/dypkhqxip/picsihoriz?updatedAt=1778919009480"
                alt="PicsiDrop Logo"
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] -ml-2"
              />
            </Link>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4 text-zinc-400">
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m8.4 2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Grid (Span 8) */}
          <div className="md:col-span-8 grid grid-cols-2 gap-8 md:pl-16">
            {/* Column 1: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-3 text-sm font-normal">
                <li>
                  <Link href="#" className="hover:text-orange-500 transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-orange-500 transition-colors duration-200">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-orange-500 transition-colors duration-200">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-orange-500 transition-colors duration-200">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Legal */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Legal</h4>
              <ul className="space-y-3 text-sm font-normal">
                <li>
                  <Link href="/privacy" className="hover:text-orange-500 transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-orange-500 transition-colors duration-200">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-orange-500 transition-colors duration-200">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 text-center">
          <p className="text-xs text-zinc-500 font-normal">
            PicsiDrop © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
