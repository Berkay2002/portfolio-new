"use client";

import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface BlurImageProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  placeholderClassName?: string;
}

export function BlurImage({
  src,
  alt,
  className,
  imageClassName,
  placeholderClassName,
  ...props
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Reset states when src changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setImgSrc(src);
  }, [src]);

  // Handle image paths that might not include the leading /
  const normalizedSrc = imgSrc.startsWith('/') ? imgSrc : `/${imgSrc}`;

  return (
    <div className={cn("overflow-hidden relative", className)}>
      {/* Low quality placeholder - shown while loading */}
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 bg-neutral-100 dark:bg-neutral-800 animate-pulse",
            placeholderClassName
          )}
        />
      )}
      
      {/* Show error message if image fails to load */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
          <div className="text-center px-4">
            <p className="text-sm text-red-500">Failed to load image</p>
            <p className="text-xs text-muted-foreground mt-1">{normalizedSrc}</p>
          </div>
        </div>
      )}
      
      <Image
        {...props}
        src={normalizedSrc}
        alt={alt}
        className={cn(
          "transition-all duration-500",
          isLoading ? "scale-110 blur-xl" : "scale-100 blur-0",
          hasError ? "opacity-0" : "opacity-100",
          imageClassName
        )}
        onLoad={() => {
          setIsLoading(false);
          setHasError(false);
        }}
        onError={(e) => {
          console.error(`Failed to load image: ${normalizedSrc}`, e);
          setIsLoading(false);
          setHasError(true);
        }}
        unoptimized
      />
    </div>
  );
} 