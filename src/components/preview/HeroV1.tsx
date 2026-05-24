"use client";

import { motion } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { SITE } from "@/lib/constants";

export default function HeroV1() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{
        background: "linear-gradient(135deg, #1E2A5E 0%, #1E3A8A 60%, #2563EB 100%)",
        paddingTop: "124px",
      }}
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 font-medium mb-4 text-sm uppercase tracking-widest"
              style={{ color: "#F59E0B" }}
            >
              <MapPin className="w-4 h-4" />
              Tilak Nagar, New Delhi
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white leading-tight mb-6"
            >
              Where Class 10 Students{" "}
              <span style={{ color: "#F59E0B" }}>Score 90%+</span>
              <br />
              in CBSE Boards.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "#BFDBFE" }}
            >
              8 years. 500+ students. 98% board pass rate.{" "}
              <span className="text-white font-semibold">
                Small batches mean your child actually gets seen
              </span>{" "}
              — not lost in a crowd.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <WhatsAppButton variant="primary" label="WhatsApp Us Now" />
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-lg hover:bg-white transition-all"
                style={{ ["--tw-hover-text" as string]: "#1E3A8A" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1E3A8A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              >
                Visit Our Center
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-6 text-sm font-medium"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              <span>✓ {SITE.yearsExperience} Years of Excellence</span>
              <span>✓ {SITE.studentsCount} Students Taught</span>
              <span>✓ {SITE.passRate} Board Results</span>
            </motion.div>
          </div>

          {/* Image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-2xl opacity-20"
                style={{ background: "radial-gradient(ellipse, #F59E0B, transparent)" }}
              />
              <ImagePlaceholder
                aspectRatio="aspect-[4/3]"
                label="Hero Image — Classroom / Students"
                className="rounded-2xl shadow-2xl border-0 bg-white/10 text-white/60"
              />
              <div
                className="absolute -bottom-6 -left-6 rounded-xl p-4 shadow-xl"
                style={{ backgroundColor: "#F59E0B" }}
              >
                <p className="text-2xl font-bold" style={{ color: "#1E2A5E" }}>
                  {SITE.passRate}
                </p>
                <p className="text-xs font-semibold opacity-80" style={{ color: "#1E2A5E" }}>
                  Board Pass Rate
                </p>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                <p className="text-2xl font-bold" style={{ color: "#1E3A8A" }}>
                  {SITE.yearsExperience}
                </p>
                <p className="text-xs font-semibold text-gray-500">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "rgba(255,255,255,0.4)" }}>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
