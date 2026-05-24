"use client";

import { usePathname } from "next/navigation";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  if (pathname.startsWith("/preview")) return null;
  return <WhatsAppButton variant="floating" />;
}
