import { Footer, Header } from "@/components/landing/sections";
import { A, TraceRoot } from "@/components/landing/trace";

// The pages outside the landing page (design/specs/pages-r1.md): the landing's header and footer,
// and the trace running straight down the left lane. Pages hang bursts and ticks off it.
export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="landing min-h-screen overflow-x-clip">
      <TraceRoot className="mx-auto flex min-h-screen max-w-[1440px] flex-col">
        <Header />
        <A className="top-16 left-5 lg:top-[124px] lg:left-[2%]" />
        <main className="flex-1 pt-28 lg:pt-[160px]" id="top">
          {children}
        </main>
        <Footer home={false} />
        <A className="bottom-0 left-5 lg:left-[2%]" />
      </TraceRoot>
    </div>
  );
}
