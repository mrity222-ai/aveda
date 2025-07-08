import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudCog, CodeXml, BarChart3 } from "lucide-react";

const services = [
  {
    icon: <CloudCog className="h-10 w-10 text-primary" />,
    title: "SaaS Products",
    description: "Launch and scale your business with our ready-to-deploy, customizable SaaS solutions designed for performance and reliability.",
  },
  {
    icon: <CodeXml className="h-10 w-10 text-primary" />,
    title: "Custom Development",
    description: "Bring your unique ideas to life with our bespoke software development services, tailored to your specific requirements.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Digital Marketing",
    description: "Amplify your brand's reach and drive growth with data-driven digital marketing strategies that deliver measurable results.",
  },
];

export default function Services() {
  return (
    <section id="services" className="container space-y-12 px-4 py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Our Services</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          We provide a comprehensive suite of services to power your success from concept to launch and beyond.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              {service.icon}
              <CardTitle className="font-headline mt-4 text-2xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
