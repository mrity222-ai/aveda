import { Bot, BarChart3, Settings2 } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Automate tasks and get instant insights with your personal AI assistant.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Visualize your data and uncover trends with our powerful analytics engine.",
  },
  {
    icon: Settings2,
    title: "Automated Workflows",
    description: "Streamline your business processes with customizable automated workflows.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-16 md:py-24">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our platform is engineered to elevate your business</h2>
            <p className="max-w-3xl text-muted-foreground md:text-xl">
              We provide a comprehensive suite of features to power your success, from innovative AI to strategic automation.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-stretch gap-8 sm:max-w-4xl sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group">
                <div className="h-full p-8 transform hover:-translate-y-2 transition-transform duration-300 soft-shadow rounded-2xl glass-card">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary))]">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground/90">{service.title}</h3>
                    <p className="text-base text-muted-foreground mt-2">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
