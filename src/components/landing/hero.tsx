import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden min-h-[75vh]">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Hero background showing abstract technology elements"
        fill
        className="object-cover"
        data-ai-hint="abstract technology"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-screen-xl mx-auto relative z-10 grid place-items-center gap-10 px-4 py-20 text-center text-primary-foreground md:py-32">
        <div className="space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Innovate, Build, and Grow with Aveda Technologies
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-primary-foreground/80 md:text-xl">
            Your expert partner in SaaS, custom software, and digital marketing. We turn your vision into reality with cutting-edge technology and strategic insights.
          </p>
        </div>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contact">
            Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
