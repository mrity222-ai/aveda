// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// export default function CTA() {
//   return (
//     <section className="w-full bg-primary text-primary-foreground">
//       <div className="max-w-screen-xl mx-auto grid items-center justify-center gap-4 px-4 py-16 text-center md:px-6">
//         <div className="space-y-3">
//           <h2 className="text-3xl font-bold font-headline tracking-tighter md:text-4xl/tight">
//             Ready to Start Your Project?
//           </h2>
//           <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//             Let's build something amazing together. Reach out to us to discuss your ideas and see how we can help you achieve your goals.
//           </p>
//         </div>
//         <div className="mx-auto w-full max-w-sm space-y-2">
//            <Button asChild variant="secondary" size="lg" className="w-full">
//             <Link href="/contact">
//                 Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// export default function CTA() {
//   return (
//     <section
//   className="w-full bg-cover bg-center text-white"
//   style={{ backgroundImage: "url('/images/cta.jpg')" }}
// >
//       <div className="bg-primary/90">
//         <div className="max-w-screen-xl mx-auto grid items-center justify-center gap-4 px-4 py-16 text-center md:px-6">
//           <div className="space-y-3">
//             <h2 className="text-3xl font-bold font-headline tracking-tighter md:text-4xl/tight">
//               Ready to Start Your Project?
//             </h2>
//             <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//               Let's build something amazing together. Reach out to us to discuss your ideas and see how we can help you achieve your goals.
//             </p>
//           </div>
//           <div className="mx-auto w-full max-w-sm space-y-2">
//             <Button asChild variant="secondary" size="lg" className="w-full">
//               <Link href="/contact">
//                 Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/cta4.jpg')",
      }}
    >
      <div className="max-w-screen-xl mx-auto grid items-center justify-center gap-4 px-4 py-20 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl  font-headline tracking-tighter md:text-8xl/tight">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto max-w-[600px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Let's build something amazing together. Reach out to us to discuss your ideas and see how we can help you achieve your goals.
          </p>
        </div>
        {/* <div className="mx-auto w-full max-w-sm space-y-2">
          <Button asChild variant="secondary" size="lg" className="w-full transition-colors-#e11d48">
            <Link href="/contact">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button> */}
          <div className="mx-auto w-full max-w-sm space-y-2">
  <Button
    asChild
    size="lg"
    className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white"
  >
    <Link href="/contact">
      Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
    </Link>
  </Button>

        </div>
      </div>
    </section>
  );
}