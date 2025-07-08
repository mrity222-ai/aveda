
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "₹499",
    priceSuffix: "/month",
    description: "For small teams just getting started.",
    features: [
      "1-15 Users Only",
      "AI-Powered Insights",
      "Basic CRM Module",
      "Project & Task Management",
      "Community Support",
    ],
    cta: "Get Started",
    href: "/contact",
  },
  {
    name: "Business",
    price: "₹1,999",
    priceSuffix: "/month",
    description: "For growing businesses that need more power.",
    features: [
      "1-50 Users Only",
      "Everything in Starter",
      "Advanced Sales & Inventory",
      "HR & Payroll Module",
      "Priority Email Support",
    ],
    cta: "Choose Business",
    href: "/contact",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    priceSuffix: "",
    description: "For large organizations with custom needs.",
    features: [
      "Unlimited Users",
      "Everything in Business",
      "Custom Module Development",
      "Dedicated Account Manager",
      "24/7 Phone Support",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
];

export default function PricingPage() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Flexible Pricing for Teams of All Sizes
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose a plan that fits your needs and unlock the power of AI.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`glass-card p-8 flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 soft-shadow rounded-2xl ${
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
            <h3 className="font-headline text-2xl font-bold text-white">
              {tier.name}
            </h3>
            <p className="text-muted-foreground mt-1">{tier.description}</p>
            <div className="mt-6">
              <span className="text-4xl font-bold text-white">{tier.price}</span>
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
          </div>
        ))}
      </div>
    </section>
  );
}
