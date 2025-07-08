import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto grid max-w-screen-xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-32">
        <div className="space-y-6 text-left">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
            AI-Powered ERP for Modern Business
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            Aveda Technologies provides cutting-edge SaaS solutions that merge AI and automation to propel your business forward.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
            <Image
                src="https://placehold.co/1200x800.png"
                alt="Dashboard Mockup"
                width={1200}
                height={800}
                className="rounded-lg border bg-card shadow-lg"
                data-ai-hint="dashboard analytics"
            />
        </div>
      </div>
    </section>
  );
}
