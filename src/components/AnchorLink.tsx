"use client";

import type { MouseEvent, ReactNode } from "react";
import { smoothScrollTo } from "@/lib/smoothScroll";

type AnchorLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  download?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

export default function AnchorLink({
  href,
  children,
  className,
  onClick,
  download,
  target,
  rel,
  "aria-label": ariaLabel,
}: AnchorLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();

    if (!href.startsWith("#")) {
      return;
    }

    event.preventDefault();
    smoothScrollTo(href);
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      download={download}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
