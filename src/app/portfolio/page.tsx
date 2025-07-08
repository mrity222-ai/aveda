import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const portfolioItems = [
  {
    title: "Landing Pages",
    description: "High-converting pages for product launches or ads.",
    image: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "landing page"
  },
  {
    title: "UI/UX Design",
    description: "Intuitive designs with Figma, built for real users and real business goals.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "design wireframe"
  },
  {
    title: "E-Commerce Store",
    description: "An e-commerce solution with a custom CMS and payment integration.",
    image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "e-commerce website"
  },
  {
    title: "SEO Optimization",
    description: "Make your site Google-friendly with smart SEO practices.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "seo chart"
  },
  {
    title: "Website Design & Development",
    description: "Fully responsive, fast, and modern websites using HTML, Tailwind, React, or WordPress.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "website design"
  },
  {
    title: "Logo Design",
    description: "Custom brand identities that are simple, memorable, and professional.",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hint: "brand design"
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
