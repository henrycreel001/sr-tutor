import type { Metadata } from "next";
import { Trophy, Star } from "lucide-react";
import SectionBanner from "@/components/ui/SectionBanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { toppers, testimonials } from "@/lib/data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Student Results & Toppers | SR TUTOR Tilak Nagar",
  description:
    "See our students' board exam results, toppers, and parent testimonials. Join SR TUTOR in Tilak Nagar.",
  openGraph: {
    title: "Student Results & Toppers | SR TUTOR",
    description: "See our students' board exam results, toppers, and parent testimonials.",
    url: "https://srtutor.in/results",
    type: "website",
  },
  alternates: { canonical: "https://srtutor.in/results" },
};

const resultStats = [
  { value: SITE.passRate, label: "Board Pass Rate", sub: "2024 Batch" },
  { value: SITE.studentsCount, label: "Students Taught", sub: "Since 2016" },
  { value: SITE.yearsExperience, label: "Years of Excellence", sub: "Established 2016" },
  { value: "4.9★", label: "Parent Rating", sub: "Based on reviews" },
];

export default function ResultsPage() {
  return (
    <>
      <SectionBanner
        title="Our Results"
        subtitle="Consistent toppers and outstanding board exam results — year after year"
        breadcrumb="Results"
      />

      {/* Stats */}
      <section className="py-16 px-4" style={{ backgroundColor: "#1E3A8A" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {resultStats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-1" style={{ color: "#F59E0B" }}>
                  {stat.value}
                </p>
                <p className="text-white font-semibold mb-1">{stat.label}</p>
                <p className="text-blue-300 text-sm">{stat.sub}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection variant="fade" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-serif inline-flex items-center gap-3" style={{ color: "#1E3A8A" }}>
              <Trophy className="w-8 h-8 flex-shrink-0" style={{ color: "#F59E0B" }} />
              Our Toppers
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Students who worked hard and achieved outstanding results.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toppers.map((topper, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-gradient-to-b from-[#EFF6FF] to-white rounded-2xl p-8 text-center shadow-brand shadow-brand-hover transition-[transform,box-shadow] border border-blue-50">
                  <div className="relative mb-5">
                    <ImagePlaceholder
                      aspectRatio="aspect-square"
                      label="Photo"
                      className="rounded-full w-24 h-24 mx-auto border-4 border-white shadow-md"
                    />
                    <div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center shadow"
                      style={{ backgroundColor: "#F59E0B" }}
                    >
                      <Trophy className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mt-4 mb-1" style={{ color: "#1E3A8A" }}>
                    {topper.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{topper.class}</p>
                  <div
                    className="text-3xl font-bold mb-2 px-4 py-2 rounded-xl inline-block"
                    style={{ backgroundColor: "#FFFBEB", color: "#92400E" }}
                  >
                    {topper.score}
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{topper.subject} · {topper.year}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection variant="fade" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-serif" style={{ color: "#1E3A8A" }}>
              Parents Trust SR TUTOR
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 shadow-brand shadow-brand-hover transition-[transform,box-shadow]">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-current" style={{ color: "#F59E0B" }} />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.review}"</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                      style={{ backgroundColor: "#1E3A8A" }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 text-center bg-white">
        <AnimatedSection>
          <h3 className="text-2xl font-bold mb-3" style={{ color: "#1E3A8A" }}>
            Ready to join the next batch?
          </h3>
          <p className="text-gray-500 mb-6">
            Enroll now and let your child be our next success story.
          </p>
          <WhatsAppButton variant="primary" label="Enroll via WhatsApp" />
        </AnimatedSection>
      </section>
    </>
  );
}
