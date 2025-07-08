import { Users, Warehouse, Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

const services = [
  {
    icon: Users,
    title: "CRM & Sales",
    description: "Track leads, close opportunities and get accurate forecasts.",
  },
  {
    icon: Warehouse,
    title: "Inventory & MRP",
    description: "Maximize warehouse efficiency, and increase productivity.",
  },
  {
    icon: Briefcase,
    title: "HR & Payroll",
    description: "Manage employees, payroll, and recruitment all in one place.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">One App for All Your Needs</h2>
            <p className="max-w-3xl text-muted-foreground md:text-xl">
              No more integrations. No more data silos. Just a single, powerful platform to run your entire business.
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
