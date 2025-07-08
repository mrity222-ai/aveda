import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import Clients from "@/components/landing/clients";
import Contact from "@/components/landing/contact";
import CTA from "@/components/landing/cta";

export default function Home() {
  return (
    <div className="dark">
      <Hero />
      <Services />
      <Clients />
      <Contact />
      <CTA />
    </div>
  );
}
