"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/data";

type ProfileImageProps = {
  className?: string;
};

export default function ProfileImage({ className = "" }: ProfileImageProps) {
  const [src, setSrc] = useState(siteConfig.profileImage);

  return (
    <Image
      src={src}
      alt={`Portrait of ${siteConfig.name}`}
      width={320}
      height={320}
      priority
      className={className}
      onError={() => setSrc(siteConfig.profilePlaceholder)}
    />
  );
}
