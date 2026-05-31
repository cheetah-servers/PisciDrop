"use client";

import React, { useState } from "react";
import { Footer } from "../../../components/footer";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-zinc-50 pt-24 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full flex-grow">

        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200/40 shadow-xs mb-3 uppercase tracking-widest">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-semibold text-zinc-950 tracking-tight mb-3">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 font-normal">
            Have questions about sending a package or becoming a traveler? Drop us a message and we'll reply as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          <div className="lg:col-span-5 bg-orange-500 text-white rounded-3xl p-8 md:p-10 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4"></div>

            <div className="space-y-8 relative z-10">
              <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
              <p className="text-orange-100 text-sm leading-relaxed max-w-sm">
                Feel free to reach out to us via email or WhatsApp. Our support team is active daily from 9:00 AM to 9:00 PM.
              </p>

              <div className="space-y-6">

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-orange-200 uppercase tracking-wider">WhatsApp / Support</h3>
                    <div className="space-y-1 mt-1 text-sm font-semibold">
                      <p>+91 81254 32177</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-orange-200 uppercase tracking-wider">Email Addresses</h3>
                    <div className="space-y-1 mt-1 text-sm font-semibold">
                      <p>paverasa4@gmail.com</p>
                      <p>paverasapvtltd@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-orange-200 uppercase tracking-wider">Headquarters</h3>
                    <p className="text-sm font-semibold mt-0.5 leading-relaxed">
                      173, PLASSEY LANE, Bowenpally,<br />
                      Tirumalagiri, Hyderabad - 500011, Telangana
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-12 text-xs text-orange-200 relative z-10">
              Paverasa Private Limited
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-zinc-200/60 flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-xs">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-zinc-950">Thank You!</h2>
                <p className="text-zinc-500 text-sm max-w-sm mx-auto leading-relaxed">
                  Your message has been sent successfully. One of our support representatives will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 text-sm text-zinc-950 bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 text-sm text-zinc-950 bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 text-sm text-zinc-950 bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 text-sm bg-white text-zinc-950 transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Delivery Support">Delivery Support</option>
                      <option value="Traveler Registration">Traveler Registration</option>
                      <option value="Business Partnership">Business Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-zinc-700 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/10 text-sm text-zinc-950 bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 transition-all shadow-md hover:shadow-lg active:scale-98"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
}
