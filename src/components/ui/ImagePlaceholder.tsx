import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  className?: string;
  label?: string;
  aspectRatio?: string;
}

export default function ImagePlaceholder({
  className = "",
  label = "Photo Coming Soon",
  aspectRatio = "aspect-square",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatio} flex flex-col items-center justify-center gap-2 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 text-gray-400 ${className}`}
    >
      <ImageIcon className="w-8 h-8" />
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
}
