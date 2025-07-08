import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import Testimonials from "@/components/landing/testimonials";
import CTA from "@/components/landing/cta";
import Pricing from "@/components/landing/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
