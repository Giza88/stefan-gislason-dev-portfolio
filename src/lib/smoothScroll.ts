const HEADER_OFFSET = 88;

export function smoothScrollTo(target: string) {
  const id = target.replace(/^#/, "");
  const element = document.getElementById(id);

  if (!element) {
    return false;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top =
    element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });

  return true;
}
