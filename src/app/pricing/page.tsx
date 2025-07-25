// import { Check, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import Link from "next/link";

// const pricingTiers = [
//   {
//     name: "Starter",
//     price: "₹499",
//     period: "/user",
//     description: "For small teams just getting started.",
//     features: [
//       { text: "AI Assistant", included: true },
//       { text: "Basic CRM Module", included: true },
//       { text: "Project Management", included: true },
//       { text: "Smart Analytics", included: false },
//       { text: "Automated Workflows", included: false },
//       { text: "Dedicated Support", included: false },
//     ],
//     cta: "Get Started",
//     href: "/contact",
//     popular: false,
//   },
//   {
//     name: "Pro",
//     price: "₹999",
//     period: "/user",
//     description: "For growing businesses that need more power.",
//     features: [
//       { text: "Everything in Starter", included: true },
//       { text: "Smart Analytics", included: true },
//       { text: "Automated Workflows", included: true },
//       { text: "Dedicated Support", included: true },
//       { text: "Custom Integrations", included: false },
//     ],
//     cta: "Get Started",
//     href: "/contact",
//     popular: true,
//   },
//   {
//     name: "Enterprise",
//     price: "Custom",
//     period: "",
//     description: "For large organizations with custom needs.",
//     features: [
//       { text: "Everything in Pro", included: true },
//       { text: "Custom Integrations", included: true },
//       { text: "24/7 Priority Support", included: true },
//       { text: "Advanced Security & SSO", included: true },
//       { text: "On-premise option", included: true },
//     ],
//     cta: "Contact Sales",
//     href: "/contact",
//     popular: false,
//   },
// ];

// export default function PricingPage() {
//   return (
//     <section className="max-w-screen-xl mx-auto px-4 py-16">
//       <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
//         <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
//           Find the Right Plan for Your Business
//         </h1>
//         <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
//           Affordable, scalable, and powered by AI. Choose the plan that fits your needs and start growing today.
//         </p>
//       </div>

//       <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 items-stretch">
//         {pricingTiers.map((tier) => (
//           <Card key={tier.name} className={`flex flex-col ${tier.popular ? 'border-primary ring-2 ring-primary' : ''}`}>
//             <CardHeader className="p-6">
//               {tier.popular && (
//                   <div className="text-sm font-bold text-primary text-center mb-2">Most Popular</div>
//               )}
//               <CardTitle className="font-headline text-2xl text-center">{tier.name}</CardTitle>
//               <div className="text-center mt-4">
//                   <span className="text-4xl font-bold">{tier.price}</span>
//                   {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
//               </div>
//               <CardDescription className="text-center h-12 mt-2">{tier.description}</CardDescription>
//             </CardHeader>
//             <CardContent className="p-6 flex-grow">
//               <ul className="space-y-4">
//                 {tier.features.map((feature) => (
//                   <li key={feature.text} className="flex items-center gap-3">
//                     {feature.included ? (
//                       <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
//                     ) : (
//                       <X className="h-5 w-5 text-red-500 flex-shrink-0" />
//                     )}
//                     <span className="text-muted-foreground">{feature.text}</span>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//             <div className="p-6 mt-auto">
//               <Button asChild size="lg" className="w-full" variant={tier.popular ? 'default' : 'secondary'}>
//                 <Link href={tier.href}>{tier.cta}</Link>
//               </Button>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }


// src/app/pricing/page.tsx
// 'use client'

// import { useState } from "react";
// import { Check, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import Link from "next/link";

// const yearlyPricing = [
//   {
//     name: "Starter",
//     price: "₹4,999",
//     period: "/year/user",
//     description: "For small teams just getting started.",
//     features: [
//       { text: "AI Assistant", included: true },
//       { text: "Basic CRM Module", included: true },
//       { text: "Project Management", included: true },
//       { text: "Smart Analytics", included: false },
//       { text: "Automated Workflows", included: false },
//       { text: "Dedicated Support", included: false },
//     ],
//     cta: "Get Started",
//     href: "/contact",
//   },
//   {
//     name: "Pro",
//     price: "₹9,999",
//     period: "/year/user",
//     description: "For growing businesses that need more power.",
//     features: [
//       { text: "Everything in Starter", included: true },
//       { text: "Smart Analytics", included: true },
//       { text: "Automated Workflows", included: true },
//       { text: "Dedicated Support", included: true },
//       { text: "Custom Integrations", included: false },
//     ],
//     cta: "Get Started",
//     href: "/contact",
//   },
//   {
//     name: "Enterprise",
//     price: "Custom",
//     period: "",
//     description: "For large organizations with custom needs.",
//     features: [
//       { text: "Everything in Pro", included: true },
//       { text: "Custom Integrations", included: true },
//       { text: "24/7 Priority Support", included: true },
//       { text: "Advanced Security & SSO", included: true },
//       { text: "On-premise option", included: true },
//     ],
//     cta: "Contact Sales",
//     href: "/contact",
//   },
// ];

