import { Bot, BarChart, Settings } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "AI Assistant",
    description: "Leverage our AI assistant to automate tasks and get instant insights.",
  },
  {
    icon: BarChart,
    title: "Smart Analytics",
    description: "Gain deep insights into your business with our advanced analytics.",
  },
  {
    icon: Settings,
    title: "Automated Workflows",
    description: "Streamline your processes with powerful, easy-to-configure workflows.",
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Features</h2>
            <p className="max-w-3xl text-muted-foreground md:text-xl">
              Everything you need to power your business with AI.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-sm items-stretch gap-8 sm:max-w-4xl sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="group">
                <div className="h-full p-8 transform hover:-translate-y-2 transition-transform duration-300 soft-shadow rounded-2xl bg-background/80 backdrop-blur-sm border">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20 transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(var(--primary))]">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground/90">{feature.title}</h3>
                    <p className="text-base text-muted-foreground mt-2">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
