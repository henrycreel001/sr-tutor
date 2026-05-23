"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

interface WhatsAppButtonProps {
  variant?: "floating" | "inline" | "primary";
  label?: string;
  className?: string;
}

export default function WhatsAppButton({
  variant = "inline",
  label = "WhatsApp Us",
  className = "",
}: WhatsAppButtonProps) {
  if (variant === "floating") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-transform hover:scale-110 whatsapp-pulse relative ${className}`}
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>
    );
  }

  if (variant === "primary") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl ${className}`}
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="w-5 h-5" fill="white" />
        {label}
      </a>
    );
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all hover:scale-105 ${className}`}
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="w-5 h-5" fill="white" />
      {label}
    </a>
  );
}
