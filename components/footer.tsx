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
                className="h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] -ml-2"
              />
            </Link>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4 text-zinc-400">
              <a
                href="https://www.linkedin.com/company/paverasa-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/paverasa__pvt__ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m8.4 2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@paverasa_pvt_ltd?si=83PF_duYpXbWwM3n"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbCOU4E1yT27hTnUlk1x"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                aria-label="WhatsApp Channel"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.977 14.113.953 11.488.953c-5.441 0-9.866 4.372-9.87 9.802 0 2.01.535 3.975 1.558 5.724L1.93 22.228l5.882-1.536z" />
                </svg>
              </a>
              <a
                href="https://paverasa.blogspot.com/2026/05/thats-when-paverasa-began.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
                aria-label="Blog"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.025 0H22.05C23.1 0 24 .9 24 2.025v19.95C24 23.1 23.1 24 21.976 24zM12 3.975H9c-2.775 0-5.025 2.25-5.025 5.025v6c0 2.774 2.25 5.024 5.025 5.024h6c2.774 0 5.024-2.25 5.024-5.024v-3.975c0-.6-.45-1.05-1.05-1.05H18c-.524 0-.976-.45-.976-.976 0-2.776-2.25-5.026-5.024-5.026zm3.074 12H9c-.525 0-.975-.45-.975-.975s.45-.976.975-.976h6.074c.526 0 .977.45.977.976s-.45.976-.975.976zm-2.55-7.95c.527 0 .976.45.976.975s-.45.975-.975.975h-3.6c-.525 0-.976-.45-.976-.975s.45-.975.975-.975h3.6z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Grid (Span 5 aligned on the right) */}
          <div className="md:col-span-5 md:col-start-8 grid grid-cols-2 gap-4">
            {/* Column 1: Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-1.5 text-sm font-normal">
                <li>
                  <Link href="/" className="hover:text-orange-500 transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-orange-500 transition-colors duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="hover:text-orange-500 transition-colors duration-200">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-orange-500 transition-colors duration-200">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-orange-500 transition-colors duration-200">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Legal */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Legal</h4>
              <ul className="space-y-1.5 text-sm font-normal">
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
                  <Link href="/contact" className="hover:text-orange-500 transition-colors duration-200">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 font-normal">
            Paverasa Private Limited © {new Date().getFullYear()} All Rights Reserved
          </p>
          <p className="text-xs text-zinc-500 font-normal">
            Built and Maintained by{" "}
            <a
              href="https://www.redlix.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-zinc-800 transition-colors font-semibold underline"
            >
              Studio Redlix
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
