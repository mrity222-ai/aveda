// import { Card, CardContent } from "@/components/ui/card";

// export default function Testimonials() {
//   return (
//     <section className="w-full py-16 md:py-24">
//       <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
//         <div className="mx-auto flex max-w-2xl flex-col items-center space-y-4 text-center mb-12">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
//             What Our Clients Say
//           </h2>
//           <p className="max-w-xl text-muted-foreground sm:text-lg">
//             See how we've helped businesses like yours succeed.
//           </p>
//         </div>

//         <div className="mx-auto max-w-2xl">
//           <Card>
//             <CardContent className="p-8 text-center">
//               <blockquote className="text-xl italic text-foreground/90 relative">
//                 <p className="mb-4">
//                   "Aveda Technologies's SaaS product revolutionized our workflow. It's intuitive, powerful, and has significantly boosted our productivity."
//                 </p>
//                 <footer className="text-base font-medium text-foreground/80 not-italic">
//                   — CEO of a Satisfied Client
//                 </footer>
//               </blockquote>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-gradient-radial from-[#1f2937] to-[#0f172a] text-white">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="max-w-xl text-white/70 sm:text-lg">
            See how we've helped businesses like yours succeed.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg">
            <CardContent className="p-8 text-center">
              <blockquote className="text-xl italic text-white/90 relative">
                <p className="mb-4">
                  <span className="font-semibold italic">Aveda Technologies</span>
                  ’s SaaS product revolutionized our workflow. It’s intuitive,
                  powerful, and has significantly boosted our productivity.
                </p>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}