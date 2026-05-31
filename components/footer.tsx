"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Set up useScroll target on this container.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress from [0, 1] to [-50, 150]
  const truckY = useTransform(scrollYProgress, [0, 1], [-50, 150]);

  const socialLinks = [
    { href: "https://www.linkedin.com/company/paverasa-pvt-ltd/", label: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
    { href: "https://www.instagram.com/paverasa__pvt__ltd/", label: "Instagram", icon: <Instagram className="w-5 h-5" /> },
    { href: "https://youtube.com/@paverasa_pvt_ltd?si=83PF_duYpXbWwM3n", label: "YouTube", icon: <Youtube className="w-5 h-5" /> },
    {
      href: "https://whatsapp.com/channel/0029VbCOU4E1yT27hTnUlk1x",
      label: "WhatsApp Channel",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.977 14.113.953 11.488.953c-5.441 0-9.866 4.372-9.87 9.802 0 2.01.535 3.975 1.558 5.724L1.93 22.228l5.882-1.536z" />
        </svg>
      )
    },
    {
      href: "https://paverasa.blogspot.com/2026/05/thats-when-paverasa-began.html",
      label: "Blog",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.025 0H22.05C23.1 0 24 .9 24 2.025v19.95C24 23.1 23.1 24 21.976 24zM12 3.975H9c-2.775 0-5.025 2.25-5.025 5.025v6c0 2.774 2.25 5.024 5.025 5.024h6c2.774 0 5.024-2.25 5.024-5.024v-3.975c0-.6-.45-1.05-1.05-1.05H18c-.524 0-.976-.45-.976-.976 0-2.776-2.25-5.026-5.024-5.026zm3.074 12H9c-.525 0-.975-.45-.975-.975s.45-.976.975-.976h6.074c.526 0 .977.45.977.976s-.45.976-.975.976zm-2.55-7.95c.527 0 .976.45.976.975s-.45.975-.975.975h-3.6c-.525 0-.976-.45-.976-.975s.45-.975.975-.975h3.6z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full flex flex-col font-sans">
      {/* 3. Main Parallax Container */}
      <section
        ref={containerRef}
        style={{
          backgroundImage: `url("https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260430_115327_3f256636-9e63-4885-8d0b-09317dc2b0a5.png&w=1280&q=85")`
        }}
        className="w-full h-screen bg-cover bg-center overflow-hidden relative"
      >
        {/* 4. The Top-Aligned Footer Card */}
        <div className="absolute top-0 w-full z-30 pt-12 md:pt-24 lg:pt-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl lg:rounded-3xl overflow-hidden"
          >
            {/* Footer Content (Top Half) */}
            <div className="flex flex-col md:flex-row justify-between items-start p-8 sm:p-10 md:p-12 lg:p-16 gap-10">
              
              {/* Logo Area */}
              <Link href="/" className="flex items-center group">
                <img
                  src="https://ik.imagekit.io/dypkhqxip/picsihoriz?updatedAt=1778919009480"
                  alt="PicsiDrop Logo"
                  className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>

              {/* Links Area */}
              <div className="flex flex-col sm:flex-row gap-10 md:gap-16 lg:gap-24 w-full md:w-auto">
                {/* Quick Links Column */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900">
                    Quick Links
                  </h4>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link href="/" className="text-gray-500 text-sm font-medium hover:text-orange-600 transition-colors duration-200">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="text-gray-500 text-sm font-medium hover:text-orange-600 transition-colors duration-200">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/#how-it-works" className="text-gray-500 text-sm font-medium hover:text-orange-600 transition-colors duration-200">
                        How it Works
                      </Link>
                    </li>
                    <li>
                      <Link href="/#pricing" className="text-gray-500 text-sm font-medium hover:text-orange-600 transition-colors duration-200">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="/#faq" className="text-gray-500 text-sm font-medium hover:text-orange-600 transition-colors duration-200">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Legal Column */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900">
                    Legal
                  </h4>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <Link href="/privacy" className="text-gray-500 text-sm font-medium hover:text-orange-600 transition-colors duration-200">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="text-gray-500 text-sm font-medium hover:text-orange-600 transition-colors duration-200">
                        Terms of Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-500 text-sm font-medium hover:text-orange-600 transition-colors duration-200">
                        Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Footer Content (Bottom Bar) */}
            <div className="border-t border-gray-100 bg-white py-6 px-8 sm:px-10 md:px-12 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col gap-1 text-sm text-gray-500 font-medium">
                <span>
                  Paverasa Private Limited © {new Date().getFullYear()} All Rights Reserved
                </span>
                <span className="text-xs text-gray-400 font-normal">
                  Built and Maintained by{" "}
                  <a
                    href="https://www.redlix.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange-600 transition-colors font-semibold underline"
                  >
                    Studio Redlix
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

        {/* 5. Background Truck Parallax Layer */}
        <motion.div
          style={{ y: truckY }}
          className="absolute inset-x-0 bottom-0 h-full pointer-events-none z-20"
        >
          <img
            src="https://roof-wish-40038865.figma.site/_components/v2/f31fd17907ce60745d45e83a61d44fd3810d5f25/truck_1.8c4bff83.png"
            alt="Foreground Truck"
            className="w-full h-full object-contain object-bottom origin-bottom scale-[1.5] sm:scale-110 md:scale-[2.0] lg:scale-105"
          />
        </motion.div>
      </section>
    </div>
  );
}
