"use client";

import React, { useEffect, useRef, useState } from "react";

interface LottiePlayerProps {
  src: string;
  className?: string;
}

const scriptSrc = "https://cdn.jsdelivr.net/npm/@dotlottie/player-component@1.3.0/dist/dotlottie-player.js";
let scriptLoadingPromise: Promise<void> | null = null;

function loadLottieScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  // If already loaded globally by the browser
  if ((window as any).DotLottiePlayer || customElements.get("dotlottie-player")) {
    return Promise.resolve();
  }

  // Deduplicate loading if already initiated
  if (scriptLoadingPromise) {
    return scriptLoadingPromise;
  }

  scriptLoadingPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", (e) => reject(e));
      return;
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = (e) => reject(e);
    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
}

export function LottiePlayer({ src, className }: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    loadLottieScript()
      .then(() => {
        if (active) setLoaded(true);
      })
      .catch((err) => {
        console.error("Error loading Lottie script:", err);
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (loaded && containerRef.current) {
      containerRef.current.innerHTML = "";
      
      const player = document.createElement("dotlottie-player");
      player.setAttribute("src", src);
      player.setAttribute("background", "transparent");
      player.setAttribute("speed", "1");
      player.setAttribute("loop", "");
      player.setAttribute("autoplay", "");
      player.style.width = "100%";
      player.style.height = "100%";
      player.style.display = "block";
      
      containerRef.current.appendChild(player);
    }
  }, [loaded, src]);

  return <div ref={containerRef} className={className} style={{ width: "100%", height: "100%" }} />;
}
