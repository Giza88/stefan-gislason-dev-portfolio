"use client";

import { useEffect, useRef, useState } from "react";

type LinkedInEmbedProps = {
  embedUrl: string;
  linkedInUrl: string;
  title: string;
};

const LINKEDIN_ORIGINS = ["https://www.linkedin.com", "https://linkedin.com"];

const BLOCKED_FRAME_PATTERNS = [
  "blocked by microsoft edge",
  "has been blocked",
  "tracking prevention",
  "content is blocked",
];

function isLinkedInMessage(event: MessageEvent) {
  return LINKEDIN_ORIGINS.some((origin) => event.origin.startsWith(origin));
}

function isIframeBlockedByBrowser(iframe: HTMLIFrameElement) {
  try {
    const doc = iframe.contentDocument ?? iframe.contentWindow?.document;
    if (!doc?.body) {
      return false;
    }

    const text = doc.body.innerText.toLowerCase();
    return BLOCKED_FRAME_PATTERNS.some((pattern) => text.includes(pattern));
  } catch {
    // Cross-origin content means LinkedIn loaded outside the browser block page.
    return false;
  }
}

export default function LinkedInEmbed({
  embedUrl,
  linkedInUrl,
  title,
}: LinkedInEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    setShowFallback(false);

    const handleMessage = (event: MessageEvent) => {
      if (isLinkedInMessage(event)) {
        setShowFallback(false);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [embedUrl]);

  const handleLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe) {
      return;
    }

    window.setTimeout(() => {
      if (isIframeBlockedByBrowser(iframe)) {
        setShowFallback(true);
      }
    }, 500);
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-white shadow-sm">
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title={title}
        height={620}
        className="w-full border-0"
        loading="lazy"
        allowFullScreen
        onLoad={handleLoad}
        onError={() => setShowFallback(true)}
      />

      {showFallback && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-surface-muted/95 px-6 py-8 text-center backdrop-blur-sm"
          role="status"
          aria-live="polite"
        >
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0A66C2] text-lg font-bold text-white">
            in
          </span>

          <div className="max-w-xs">
            <p className="text-base font-semibold text-foreground">
              Video blocked by your browser
            </p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Tracking prevention in browsers like Microsoft Edge can block embedded
              LinkedIn posts. You can still watch the full post on LinkedIn.
            </p>
          </div>

          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-interactive inline-flex w-auto items-center gap-2 px-5"
          >
            Watch on LinkedIn
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H8M17 7v9"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
