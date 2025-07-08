import { CloudCog, CodeXml, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: CloudCog,
    title: "SaaS Products",
    description: "Ready-to-deploy SaaS solutions for performance and reliability.",
    href: "/saas-products",
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
    <section id="features" className="w-full py-16 md:py-24">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What We Offer</h2>
            <p className="max-w-3xl text-muted-foreground md:text-xl">
              We provide a comprehensive suite of services to power your success, from innovative products to strategic marketing.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} href={service.href} className="block group">
                <div className="glass-card h-full p-8 transform hover:-translate-y-2 transition-transform duration-300 soft-shadow">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary))]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white/90">{service.title}</h3>
                    <p className="text-base text-muted-foreground mt-2">{service.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
