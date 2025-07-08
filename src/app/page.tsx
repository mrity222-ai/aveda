import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import Clients from "@/components/landing/clients";
import Portfolio from "@/components/landing/portfolio";
import CTA from "@/components/landing/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <CTA />
    </>
  );
}
