import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { toppers } from "@/lib/data";

const RANK_LABELS = ["1st", "2nd", "3rd", "4th"];
const RANK_COLORS = [
  { bg: "#F59E0B", text: "#fff" },
  { bg: "#9CA3AF", text: "#fff" },
  { bg: "#CD7F32", text: "#fff" },
  { bg: "#1E3A8A", text: "#fff" },
];

export default function Toppers() {
  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection variant="fade" className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#F59E0B" }}>
            Our Toppers
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4" style={{ color: "#1E3A8A" }}>
            Students Who Made Us Proud
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Celebrating excellence in CBSE board exams, year after year.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toppers.map((topper, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group bg-gradient-to-b from-[#EFF6FF] to-white rounded-2xl p-6 text-center shadow-brand shadow-brand-hover transition-[transform,box-shadow] border border-blue-50 relative">
                {/* Rank badge */}
                <div
                  className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shadow-sm"
                  style={{ backgroundColor: RANK_COLORS[i].bg, color: RANK_COLORS[i].text }}
                >
                  {RANK_LABELS[i]}
                </div>

                <div className="relative mb-4">
                  <ImagePlaceholder
                    aspectRatio="aspect-square"
                    label="Photo"
                    className="rounded-full w-20 h-20 mx-auto border-4 border-white shadow-md"
                  />
                </div>
                <h3 className="font-bold text-lg mt-1" style={{ color: "#1E3A8A" }}>
                  {topper.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{topper.class}</p>
                <div
                  className="inline-block text-2xl font-bold px-5 py-1.5 rounded-full mb-2"
                  style={{ backgroundColor: "#FFFBEB", color: "#92400E" }}
                >
                  {topper.score}
                </div>
                <p className="text-xs text-gray-400 mt-1">{topper.subject} · {topper.year}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10" delay={0.4}>
          <a
            href="/results"
            className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-[gap,color]"
            style={{ color: "#1E3A8A" }}
          >
            View All Results <ArrowRight className="w-5 h-5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
