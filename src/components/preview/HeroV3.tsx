"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE } from "@/lib/constants";

const stats = [
  { value: SITE.passRate, label: "Board Pass Rate" },
  { value: SITE.studentsCount, label: "Students Taught" },
  { value: SITE.yearsExperience, label: "Years Experience" },
  { value: "1–12", label: "Classes Covered" },
];

export default function HeroV3() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        backgroundColor: "#F8FAFC",
        paddingTop: "124px",
        paddingBottom: "80px",
      }}
    >
      {/* Left indigo accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5"
        style={{ backgroundColor: "#4F46E5" }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

          {/* Left — big headline */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-6 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "#4F46E5" }}
            >
              <MapPin className="w-4 h-4" />
              Tilak Nagar, New Delhi · Est. {SITE.established}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-bold font-serif leading-none mb-8"
              style={{
                fontSize: "clamp(3rem, 8vw, 6rem)",
                color: "#111827",
                letterSpacing: "-0.02em",
              }}
            >
              The Coaching
              <br />
              Center Tilak
              <br />
              Nagar{" "}
              <span style={{ color: "#4F46E5" }}>Trusts.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-lg mb-10 max-w-md leading-relaxed"
              style={{ color: "#6B7280" }}
            >
              CBSE Class 1–12. Small batches. Experienced faculty.{" "}
              <span style={{ color: "#111827", fontWeight: 600 }}>
                Your child doesn&apos;t get lost here.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#4F46E5" }}
              >
                Book Free Demo
                <ArrowRight className="w-5 h-5" />
              </a>
              <WhatsAppButton variant="primary" label="WhatsApp Us" />
            </motion.div>
          </div>

          {/* Right — stat stack */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex flex-col gap-3 min-w-[220px]"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-5 py-5 px-6 rounded-2xl bg-white"
                style={{ boxShadow: "0 2px 20px rgba(79,70,229,0.07)", border: "1px solid #E5E7EB" }}
              >
                <span
                  className="text-4xl font-bold font-serif shrink-0"
                  style={{ color: "#4F46E5", minWidth: "80px" }}
                >
                  {s.value}
                </span>
                <span className="text-sm font-medium text-gray-500 leading-tight">
                  {s.label}
                </span>
              </div>
            ))}

            <div
              className="mt-2 px-6 py-4 rounded-2xl text-sm font-medium text-center"
              style={{
                backgroundColor: "#4F46E5",
                color: "white",
              }}
            >
              Class 1 → Class 12 · CBSE Board
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
