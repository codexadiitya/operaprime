import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { SALON, whatsappLink } from "@/lib/content";

export default function FloatingActions() {
  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3" data-testid="floating-actions">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp us"
        data-testid="floating-whatsapp"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        style={{ background: "#3FBF6F", color: "#170A0A" }}
      >
        <MessageCircle size={22} />
      </a>
      <a
        href={`tel:${SALON.phoneTel}`}
        aria-label="Call the studio"
        data-testid="floating-call"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        style={{ background: "#C9A227", color: "#170A0A" }}
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
