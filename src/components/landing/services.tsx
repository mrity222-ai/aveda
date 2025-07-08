
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudCog, CodeXml, PenTool, BarChart3 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <CloudCog className="h-10 w-10 text-primary" />,
    title: "SaaS Products",
    description: "Ready-to-deploy SaaS solutions for performance and reliability.",
    href: "/saas-products",
  },
  {
    icon: <CodeXml className="h-10 w-10 text-primary" />,
    title: "Custom Software",
    description: "Bespoke software development tailored to your specific needs.",
    href: "/custom-development",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Digital Marketing",
    description: "Data-driven strategies to amplify your brand and drive growth.",
    href: "/digital-marketing",
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "Intuitive and beautiful user interfaces for an exceptional experience.",
    href: "/ui-ux-design",
  },
];

export default function Services() {
  return (
    <section className="container space-y-12 px-4 py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">What We Offer</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          We provide a comprehensive suite of services to power your success, from innovative products to strategic design and marketing.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        {services.map((service, index) => (
          <Link key={service.title} href={service.href} className="flex">
            <Card className={cn("flex flex-col items-center text-center p-6 transition-transform duration-300 hover:shadow-lg w-full",
              (index === 1 || index === 2) 
              ? "lg:scale-110 hover:scale-115 bg-card" 
              : "hover:scale-105"
            )}>
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
