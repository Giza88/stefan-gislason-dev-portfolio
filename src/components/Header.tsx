"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AnchorLink from "@/components/AnchorLink";
import RippleButton from "@/components/ui/RippleButton";
import { useToast } from "@/components/ToastProvider";
import { navLinks, siteConfig } from "@/lib/data";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(navLinks.map((link) => link.href));
  const { showToast } = useToast();

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

  const linkClassName = (href: string) => {
    const sectionId = href.replace("#", "");
    const isActive = activeSection === sectionId;

    return [
      "nav-link-underline shrink-0 text-sm font-medium transition-colors",
      isActive ? "nav-link-active" : "text-muted hover:text-primary",
    ].join(" ");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/80 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-16 w-full flex-row items-center sm:h-20">
        <AnchorLink
          href="#home"
          aria-label={`${siteConfig.name} home`}
          className="inline-flex shrink-0 items-center transition-opacity hover:opacity-80"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={siteConfig.logo}
            alt={`${siteConfig.name} home`}
            width={1024}
            height={558}
            priority
            className="h-8 w-auto sm:h-10"
          />
        </AnchorLink>

        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <AnchorLink
              key={link.href}
              href={link.href}
              className={linkClassName(link.href)}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </AnchorLink>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <RippleButton
            href={siteConfig.cvPath}
            download
            className="hidden rounded-full bg-primary px-3 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-primary-dark hover:shadow-sm sm:px-4 lg:inline-flex"
            onClick={() => showToast("CV download started", "info")}
          >
            Download CV
          </RippleButton>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
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
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`w-full overflow-hidden border-t border-border bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-container py-4">
          <nav className="flex w-full flex-col gap-3" aria-label="Mobile primary">
            {navLinks.map((link) => (
              <AnchorLink
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-50 ${
                  activeSection === link.href.replace("#", "")
                    ? "bg-teal-50 text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </AnchorLink>
            ))}
            <RippleButton
              href={siteConfig.cvPath}
              download
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white"
              onClick={() => {
                setMenuOpen(false);
                showToast("CV download started", "info");
              }}
            >
              Download CV
            </RippleButton>
          </nav>
        </div>
      </div>
    </header>
  );
}
