import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export type ExpandableImageProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
};

export function ExpandableImage({
  src,
  alt,
  className,
  fill = false,
  sizes = "(max-width: 1024px) 100vw, 66vw",
}: ExpandableImageProps) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <div className="cursor-zoom-in">
          <Image
            alt={alt}
            className={className}
            fill={fill}
            priority={false}
            sizes={sizes}
            src={src}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="flex max-h-[90vh] max-w-3xl items-center justify-center bg-black p-0">
        <div className="relative h-[70vh] w-full">
          <Image
            alt={alt}
            className="bg-black object-contain"
            fill
            priority={false}
            sizes="(max-width: 768px) 100vw, 768px"
            src={src}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
