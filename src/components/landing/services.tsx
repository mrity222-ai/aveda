import { CloudCog, CodeXml, BarChart3, BrainCircuit } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: CloudCog,
    title: "SaaS Products",
    description: "Ready-to-deploy SaaS solutions for performance and reliability.",
    href: "/saas-products",
  },
  {
    icon: BrainCircuit,
    title: "AI Integration",
    description: "Leverage the power of AI to automate and enhance your business processes.",
    href: "/services#ai-consulting",
  },
  {
    icon: CodeXml,
    title: "Custom Software",
    description: "Bespoke software development tailored to your specific needs.",
    href: "/custom-development",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Data-driven strategies to amplify your brand and drive growth.",
    href: "/digital-marketing",
  },
];

export default function Services() {
  return (
    <section id="features" className="w-full py-16 md:py-24 bg-secondary">
      <div className="container max-w-7xl xl:max-w-screen-xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">What We Offer</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide a comprehensive suite of services to power your success, from innovative products to strategic design and marketing.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 pt-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link href={service.href} key={service.title} className="block group">
                <div className="bg-background p-6 h-full rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-lg flex flex-col items-start text-left">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-md">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="mt-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold font-headline mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{service.description}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
