import { CloudCog, CodeXml, BarChart3, BrainCircuit, DatabaseZap, Workflow } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: DatabaseZap,
    title: "AI-Powered Analytics",
    description: "Unlock actionable insights with our predictive analytics and intelligent data processing platform.",
    href: "/saas-products",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "Streamline your business operations with customizable, AI-driven workflow automation.",
    href: "/services#ai-consulting",
  },
  {
    icon: CodeXml,
    title: "Custom Integrations",
    description: "Seamlessly connect our SaaS solutions with your existing technology stack for unified performance.",
    href: "/custom-development",
  },
];

export default function Services() {
  return (
    <section id="features" className="w-full py-16 md:py-32">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4">
             <div className="inline-block rounded-full bg-secondary/20 px-4 py-2 text-sm font-semibold text-secondary">
              Core Features
            </div>
            <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform is built with a powerful set of features designed to scale with your business and drive exceptional results.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-start gap-12 sm:max-w-4xl sm:grid-cols-2 md:gap-16 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group relative">
                <div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"
                ></div>
                <Link href={service.href} className="relative block glass-card p-8 h-full flex flex-col items-start text-left transform hover:-translate-y-2 transition-transform duration-300 soft-shadow">
                    <div className="flex-shrink-0 bg-white/10 p-4 rounded-xl border border-white/20">
                      <Icon className="h-10 w-10 text-secondary" />
                    </div>
                    <div className="mt-6 flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold font-headline mb-3 text-white">{service.title}</h3>
                      <p className="text-muted-foreground text-base leading-relaxed flex-grow">{service.description}</p>
                    </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
