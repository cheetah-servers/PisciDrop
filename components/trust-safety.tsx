"use client";

import React from "react";
import { LottiePlayer } from "./lottie-player";

export function TrustSafety() {
  return (
    <section id="trust-safety" className="py-8 bg-zinc-50/50 border-t border-zinc-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-8">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200/40 shadow-xs mb-4 uppercase tracking-widest">
            Trust & Safety
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-950 mb-3">
            Trust and Safety
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 font-normal max-w-2xl">
            How we keep every parcel and every traveler safe.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Escrow Payments */}
          <div className="group bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-orange-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[380px]">
            {/* Top Content */}
            <div className="space-y-5">
              {/* Icon Container & Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100/60 flex items-center justify-center text-orange-500 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="12" cy="16" r="1.5" fill="currentColor" />
                    <path d="M12 17.5V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 border border-emerald-200/40">
                  Escrow Safe
                </span>
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight whitespace-nowrap">
                  Escrow Payments
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                  Money is held safely by PicsiDrop until delivery is confirmed with dual OTP verification. If delivery fails, you get a full refund.
                </p>
              </div>
            </div>

            {/* Bottom: Lottie Animation */}
            <div className="mt-auto pt-6 flex items-end justify-center">
              <div className="w-[180px] h-[180px] rounded-2xl overflow-hidden">
                <LottiePlayer
                  src="https://lottie.host/d2431bbf-97d5-4c8c-9702-5173c99be56d/tlBV0JYCDG.lottie"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Card 2: KYC Verified Travelers (Featured Orange Card) */}
          <div className="group bg-orange-500 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[380px]">
            {/* Top Content */}
            <div className="space-y-5">
              {/* Icon Container & Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/10 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L3.5 6.5V11c0 5.25 3.625 10.15 8.5 11.35C16.875 21.15 20.5 16.25 20.5 11V6.5L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-orange-600 bg-white border border-white/80">
                  Protected
                </span>
              </div>

              {/* Text */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight whitespace-nowrap">
                  KYC Verified Travelers
                </h3>
                <p className="text-sm text-orange-100 leading-relaxed font-normal">
                  Every traveler completes full KYC with Aadhaar verification before their first delivery. We maintain ratings, reviews, and a trust score for every traveler on the platform. Your parcel is always in verified hands.
                </p>
              </div>
            </div>

            {/* Bottom: Lottie Animation */}
            <div className="mt-auto pt-6 flex items-end justify-center">
              <div className="w-[180px] h-[180px] rounded-2xl overflow-hidden bg-white">
                <LottiePlayer
                  src="https://lottie.host/ad7a4d9c-4284-43ce-926e-7f3fd084e142/OVQTVkr8Bb.lottie"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Card 3: Dual OTP System */}
          <div className="group bg-white border border-zinc-200/60 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-orange-500/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[380px]">
            {/* Top Content */}
            <div className="space-y-5">
              {/* Icon Container & Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100/60 flex items-center justify-center text-orange-500 transition-transform duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="8.5" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="15.5" cy="12" r="1.5" fill="currentColor" />
                    <path d="M4 8.5h16" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
                  </svg>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-orange-700 bg-orange-50 border border-orange-200/40">
                  Verified
                </span>
              </div>

              {/* Text */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 tracking-tight whitespace-nowrap">
                  Dual OTP System
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                  Both sender and receiver confirm delivery with unique one-time passwords. No confirmation, no payment released.
                </p>
              </div>
            </div>

            {/* Bottom: Lottie Animation */}
            <div className="mt-auto pt-6 flex items-end justify-center">
              <div className="w-[180px] h-[180px] rounded-2xl overflow-hidden">
                <LottiePlayer
                  src="https://lottie.host/2894b224-a896-466c-952e-115627577f05/Vnhryr3cVT.lottie"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
