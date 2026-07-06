"use client";

import {
  createElement,
  useEffect,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300 | 400;
  as?: ElementType;
};

const delayClasses: Record<number, string> = {
  100: "animation-delay-100",
  200: "animation-delay-200",
  300: "animation-delay-300",
  400: "animation-delay-400",
};

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: FadeInProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const delayClass = delay ? delayClasses[delay] : "";
  const motionClass = ready
    ? ["animate-fade-up", delayClass].filter(Boolean).join(" ")
    : "";

  return createElement(
    Tag,
    { className: [className, motionClass].filter(Boolean).join(" ") },
    children,
  );
}
