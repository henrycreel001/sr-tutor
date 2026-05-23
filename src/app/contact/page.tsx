import type { Metadata } from "next";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import SectionBanner from "@/components/ui/SectionBanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ContactForm from "@/components/sections/ContactForm";
import LocalBusinessSchema from "@/components/ui/LocalBusinessSchema";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact SR TUTOR — Tilak Nagar, New Delhi",
  description:
    "Contact SR TUTOR coaching center in Tilak Nagar. WhatsApp, visit us, or send an inquiry.",
  openGraph: {
    title: "Contact SR TUTOR — Tilak Nagar, Delhi",
    description: "Contact SR TUTOR coaching center in Tilak Nagar. WhatsApp, visit us, or send an inquiry.",
    url: "https://srtutor.in/contact",
    type: "website",
  },
  alternates: { canonical: "https://srtutor.in/contact" },
};

const contactInfo = [
  { icon: MapPin, label: "Address", value: CONTACT.address, href: null },
  { icon: Clock, label: "Center Timings", value: CONTACT.timings, href: null },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone}` },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

export default function ContactPage() {
  return (
    <>
      <LocalBusinessSchema />
      <SectionBanner
        title="Get in Touch"
        subtitle="We're here to help — WhatsApp us, visit, or send a message"
        breadcrumb="Contact"
      />

      {/* WhatsApp Primary CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="rounded-3xl p-10 shadow-md" style={{ backgroundColor: "#F0FDF4" }}>
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg"
                style={{ backgroundColor: "#25D366" }}
              >
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-3" style={{ color: "#1E3A8A" }}>
                Fastest Way to Reach Us
              </h2>
              <p className="text-gray-600 mb-6">
                Send us a message on WhatsApp — we respond within minutes.
              </p>
              <WhatsAppButton variant="primary" label="WhatsApp Us Now" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-10 pb-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <AnimatedSection>
            <h3 className="text-2xl font-bold mb-8" style={{ color: "#1E3A8A" }}>
              Contact Information
            </h3>
            <div className="space-y-4 mb-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#EFF6FF" }}
                  >
                    <info.icon className="w-5 h-5" style={{ color: "#1E3A8A" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a href={info.href} className="font-medium hover:underline" style={{ color: "#1E3A8A" }}>
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-800">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden" style={{ height: 220 }}>
              <iframe
                src={CONTACT.mapEmbed}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SR TUTOR Location — Tilak Nagar, New Delhi"
              />
            </div>
          </AnimatedSection>

          {/* Inquiry Form */}
          <AnimatedSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-8" style={{ color: "#1E3A8A" }}>
              Send Us a Message
            </h3>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
