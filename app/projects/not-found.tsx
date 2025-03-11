import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-24 text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Project Not Found</h1>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          The project you&apos;re looking for doesn&apos;t exist or may have been removed.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/#projects">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        
        <Button asChild variant="outline">
          <Link href="/">
            Go to Homepage
          </Link>
        </Button>
      </div>
    </Container>
  );
} 