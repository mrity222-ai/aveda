import Hero from '@/components/landing/hero';
import Services from '@/components/landing/services';
import LogoCarousel from '@/components/landing/logo-carousel';
import Testimonials from '@/components/landing/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <LogoCarousel />
    </>
  );
}
