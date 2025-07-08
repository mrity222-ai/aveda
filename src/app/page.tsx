import Hero from "@/components/landing/hero";
import LogoCarousel from "@/components/landing/logo-carousel";
import Services from "@/components/landing/services";
import Testimonials from "@/components/landing/testimonials";
import Contact from "@/components/landing/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}
