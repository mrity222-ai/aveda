import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden min-h-[75vh]">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          src="https://videos.pexels.com/video-files/8571827/8571827-hd.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
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
