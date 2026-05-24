"use client";

import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE } from "@/lib/constants";

const stats = [
  { value: SITE.passRate, label: "Board Pass Rate" },
  { value: SITE.studentsCount, label: "Families Served" },
  { value: SITE.yearsExperience, label: "Years Excellence" },
];

export default function HeroV2() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #064E3B 0%, #065F46 50%, #047857 100%)",
        paddingTop: "124px",
        paddingBottom: "80px",
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(252,211,77,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Top banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex items-center gap-2 mb-8 px-5 py-2 rounded-full border"
        style={{
          borderColor: "rgba(252,211,77,0.3)",
          backgroundColor: "rgba(252,211,77,0.08)",
        }}
      >
        <Star className="w-3.5 h-3.5" style={{ color: "#FCD34D" }} />
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#FCD34D" }}
        >
          Trusted by 500+ Families in Delhi
        </span>
        <Star className="w-3.5 h-3.5" style={{ color: "#FCD34D" }} />
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="relative z-10 text-4xl sm:text-5xl lg:text-7xl font-bold font-serif text-white leading-tight mb-6 max-w-4xl px-4"
      >
        Your Child&apos;s{" "}
        <span
          className="relative inline-block"
          style={{ color: "#FCD34D" }}
        >
          Success Story
        </span>
        <br />
        Starts Here.
      </motion.h1>

      {/* Sub */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-10 text-lg max-w-xl mx-auto mb-10 px-4 leading-relaxed"
        style={{ color: "rgba(255,255,255,0.75)" }}
      >
        Class 1–12 · CBSE · Small Batches · Tilak Nagar, New Delhi
        <br />
        <span className="text-white font-medium">
          Every child deserves a teacher who knows their name.
        </span>
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative z-10 flex flex-wrap gap-4 justify-center mb-16 px-4"
      >
        <WhatsAppButton variant="primary" label="WhatsApp Us Now" />
        <a
          href="/results"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all"
          style={{
            borderColor: "#FCD34D",
            color: "#FCD34D",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#FCD34D";
            e.currentTarget.style.color = "#064E3B";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#FCD34D";
          }}
        >
          See Our Results
        </a>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="relative z-10 grid grid-cols-3 gap-4 max-w-2xl w-full px-4"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center py-5 px-4 rounded-2xl"
            style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <span
              className="text-3xl sm:text-4xl font-bold font-serif mb-1"
              style={{ color: "#FCD34D" }}
            >
              {s.value}
            </span>
            <span className="text-xs font-medium text-center" style={{ color: "rgba(255,255,255,0.6)" }}>
              {s.label}
            </span>
          </div>
        ))}
      </motion.div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
