import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "Project Alpha",
    description: "A comprehensive SaaS platform for enterprise resource planning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "dashboard analytics"
  },
  {
    title: "UI/UX Design",
    description: "Intuitive designs with Figma, built for real users and real business goals.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "design wireframe"
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
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="max-w-screen-xl mx-auto space-y-12 px-4 py-16 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Our Work</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          We take pride in the solutions we've delivered. Explore some of our successful projects.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioItems.map((item) => (
          <Card key={item.title} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl group">
            <CardHeader className="p-0 overflow-hidden">
               <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={item.hint}
              />
            </CardHeader>
            <CardContent className="p-6 bg-background">
              <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
              <CardDescription className="mt-2">{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
       <div className="text-center">
        <Button asChild size="lg">
          <Link href="/portfolio">
            View All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
