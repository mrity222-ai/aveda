// import Hero from "@/components/landing/hero";
// import PricingBanner from "@/components/landing/pricing-banner";
// import Services from "@/components/landing/services";
// import Testimonials from "@/components/landing/testimonials";
// import CTA from "@/components/landing/cta";

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <PricingBanner />
//       <Services />
//       <Testimonials />
//       <CTA />
//     </>
//   );
// }

import Hero from "@/components/landing/hero";
import PricingBanner from "@/components/landing/pricing-banner";
import Services from "@/components/landing/service";         // ✅ correct file name
import Testimonials from "@/components/landing/testimonial"; // ✅ correct file name
import CTA from "@/components/landing/ct";                   // ✅ correct file name

export default function Home() {
  return (
    <>
      <Hero />
      <PricingBanner />
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}