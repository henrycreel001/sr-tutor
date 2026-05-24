"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";
import { SITE, CONTACT, WHATSAPP_URL } from "@/lib/constants";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Courses" },
  { href: "/results", label: "Results" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/preview")) return null;

  return (
    <footer style={{ backgroundColor: "#1E2A5E", borderTop: "4px solid #F59E0B" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-3">
              <span style={{ color: "#F59E0B" }}>SR</span> TUTOR
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              {SITE.tagline}. Trusted by 500+ families in Tilak Nagar, New Delhi.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-4 h-4" fill="white" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-5" style={{ color: "#F59E0B" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-5" style={{ color: "#F59E0B" }}>
              Classes Offered
            </h4>
            <ul className="space-y-3 text-blue-200 text-sm">
              <li>Class 1 – 5 (All Subjects)</li>
              <li>Class 6 – 10 (All Subjects)</li>
              <li>Class 11 – 12 Commerce</li>
              <li>Class 11 – 12 Arts</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-5" style={{ color: "#F59E0B" }}>
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-70" />
                <span className="text-blue-200 text-sm">{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 flex-shrink-0 opacity-70" />
                <span className="text-blue-200 text-sm">{CONTACT.timings}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 opacity-70" />
                <span className="text-blue-200 text-sm">{CONTACT.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 opacity-70" />
                <span className="text-blue-200 text-sm">{CONTACT.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-blue-300 text-sm">
          <p>© {new Date().getFullYear()} SR TUTOR. All Rights Reserved.</p>
          <p>Tilak Nagar, New Delhi</p>
        </div>
      </div>
    </footer>
  );
}
