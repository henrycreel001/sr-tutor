"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const faqs = [
  {
    q: "What is the batch size?",
    a: "Maximum 12 students per batch. Every student gets direct attention — doubts are addressed in the same session, not pushed to 'next class'.",
  },
  {
    q: "Do you offer a trial class?",
    a: "Yes. We offer a free trial class so your child can experience our teaching style before enrolling. Message us on WhatsApp to schedule one.",
  },
  {
    q: "What are the monthly fees?",
    a: "Fees vary by class and subject combination. We keep pricing transparent with no hidden charges. Most families find our rates significantly lower than comparable centers in Tilak Nagar. Contact us for the exact fee structure.",
  },
  {
    q: "Do you teach both CBSE and ICSE students?",
    a: "Yes. We teach students from both CBSE and ICSE boards for Class 1–10. For Class 11–12, we follow the CBSE curriculum for Commerce and Arts streams.",
  },
  {
    q: "How are doubts handled outside class hours?",
    a: "Students can message their doubts on WhatsApp and faculty respond the same day. For complex topics, we schedule a dedicated 15-minute slot before or after the next class.",
  },
  {
    q: "What is the admission process?",
    a: "Simple: contact us on WhatsApp, visit the center for a brief interaction, and enroll. We assess the student's current level to place them in the right batch. No entrance test required.",
  },
];

export default function CourseFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection variant="fade" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif" style={{ color: "#1E3A8A" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-3">
            Common questions from parents before enrolling.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
