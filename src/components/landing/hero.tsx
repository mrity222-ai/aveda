import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto grid max-w-screen-xl items-center gap-12 px-4 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Build Your Business, Your Way
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            Aveda is the only software you need to run your business. With 100+ apps, you can manage, automate, and grow your company from a single platform.
          </p>
          <div className="flex justify-start gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Request a Demo <ArrowRight className="ml-2" /></Link>
            </Button>
             <Button asChild size="lg" variant="outline">
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dashboard Mockup"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg object-cover shadow-lg border"
                data-ai-hint="dashboard mockup"
            />
        </div>
      </div>
    </section>
  );
}
