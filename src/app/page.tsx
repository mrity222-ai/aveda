import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import Clients from "@/components/landing/clients";
import CTA from "@/components/landing/cta";
import Testimonials from "@/components/landing/testimonials";
import Portfolio from "@/components/landing/portfolio";

export default function Home() {
  return (
    <div className="dark">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Clients />
      <CTA />
    </div>
  );
}
