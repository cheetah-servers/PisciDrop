"use client";

import React from "react";

const comparisonData = [
  {
    feature: "Cost",
    picsidrop: "₹150–250",
    courier: "₹400–800",
    auto: "₹300–600",
  },
  {
    feature: "Speed",
    picsidrop: "2–4 hours",
    courier: "Next day",
    auto: "Same day",
  },
  {
    feature: "Live Tracking",
    picsidrop: "WhatsApp updates",
    courier: "Basic SMS only",
    auto: "None",
  },
  {
    feature: "Payment Safety",
    picsidrop: "Escrow + KYC verified",
    courier: "Basic only",
    auto: "None",
  },
  {
    feature: "Trusted Person",
    picsidrop: "Verified traveler",
    courier: "Unknown rider",
    auto: "Unknown driver",
  },
  {
    feature: "Parcel Insurance",
    picsidrop: "Optional add-on",
    courier: "Not included",
    auto: "Not available",
  },
];

export function PricingComparison() {
  return (
    <section id="pricing" className="py-16 bg-orange-500 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-8">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-white/10 border border-white/20 shadow-xs mb-4 uppercase tracking-widest">
            Pricing Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-3">
            Pricing Comparison
          </h2>
          <p className="text-base sm:text-lg text-orange-100 font-normal max-w-2xl">
            How PicsiDrop compares with other delivery options.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="w-full overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[700px] lg:min-w-full bg-white border border-orange-400/20 rounded-3xl shadow-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-zinc-50 border-b border-zinc-200">
              <div className="p-4 sm:p-5 flex items-center">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Feature</span>
              </div>
              <div className="p-4 sm:p-5 bg-orange-500/[0.04] border-l border-r border-orange-200/40 flex items-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-orange-600 whitespace-nowrap">PicsiDrop</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 flex items-center">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider whitespace-nowrap">Traditional Courier</span>
              </div>
              <div className="p-4 sm:p-5 flex items-center">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider whitespace-nowrap">Auto / Bike Rental</span>
              </div>
            </div>

            {/* Table Body */}
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-4 transition-colors duration-200 hover:bg-zinc-50/50 ${
                  index < comparisonData.length - 1 ? "border-b border-zinc-200/60" : ""
                }`}
              >
                {/* Feature Name */}
                <div className="p-4 sm:p-5 flex items-center">
                  <span className="text-sm font-semibold text-zinc-800">{row.feature}</span>
                </div>

                {/* PicsiDrop Value (highlighted) */}
                <div className="p-4 sm:p-5 bg-orange-500/[0.02] border-l border-r border-orange-200/30 flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-bold text-zinc-900">{row.picsidrop}</span>
                </div>

                {/* Traditional Courier */}
                <div className="p-4 sm:p-5 flex items-center">
                  <span className="text-sm text-zinc-600 font-medium">{row.courier}</span>
                </div>

                {/* Auto / Bike */}
                <div className="p-4 sm:p-5 flex items-center">
                  <span className="text-sm text-zinc-600 font-medium">{row.auto}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
