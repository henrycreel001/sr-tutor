import { MapPin, Clock, Mail, Phone } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CONTACT, SITE } from "@/lib/constants";

export default function LocationStrip() {
  return (
    <section className="py-12 md:py-20 px-4" style={{ backgroundColor: "#1E2A5E" }}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection variant="fade" className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
            Visit SR TUTOR in {SITE.location}
          </h2>
          <p className="text-blue-200 text-lg">
            Come meet our faculty and see our center in person.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <AnimatedSection>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F59E0B" }}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Address</p>
                  <p className="text-blue-200 text-sm">{CONTACT.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F59E0B" }}>
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Timings</p>
                  <p className="text-blue-200 text-sm">{CONTACT.timings}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F59E0B" }}>
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <p className="text-blue-200 text-sm">{CONTACT.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F59E0B" }}>
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <p className="text-blue-200 text-sm">{CONTACT.email}</p>
                </div>
              </div>
            </div>

            <WhatsAppButton variant="primary" label="WhatsApp for Directions" />
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <iframe
                src={CONTACT.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SR TUTOR Location — Tilak Nagar, New Delhi"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
