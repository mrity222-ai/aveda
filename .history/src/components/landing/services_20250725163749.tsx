// import { CloudCog, CodeXml, BarChart3 } from 'lucide-react';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

// const services = [
//   {
//     icon: CloudCog,
//     title: "SaaS Products",
//     description: "Ready-to-deploy SaaS solutions for performance and reliability.",
//   },
//   {
//     icon: CodeXml,
//     title: "Custom Software",
//     description: "Bespoke software development tailored to your specific needs.",
//   },
//   {
//     icon: BarChart3,
//     title: "Digital Marketing",
//     description: "Data-driven strategies to amplify your brand and drive growth.",
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="w-full py-16 md:py-24">
//       <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
//         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//           <div className="space-y-2">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What We Offer</h2>
//             <p className="max-w-3xl text-muted-foreground md:text-xl">
//               We provide a comprehensive suite of services to power your success, from innovative products to strategic marketing.
//             </p>
//           </div>
//         </div>
//         <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
//           {services.map((service) => {
//             const Icon = service.icon;
//             return (
//               <Card key={service.title} className="h-full">
//                 <CardHeader>
//                   <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
//                       <Icon className="h-8 w-8" />
//                   </div>
//                   <CardTitle>{service.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <CardDescription>{service.description}</CardDescription>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



'use client';

import { CloudCog, CodeXml, BarChart3 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    icon: CloudCog,
    title: "SaaS Products",
    description: "Ready-to-deploy SaaS solutions for performance and reliability.",
    link: "/saas-products",
    background: "/images/saas.jpg",
  },
  {
    icon: CodeXml,
    title: "Custom Software",
    description: "Bespoke software development tailored to your specific needs.",
    link: "/services",
    background: "/images/cta2.jpg",
  },
  {
    icon: BarChart3,
    title: "UI/UX Design",
    description: "Data-driven strategies to amplify your brand and drive growth.",
    link: "/ui-ux-design",
    background: "/images/cta3.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full py-20 bg-[#0f0f0f] relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d]/90" />

      <div className="relative z-10 container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2
            className="text-4xl font-bold text-white sm:text-5xl mb-4"
            style={{ textShadow: '0 0 8px rgba(255,255,255,0.4)' }}
          >
            What We Offer
          </h2>
          <p className="max-w-2xl text-white/80 text-lg sm:text-xl">
            We provide a comprehensive suite of services to power your success, from innovative products to strategic design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Link href={service.link}>
                  <Card
                    className="relative h-full cursor-pointer text-white bg-cover bg-center overflow-hidden rounded-2xl border border-white/10 shadow-xl backdrop-blur-lg transition-transform"
                    style={{ backgroundImage: `url(${service.background})` }}
                  >
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/60 z-0" />
                    {/* Content */}
                    <div className="relative z-10 p-6">
                      <CardHeader>
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 text-white border border-white/20 backdrop-blur-md">
                          <Icon className="h-8 w-8" />
                        </div>
                        <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/90 text-sm">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

