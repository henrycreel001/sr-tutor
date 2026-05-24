"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { GraduationCap, Users, Trophy, BookOpen } from "lucide-react";
import { stats } from "@/lib/data";

const STAT_ICONS = [GraduationCap, Users, Trophy, BookOpen];

function parseStatValue(value: string): { prefix: string; number: number | null; suffix: string } {
  const match = value.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (match) {
    return { prefix: match[1], number: parseInt(match[2]), suffix: match[3] };
  }
  return { prefix: value, number: null, suffix: "" };
}

function CountUpStat({
  value,
  label,
  delay = 0,
  icon: Icon,
}: {
  value: string;
  label: string;
  delay?: number;
  icon: React.ElementType;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });
  const parsed = parseStatValue(value);

  useEffect(() => {
    if (!isInView || parsed.number === null || !numRef.current) return;
    const from = parsed.number > 100 ? Math.floor(parsed.number * 0.8) : 0;
    const controls = animate(from, parsed.number, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(v) {
        if (numRef.current) {
          numRef.current.textContent = String(Math.round(v));
        }
      },
    });
    return () => controls.stop();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="flex flex-col items-center text-center gap-3"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: "rgba(245,158,11,0.15)" }}
      >
        <Icon className="w-6 h-6" style={{ color: "#F59E0B" }} />
      </div>
      <div>
        <p className="text-3xl md:text-4xl font-bold leading-none mb-1" style={{ color: "#F59E0B" }}>
          {parsed.number !== null ? (
            <>
              {parsed.prefix}
              <span ref={numRef}>{parsed.number > 100 ? Math.floor(parsed.number * 0.8) : 0}</span>
              {parsed.suffix}
            </>
          ) : (
            value
          )}
        </p>
        <p className="text-sm font-medium text-blue-200">{label}</p>
      </div>
    </motion.div>
  );
}

export default function TrustBar() {
  return (
    <section className="py-12 px-4" style={{ backgroundColor: "#1E3A8A" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <CountUpStat
              key={i}
              value={stat.value}
              label={stat.label}
              delay={i * 0.1}
              icon={STAT_ICONS[i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
