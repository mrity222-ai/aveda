import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import Pricing from "@/components/landing/pricing";
import Testimonials from "@/components/landing/testimonials";
import CTA from "@/components/landing/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  );
}
