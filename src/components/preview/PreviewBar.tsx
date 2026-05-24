"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Eye, ExternalLink } from "lucide-react";

const variants = [
  { href: "/preview/v1", label: "V1 Classic Navy", sub: "Dark navy + gold" },
  { href: "/preview/v2", label: "V2 Emerald", sub: "Deep green + saffron" },
  { href: "/preview/v3", label: "V3 Minimal", sub: "Clean white + indigo" },
];

export default function PreviewBar() {
  const pathname = usePathname();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 text-white text-xs"
      style={{ backgroundColor: "#0a0a0a", height: "44px" }}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center gap-3">
        <div className="flex items-center gap-1.5 text-gray-400 shrink-0">
          <Eye className="w-3.5 h-3.5" />
          <span className="font-semibold uppercase tracking-widest hidden sm:block text-[10px]">
            Design Preview
          </span>
        </div>

        <div className="w-px h-4 bg-gray-700 shrink-0" />

        <div className="flex items-center gap-1 overflow-x-auto flex-1 no-scrollbar">
          {variants.map((v) => {
            const active = pathname === v.href;
            return (
              <Link
                key={v.href}
                href={v.href}
                className={`flex items-center gap-1 px-3 py-1 rounded-full whitespace-nowrap transition-all font-medium ${
                  active
                    ? "bg-white text-gray-900 text-[11px]"
                    : "text-gray-400 hover:text-white hover:bg-gray-800 text-[11px]"
                }`}
              >
                <span>{v.label}</span>
                <span
                  className={`hidden md:inline ${
                    active ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  — {v.sub}
                </span>
              </Link>
            );
          })}
        </div>

        <a
          href="https://sr-tutor.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-1 text-gray-600 hover:text-gray-300 transition-colors shrink-0 text-[11px]"
        >
          <ExternalLink className="w-3 h-3" />
          <span>Live site</span>
        </a>
      </div>
    </div>
  );
}
