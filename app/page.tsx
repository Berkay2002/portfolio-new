import { About, Contact, Experience, Header, Hero, Photos, Research, Work } from "@/components/landing/sections";
import { TraceRoot } from "@/components/landing/trace";

export default function Home() {
  return (
    <div className="landing min-h-screen overflow-x-clip">
      {/* Capped so the hero's text and portrait stay together on wide screens. */}
      <TraceRoot className="mx-auto max-w-[1440px]">
        <Header />
        <main>
          <Hero />
          <Work />
          <Research />
          <Experience />
          <About />
          <Photos />
          <Contact />
        </main>
      </TraceRoot>
    </div>
  );
}
