import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export type ExpandableImageProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  unoptimized?: boolean;
};

export function ExpandableImage({
  src,
  alt,
  className,
  fill = false,
  unoptimized = false,
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
            src={src}
            unoptimized={unoptimized}
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
            src={src}
            unoptimized={unoptimized}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
