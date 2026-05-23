import { GraduationCap, Award } from "lucide-react";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import AnimatedSection from "@/components/ui/AnimatedSection";

const qualifications = [
  "BA Programme — Jesus & Mary College, Delhi University",
  "B.Ed — Guru Gobind Singh Indraprastha University",
  "MA Psychology — IGNOU",
];

export default function FounderSpotlight() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.1}>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div
                className="absolute -inset-3 rounded-3xl opacity-10"
                style={{ background: "radial-gradient(ellipse, #F59E0B, transparent)" }}
              />
              <ImagePlaceholder
                aspectRatio="aspect-[3/4]"
                label="Simran Ratti — Founder Photo"
                className="rounded-2xl shadow-brand relative"
              />
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl px-5 py-4 shadow-xl"
                style={{ backgroundColor: "#1E3A8A" }}
              >
                <p className="text-2xl font-bold" style={{ color: "#F59E0B" }}>8+</p>
                <p className="text-xs font-medium text-blue-200">Years Teaching</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#F59E0B" }}>
              The Person Behind SR TUTOR
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-2" style={{ color: "#1E3A8A" }}>
              Simran Ratti
            </h2>
            <p className="text-base font-medium text-gray-400 mb-6">Founder &amp; Head Faculty</p>

            <p className="text-gray-600 leading-relaxed mb-8">
              SR TUTOR is Simran&apos;s creation — built on the belief that every student in Tilak Nagar
              deserves the same quality of coaching as students in expensive private schools.
              She personally teaches every student, knows where each one struggles, and adjusts her
              approach accordingly. Eight years in, that personal accountability is still the core of
              what makes SR TUTOR different.
            </p>

            <div className="space-y-3 mb-8">
              <p className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 flex-shrink-0" style={{ color: "#1E3A8A" }} />
                Qualifications
              </p>
              {qualifications.map((q, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Award className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#F59E0B" }} />
                  <span className="text-sm text-gray-600">{q}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
