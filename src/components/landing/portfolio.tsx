import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "Project Alpha",
    description: "A comprehensive SaaS platform for enterprise resource planning.",
    image: "https://images.unsplash.com/photo-1613347761493-4060c969cd28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MHx8fHwxNzUxOTgxNjg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "dashboard analytics"
  },
  {
    title: "Project Beta",
    description: "A sleek and intuitive mobile application for social networking.",
    image: "https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtb2JpbGUlMjBhcHB8ZW58MHx8fHwxNzUxOTgxNjg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "mobile app"
  },
  {
    title: "Project Gamma",
    description: "An e-commerce solution with a custom CMS and payment integration.",
    image: "https://images.unsplash.com/photo-1706958920654-8cf86173e21b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwwfHx8fDE3NTE5ODE2ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "e-commerce website"
  },
  {
    title: "Project Delta",
    description: "Custom analytics dashboard for a major digital marketing campaign.",
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzUxOTgxNjg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
