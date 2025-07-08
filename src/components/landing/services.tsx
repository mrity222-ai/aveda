import { CloudCog, CodeXml, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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
    <section id="features" className="w-full py-16 md:py-24 bg-secondary/50">
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
              <Link key={service.title} href={service.href}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                       <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
