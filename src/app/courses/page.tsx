import type { Metadata } from "next";
import { CheckCircle2, Clock, MessageCircle } from "lucide-react";
import SectionBanner from "@/components/ui/SectionBanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { courses, batchTimings } from "@/lib/data";
import CourseFAQ from "@/components/sections/CourseFAQ";

export const metadata: Metadata = {
  title: "Courses — Class 1–12 Coaching | SR TUTOR Tilak Nagar",
  description:
    "SR TUTOR offers coaching for Class 1–10 (all subjects) and Class 11–12 Commerce & Arts in Tilak Nagar, Delhi.",
  openGraph: {
    title: "Courses — Class 1–12 Coaching | SR TUTOR",
    description: "SR TUTOR offers coaching for Class 1–10 (all subjects) and Class 11–12 Commerce & Arts in Tilak Nagar.",
    url: "https://srtutor.in/courses",
    type: "website",
  },
  alternates: { canonical: "https://srtutor.in/courses" },
};

const courseEntries = Object.values(courses);
const colorMap = [
  { bg: "#EFF6FF", border: "#1E3A8A", text: "#1E3A8A", badge: "#DBEAFE" },
  { bg: "#FFFBEB", border: "#F59E0B", text: "#92400E", badge: "#FDE68A" },
  { bg: "#ECFDF5", border: "#059669", text: "#065F46", badge: "#A7F3D0" },
];

export default function CoursesPage() {
  return (
    <>
      <SectionBanner
        title="Our Courses"
        subtitle="Comprehensive coaching for Class 1 to 12 — all subjects, small batches, proven results"
        breadcrumb="Courses"
      />

      {/* Course Details */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {courseEntries.map((course, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className="rounded-3xl overflow-hidden shadow-md border-l-8"
                style={{ borderLeftColor: colorMap[i].border }}
              >
                <div className="p-8 md:p-10" style={{ backgroundColor: colorMap[i].bg }}>
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="flex-1">
                      <span
                        className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                        style={{ backgroundColor: colorMap[i].badge, color: colorMap[i].text }}
                      >
                        {course.board}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold font-serif mb-2" style={{ color: colorMap[i].text }}>
                        {course.title}
                      </h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>

                      <h4 className="font-semibold mb-3 text-gray-700">Subjects Covered:</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {course.subjects.map((subject, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle2
                              className="w-4 h-4 flex-shrink-0"
                              style={{ color: colorMap[i].border }}
                            />
                            {subject}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:w-64 flex-shrink-0">
                      <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                        <p className="text-sm font-medium text-gray-500 mb-1">Enroll Now</p>
                        <p className="text-xs font-semibold mb-3" style={{ color: "#1E3A8A" }}>
                          Fees starting from ₹[X]/month
                        </p>
                        <p className="text-xs text-gray-400 mb-4">
                          Message us for exact fees & batch availability
                        </p>
                        <WhatsAppButton
                          variant="inline"
                          label="Check Availability & Fees"
                          className="w-full justify-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Batch Timings */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#F59E0B" }}>
              Schedule
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif" style={{ color: "#1E3A8A" }}>
              Batch Timings
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: "#1E3A8A" }}>
                    <th className="px-6 py-4 text-left text-white text-sm font-semibold">Batch</th>
                    <th className="px-6 py-4 text-left text-white text-sm font-semibold">
                      <Clock className="w-4 h-4 inline mr-2" />Time
                    </th>
                    <th className="px-6 py-4 text-left text-white text-sm font-semibold">Classes</th>
                  </tr>
                </thead>
                <tbody>
                  {batchTimings.map((batch, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-50 hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 text-sm">{batch.batch}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{batch.time}</td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                          {batch.classes}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CourseFAQ />

      {/* CTA */}
      <section className="py-14 px-4 text-center bg-white">
        <AnimatedSection>
          <h3 className="text-2xl font-bold mb-3" style={{ color: "#1E3A8A" }}>
            Want to know about fees & availability?
          </h3>
          <p className="text-gray-500 mb-6">
            Message us on WhatsApp and we'll get back to you instantly.
          </p>
          <WhatsAppButton variant="primary" label="Check Availability & Fees" />
        </AnimatedSection>
      </section>
    </>
  );
}
