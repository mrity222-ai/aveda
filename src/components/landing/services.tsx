import { CloudCog, CodeXml, BarChart3, PenTool } from 'lucide-react';
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
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Intuitive and beautiful user interfaces for an exceptional experience.",
    href: "/ui-ux-design",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-6xl xl:max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline sm:text-4xl">What We Offer</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            We provide a comprehensive suite of services to power your success, from innovative products to strategic design and marketing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link href={service.href} key={service.title} className="block group">
                <div className="bg-gray-900 p-8 h-full rounded-lg text-center shadow-sm transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-primary/20 flex flex-col items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-12 w-12 text-primary" />
                  </div>
                  <div className="mt-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold font-headline mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">{service.description}</p>
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
