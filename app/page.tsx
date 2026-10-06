import { About, Contact, Experience, Header, Hero, Photos, Research, Work } from "@/components/landing/sections";
import { TraceRoot } from "@/components/landing/trace";
import { projects } from "@/lib/data/portfolio-data";
import { whenAgenticWorkflowsPaper } from "@/lib/data/when-agentic-workflows-paper";

export default function Home() {
  return (
    <div className="landing min-h-screen overflow-x-clip">
      {/* Capped so the hero's text and portrait stay together on wide screens. */}
      <TraceRoot className="mx-auto max-w-[1440px]">
        <Header />
        <main>
          <Hero />
          <Work count={projects.length} />
          <Research thesis={whenAgenticWorkflowsPaper.pdfUrl} />
          <Experience />
          <About />
          <Photos />
          <Contact />
        </main>
      </TraceRoot>
    </div>
  );
}
