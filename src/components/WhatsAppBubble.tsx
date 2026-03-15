import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppBubble = () => {
  const message = encodeURIComponent("Halo Jerry Salon, saya ingin booking layanan di salon Anda.");
  const waLink = `https://wa.me/+6283865817255?text=${message}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
        Chat WA
      </span>
    </a>
  );
};

export default WhatsAppBubble;