// const monthlyPricing = [
//   {
//     ...yearlyPricing[0],
//     price: "₹499",
//     period: "/month/user",
//   },
//   {
//     ...yearlyPricing[1],
//     price: "₹999",
//     period: "/month/user",
//   },
//   yearlyPricing[2], // Enterprise stays the same
// ];

// export default function PricingPage() {
//   const [isYearly, setIsYearly] = useState(true);
//   const pricing = isYearly ? yearlyPricing : monthlyPricing;

//   return (
//     <section className="max-w-screen-xl mx-auto px-4 py-16">
//       <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
//         <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
//           Find the Right Plan for Your Business
//         </h1>
//         <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
//           Affordable, scalable, and powered by AI. Choose the plan that fits your needs and start growing today.
//         </p>
//         <Button
//           variant="outline"
//           size="sm"
//           onClick={() => setIsYearly(!isYearly)}
//           className="mt-4"
//         >
//           {isYearly ? "Switch to Monthly" : "Switch to Yearly"}
//         </Button>
//       </div>

//       <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 items-stretch">
//         {pricing.map((tier) => (
//           <Card
//             key={tier.name}
//             className="flex flex-col transition-all hover:border-primary hover:ring-2 hover:ring-primary"
//           >
//             <CardHeader className="p-6">
//               <CardTitle className="font-headline text-2xl text-center">{tier.name}</CardTitle>
//               <div className="text-center mt-4">
//                 <span className="text-4xl font-bold">{tier.price}</span>
//                 {tier.period && (
//                   <span className="text-muted-foreground">{tier.period}</span>
//                 )}
//               </div>
//               <CardDescription className="text-center h-12 mt-2">{tier.description}</CardDescription>
//             </CardHeader>
//             <CardContent className="p-6 flex-grow">
//               <ul className="space-y-4">
//                 {tier.features.map((feature) => (
//                   <li key={feature.text} className="flex items-center gap-3">
//                     {feature.included ? (
//                       <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
//                     ) : (
//                       <X className="h-5 w-5 text-red-500 flex-shrink-0" />
//                     )}
//                     <span className="text-muted-foreground">{feature.text}</span>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//             <div className="p-6 mt-auto">
//               <Button asChild size="lg" className="w-full">
//                 <Link href={tier.href}>{tier.cta}</Link>
//               </Button>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }

'use client'

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const yearlyPricing = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "/year/user",
    description: "For small teams just getting started.",
    features: [
      { text: "AI Assistant", included: true },
      { text: "Basic CRM Module", included: true },
      { text: "Project Management", included: true },
      { text: "Smart Analytics", included: false },
      { text: "Automated Workflows", included: false },
      { text: "Dedicated Support", included: false },
    ],
    cta: "Get Started",
    href: "/contact",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹9,999",
    period: "/year/user",
    description: "For growing businesses that need more power.",
    features: [
      { text: "Everything in Starter", included: true },
      { text: "Smart Analytics", included: true },
      { text: "Automated Workflows", included: true },
      { text: "Dedicated Support", included: true },
      { text: "Custom Integrations", included: false },
    ],
    cta: "Get Started",
    href: "/contact",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs.",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Custom Integrations", included: true },
      { text: "24/7 Priority Support", included: true },
      { text: "Advanced Security & SSO", included: true },
      { text: "On-premise option", included: true },
    ],
    cta: "Contact Sales",
    href: "/contact",
    popular: false,
  },
];

const monthlyPricing = [
  {
    ...yearlyPricing[0],
    price: "₹499",
    period: "/month/user",
  },
  {
    ...yearlyPricing[1],
    price: "₹999",
    period: "/month/user",
  },
  yearlyPricing[2], // Enterprise stays same
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);
  const pricing = isYearly ? yearlyPricing : monthlyPricing;

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Find the Right Plan for Your Business
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
          Affordable, scalable, and powered by AI. Choose the plan that fits your needs and start growing today.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsYearly(!isYearly)}
          className="mt-4"
        >
          {isYearly ? "Switch to Monthly" : "Switch to Yearly"}
        </Button>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 items-stretch">
        {pricing.map((tier) => (
          <Card
            key={tier.name}
            className="flex flex-col transition-all hover:border-primary hover:ring-2 hover:ring-primary"
          >
            <CardHeader className="p-6">
              {tier.popular && (
                <div className="text-sm font-bold text-primary text-center mb-2">
                  Most Popular
                </div>
              )}
              <CardTitle className="font-headline text-2xl text-center">{tier.name}</CardTitle>
              <div className="text-center mt-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.period && (
                  <span className="text-muted-foreground">{tier.period}</span>
                )}
              </div>
              <CardDescription className="text-center h-12 mt-2">
                {tier.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <ul className="space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 flex-shrink-0" />
                    )}
                    <span className="text-muted-foreground">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-8 mt-auto">
              <Button asChild size="lg" className="w-full" variant={tier.popular ? 'default' : 'secondary'}>
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}