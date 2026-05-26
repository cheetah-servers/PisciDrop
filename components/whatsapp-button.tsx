"use client";

import React from "react";

export function WhatsappButton() {
  return (
    <div className="group fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip */}
      <div className="absolute right-[76px] mr-2 bg-zinc-900 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 scale-95 origin-right group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none flex items-center gap-1.5 border border-zinc-800">
        <span>Chat with us on WhatsApp</span>
        {/* Tooltip arrow pointing right */}
        <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2.5 h-2.5 bg-zinc-900 rotate-45 border-r border-t border-zinc-800"></div>
      </div>

      {/* Floating Button */}
      <a
        href="https://wa.me/918125432177" // Actual WhatsApp support contact number
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 rounded-full"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/960px-WhatsApp.svg.png"
          alt="WhatsApp Logo"
          className="w-full h-full object-contain"
        />
      </a>
    </div>
  );
}
