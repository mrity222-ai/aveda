import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {/* Using a placeholder video from Pexels. Replace with your own video file. */}
          <source src="https://videos.pexels.com/video-files/853875/853875-hd_1280_720_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      
      <div className="container max-w-7xl xl:max-w-screen-xl relative z-10 grid place-items-center gap-10 px-4 py-20 text-center text-foreground md:py-32">
        <div className="space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Innovate, Build, and Grow with Aveda Technologies
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-foreground/80 md:text-xl">
            Your expert partner in SaaS, custom software, and digital marketing. We turn your vision into reality with cutting-edge technology and strategic insights.
          </p>
        </div>
        <Button asChild size="lg">
          <Link href="/contact">
            Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
