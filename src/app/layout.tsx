import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "SR TUTOR — Coaching Center in Tilak Nagar, New Delhi",
  description:
    "Best coaching center in Tilak Nagar for Class 1–12. Small batches, experienced faculty, proven results. Call/WhatsApp now.",
  keywords: ["coaching center Tilak Nagar", "tutor Delhi", "CBSE coaching", "class 1 to 12"],
  openGraph: {
    title: "SR TUTOR — Coaching Center in Tilak Nagar, New Delhi",
    description: "8+ years of excellence. Small batches, proven results. Class 1–12 coaching.",
    type: "website",
    locale: "en_IN",
    url: "https://srtutor.in",
    siteName: "SR TUTOR",
  },
  alternates: { canonical: "https://srtutor.in" },
  metadataBase: new URL("https://srtutor.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${serif.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
