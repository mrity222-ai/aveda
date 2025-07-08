import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="container mx-auto grid max-w-screen-xl items-center gap-12 px-4 py-20 text-center md:py-32">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Unlock the Future of Business Intelligence
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Harness the power of AI with our next-generation SaaS platform. Streamline operations, unlock insights, and drive unprecedented growth with a futuristic ERP designed for visionaries.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative flex items-center justify-center [perspective:1000px]">
            <Image
                src="https://placehold.co/1200x800.png"
                alt="Dashboard Mockup"
                width={1200}
                height={800}
                className="rounded-xl border-2 border-white/10 bg-black/30 shadow-2xl shadow-primary/20 transform -rotate-x-10 -rotate-y-6"
                data-ai-hint="futuristic dashboard"
            />
        </div>
      </div>
    </section>
  );
}
