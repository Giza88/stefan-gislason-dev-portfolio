"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300 | 400 | 500;
  as?: ElementType;
  /** When true, animates on mount (for hero). Otherwise reveals on scroll. */
  immediate?: boolean;
};

const delayClasses: Record<number, string> = {
  100: "animation-delay-100",
  200: "animation-delay-200",
  300: "animation-delay-300",
  400: "animation-delay-400",
  500: "animation-delay-500",
};

function motionClasses(
  visible: boolean,
  immediate: boolean,
  delay: FadeInProps["delay"],
) {
  const delayClass = delay ? delayClasses[delay] : "";

  if (immediate) {
    return visible
      ? ["animate-fade-up", delayClass].filter(Boolean).join(" ")
      : "opacity-0";
  }

  return [visible ? "reveal-visible" : "reveal-hidden", delayClass]
    .filter(Boolean)
    .join(" ");
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  immediate = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;

    const node = ref.current;
    if (!node) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      const frame = window.requestAnimationFrame(() => setVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  const classes = [className, motionClasses(visible, immediate, delay)]
    .filter(Boolean)
    .join(" ");

  if (immediate) {
    return <Tag className={classes}>{children}</Tag>;
  }

  return (
    <div ref={ref} className={`w-full ${classes}`}>
      {children}
    </div>
  );
}
