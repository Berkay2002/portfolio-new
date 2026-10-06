import { About, Contact, Experience, Header, Hero, Research, Work } from "@/components/landing/sections";
import { TraceRoot } from "@/components/landing/trace";

export default function Home() {
  return (
    <TraceRoot className="landing min-h-screen overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <Work />
        <Research />
        <Experience />
        <About />
        <Contact />
      </main>
    </TraceRoot>
  );
}
