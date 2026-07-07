"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

type ProfileImageProps = {
  className?: string;
  src?: string;
};

export default function ProfileImage({
  className = "",
  src = siteConfig.profileImage,
}: ProfileImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      src={imageSrc}
      alt={`Portrait of ${siteConfig.name}`}
      width={320}
      height={320}
      priority
      sizes="(max-width: 1024px) 100vw, 224px"
      className={className}
      onError={() => setImageSrc(siteConfig.profilePlaceholder)}
    />
  );
}
