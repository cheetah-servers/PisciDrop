"use client";

import React from "react";
import Link from "next/link";

export function CtaCards() {
  return (
    <section className="pt-2 pb-10 bg-white">
      <div className="max-w-7xl xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hyderabad Active Tag */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-200/40 shadow-xs">
            <svg className="w-3.5 h-3.5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Active across Hyderabad
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Left Card: Senders (Solid Orange with Illustration) */}
          <div id="book" className="bg-orange-500 text-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-lg border border-orange-600/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl scroll-mt-24">
            
            {/* Left Column: Text and Button */}
            <div className="flex flex-col items-start space-y-6 flex-1">
              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap">
                  I want to send a parcel
                </h3>
                <p className="text-sm text-orange-100 font-normal leading-relaxed">
                  Affordable, fast, tracked delivery across Hyderabad
                </p>
              </div>

              {/* Action Button */}
              <Link
                href="#book"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-2xl text-sm font-semibold text-orange-600 bg-white hover:bg-orange-50 transition-colors shadow-sm"
              >
                Book Now
              </Link>
            </div>

            {/* Right Column: Illustration Image (Enlarged) */}
            <div className="w-full md:w-auto flex justify-center items-center flex-shrink-0 mt-4 md:mt-0">
              <img
                src="https://ik.imagekit.io/dypkhqxip/Mail%20sent-bro.svg"
                alt="Parcel Delivery Illustration"
                className="h-56 sm:h-[260px] w-auto object-contain"
              />
            </div>
          </div>

          {/* Right Card: Travelers (White with Orange Border with Illustration) */}
          <div id="become-traveler" className="bg-white text-zinc-900 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-md border-2 border-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg scroll-mt-24">
            
            {/* Left Column: Text and Button */}
            <div className="flex flex-col items-start space-y-6 flex-1">
              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 whitespace-nowrap">
                  I am a traveler on a route
                </h3>
                <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                  Earn ₹200-500 per trip on your existing commute
                </p>
              </div>

              {/* Action Button */}
              <Link
                href="#become-traveler"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-2xl text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-sm"
              >
                Join Now
              </Link>
            </div>

            {/* Right Column: Illustration Image (Enlarged) */}
            <div className="w-full md:w-auto flex justify-center items-center flex-shrink-0 mt-4 md:mt-0">
              <img
                src="https://ik.imagekit.io/dypkhqxip/Travelers-amico.svg"
                alt="Traveler Illustration"
                className="h-56 sm:h-[260px] w-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
