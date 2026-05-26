"use client";

import React from "react";
import { Footer } from "../../../components/footer";
import { Skiper60, TermItem } from "@/components/v1/skiper60";

export default function PrivacyPage() {
  const privacySections: TermItem[] = [
    {
      id: "introduction",
      title: "1. Introduction & Compliances",
      content: (
        <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
          <p>
            At <strong>PicsiDrop</strong>, we are committed to protecting your personal data. This Privacy Policy explains what data we collect, why we collect it, how we use it, and your rights over your data.
          </p>
          <p>
            This policy complies with India's <strong>Information Technology Act, 2000</strong> and the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong>. By using PicsiDrop in any capacity, you agree to this Privacy Policy in full.
          </p>
        </div>
      ),
    },
    {
      id: "sender-data",
      title: "2. Data We Collect from Senders",
      content: (
        <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
          <p>
            To facilitate peer-to-peer delivery matchmaking, we collect the following information from Senders:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Name and phone number:</strong> Collected for account creation and delivery matching communication.</li>
            <li><strong>Pickup and delivery addresses:</strong> Used for matching and routing with nearby Travelers.</li>
            <li><strong>Payment information:</strong> Processed directly by our payment gateway partner (Cashfree Payments). PicsiDrop does not store your card or bank details on our servers.</li>
            <li><strong>Device type and approximate location:</strong> Collected to optimize route matching and check service availability.</li>
            <li><strong>WhatsApp communication history:</strong> Logged when communicating with PicsiDrop customer support.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "traveler-data",
      title: "3. Data We Collect from Travelers",
      content: (
        <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
          <p>
            To ensure the security and trust of our network, we collect and verify the following information from Travelers:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Name, phone number, and date of birth:</strong> Required for account profile setup.</li>
            <li><strong>Aadhaar number:</strong> Sent directly to secure UIDAI APIs for identity verification. PicsiDrop does not store raw Aadhaar numbers after verification.</li>
            <li><strong>PAN number:</strong> Verified through secure NSDL lookups and stored for tax and compliance audits.</li>
            <li><strong>Driving License (DL):</strong> DL number and scanned copy (for private vehicle Travelers). Verified against the Aadhaar name and retained for safety compliance.</li>
            <li><strong>Selfie photograph:</strong> Used for KYC liveness checks and face-matching with Aadhaar photo to prevent identity fraud.</li>
            <li><strong>Bank account or UPI ID:</strong> Collected for Traveler Payout distribution.</li>
            <li><strong>Route history and delivery records:</strong> Used for platform operations, route-matching optimization, and dispute resolution.</li>
            <li><strong>Device ID and approximate GPS location:</strong> Tracked during active deliveries to coordinate and update delivery status.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-usage",
      title: "4. How We Use & Retain Your Data",
      content: (
        <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
          <p>
            The table below describes what personal data is used for, along with its specific retention period:
          </p>
          <div className="overflow-x-auto border border-zinc-200 rounded-xl my-4">
            <table className="min-w-full divide-y divide-zinc-200 text-xs">
              <thead className="bg-zinc-50 font-bold text-zinc-800 text-left">
                <tr>
                  <th className="px-4 py-3 border-b border-zinc-200">Data type</th>
                  <th className="px-4 py-3 border-b border-zinc-200">Purpose</th>
                  <th className="px-4 py-3 border-b border-zinc-200">Retention period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-semibold text-zinc-950">Name and phone number</td>
                  <td className="px-4 py-3">Account creation, delivery communication, support</td>
                  <td className="px-4 py-3">Until account deletion + 3 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-zinc-950">Aadhaar number</td>
                  <td className="px-4 py-3">KYC verification only — sent to UIDAI, not stored by PicsiDrop</td>
                  <td className="px-4 py-3">Deleted immediately after verification</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-zinc-950">PAN number</td>
                  <td className="px-4 py-3">Tax compliance, traveler identity verification</td>
                  <td className="px-4 py-3">7 years (Income Tax Act requirement)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-zinc-950">Selfie photograph</td>
                  <td className="px-4 py-3">Face match for KYC, fraud prevention</td>
                  <td className="px-4 py-3">3 years from last delivery</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-zinc-950">Bank / UPI details</td>
                  <td className="px-4 py-3">Payment disbursement to Traveler</td>
                  <td className="px-4 py-3">Until account deletion + 3 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-zinc-950">Delivery addresses</td>
                  <td className="px-4 py-3">Route matching, delivery completion</td>
                  <td className="px-4 py-3">1 year from delivery date</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-zinc-950">Location data</td>
                  <td className="px-4 py-3">Real-time route matching during active delivery only</td>
                  <td className="px-4 py-3">Not stored after delivery completion</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-zinc-950">Payment records</td>
                  <td className="px-4 py-3">Financial compliance, dispute resolution, GST</td>
                  <td className="px-4 py-3">7 years (legal requirement)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "data-sharing",
      title: "5. Data Sharing & Disclosure",
      content: (
        <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
          <p>
            PicsiDrop does NOT sell your personal data to any third party for marketing purposes. We share data only with trusted partners and law enforcement under strict circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cashfree Payments:</strong> Shared for payment processing (governed by Cashfree's own privacy policy).</li>
            <li><strong>Setu / HyperVerge:</strong> Shared temporarily to process Aadhaar KYC checks and Driving License validation. (Data is not retained by them).</li>
            <li><strong>Firebase (Google):</strong> Used for website hosting and secure cloud database (data stored and processed in India).</li>
            <li><strong>Indian law enforcement or courts:</strong> Disclosed only when legally requested by valid court orders, subpoenas, or police directives from Hyderabad.</li>
            <li><strong>Anonymised metrics:</strong> We may share anonymised, aggregated data for research or analysis.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "user-rights",
      title: "6. Your Rights (DPDPA 2023) & Grievances",
      content: (
        <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
          <p>
            Under the <strong>Digital Personal Data Protection Act (DPDPA) 2023</strong>, you hold the following rights:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Right to access:</strong> You may request a copy of all personal data PicsiDrop holds about you.</li>
            <li><strong>Right to correction:</strong> You may request correction of inaccurate or incomplete personal data.</li>
            <li><strong>Right to erasure:</strong> You may request deletion of your data, subject to legal tax and financial compliance requirements.</li>
            <li><strong>Right to withdraw consent:</strong> You may withdraw consent to data processing at any time (doing so will result in immediate account termination).</li>
          </ul>
          <p className="mt-4">
            If you have queries, complaints, or rights requests, contact our designated privacy team. Responses are completed within 30 days:
          </p>
          <div className="overflow-x-auto border border-zinc-200 rounded-xl my-4">
            <table className="min-w-full divide-y divide-zinc-200 text-xs">
              <thead className="bg-zinc-50 font-bold text-zinc-800 text-left">
                <tr>
                  <th className="px-4 py-3 border-b border-zinc-200">Contact type</th>
                  <th className="px-4 py-3 border-b border-zinc-200">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-semibold text-zinc-950">Legal / privacy concerns</td>
                  <td className="px-4 py-3"><a href="mailto:privacy@picsidrop.com" className="text-orange-600 hover:underline">privacy@picsidrop.com</a></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-zinc-950">Data Protection Officer</td>
                  <td className="px-4 py-3"><a href="mailto:dpo@picsidrop.com" className="text-orange-600 hover:underline">dpo@picsidrop.com</a></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-zinc-950">Grievance Officer (DPDPA)</td>
                  <td className="px-4 py-3"><a href="mailto:grievance@picsidrop.com" className="text-orange-600 hover:underline">grievance@picsidrop.com</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 pt-24 flex flex-col justify-between">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-8 w-full flex-grow">

        {/* Page Header */}
        <div className="text-left max-w-3xl mb-8">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200/40 shadow-xs mb-4 uppercase tracking-widest">
            Privacy Policy
          </span>
          <h1 className="text-2xl sm:text-4xl font-semibold text-zinc-950 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 font-normal">
            We value your privacy. Learn how we handle your personal profile information, location coordinates,
            Aadhaar KYC data, and WhatsApp updates.
          </p>
        </div>

        {/* Skiper60 Scroll Navigation Layout with Custom Privacy content */}
        <Skiper60
          title="Privacy Policy"
          description="Last updated: May 26, 2026"
          terms={privacySections}
        />

      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
