import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto grid max-w-screen-xl items-center gap-12 px-4 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Unlock the Future of Business Intelligence
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            Harness the power of AI with our next-generation SaaS platform. Streamline operations, unlock insights, and drive unprecedented growth with a futuristic ERP designed for visionaries.
          </p>
          <div className="flex justify-start gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <Image
                src="https://placehold.co/1200x800.png"
                alt="Dashboard Mockup"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg object-cover shadow-2xl soft-shadow"
                data-ai-hint="dashboard ui"
            />
        </div>
      </div>
    </section>
  );
}
