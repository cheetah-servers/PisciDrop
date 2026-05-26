import React from "react";
import { Metadata } from "next";
import { Footer } from "../../../components/footer";
import { Skiper60 } from "@/components/v1/skiper60";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the PicsiDrop Terms & Conditions carefully. Learn about eligibility, service types, base pricing formula, prohibited items, and full indemnity guidelines.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 pt-24 flex flex-col justify-between">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-8 w-full flex-grow">

        {/* Page Header */}
        <div className="text-left max-w-3xl mb-8">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200/40 shadow-xs mb-4 uppercase tracking-widest">
            Agreement
          </span>
          <h1 className="text-2xl sm:text-4xl font-semibold text-zinc-950 tracking-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 font-normal">
            Please read these terms of service carefully. They govern your use of the PicsiDrop platform,
            Aadhaar KYC validation, escrow payments, and delivery matching.
          </p>
        </div>

        {/* Skiper60 Scroll Navigation Layout */}
        <Skiper60
          title="Terms & Conditions"
          description="Last updated: May 26, 2026"
        />

      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
