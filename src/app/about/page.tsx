import type { Metadata } from "next";
import { GraduationCap, Users, Heart, Award } from "lucide-react";
import SectionBanner from "@/components/ui/SectionBanner";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { faculty } from "@/lib/data";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About SR TUTOR — 8 Years of Excellence in Tilak Nagar",
  description:
    "Learn about SR TUTOR's 8 years of coaching excellence in Tilak Nagar. Experienced faculty, small batches, affordable fees.",
  openGraph: {
    title: "About SR TUTOR — 8 Years of Excellence",
    description: "Learn about SR TUTOR's 8 years of coaching excellence in Tilak Nagar.",
    url: "https://srtutor.in/about",
    type: "website",
  },
  alternates: { canonical: "https://srtutor.in/about" },
};

const values = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    desc: "We set high standards and equip every student to meet them.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    desc: "Small batches ensure no student is left behind.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    desc: "We treat every student as our own — their success is our success.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "8 years of consistent toppers and happy parents.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SectionBanner
        title="About SR TUTOR"
        subtitle="8 years of shaping futures in Tilak Nagar, New Delhi"
        breadcrumb="About"
      />

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#F59E0B" }}>
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#1E3A8A" }}>
                {SITE.yearsExperience} Years of Shaping Futures
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  SR TUTOR was founded with one clear mission — to give every student in Tilak Nagar
                  access to quality coaching at an affordable price. Over 8 years, we have helped
                  hundreds of students achieve their academic goals, from Class 1 foundations to
                  Class 12 board exams.
                </p>
                <p>
                  We believe that the right guidance, delivered with patience and expertise, can
                  transform any student's academic journey. Our small batch model ensures every
                  student gets the attention they deserve.
                </p>
                <p>
                  Today, SR TUTOR is trusted by 500+ families across Tilak Nagar and surrounding
                  areas, with a 98% board pass rate and consistent toppers every year.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <ImagePlaceholder
                aspectRatio="aspect-[4/3]"
                label="Center / Classroom Photo"
                className="rounded-2xl shadow-lg"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4" style={{ backgroundColor: "#1E3A8A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#F59E0B" }}>
              Our Mission
            </p>
            <blockquote className="text-2xl md:text-3xl font-semibold text-white leading-relaxed italic">
              "To provide focused, affordable, and results-oriented coaching that builds confidence
              and academic excellence in every student."
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#F59E0B" }}>
              What Drives Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1E3A8A" }}>
              Our Core Values
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm text-center h-full">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
                    style={{ backgroundColor: "#EFF6FF" }}
                  >
                    <v.icon className="w-7 h-7" style={{ color: "#1E3A8A" }} />
                  </div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: "#1E3A8A" }}>
                    {v.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#F59E0B" }}>
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1E3A8A" }}>
              Meet Our Faculty
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Experienced, passionate educators committed to your child's success.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((f, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-[#F8FAFC] rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all">
                  <ImagePlaceholder
                    aspectRatio="aspect-square"
                    label="Faculty Photo"
                    className="rounded-full w-24 h-24 mx-auto mb-5 border-4 border-white shadow"
                  />
                  <h3 className="font-bold text-lg mb-1" style={{ color: "#1E3A8A" }}>
                    {f.name}
                  </h3>
                  <p className="text-sm font-medium mb-2" style={{ color: "#F59E0B" }}>
                    {f.subject}
                  </p>
                  <p className="text-xs text-gray-500 mb-1">{f.qualification}</p>
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">
                    {f.experience} Experience
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" style={{ backgroundColor: "#F8FAFC" }}>
        <AnimatedSection>
          <h3 className="text-2xl font-bold mb-3" style={{ color: "#1E3A8A" }}>
            Want to know more?
          </h3>
          <p className="text-gray-500 mb-6">Talk to us on WhatsApp — we respond within minutes.</p>
          <WhatsAppButton variant="primary" label="Chat With Us on WhatsApp" />
        </AnimatedSection>
      </section>
    </>
  );
}
