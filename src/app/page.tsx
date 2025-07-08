import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import PricingBanner from "@/components/landing/pricing-banner";
import Testimonials from "@/components/landing/testimonials";
import CTA from "@/components/landing/cta";

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
