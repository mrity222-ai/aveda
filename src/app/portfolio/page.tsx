import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "Project Alpha",
    description: "A comprehensive SaaS platform for enterprise resource planning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "dashboard analytics"
  },
  {
    title: "Project Beta",
    description: "A sleek and intuitive mobile application for social networking.",
    image: "https://images.unsplash.com/photo-1601972603402-471a930155b0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "mobile app"
  },
  {
    title: "Project Gamma",
    description: "An e-commerce solution with a custom CMS and payment integration.",
    image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "e-commerce website"
  },
  {
    title: "Project Delta",
    description: "Custom analytics dashboard for a major digital marketing campaign.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "analytics dashboard"
  },
  {
    title: "Project Epsilon",
    description: "A custom API for a fintech startup, enabling secure transactions.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "api development"
  },
  {
    title: "Project Zeta",
    description: "A complete re-branding and digital marketing campaign for a retail client.",
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "digital marketing"
  }
];

export default function PortfolioPage() {
  return (
    <section className="max-w-screen-xl mx-auto space-y-12 px-4 py-16">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Work</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          We take pride in the solutions we've delivered. Explore some of our successful projects and case studies.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioItems.map((item) => (
          <Card key={item.title} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <CardHeader className="p-0">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full object-cover aspect-[3/2]"
                data-ai-hint={item.hint}
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
              <CardDescription className="mt-2 text-lg">{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
