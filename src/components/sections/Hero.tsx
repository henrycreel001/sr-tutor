"use client";

import { motion } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { SITE, CONTACT } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20"
      style={{ background: "linear-gradient(135deg, #1E2A5E 0%, #1E3A8A 60%, #2563EB 100%)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-amber-400 font-medium mb-4 text-sm uppercase tracking-widest"
            >
              <MapPin className="w-4 h-4" />
              {SITE.location}
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
              className="text-lg text-blue-100 mb-8 leading-relaxed"
            >
              8 years. 500+ students. 98% board pass rate.{" "}
              <span className="text-white font-semibold">Small batches mean your child actually gets seen</span>{" "}
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-[#1E3A8A] transition-all"
              >
                Visit Our Center
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-6 text-white/80 text-sm font-medium"
            >
              <span>✓ {SITE.yearsExperience} Years of Excellence</span>
              <span>✓ {SITE.studentsCount} Students Taught</span>
              <span>✓ {SITE.passRate} Board Results</span>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl opacity-20" style={{ background: "radial-gradient(ellipse, #F59E0B, transparent)" }} />
              <ImagePlaceholder
                aspectRatio="aspect-[4/3]"
                label="Hero Image — Classroom / Students"
                className="rounded-2xl shadow-2xl border-0 bg-white/10 text-white/60"
              />
              {/* Stats card overlay */}
              <div
                className="absolute -bottom-6 -left-6 rounded-xl p-4 shadow-xl"
                style={{ backgroundColor: "#F59E0B" }}
              >
                <p className="text-2xl font-bold text-[#1E2A5E]">{SITE.passRate}</p>
                <p className="text-xs font-semibold text-[#1E2A5E] opacity-80">Board Pass Rate</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                <p className="text-2xl font-bold text-[#1E3A8A]">{SITE.yearsExperience}</p>
                <p className="text-xs font-semibold text-gray-500">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
