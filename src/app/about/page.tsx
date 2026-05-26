"use client";

import React from "react";
import { Footer } from "../../../components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 pt-24 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex-grow">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200/40 shadow-xs mb-4 uppercase tracking-widest">
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-950 tracking-tight mb-4">
            Our Story & Mission
          </h1>
          <p className="text-sm sm:text-base text-zinc-500 font-normal">
            We are building Hyderabad's largest peer-to-peer delivery network, making daily parcel deliveries cheaper, faster, and more sustainable.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-950 tracking-tight">
              Why PicsiDrop?
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed font-normal">
              Every day, thousands of commuters travel across Hyderabad with unused seats or empty luggage space. At the same time, businesses and individuals pay high rates for same-day delivery of documents, keys, clothes, and urgent packages.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed font-normal">
              PicsiDrop connects these two groups. By matching packages with existing trips, senders enjoy same-day delivery at a 70% lower rate, while travelers earn extra income to cover their fuel costs during their regular commute.
            </p>
          </div>
          
          {/* Card / Promise Box */}
          <div className="lg:col-span-6">
            <div className="bg-orange-500 text-white rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
              {/* Background Blur elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
              
              <div className="space-y-6 relative z-10">
                <h3 className="text-lg font-semibold text-white">The Green Commuter Promise</h3>
                <p className="text-orange-100 text-sm leading-relaxed font-normal">
                  By matching packages with commutes already happening, we prevent the need to put extra delivery riders on the road. This helps reduce traffic congestion, decreases carbon emissions, and builds a greener Hyderabad.
                </p>
                <div className="pt-4 border-t border-orange-400/60 flex justify-between items-center text-xs text-orange-200">
                  <span>Eco-Friendly Commuting</span>
                  <span>Paverasa Private Limited</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-8">
          <div className="text-left max-w-xl">
            <h2 className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">
              Our Values
            </h2>
            <p className="text-2xl sm:text-3xl font-semibold text-zinc-950">
              What we stand for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white border border-zinc-200/60 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4 hover:border-orange-500/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 11l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-zinc-950">Trust & Safety First</h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                We secure every delivery with Aadhaar-based KYC verification for all travelers, escrow payment protection, and two-way OTP confirmation upon pickup and drop-off.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white border border-zinc-200/60 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4 hover:border-orange-500/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 8h6.5M8 11.5h6.5M8 8c4 0 4 7 0 7M11.5 15l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-zinc-950">Fair Income</h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                Since travelers are going that way anyway, they keep 100% of their earnings. PicsiDrop charges zero or minimal commissions to empower the community.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white border border-zinc-200/60 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4 hover:border-orange-500/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.827V8.063a1 1 0 00-.553-.894L15 4.5m0 12.5V4.5m0 0L9 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-zinc-950">Frictionless Efficiency</h3>
              <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                No complex booking forms or delays. Senders post their routes, and matching travelers accept deliveries in seconds. Most shipments complete in just a few hours.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
