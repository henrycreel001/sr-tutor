import { BookOpen, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { courses } from "@/lib/data";

const courseList = Object.values(courses);
const colors = [
  { border: "#1E3A8A", badge: "#EFF6FF", badgeText: "#1E3A8A" },
  { border: "#F59E0B", badge: "#FFFBEB", badgeText: "#92400E" },
  { border: "#059669", badge: "#ECFDF5", badgeText: "#065F46" },
];

export default function CoursesOverview() {
  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection variant="fade" className="mb-14">
          <div className="border-l-4 pl-5" style={{ borderColor: "#F59E0B" }}>
            <h2 className="text-3xl md:text-4xl font-bold font-serif" style={{ color: "#1E3A8A" }}>
              Comprehensive Coaching for All Classes
            </h2>
            <p className="text-gray-500 max-w-2xl mt-3 text-lg">
              From foundational learning in Class 1 to board exam mastery in Class 12 — we cover it all.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {courseList.map((course, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div
                className="group bg-white rounded-2xl p-8 shadow-brand shadow-brand-hover transition-[transform,box-shadow] hover:-translate-y-1 h-full flex flex-col border-t-4"
                style={{ borderTopColor: colors[i].border }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6"
                  style={{ backgroundColor: colors[i].badge }}
                >
                  <BookOpen className="w-6 h-6" style={{ color: colors[i].border }} />
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ color: "#1E3A8A" }}>
                  {course.title}
                </h3>
                <p className="text-sm font-medium text-gray-400 mb-2">{course.subtitle}</p>
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 self-start"
                  style={{ backgroundColor: colors[i].badge, color: colors[i].badgeText }}
                >
                  {course.board}
                </span>
                <ul className="space-y-2 flex-1 mb-6">
                  {course.subjects.map((subject, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: colors[i].border }} />
                      {subject}
                    </li>
                  ))}
                </ul>
                <a
                  href="/courses"
                  className="flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-[gap,color]"
                  style={{ color: colors[i].border }}
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10" delay={0.4}>
          <a
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 hover:text-white hover:bg-[#1E3A8A] transition-[background-color,color,border-color]"
            style={{ borderColor: "#1E3A8A", color: "#1E3A8A" }}
          >
            View All Courses <ArrowRight className="w-5 h-5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
