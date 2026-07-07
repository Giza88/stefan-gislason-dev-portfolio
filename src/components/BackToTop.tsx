"use client";

import { useEffect, useState } from "react";
import { smoothScrollTo } from "@/lib/smoothScroll";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(window.scrollY > 480);
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  const circumference = 2 * Math.PI * 18;
  const dashOffset = circumference * (1 - progress);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => smoothScrollTo("#home")}
      className="back-to-top-enter fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-xl"
    >
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 44 44"
        aria-hidden="true"
      >
        <circle
          cx="22"
          cy="22"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-border"
        />
        <circle
          cx="22"
          cy="22"
          r="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-primary transition-[stroke-dashoffset] duration-150"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="relative h-5 w-5"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
