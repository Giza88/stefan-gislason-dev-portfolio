"use client";

import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between sm:h-20">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
          onClick={() => setMenuOpen(false)}
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.cvPath}
          download
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark md:inline-flex"
        >
          Download CV
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-slate-50 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.cvPath}
              download
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white"
              onClick={() => setMenuOpen(false)}
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
