"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface GalleryImage {
  src: string | null;
  alt: string;
  category: string;
}

interface Props {
  images: GalleryImage[];
  categories: string[];
}

export default function GalleryGrid({ images, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? images
    : images.filter((img) => img.category === activeCategory);

  const lightboxImages = filtered.filter((img) => img.src !== null);

  function openLightbox(index: number) {
    if (filtered[index].src) setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function prev() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length);
  }

  function next() {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % lightboxImages.length);
  }

  return (
    <>
      {/* Filter tabs */}
      <section className="py-6 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              style={activeCategory === cat ? { backgroundColor: "#1E3A8A" } : undefined}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <AnimatedSection key={`${activeCategory}-${i}`} delay={i * 0.05}>
                <div
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  {img.src ? (
                    <div className="aspect-square relative">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder
                      aspectRatio="aspect-square"
                      label={img.alt}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-[#1E3A8A]/0 group-hover:bg-[#1E3A8A]/20 transition-all rounded-xl flex items-center justify-center">
                    {img.src && (
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                    <span className="text-xs font-semibold text-white bg-[#1E3A8A]/80 px-2 py-1 rounded-full">
                      {img.category}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && lightboxImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 text-white text-4xl hover:text-gray-300 transition-colors px-4 py-8"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            ‹
          </button>

          <div
            className="relative max-w-4xl max-h-[80vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImages[lightboxIndex].src!}
              alt={lightboxImages[lightboxIndex].alt}
              width={1200}
              height={800}
              className="object-contain max-h-[80vh] rounded-lg"
            />
            <p className="text-center text-white/70 text-sm mt-3">
              {lightboxImages[lightboxIndex].alt}
            </p>
          </div>

          <button
            className="absolute right-4 text-white text-4xl hover:text-gray-300 transition-colors px-4 py-8"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
