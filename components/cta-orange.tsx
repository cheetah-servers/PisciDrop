"use client";

import React from "react";
import Link from "next/link";

export function CtaOrange() {
  return (
    <section className="relative py-20 bg-orange-500 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-white/10 rounded-full blur-3xl -z-10 pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Dot Matrix Pattern */}
      <svg className="absolute right-10 top-1/2 -translate-y-1/2 opacity-15 text-white hidden lg:block -z-10" width="100" height="100" fill="none" viewBox="0 0 100 100">
        <circle cx="10" cy="10" r="2" fill="currentColor" />
        <circle cx="30" cy="10" r="2" fill="currentColor" />
        <circle cx="50" cy="10" r="2" fill="currentColor" />
        <circle cx="70" cy="10" r="2" fill="currentColor" />
        <circle cx="90" cy="10" r="2" fill="currentColor" />
        <circle cx="10" cy="30" r="2" fill="currentColor" />
        <circle cx="30" cy="30" r="2" fill="currentColor" />
        <circle cx="50" cy="30" r="2" fill="currentColor" />
        <circle cx="70" cy="30" r="2" fill="currentColor" />
        <circle cx="90" cy="30" r="2" fill="currentColor" />
        <circle cx="10" cy="50" r="2" fill="currentColor" />
        <circle cx="30" cy="50" r="2" fill="currentColor" />
        <circle cx="50" cy="50" r="2" fill="currentColor" />
        <circle cx="70" cy="50" r="2" fill="currentColor" />
        <circle cx="90" cy="50" r="2" fill="currentColor" />
        <circle cx="10" cy="70" r="2" fill="currentColor" />
        <circle cx="30" cy="70" r="2" fill="currentColor" />
        <circle cx="50" cy="70" r="2" fill="currentColor" />
        <circle cx="70" cy="70" r="2" fill="currentColor" />
        <circle cx="90" cy="70" r="2" fill="currentColor" />
        <circle cx="10" cy="90" r="2" fill="currentColor" />
        <circle cx="30" cy="90" r="2" fill="currentColor" />
        <circle cx="50" cy="90" r="2" fill="currentColor" />
        <circle cx="70" cy="90" r="2" fill="currentColor" />
        <circle cx="90" cy="90" r="2" fill="currentColor" />
      </svg>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold text-white bg-white/20 border border-white/10 shadow-xs mb-6 uppercase tracking-widest">
          Get Started Today
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 leading-tight">
          Ready to experience hassle-free <br className="hidden sm:inline" />
          peer-to-peer delivery?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-orange-100 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of Hyderabad senders and commuters saving money, reducing carbon footprint, and earning extra cash on their daily commutes.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#book"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-orange-600 bg-white hover:bg-orange-50 active:scale-98 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Book a Delivery
          </Link>
          <Link
            href="#become-traveler"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-transparent border-2 border-white/80 hover:bg-white/10 active:scale-98 transition-all duration-200"
          >
            Become a Traveler
          </Link>
        </div>

      </div>
    </section>
  );
}
