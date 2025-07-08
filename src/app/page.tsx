import Hero from "@/components/landing/hero";
import LogoCarousel from "@/components/landing/logo-carousel";
import Services from "@/components/landing/services";
import Portfolio from "@/components/landing/portfolio";
import Testimonials from "@/components/landing/testimonials";
import CTA from "@/components/landing/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
    </>
  );
}
