import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center text-center">
       {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/bg2.mp4" // replace with your actual path like /assets/video.mp4
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Unlock the Future of Business Intelligence
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl">
            Harness the power of AI with our next-generation SaaS platform. Streamline operations, unlock insights, and drive unprecedented growth with a futuristic ERP designed for visionaries.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
