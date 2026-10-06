"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Index } from "./sections";
import { Wave } from "./trace";

// Shared parts of the pages outside the landing page (design/specs/pages-r1.md). The trace runs down
// the left lane (20 px on phones, 2 % on desktop, drawn by app/(site)/layout.tsx); a section starts
// with a burst on it and a list item gets a tick. Text starts at 48 px on phones and 4 % on desktop.

export const pad = "pr-6 pl-12 lg:pr-[4%] lg:pl-[4%]";
export const lane = "-translate-x-1/2 -translate-y-1/2 absolute left-5 lg:left-[2%]";
export const under = "border-(--fg)/50 border-b pb-0.5 hover:border-(--lime) hover:text-(--lime)";

export function Burst({ className }: { className?: string }) {
  return <Wave className={cn(lane, "h-10 w-8", className)} n={9} peaks={[[0.5, 0.28, 0.95]]} vertical />;
}

export function Tick({ className }: { className?: string }) {
  return <span aria-hidden className={cn(lane, "size-2 rounded-full bg-(--lime)", className)} />;
}

export const two = (n: number) => String(n).padStart(2, "0");

export function PageHead({
  back,
  index,
  title,
  titleClassName,
  children,
  aside,
}: {
  back?: [string, string];
  index: string;
  title: string;
  titleClassName?: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <>
      {back && (
        <div className={pad}>
          <Link className="text-(--dim) text-sm hover:text-(--fg)" href={back[0]}>
            {back[1]}
          </Link>
        </div>
      )}
      <div className={cn("relative", back && "mt-8")}>
        <Burst className="top-2.5" />
        <div className={cn(pad, aside && "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(300px,32%)] lg:gap-x-16")}>
          <div>
            <Index>{index}</Index>
            <h1 className={cn("font-display mt-3 text-[40px] leading-[1.02] lg:text-[64px]", titleClassName)}>{title}</h1>
            {children}
          </div>
          {aside && <div className="mt-10 lg:mt-0 lg:pt-9">{aside}</div>}
        </div>
      </div>
    </>
  );
}

// A numbered section on a detail page: "01 / Overview" on the left, the text beside it.
export function Part({ n, title, id, children }: { n: number; title: string; id?: string; children: ReactNode }) {
  return (
    <section className="relative mt-16 scroll-mt-24 lg:mt-24" id={id}>
      <Burst className="top-3.5" />
      <div className={cn(pad, "lg:grid lg:grid-cols-[22%_minmax(0,1fr)] lg:gap-x-10")}>
        <h2 className="text-lg leading-7 lg:text-xl">
          <span className="text-(--dim) text-sm">{two(n)} / </span>
          {title}
        </h2>
        <div className="mt-5 max-w-[78ch] text-(--fg)/80 text-sm leading-relaxed lg:mt-0 lg:text-[15px]">{children}</div>
      </div>
    </section>
  );
}

export function Dashes({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((x) => (
        <li className="flex gap-4" key={x}>
          <span className="text-(--lime)">–</span>
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}
