import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function PaperNotFound() {
  return (
    <Container className="flex flex-col items-center justify-center space-y-8 py-24 text-center">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl tracking-tighter">Paper Not Found</h1>
        <p className="mx-auto max-w-md text-muted-foreground text-xl">
          The research paper you&apos;re looking for doesn&apos;t exist or may
          have been removed.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild>
          <Link href="/#projects">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <Button asChild variant="outline">
          <Link href="/">Go to Homepage</Link>
        </Button>
      </div>
    </Container>
  );
}
