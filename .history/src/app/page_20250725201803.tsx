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
import Services from "@/components/landing/services";         // ✅ correct file name
import Testimonials from "@/components/landing/testimonials"; // ✅ correct file name
import CTA from "@/components/landing/cta";                   // ✅ correct file name

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