"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type BlurImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  placeholder?: "blur-sm" | "empty" | "data:image/...";
  placeholderSrc?: string;
};

export function BlurImage({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
  objectFit = "cover",
  objectPosition = "center",
  placeholder = "empty",
  placeholderSrc,
  ...props
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);

  // Handle fallback if image fails to load
  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 dark:bg-gray-800" />
      )}
      <Image
        alt={alt}
        className={cn(
          "transition-opacity duration-500 ease-in-out",
          isLoading ? "opacity-0" : "opacity-100",
          objectFit === "cover" && "object-cover",
          objectFit === "contain" && "object-contain",
          objectFit === "fill" && "object-fill",
          objectFit === "none" && "object-none",
          objectFit === "scale-down" && "object-scale-down",
          imageClassName
        )}
        height={height}
        onError={() => {
          setIsLoading(false);
          if (placeholderSrc) {
            setImgSrc(placeholderSrc);
          }
        }}
        onLoad={() => setIsLoading(false)}
        placeholder={placeholder}
        priority={priority}
        quality={quality}
        sizes={sizes}
        src={imgSrc}
        style={{ objectPosition }}
        width={width}
        {...props}
      />
    </div>
  );
}
