"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const paused = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!paused.current) {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  return (
    <section className="relative py-12 md:py-20 px-4 overflow-hidden" style={{ backgroundColor: "#F8FAFC" }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #1E3A8A 1px, transparent 0)",
          backgroundSize: "32px 32px",
          opacity: 0.02,
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimatedSection>
          <div
            className="relative bg-white rounded-3xl shadow-lg p-8 md:p-12"
            onMouseEnter={() => { paused.current = true; }}
            onMouseLeave={() => { paused.current = false; }}
          >
            <Quote className="w-12 h-12 mb-6 opacity-20" style={{ color: "#F59E0B" }} />

            <div className="min-h-[120px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: direction * 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -20 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                    &ldquo;{testimonials[current].review}&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                      style={{ backgroundColor: "#1E3A8A" }}
                    >
                      {testimonials[current].name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonials[current].name}</p>
                      <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" style={{ color: "#F59E0B" }} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="w-2.5 h-2.5 rounded-full transition-all"
                    style={{ backgroundColor: i === current ? "#1E3A8A" : "#E5E7EB" }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] transition-all"
                  style={{ borderColor: "#E5E7EB" }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border-2 flex items-center justify-center hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] transition-all"
                  style={{ borderColor: "#E5E7EB" }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
