"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const classOptions = [
  "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
  "Class 11 Commerce", "Class 11 Arts",
  "Class 12 Commerce", "Class 12 Arts",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", class: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi SR TUTOR, my name is ${form.name}. I'm interested in coaching for ${form.class}. ${form.message} My phone: ${form.phone}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-sm text-center">
        <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
        <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
        <p className="text-gray-500">
          We've opened WhatsApp with your inquiry. We'll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
        <input
          type="text"
          required
          placeholder="Your full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm transition"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
        <input
          type="tel"
          required
          placeholder="Your 10-digit mobile number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm transition"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Class Interested In *</label>
        <select
          required
          value={form.class}
          onChange={(e) => setForm({ ...form, class: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm transition bg-white"
        >
          <option value="">Select class</option>
          {classOptions.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
        <textarea
          rows={4}
          placeholder="Any specific questions about subjects, fees, or timings..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1E3A8A] focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold text-base transition-all hover:opacity-90 hover:shadow-lg"
        style={{ backgroundColor: "#1E3A8A" }}
      >
        <Send className="w-5 h-5" />
        Send via WhatsApp
      </button>
      <p className="text-xs text-gray-400 text-center">
        This will open WhatsApp with your message pre-filled.
      </p>
    </form>
  );
}
