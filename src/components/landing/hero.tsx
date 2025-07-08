import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div className="space-y-6 text-left">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            AI-Powered SaaS for Smarter Growth
          </h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground md:text-xl">
            Harness the power of AI with our next-generation SaaS platform. Streamline operations, unlock insights, and drive unprecedented growth.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/pricing">Start at ₹499/month</Link>
            </Button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <Image
            src="https://placehold.co/1200x800.png"
            alt="AI Dashboard"
            width={1200}
            height={800}
            className="rounded-xl border border-border bg-background/30 shadow-2xl shadow-primary/10"
            data-ai-hint="glowing AI dashboard"
          />
        </div>
      </div>
    </section>
  );
}
