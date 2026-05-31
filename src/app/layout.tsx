import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../../components/navbar";
import { WhatsappButton } from "../../components/whatsapp-button";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://picsidrop.com"),
  icons: {
    icon: "https://ik.imagekit.io/dypkhqxip/favicon",
    shortcut: "https://ik.imagekit.io/dypkhqxip/favicon",
    apple: "https://ik.imagekit.io/dypkhqxip/favicon",
  },
  title: {
    default: "PicsiDrop | Peer-to-Peer Same-Day Delivery in Hyderabad",
    template: "%s | PicsiDrop"
  },
  description: "Send packages safely through everyday travelers. 70% cheaper than traditional couriers, fully verified with Aadhaar KYC, and escrow-protected. Same-day parcel delivery in Hyderabad, India.",
  keywords: [
    "peer-to-peer delivery",
    "courier service hyderabad",
    "same day delivery hyderabad",
    "picsidrop",
    "package delivery",
    "secure escrow delivery",
    "kyc verified travelers",
    "green logistics india",
    "paverasa private limited",
    "hyderabad logistics",
    "whatsapp tracking",
    "pocket friendly delivery"
  ],
  authors: [{ name: "Paverasa Private Limited" }],
  creator: "Paverasa Private Limited",
  publisher: "Paverasa Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://picsidrop.com",
  },
  openGraph: {
    title: "PicsiDrop | Peer-to-Peer Same-Day Delivery in Hyderabad",
    description: "Send packages safely through everyday travelers. 70% cheaper than traditional couriers, fully verified with Aadhaar KYC, and escrow-protected.",
    url: "https://picsidrop.com",
    siteName: "PicsiDrop",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ik.imagekit.io/dypkhqxip/E-Wallet-bro.svg",
        width: 1200,
        height: 630,
        alt: "PicsiDrop Peer-to-Peer Delivery",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PicsiDrop | Peer-to-Peer Same-Day Delivery in Hyderabad",
    description: "Send packages safely through everyday travelers. 70% cheaper, fully verified, and escrow-protected.",
    images: ["https://ik.imagekit.io/dypkhqxip/E-Wallet-bro.svg"],
  },
  other: {
    "geo.position": "17.4729;78.4870",
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "ICBM": "17.4729, 78.4870",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
