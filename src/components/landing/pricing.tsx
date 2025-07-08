import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";

const tiers = [
  {
    name: "Starter",
    price: "₹499",
    priceSuffix: "/mo",
    description: "For small teams just getting started.",
    features: ["AI Assistant", "Basic CRM Module", "Project Management"],
    cta: "Get Started",
    href: "/contact",
  },
  {
    name: "Pro",
    price: "₹999",
    priceSuffix: "/mo",
    description: "For growing businesses that need more power.",
    features: [
      "Everything in Starter",
      "Smart Analytics",
      "Automated Workflows",
    ],
    cta: "Choose Pro",
    href: "/contact",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceSuffix: "",
    description: "For large organizations with custom needs.",
    features: [
      "Everything in Pro",
      "Dedicated Support",
      "Custom Integrations",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-screen-xl mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Flexible Pricing for Teams of All Sizes
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose a plan that fits your needs and unlock the power of AI.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`p-8 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 relative ${
              tier.popular ? "border-primary border-2" : ""
            }`}
          >
            {tier.popular && (
              <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}
            <h3 className="font-headline text-2xl font-bold text-foreground">
              {tier.name}
            </h3>
            <p className="text-muted-foreground mt-1">{tier.description}</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-foreground">
                {tier.price}
              </span>
              {tier.priceSuffix && (
                <span className="text-muted-foreground ml-1">
                  {tier.priceSuffix}
                </span>
              )}
            </div>
            <ul className="space-y-4 text-sm mt-8 flex-grow">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="w-full mt-8">
              <Link href={tier.href}>{tier.cta}</Link>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
