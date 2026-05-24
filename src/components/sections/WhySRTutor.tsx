import { GraduationCap, Users, IndianRupee, Trophy } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { usps } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Users,
  IndianRupee,
  Trophy,
};

export default function WhySRTutor() {
  return (
    <section className="py-12 md:py-20 px-4" style={{ backgroundColor: "#EFF6FF" }}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection variant="fade" className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#F59E0B" }}>
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4" style={{ color: "#1E3A8A" }}>
            Why Parents Choose SR TUTOR
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            8 years of consistent results speak for themselves.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, i) => {
            const Icon = iconMap[usp.icon];
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl p-8 shadow-brand shadow-brand-hover transition-[transform,box-shadow] hover:-translate-y-1 text-center h-full">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                    style={{ backgroundColor: "#EFF6FF" }}
                  >
                    <Icon className="w-8 h-8 text-[#1E3A8A] group-hover:text-[#F59E0B] transition-colors duration-200" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "#1E3A8A" }}>
                    {usp.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{usp.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
