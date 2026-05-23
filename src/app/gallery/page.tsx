import type { Metadata } from "next";
import { Camera } from "lucide-react";
import SectionBanner from "@/components/ui/SectionBanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import GalleryGrid from "@/components/sections/GalleryGrid";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery — SR TUTOR Coaching Center | Tilak Nagar",
  description:
    "Photos from SR TUTOR coaching center in Tilak Nagar. Classrooms, faculty, and students.",
  openGraph: {
    title: "Gallery — SR TUTOR Coaching Center",
    description: "Photos from SR TUTOR coaching center in Tilak Nagar.",
    url: "https://srtutor.in/gallery",
    type: "website",
  },
  alternates: { canonical: "https://srtutor.in/gallery" },
};

const categories = ["All", "Classroom", "Students", "Faculty", "Results"];

export default function GalleryPage() {
  return (
    <>
      <SectionBanner
        title="Our Center"
        subtitle="A look inside SR TUTOR — where learning happens every day"
        breadcrumb="Gallery"
      />

      {/* Note */}
      <section className="py-8 px-4 bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-amber-700">
          <Camera className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-medium">
            Photos are being updated — visit us in person to see our center. Real photos coming soon!
          </p>
        </div>
      </section>

      <GalleryGrid images={galleryImages} categories={categories} />

      {/* CTA */}
      <section className="py-16 px-4 text-center" style={{ backgroundColor: "#F8FAFC" }}>
        <AnimatedSection>
          <h3 className="text-2xl font-bold mb-3" style={{ color: "#1E3A8A" }}>
            Want to see our center in person?
          </h3>
          <p className="text-gray-500 mb-6">
            WhatsApp us and we&apos;ll tell you the best time to visit.
          </p>
          <WhatsAppButton variant="primary" label="Plan a Visit" />
        </AnimatedSection>
      </section>
    </>
  );
}
