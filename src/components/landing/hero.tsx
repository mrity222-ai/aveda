import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto grid max-w-screen-xl items-center gap-12 px-4 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            AI-Powered SaaS for Smarter Growth
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            Leverage our cutting-edge AI platform to automate workflows, gain intelligent insights, and accelerate your business growth. Clean, innovative, and immersive technology at your fingertips.
          </p>
          <div className="flex justify-start gap-4">
            <Button asChild size="lg">
              <Link href="/pricing">Start at ₹499/month</Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <Image
                src="https://placehold.co/1200x800.png"
                alt="3D Dashboard UI"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg object-cover shadow-2xl soft-shadow"
                data-ai-hint="3d dashboard ui"
            />
        </div>
      </div>
    </section>
  );
}
