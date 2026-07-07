"use client";

import {
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

type RippleButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClick?: () => void;
};

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export default function RippleButton({
  children,
  className = "",
  href,
  download,
  target,
  rel,
  type = "button",
  disabled = false,
  onClick,
}: RippleButtonProps) {
  const surfaceRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const rippleId = useRef(0);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const spawnRipple = (event: MouseEvent<HTMLElement>) => {
    const surface = surfaceRef.current;
    if (!surface || disabled) {
      return;
    }

    const rect = surface.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = rippleId.current++;

    setRipples((current) => [...current, { id, x, y }]);

    window.setTimeout(() => {
      setRipples((current) => current.filter((ripple) => ripple.id !== id));
    }, 650);
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    spawnRipple(event);
    onClick?.();
  };

  const rippleLayer = (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="ripple-dot absolute rounded-full bg-white/35"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </span>
  );

  if (href) {
    return (
      <a
        ref={surfaceRef}
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={`ripple-button relative overflow-hidden ${className}`}
        onClick={handleClick}
      >
        {rippleLayer}
        <span className="relative z-[1] inline-flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      ref={surfaceRef}
      type={type}
      disabled={disabled}
      className={`ripple-button relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      {rippleLayer}
      <span className="relative z-[1] inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}
