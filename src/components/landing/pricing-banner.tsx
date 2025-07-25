// // 
// 'use client';

// import { Button } from "@/components/ui/button";
// import { ArrowRight, Sparkles } from "lucide-react";
// import Link from "next/link";
// import { Card } from "../ui/card";
// import { motion } from "framer-motion";

// export default function PricingBanner() {
//   return (
//     <section className="w-full py-16 md:py-24">
//       <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
//         <motion.div
//           whileHover={{ y: -8, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <Link href="/contact" className="block group">
//             <Card className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 cursor-pointer transition-transform">
//               <div className="flex items-center gap-6">
//                 <div className="hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
//                   <Sparkles className="h-8 w-8 text-primary" />
//                 </div>
//                 <div>
//                   <h2 className="font-headline text-2xl md:text-3xl font-bold text-white group-hover:underline">
//                     Only ₹499/user
//                   </h2>
//                   <p className="text-lg text-muted-foreground mt-1">
//                     Affordable. Scalable. AI-Powered.
//                   </p>
//                 </div>
//               </div>
//               <Button size="lg" className="flex-shrink-0 pointer-events-none">
//                 Get Started <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Card>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

//  New implemets 

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";
import { motion } from "framer-motion";

export default function PricingBanner() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <Link href="/pricing">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card
              className="relative group p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 cursor-pointer overflow-hidden rounded-2xl transition-transform"
              style={{
                background: "linear-gradient(90deg, #0f0c29, #302b63, #24243e)",
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 z-0 opacity-30 blur-2xl group-hover:opacity-50 transition duration-300 pointer-events-none bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

              <div className="flex items-center gap-6 z-10">
                <div className="hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/10 border border-pink-500/20">
                  <Sparkles className="h-8 w-8 text-pink-500" />
                </div>
                <div>
                  <h2 className="font-headline text-2xl md:text-3xl font-bold text-white">
                    Only ₹499/user
                  </h2>
                  <p className="text-lg text-muted-foreground mt-1">
                    Affordable. Scalable. AI-Powered.
                  </p>
                </div>
              </div>

              <Button size="lg" className="flex-shrink-0 z-10">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}
