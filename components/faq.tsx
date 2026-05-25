"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "What is PicsiDrop?",
    answer:
      "PicsiDrop is Hyderabad's peer-to-peer delivery network that connects people who want to send packages with everyday travelers going in the same direction. By utilizing unused cargo/bag space, we offer ultra-fast delivery at a fraction of the cost.",
  },
  {
    question: "How do you ensure my package is safe?",
    answer:
      "Safety is our top priority. We use a dual OTP verification system where both the sender and receiver must confirm delivery before payment is released. Additionally, every traveler completes a mandatory Aadhaar/KYC identity check, and we maintain a transparent ratings system for all users.",
  },
  {
    question: "How much can I earn as a traveler?",
    answer:
      "Most daily commuters and travelers earn between ₹200 to ₹500 per delivery trip, depending on the distance, urgency, and size of the package. It's a great way to cover your fuel and travel costs on routes you already travel.",
  },
  {
    question: "What items are allowed to be sent?",
    answer:
      "You can send legal, non-hazardous household items, keys, documents, clothing, books, or packed electronics that fit in a standard backpack or vehicle seat. Illegal substances, weapons, hazardous materials, and fragile items without proper packaging are strictly prohibited.",
  },
  {
    question: "How are payments handled?",
    answer:
      "Payments are handled securely via UPI/Netbanking. Senders pay upfront, and the funds are held securely in a safe escrow account. Once the delivery OTP is verified at the destination, the payout is instantly transferred to the traveler's registered UPI ID.",
  },
  {
    question: "Is there insurance for my parcels?",
    answer:
      "Yes! PicsiDrop offers optional parcel insurance as an add-on during the booking flow. This covers damage or loss up to ₹5,000 for standard verified shipments, giving you extra peace of mind.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-zinc-50/50 border-t border-zinc-200/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200/40 shadow-xs mb-4 uppercase tracking-widest">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-950 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 font-normal max-w-xl">
            Everything you need to know about PicsiDrop delivery and traveling.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-zinc-200/60 rounded-2xl shadow-xs overflow-hidden transition-all duration-300 hover:border-orange-500/20"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-zinc-950 pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 ml-2">
                    <svg
                      className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                        isOpen ? "transform rotate-180 text-orange-500" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Animated Answer Body */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-60 border-t border-zinc-100" : "max-h-0"
                  }`}
                >
                  <div className="p-6 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal bg-zinc-50/30">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
