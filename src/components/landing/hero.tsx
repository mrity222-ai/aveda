import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto grid max-w-screen-xl place-items-center gap-12 px-4">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            AI-Powered SaaS for Smarter Growth
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Harness the power of AI with our next-generation SaaS platform. Streamline operations, unlock insights, and drive unprecedented growth.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/pricing">Start at ₹499/month</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
