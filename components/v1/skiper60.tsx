"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export type TermItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export interface Skiper60Props {
  title?: string;
  description?: string;
  terms?: TermItem[];
  className?: string;
}

const defaultTerms: TermItem[] = [
  {
    id: "definitions",
    title: "1. Definitions",
    content: (
      <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
        <p>
          The following words have specific meanings throughout this document. Understanding these definitions is important before reading the terms.
        </p>
        <div className="overflow-x-auto border border-zinc-200 rounded-xl my-4">
          <table className="min-w-full divide-y divide-zinc-200 text-xs text-zinc-600">
            <thead className="bg-zinc-50 font-bold text-zinc-800 text-left">
              <tr>
                <th className="px-4 py-3 border-b border-zinc-200 w-1/3">Term</th>
                <th className="px-4 py-3 border-b border-zinc-200">Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">"PicsiDrop" / "Platform" / "We" / "Us"</td>
                <td className="px-4 py-3">The PicsiDrop peer-to-peer parcel delivery service, its website (picsidrop.in), WhatsApp channel, and any future mobile application.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">"User" / "You"</td>
                <td className="px-4 py-3">Any person who accesses or uses PicsiDrop in any capacity, including Senders and Travelers.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">"Sender"</td>
                <td className="px-4 py-3">A User who books a parcel delivery through PicsiDrop and pays the delivery fee.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">"Traveler"</td>
                <td className="px-4 py-3">A KYC-verified User who carries parcels on their existing routes and receives payment for doing so.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">"Parcel"</td>
                <td className="px-4 py-3">Any item, package, document, or goods accepted for delivery through PicsiDrop.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">"Delivery Fee"</td>
                <td className="px-4 py-3">The total amount charged to the Sender for a delivery, which includes the Traveler payout and Platform fee.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">"Platform Fee"</td>
                <td className="px-4 py-3">PicsiDrop's 25% share of the Delivery Fee, retained to cover operations, KYC, payment processing, and support.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">"Traveler Payout"</td>
                <td className="px-4 py-3">The 75% share of the Delivery Fee paid to the Traveler after successful delivery confirmation.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">"Escrow"</td>
                <td className="px-4 py-3">A secure holding mechanism where the Delivery Fee is held by PicsiDrop until delivery is confirmed by dual OTP.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">"OTP"</td>
                <td className="px-4 py-3">One-Time Password. A unique code sent to the Sender and Receiver to confirm successful parcel delivery.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">"KYC"</td>
                <td className="px-4 py-3">Know Your Customer. The identity verification process (Aadhaar + PAN + Driving License + selfie liveness) required for all Travelers before their first delivery.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">"Express Delivery"</td>
                <td className="px-4 py-3">A premium delivery service where the Traveler prioritises the parcel for delivery within 90 minutes. Charged at 1.5x the standard price.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">"Scheduled Delivery"</td>
                <td className="px-4 py-3">A planned delivery booked in advance for a specific time slot. Charged at 0.85x the standard price.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: "eligibility",
    title: "2. Eligibility & Account",
    content: (
      <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider">2.1 Who can use PicsiDrop</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>You must be at least 18 years of age to use PicsiDrop as a Sender or Traveler.</li>
          <li>You must be a resident of India with a valid phone number registered in India.</li>
          <li>You must provide accurate, complete, and current information when registering.</li>
          <li>PicsiDrop reserves the right to suspend or terminate accounts found to contain false information.</li>
        </ul>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">2.2 Traveler-specific requirements</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            All Travelers must complete full KYC before accepting any delivery. KYC includes:
            <ul className="list-circle pl-5 mt-1 space-y-1 text-zinc-500">
              <li>Aadhaar OTP verification (UIDAI-linked mobile required)</li>
              <li>Selfie liveness check (AI face match to Aadhaar photo)</li>
              <li>PAN card verification (NSDL lookup)</li>
              <li>Bank account or UPI verification (penny drop confirmation)</li>
              <li>Valid Driving License verification — required for all Travelers using a private bike, car, or auto-rickshaw (scanned copy submitted and verified against Aadhaar name)</li>
            </ul>
          </li>
          <li>KYC approval is at the sole discretion of PicsiDrop. Rejection will be communicated within 48 hours.</li>
          <li>Travelers must not share their account with any other person.</li>
          <li>Travelers who fail to deliver a parcel without valid reason may be suspended from the platform.</li>
        </ul>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">2.3 Account responsibility</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>You are responsible for all activity on your account.</li>
          <li>You must keep your OTP codes confidential and not share them with any person other than the intended Receiver.</li>
          <li>PicsiDrop will never ask you for your OTP via phone call, SMS, or WhatsApp. Do not share OTPs with anyone claiming to be PicsiDrop.</li>
        </ul>
      </div>
    )
  },
  {
    id: "sender-obligations",
    title: "3. Sender Obligations & Prohibited Items",
    content: (
      <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider">3.1 What Senders must do</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Provide accurate pickup and delivery addresses before booking.</li>
          <li>Ensure the parcel is properly packed, sealed, and labelled before handover to the Traveler.</li>
          <li>Be available (or have a representative available) at the pickup location within 15 minutes of the Traveler arriving.</li>
          <li>Confirm receipt with the delivery OTP at the time of delivery.</li>
          <li>Declare the correct parcel size and weight when booking. Misrepresentation may result in cancellation without refund.</li>
        </ul>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">3.2 Prohibited items — Senders must NOT send</h4>
        <p className="text-red-600 font-semibold">
          Sending prohibited items is a serious violation. PicsiDrop will immediately terminate accounts found sending prohibited items and will cooperate with law enforcement authorities.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 text-xs sm:text-sm">
          <li>Illegal drugs, narcotics, controlled substances, or drug paraphernalia</li>
          <li>Firearms, ammunition, explosives, or any weapon or component thereof</li>
          <li>Human remains, body parts, or biological specimens</li>
          <li>Stolen goods or goods obtained through criminal activity</li>
          <li>Counterfeit currency, forged documents, or fraudulent materials</li>
          <li>Pornographic or obscene material</li>
          <li>Hazardous chemicals, flammable liquids, corrosives, or toxic substances</li>
          <li>Live animals or protected wildlife</li>
          <li>Items subject to court orders, seizure orders, or legal restrictions</li>
          <li>Any item whose possession, transport, or delivery is prohibited by Indian law</li>
        </ul>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">3.3 High-value items</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Items with a declared value above Rs. 5,000 must be selected as "Fragile / High Value" during booking.</li>
          <li>PicsiDrop is not responsible for loss or damage to items valued above Rs. 5,000 that were not declared at the time of booking.</li>
          <li>Jewelry, cash, precious metals, and financial instruments are carried at the Sender’s sole risk. PicsiDrop strongly advises against sending such items through the platform.</li>
        </ul>

        <div className="bg-red-50 border border-red-200/60 rounded-xl p-4 my-4 space-y-2">
          <h4 className="font-bold text-red-800 text-xs uppercase tracking-wide">3.4 Sender Liability for Illegal or Prohibited Items — Full Indemnity Clause</h4>
          <p className="text-red-950 font-semibold text-xs">
            IMPORTANT: If a Sender sends illegal, prohibited, or undeclared items through PicsiDrop, the Sender alone bears full legal, financial, and criminal responsibility. PicsiDrop and the Traveler are completely absolved of all liability. This clause is binding and non-negotiable.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-red-900 text-xs">
            <li>The Sender is solely and exclusively responsible for the contents of any parcel they submit for delivery through PicsiDrop. By booking a delivery, the Sender declares under their own responsibility that the parcel does not contain any illegal, prohibited, or restricted item.</li>
            <li>PicsiDrop does NOT inspect parcels before, during, or after delivery. PicsiDrop operates as a technology platform that matches Senders with Travelers and has no physical access to or control over parcel contents. PicsiDrop therefore cannot be held responsible for any item carried through the platform without its knowledge.</li>
            <li>The Traveler is an independent contractor who accepts parcels in good faith based on the Sender’s declaration. A Traveler who is unaware of illegal contents in a parcel they are carrying is not liable for the Sender’s criminal or fraudulent act. PicsiDrop will provide full cooperation and documentation to support the Traveler in any legal proceedings arising from a Sender’s illegal shipment.</li>
            <li>If a Sender is found to have knowingly sent illegal, prohibited, or undeclared items, the Sender shall:
              <ul className="list-circle pl-5 mt-1 space-y-1 text-red-800 font-normal">
                <li>Bear full criminal liability under the applicable laws of India including but not limited to the Indian Penal Code, Narcotic Drugs and Psychotropic Substances Act, Arms Act, and any other relevant legislation.</li>
                <li>Fully indemnify PicsiDrop for all legal costs, regulatory penalties, reputational damages, and losses incurred by PicsiDrop as a result of the Sender’s illegal shipment.</li>
                <li>Fully compensate the Traveler for any losses, legal fees, detention, arrest, or harm suffered by the Traveler as a direct result of unknowingly carrying the Sender’s illegal item.</li>
                <li>Face permanent and immediate account termination with no right to appeal.</li>
              </ul>
            </li>
            <li>PicsiDrop will proactively report the Sender’s identity, contact details, KYC information, booking records, and any other relevant data to Indian law enforcement authorities immediately upon discovering or being notified of an illegal shipment. PicsiDrop will not wait for a court order to make this report.</li>
            <li>No refund of any kind will be issued to a Sender found to have sent illegal or prohibited items. The Delivery Fee will be forfeited in full.</li>
          </ul>
          <p className="text-red-950 font-medium text-xs mt-2">
            By completing a booking on PicsiDrop, every Sender gives a binding declaration that the parcel contains only legal, declared items. This declaration has the same legal weight as a self-attestation under Indian law. PicsiDrop and the Traveler rely on this declaration completely.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "traveler-obligations",
    title: "4. Traveler Obligations",
    content: (
      <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider">4.1 What Travelers must do</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Complete full KYC verification before accepting any delivery.</li>
          <li>Hold and carry a valid, non-expired Indian Driving License (DL) at all times when making deliveries using a private bike, car, or auto-rickshaw. Travelers using public transport (bus, metro, MMTS) are exempt from this requirement.</li>
          <li>Only accept deliveries on routes they are genuinely traveling on the same day.</li>
          <li>Collect the parcel from the Sender in person and confirm pickup by entering the pickup OTP in the PicsiDrop system.</li>
          <li>Keep the parcel safe and undamaged throughout the journey.</li>
          <li>Deliver the parcel to the correct address and obtain delivery confirmation via the delivery OTP from the Receiver.</li>
          <li>Contact PicsiDrop support via WhatsApp immediately if they encounter any problem during pickup or delivery.</li>
          <li>Not open, inspect, tamper with, photograph, or interfere with the contents of any parcel.</li>
        </ul>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">4.2 What Travelers must NOT do</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Accept a delivery and then fail to deliver without informing PicsiDrop support.</li>
          <li>Hand the parcel to any other person without written approval from PicsiDrop.</li>
          <li>Demand additional payment from the Sender or Receiver beyond the agreed fee.</li>
          <li>Carry prohibited items knowingly. If a Sender offers prohibited items, the Traveler must decline and report to PicsiDrop immediately.</li>
          <li>Create fake OTP confirmations or falsely claim delivery has been completed.</li>
        </ul>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">4.3 Traveler liability</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Travelers are responsible for any damage to parcels caused by their negligence or deliberate action.</li>
          <li>If a parcel is lost or stolen while in the Traveler's possession and the Traveler is found responsible, PicsiDrop may withhold all pending payouts and seek compensation.</li>
          <li>Travelers are independent contractors, not employees of PicsiDrop. They are responsible for their own taxes, insurance, and vehicle maintenance.</li>
        </ul>
      </div>
    )
  },
  {
    id: "payments-escrow-refunds",
    title: "5. Payments, Escrow & Refunds",
    content: (
      <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider">5.1 Payment collection</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>All Delivery Fees are collected from the Sender at the time of booking via UPI, cards, or net banking through our payment gateway partner (Cashfree Payments).</li>
          <li>No cash payments are accepted by Travelers. All payments must go through the PicsiDrop platform.</li>
          <li>The Delivery Fee is held in escrow by PicsiDrop until delivery is confirmed by dual OTP.</li>
        </ul>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">5.2 Traveler payout</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Travelers receive 75% of the Delivery Fee (the Traveler Payout) within 15 minutes of delivery OTP confirmation.</li>
          <li>Payment is sent directly to the Traveler's verified UPI ID or bank account.</li>
          <li>PicsiDrop retains 25% as the Platform Fee to cover payment processing, KYC, customer support, and operations.</li>
          <li>If a delivery fails through no fault of the Traveler, the Traveler receives 25% of the agreed fee as a partial compensation payment.</li>
        </ul>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">5.3 Refund policy for Senders</h4>
        <div className="overflow-x-auto border border-zinc-200 rounded-xl my-4">
          <table className="min-w-full divide-y divide-zinc-200 text-xs text-zinc-600">
            <thead className="bg-zinc-50 font-bold text-zinc-800 text-left">
              <tr>
                <th className="px-4 py-3 border-b border-zinc-200">Situation</th>
                <th className="px-4 py-3 border-b border-zinc-200">Refund amount</th>
                <th className="px-4 py-3 border-b border-zinc-200">Refund time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">No Traveler found within 2 hours of booking</td>
                <td className="px-4 py-3">100% full refund</td>
                <td className="px-4 py-3">Within 24 hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Sender cancels before Traveler accepts</td>
                <td className="px-4 py-3">100% full refund</td>
                <td className="px-4 py-3">Within 24 hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Sender cancels after Traveler accepts (more than 30 min notice)</td>
                <td className="px-4 py-3">75% refund</td>
                <td className="px-4 py-3">Within 48 hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Sender cancels after Traveler accepts (less than 30 min notice)</td>
                <td className="px-4 py-3">50% refund — Traveler gets 25% compensation</td>
                <td className="px-4 py-3">Within 48 hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Traveler fails to deliver (verified PicsiDrop fault)</td>
                <td className="px-4 py-3">100% full refund</td>
                <td className="px-4 py-3">Within 24 hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Parcel damaged in transit (Traveler negligence confirmed)</td>
                <td className="px-4 py-3">100% refund up to declared value</td>
                <td className="px-4 py-3">Within 7 days after investigation</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Parcel delivered successfully (OTP confirmed)</td>
                <td className="px-4 py-3">No refund applicable</td>
                <td className="px-4 py-3">N/A</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Parcel contains prohibited items discovered during delivery</td>
                <td className="px-4 py-3">No refund. Account terminated.</td>
                <td className="px-4 py-3">N/A</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">5.4 Disputes</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>All payment disputes must be raised within 48 hours of the delivery date via WhatsApp to PicsiDrop support.</li>
          <li>PicsiDrop will investigate disputes within 5 business days and communicate the outcome to both parties.</li>
          <li>PicsiDrop's decision on disputes is final at the platform level. Users retain the right to seek legal remedies under Indian law.</li>
        </ul>
      </div>
    )
  },
  {
    id: "cancellation-policy",
    title: "6. Cancellation Policy",
    content: (
      <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider">6.1 Cancellation by Sender</h4>
        <div className="overflow-x-auto border border-zinc-200 rounded-xl my-4">
          <table className="min-w-full divide-y divide-zinc-200 text-xs text-zinc-600">
            <thead className="bg-zinc-50 font-bold text-zinc-800 text-left">
              <tr>
                <th className="px-4 py-3 border-b border-zinc-200">When cancelled</th>
                <th className="px-4 py-3 border-b border-zinc-200">Cancellation fee</th>
                <th className="px-4 py-3 border-b border-zinc-200">Refund to Sender</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Before any Traveler accepts the booking</td>
                <td className="px-4 py-3">Rs. 0</td>
                <td className="px-4 py-3">100% refund</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">After Traveler accepts — more than 30 min before pickup</td>
                <td className="px-4 py-3">Rs. 30</td>
                <td className="px-4 py-3">Remaining amount refunded</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">After Traveler accepts — less than 30 min before pickup</td>
                <td className="px-4 py-3">Rs. 50</td>
                <td className="px-4 py-3">50% refund</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">After Traveler has physically picked up the parcel</td>
                <td className="px-4 py-3">Not cancellable — delivery in progress</td>
                <td className="px-4 py-3">No refund</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">6.2 Cancellation by Traveler</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Travelers may cancel a booking before physically picking up the parcel.</li>
          <li>Travelers who cancel more than 3 bookings in a calendar month will receive a warning.</li>
          <li>Travelers who cancel more than 5 bookings in a calendar month may be suspended from the platform for 30 days.</li>
          <li>Repeated pattern cancellation (accepting and cancelling without valid reason) will result in permanent account termination.</li>
        </ul>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">6.3 Cancellation by PicsiDrop</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>PicsiDrop reserves the right to cancel any booking at any time if prohibited items are discovered or suspected.</li>
          <li>PicsiDrop may cancel bookings in cases of safety concerns, natural disasters, or force majeure events.</li>
          <li>In such cases, Senders receive a 100% refund.</li>
        </ul>
      </div>
    )
  },
  {
    id: "liability-limitation",
    title: "7. Liability & Limitation",
    content: (
      <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider">7.1 PicsiDrop's liability is limited</h4>
        <p>
          PicsiDrop is a technology platform that connects Senders with Travelers. We are not a courier company, logistics provider, or transport company under Indian law. Our liability is strictly limited as described in this section.
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>PicsiDrop's maximum liability to any Sender for any single delivery is capped at Rs. 5,000 or the declared value of the parcel — whichever is lower.</li>
          <li>PicsiDrop is not liable for consequential, indirect, or business losses arising from late or failed delivery.</li>
          <li>PicsiDrop is not liable for damage caused by improper packaging by the Sender.</li>
          <li>PicsiDrop is not liable for losses caused by incorrect addresses provided by the Sender.</li>
          <li>PicsiDrop is not liable for any losses arising from force majeure events including natural disasters, riots, strikes, or government orders.</li>
        </ul>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">7.2 Traveler liability to Sender</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>A Traveler who loses, damages, or steals a parcel may be held liable directly by the Sender.</li>
          <li>PicsiDrop will provide Sender with Traveler contact details and KYC information in cases of verified negligence or theft to facilitate legal action.</li>
          <li>Travelers are strongly advised to carry personal liability insurance for goods in transit.</li>
        </ul>
      </div>
    )
  },
  {
    id: "safety-policy",
    title: "8. Safety Policy",
    content: (
      <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider">8.1 Traveler safety</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Travelers have the absolute right to refuse any delivery if they feel unsafe, uncomfortable, or if they suspect prohibited items.</li>
          <li>Travelers must never open parcels to inspect contents unless instructed to do so by law enforcement with a valid warrant.</li>
          <li>Travelers who feel threatened or unsafe during a delivery must contact local police (100) first, and then inform PicsiDrop support.</li>
          <li>PicsiDrop will cooperate fully with police investigations.</li>
        </ul>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">8.2 Sender safety</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>PicsiDrop strongly advises Senders not to share their home address with Travelers beyond what is necessary for pickup.</li>
          <li>Senders should use a common ground-floor location or a neighbour as the pickup point where possible.</li>
          <li>Never send irreplaceable items (original documents, heirlooms, family photographs) through PicsiDrop.</li>
        </ul>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">8.3 Reporting safety concerns</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Report any safety concern, suspicious activity, or misconduct to PicsiDrop support via WhatsApp immediately.</li>
          <li>PicsiDrop has a zero-tolerance policy for harassment, abuse, or threats between Senders and Travelers.</li>
          <li>Accounts involved in verified harassment or abuse will be permanently terminated and reported to authorities.</li>
        </ul>
      </div>
    )
  },
  {
    id: "platform-rules",
    title: "9. Platform Rules & Code of Conduct",
    content: (
      <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider">9.1 Rules for all Users</h4>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Treat all other platform participants with respect and courtesy.</li>
          <li>Do not attempt to contact Travelers or Senders outside of PicsiDrop channels for the purpose of arranging off-platform deliveries.</li>
          <li>Do not leave false or malicious reviews about other users.</li>
          <li>Do not create multiple accounts to circumvent bans or suspension.</li>
          <li>Do not attempt to hack, scrape, or reverse-engineer the PicsiDrop platform.</li>
        </ul>

        <h4 className="font-bold text-zinc-950 text-xs uppercase tracking-wider mt-4">9.2 Account suspension and termination</h4>
        <div className="overflow-x-auto border border-zinc-200 rounded-xl my-4">
          <table className="min-w-full divide-y divide-zinc-200 text-xs text-zinc-600">
            <thead className="bg-zinc-50 font-bold text-zinc-800 text-left">
              <tr>
                <th className="px-4 py-3 border-b border-zinc-200">Violation</th>
                <th className="px-4 py-3 border-b border-zinc-200">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 bg-white">
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Sending prohibited items</td>
                <td className="px-4 py-3">Immediate permanent termination + report to authorities</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Fake OTP confirmation or delivery fraud</td>
                <td className="px-4 py-3">Immediate permanent termination + legal action</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Traveler harassment of Sender or Receiver</td>
                <td className="px-4 py-3">Immediate permanent termination</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">3 cancellations in a month (Traveler)</td>
                <td className="px-4 py-3">Warning issued</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">5+ cancellations in a month (Traveler)</td>
                <td className="px-4 py-3">30-day suspension</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Falsifying KYC documents</td>
                <td className="px-4 py-3">Immediate permanent termination + full report to police + Sender bears all legal liability under Section 3.4 indemnity clause</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Failing to provide Driving License when using private vehicle</td>
                <td className="px-4 py-3">Immediate suspension pending DL submission. Permanent ban if DL not provided within 7 days.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Attempting to solicit off-platform payments</td>
                <td className="px-4 py-3">7-day suspension then warning</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold text-zinc-950">Creating multiple accounts after ban</td>
                <td className="px-4 py-3">Permanent ban of all accounts + device block</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: "intellectual-property",
    title: "10. Intellectual Property",
    content: (
      <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>The PicsiDrop name, logo, orange brand identity, website, and all platform content are the exclusive intellectual property of PicsiDrop.</li>
          <li>Users may not reproduce, distribute, modify, or create derivative works from PicsiDrop content without written permission.</li>
          <li>Users retain ownership of content they submit (reviews, photos) but grant PicsiDrop a non-exclusive, royalty-free licence to use such content for platform operations and marketing.</li>
        </ul>
      </div>
    )
  },
  {
    id: "governing-law",
    title: "11. Governing Law & Dispute Resolution",
    content: (
      <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>These Terms and Conditions are governed by the laws of India.</li>
          <li>Any disputes arising from these Terms shall first be attempted to be resolved through PicsiDrop's internal dispute resolution process (contact support@picsidrop.in).</li>
          <li>If not resolved within 30 days, disputes shall be subject to the exclusive jurisdiction of the Courts of Hyderabad, Telangana, India.</li>
          <li>PicsiDrop and Users agree to attempt mediation before initiating formal legal proceedings.</li>
        </ul>
      </div>
    )
  },
  {
    id: "changes-to-terms",
    title: "12. Changes to These Terms",
    content: (
      <div className="space-y-4 text-zinc-600 text-xs sm:text-sm leading-relaxed">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>PicsiDrop reserves the right to update these Terms & Conditions and Privacy Policy at any time.</li>
          <li>Material changes will be communicated to users via WhatsApp or the registered phone number at least 14 days before taking effect.</li>
          <li>Continued use of PicsiDrop after changes take effect constitutes acceptance of the updated Terms.</li>
          <li>The current version of these Terms is always available at picsidrop.in/terms</li>
        </ul>
      </div>
    )
  }
];

export function Skiper60({
  title = "Terms & Conditions",
  description = "Last updated: May 26, 2026",
  terms = defaultTerms,
  className = "",
}: Skiper60Props) {
  const [activeSection, setActiveSection] = useState<string>(terms[0]?.id || "");
  const isScrollingRef = useRef<boolean>(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const activeMobileTabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    terms.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [terms]);

  useEffect(() => {
    if (activeMobileTabRef.current && mobileNavRef.current) {
      const container = mobileNavRef.current;
      const tab = activeMobileTabRef.current;

      const containerScrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const tabLeft = tab.offsetLeft;
      const tabWidth = tab.clientWidth;

      const targetScrollLeft = tabLeft - containerWidth / 2 + tabWidth / 2;

      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    isScrollingRef.current = true;
    setActiveSection(id);

    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 700);
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        ref={mobileNavRef}
        className="sticky top-16 z-30 bg-white/90 backdrop-blur-md border-b border-zinc-200/60 py-3 px-4 -mx-4 sm:-mx-6 flex gap-2 overflow-x-auto scrollbar-none lg:hidden"
      >
        {terms.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={`mobile-nav-${item.id}`}
              ref={isActive ? activeMobileTabRef : null}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 text-xs font-bold whitespace-nowrap rounded-full transition-colors duration-300 z-10 ${isActive ? "text-white" : "text-zinc-600 hover:text-zinc-900"
                }`}
            >
              {item.title}
              {isActive && (
                <motion.div
                  layoutId="mobileActiveIndicator"
                  className="absolute inset-0 bg-orange-500 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 lg:mt-8 items-start">
        <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-28 lg:max-h-[calc(100vh-10rem)] overflow-y-auto pr-2 scrollbar-thin">
          <div className="space-y-1 relative">
            {terms.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={`desktop-nav-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`group w-full text-left px-3 py-2 rounded-lg relative text-xs sm:text-sm font-semibold transition-all duration-300 ${isActive
                      ? "text-orange-600 font-bold"
                      : "text-zinc-500 hover:text-zinc-950"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="desktopActiveBackground"
                      className="absolute inset-0 bg-orange-50 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 32 }}
                    />
                  )}
                  {item.title}
                </button>
              );
            })}
          </div>
        </aside>

        <main className="col-span-1 lg:col-span-9 space-y-12">
          {terms.map((item) => (
            <section
              key={item.id}
              id={item.id}
              className="scroll-mt-28 border-b border-zinc-100 pb-8 last:border-0 last:pb-0"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-zinc-950 mb-4 tracking-tight flex items-center gap-2.5">
                <span className="w-1.5 h-5 bg-orange-500 rounded-full inline-block"></span>
                {item.title}
              </h2>
              <div className="prose prose-zinc max-w-none">
                {item.content}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
