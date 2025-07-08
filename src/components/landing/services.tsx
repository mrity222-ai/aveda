import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudCog, CodeXml, BarChart3 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <CloudCog className="h-10 w-10 text-primary" />,
    title: "SaaS Products",
    description: "Launch and scale with our customizable, ready-to-deploy SaaS solutions.",
    href: "/saas-products",
  },
  {
    icon: <CodeXml className="h-10 w-10 text-primary" />,
    title: "Custom Development",
    description: "Bring your unique ideas to life with our bespoke software development services.",
    href: "/custom-development",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Digital Marketing",
    description: "Amplify your brand's reach and drive growth with data-driven marketing strategies.",
    href: "/digital-marketing",
  },
];

export default function Services() {
  return (
    <section className="container space-y-12 px-4 py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">What We Offer</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          We provide a comprehensive suite of services to power your success, from innovative products to strategic marketing.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-8 sm:grid-cols-1 md:grid-cols-3">
        {services.map((service) => (
          <Link key={service.title} href={service.href} className="flex">
            <Card className="flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg w-full">
              <CardHeader>
                {service.icon}
                <CardTitle className="font-headline mt-4 text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
