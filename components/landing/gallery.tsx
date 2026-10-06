"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { type Photo, photos, photoUrl } from "@/lib/data/photos";
import { useCopy } from "./sections";

// /photography: all of Berkay's photos from Japan and Portugal, in colour, in columns that keep each
// photo's own shape. A click opens the large version in a dialog; arrow keys step through.

export function Gallery() {
  const { c } = useCopy();
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const shown = open === null ? undefined : photos[open];

  useEffect(() => {
    if (open === null) return;
    if (!dialog.current?.open) dialog.current?.showModal();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const section = (place: Photo["place"], title: string) => {
    const list = photos.filter((p) => p.place === place);
    return (
      <section className="mt-16 lg:mt-24">
        <h2 className="font-display text-3xl lg:text-5xl">
          {title} <span className="text-(--dim) text-base lg:text-lg">{list.length}</span>
        </h2>
        <div className="mt-6 columns-2 gap-3 lg:mt-10 lg:columns-3 lg:gap-5">
          {list.map((p) => (
            <button
              className="mb-3 block w-full cursor-zoom-in lg:mb-5"
              key={p.id}
              onClick={() => setOpen(photos.indexOf(p))}
              type="button"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- images are served unoptimized */}
              <img alt={p.alt} className="block w-full" height={p.h} loading="lazy" src={photoUrl(p, true)} width={p.w} />
            </button>
          ))}
        </div>
      </section>
    );
  };

  return (
    <main className="px-6 pt-28 pb-24 lg:px-[4%] lg:pt-[180px]">
      <Link className="text-(--dim) text-sm hover:text-(--fg)" href="/#about">
        {c.gallery.back}
      </Link>
      <p className="mt-8 text-(--lime) text-sm tracking-[0.08em]">{c.gallery.index}</p>
      <h1 className="font-display mt-3 text-[44px] leading-none lg:text-[64px]">{c.gallery.title}</h1>
      {section("japan", c.gallery.japan)}
      {section("portugal", c.gallery.portugal)}
      <dialog
        className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/90"
        onClick={() => dialog.current?.close()}
        onClose={() => setOpen(null)}
        ref={dialog}
      >
        {shown && (
          <figure className="flex flex-col items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- images are served unoptimized */}
            <img alt={shown.alt} className="max-h-[85svh] max-w-[94vw] object-contain" src={photoUrl(shown)} />
            <figcaption className="text-(--dim) text-sm">
              {shown.alt} · {(open ?? 0) + 1} / {photos.length} · {c.gallery.close}
            </figcaption>
          </figure>
        )}
      </dialog>
    </main>
  );
}
