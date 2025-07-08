import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import CTA from "@/components/landing/cta";

export default function Home() {
  return (
    <div className="dark">
      <Hero />
      <Services />
      <CTA />
    </div>
  );
}
