import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "Project Alpha",
    description: "A comprehensive SaaS platform for enterprise resource planning.",
    image: "https://placehold.co/600x400.png",
    hint: "dashboard analytics"
  },
  {
    title: "Project Beta",
    description: "A sleek and intuitive mobile application for social networking.",
    image: "https://placehold.co/600x400.png",
    hint: "mobile app"
  },
  {
    title: "Project Gamma",
    description: "An e-commerce solution with a custom CMS and payment integration.",
    image: "https://placehold.co/600x400.png",
    hint: "e-commerce website"
  },
  {
    title: "Project Delta",
    description: "Custom analytics dashboard for a major digital marketing campaign.",
    image: "https://placehold.co/600x400.png",
    hint: "analytics dashboard"
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="container space-y-12 px-4 py-16 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Our Work</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          We take pride in the solutions we've delivered. Explore some of our successful projects.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
        {portfolioItems.map((item) => (
          <Card key={item.title} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
            <CardHeader className="p-0">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full object-cover"
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
