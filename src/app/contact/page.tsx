import React from "react";
import { Metadata } from "next";
import ContactPageClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with PicsiDrop. Ask questions about sending package deliveries, traveler route matching, driver onboarding, or partnership inquiries in Hyderabad.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
