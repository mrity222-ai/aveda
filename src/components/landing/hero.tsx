import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="container grid place-items-center gap-10 px-4 py-20 text-center md:py-32">
      <div className="space-y-6">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Innovate, Build, and Grow with AvedaTech
        </h1>
        <p className="mx-auto max-w-[700px] text-lg text-foreground/80 md:text-xl">
          Your expert partner in SaaS, custom software, and digital marketing. We turn your vision into reality with cutting-edge technology and strategic insights.
        </p>
      </div>
      <Button asChild size="lg">
        <Link href="#contact">
          Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </section>
  );
}
