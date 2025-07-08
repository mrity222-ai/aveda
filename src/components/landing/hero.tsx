import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex items-center justify-center text-center">
      <div 
        className="absolute inset-0 bg-background"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 30%, hsl(var(--secondary) / 0.1), transparent 70%)',
        }}
      />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

      <div className="max-w-screen-xl mx-auto relative z-10 grid items-center gap-12 px-4 py-20 text-center text-primary-foreground md:py-32">
        <div className="space-y-6">
          <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Future-Proof Your Business
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-foreground/80 md:text-xl">
            Aveda Technologies provides cutting-edge SaaS solutions that merge AI, automation, and intuitive design to propel your business forward.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-7 px-8 rounded-full transition-transform hover:scale-105">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
             <Button asChild size="lg" variant="ghost" className="text-lg py-7 px-8 rounded-full group">
              <Link href="/services">
                Learn More <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-5xl mt-8">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary to-secondary opacity-20 blur-2xl"></div>
            <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="3D Dashboard Preview"
                width={1200}
                height={675}
                className="rounded-2xl border-4 border-white/10 shadow-2xl shadow-secondary/20 transform perspective-[1500px] rotate-x-[10deg] rotate-y-[-3deg] hover:rotate-x-[5deg] hover:rotate-y-[0deg] transition-transform duration-500"
                data-ai-hint="futuristic dashboard"
            />
        </div>
      </div>
    </section>
  );
}
