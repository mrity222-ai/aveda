import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import Testimonials from "@/components/landing/testimonials";
import CTA from "@/components/landing/cta";
import PricingBanner from "@/components/landing/pricing-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PricingBanner />
      <Testimonials />
      <CTA />
    </>
  );
}
