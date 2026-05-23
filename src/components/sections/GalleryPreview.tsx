import { ArrowRight, Camera } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const previewImages = [
  { label: "Classroom Environment", size: "lg" },
  { label: "Student Session", size: "sm" },
  { label: "Faculty at Work", size: "sm" },
  { label: "Results Celebration", size: "sm" },
];

export default function GalleryPreview() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-14 gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#F59E0B" }}>
              Gallery
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#1E3A8A" }}>
              Life at SR TUTOR
            </h2>
          </div>
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] transition-all whitespace-nowrap"
            style={{ borderColor: "#1E3A8A", color: "#1E3A8A" }}
          >
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Large image */}
          <AnimatedSection className="col-span-2 row-span-2">
            <ImagePlaceholder
              aspectRatio="aspect-square"
              label="Classroom — Photo Coming Soon"
              className="rounded-2xl h-full min-h-[280px]"
            />
          </AnimatedSection>
          {/* Small images */}
          {previewImages.slice(1).map((img, i) => (
            <AnimatedSection key={i} delay={(i + 1) * 0.1}>
              <ImagePlaceholder
                aspectRatio="aspect-square"
                label={img.label}
                className="rounded-2xl"
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8 text-center" delay={0.4}>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Camera className="w-4 h-4" />
            <span>Photos coming soon — visit our center to see it in person!</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
