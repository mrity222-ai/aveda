import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center gap-12 px-4 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            The Only Software You Need to Run Your Business
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            A modern and intuitive platform to manage your CRM, Sales, Inventory, and HR. All in one place, with the power of AI to boost your productivity.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Request a Demo <ArrowRight className="ml-2" /></Link>
            </Button>
             <Button asChild size="lg" variant="outline">
              <Link href="/pricing">See Pricing</Link>
            </Button>
          </div>
        </div>
        <div className="w-full px-4 sm:px-8 md:px-16">
            <Image
                src="https://placehold.co/1200x800.png"
                alt="Dashboard Mockup"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg object-cover shadow-2xl border"
                data-ai-hint="erp dashboard"
                priority
            />
        </div>
      </div>
    </section>
  );
}
