
import { CodeXml, PenTool, CloudCog, BarChart3, Palette, BrainCircuit } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
    {
        id: "saas-products",
        title: "SaaS Products",
        description: "Launch and scale your business with our ready-to-deploy, customizable SaaS solutions designed for performance and reliability.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageHint: "saas dashboard",
        link: "/saas-products",
        features: [
            { icon: <CloudCog className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Enterprise CRM", description: "Manage customer relationships, sales pipelines, and marketing campaigns." },
            { icon: <CloudCog className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Project Management Suite", description: "Organize tasks, track progress, and collaborate with your team." },
            { icon: <CloudCog className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Analytics Platform", description: "Gain valuable insights with customizable dashboards and reporting." },
        ]
    },
    {
        id: "custom-software",
        title: "Custom Software Development",
        description: "Bring your unique ideas to life with our bespoke software development services, tailored to your specific requirements.",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageHint: "software development",
        link: "/custom-development",
        features: [
            { icon: <CodeXml className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Web Applications", description: "Robust, scalable, and secure web applications using modern technologies." },
            { icon: <CodeXml className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Mobile Applications", description: "Engaging native or cross-platform mobile apps for iOS and Android." },
            { icon: <CodeXml className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "API & Integrations", description: "Custom APIs and third-party service integrations to streamline operations." },
        ]
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Amplify your brand's reach and drive growth with data-driven digital marketing strategies that deliver measurable results.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageHint: "marketing chart",
        link: "/digital-marketing",
        features: [
            { icon: <BarChart3 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "SEO & Content Strategy", description: "Improve search rankings and attract organic traffic." },
            { icon: <BarChart3 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Social Media Management", description: "Build a strong social presence and engage your audience." },
            { icon: <BarChart3 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "PPC Campaigns", description: "Maximize ROI with targeted pay-per-click advertising." },
        ]
    },
    {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "We design intuitive and beautiful user interfaces for an exceptional user experience that delights users and meets business goals.",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageHint: "design wireframe",
        link: "/ui-ux-design",
        features: [
            { icon: <PenTool className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "User Experience (UX)", description: "User-centric flows based on in-depth research and analysis." },
            { icon: <PenTool className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "User Interface (UI)", description: "Visually stunning, brand-consistent, and joyful interfaces." },
            { icon: <PenTool className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Prototyping & Testing", description: "Validating designs through interactive prototypes and user feedback." },
        ]
    },
    {
        id: "logo-branding",
        title: "Logo & Branding Design",
        description: "Craft a memorable brand identity that resonates with your audience and sets you apart from the competition.",
        image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageHint: "brand moodboard",
        link: null,
        features: [
            { icon: <Palette className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Logo Design", description: "Creating a unique and memorable logo for your business." },
            { icon: <Palette className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Brand Style Guides", description: "Comprehensive guidelines for brand consistency." },
            { icon: <Palette className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Marketing Collateral", description: "Designing business cards, brochures, and other materials." },
        ]
    },
    {
        id: "ai-consulting",
        title: "Technology & AI Consulting",
        description: "Leverage our expertise to navigate the complex technology landscape and unlock the power of AI for your business.",
        image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageHint: "artificial intelligence",
        link: null,
        features: [
            { icon: <BrainCircuit className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "AI Integration", description: "Integrating AI models and solutions into your existing systems." },
            { icon: <BrainCircuit className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Technology Roadmapping", description: "Strategic planning for your technology stack and future growth." },
            { icon: <BrainCircuit className="h-6 w-6 text-primary mt-1 flex-shrink-0" />, title: "Solution Architecture", description: "Designing scalable and efficient system architectures." },
        ]
    }
];


export default function ServicesPage() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-16">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          We provide a comprehensive suite of services to power your success, from custom software to strategic AI consulting.
        </p>
      </div>

      <div className="space-y-24">
        {services.map((service, index) => (
          <div key={service.id} id={service.id} className="grid gap-12 md:grid-cols-2 items-center">
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-cover shadow-lg"
                data-ai-hint={service.imageHint}
              />
            </div>
            <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="space-y-6">
                    <h2 className="font-headline text-3xl font-bold tracking-tight">{service.title}</h2>
                    <p className="text-lg text-muted-foreground">{service.description}</p>
                    <div className="space-y-4">
                        {service.features.map(feature => (
                            <div key={feature.title} className="flex items-start gap-4">
                                {feature.icon}
                                <div>
                                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {service.link && (
                      <Button asChild className="mt-4">
                        <Link href={service.link}>Learn More</Link>
                      </Button>
                    )}
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
