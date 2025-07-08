import { CloudCog, CodeXml, BarChart3 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

const services = [
  {
    icon: CloudCog,
    title: "SaaS Products",
    description: "Ready-to-deploy SaaS solutions for performance and reliability.",
  },
  {
    icon: CodeXml,
    title: "Custom Software",
    description: "Bespoke software development tailored to your specific needs.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description: "Data-driven strategies to amplify your brand and drive growth.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24">
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
              <Card key={service.title} className="h-full">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                      <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
