"use client";

import AnchorLink from "@/components/AnchorLink";
import RippleButton from "@/components/ui/RippleButton";
import { useToast } from "@/components/ToastProvider";
import { siteConfig } from "@/lib/data";
import { smoothScrollTo } from "@/lib/smoothScroll";

export default function HeroActions() {
  const { showToast } = useToast();

  return (
    <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
      <RippleButton
        className="btn-primary btn-interactive sm:min-w-[9.5rem]"
        onClick={() => smoothScrollTo("#projects")}
      >
        View Projects
      </RippleButton>

      <RippleButton
        href={siteConfig.cvPath}
        download
        className="btn-secondary btn-interactive sm:min-w-[9.5rem]"
        onClick={() => showToast("CV download started", "info")}
      >
        Download CV
      </RippleButton>

      <AnchorLink href="#contact" className="btn-ghost btn-interactive sm:min-w-[9.5rem]">
        Get in Touch
      </AnchorLink>
    </div>
  );
}
