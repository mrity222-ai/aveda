import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "CEO of a Satisfied Client",
    image: "https://placehold.co/100x100.png",
    imageHint: "professional headshot man",
    quote:
      "Aveda Technologies's SaaS product revolutionized our workflow. It's intuitive, powerful, and has significantly boosted our productivity.",
  }
];

const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex items-center gap-0.5 text-yellow-500">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-current" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="max-w-xl text-muted-foreground sm:text-lg">
            See how we've helped businesses like yours succeed.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="p-8 h-full flex flex-col bg-card"
            >
              <CardContent className="p-0 flex flex-col items-center text-center flex-grow">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                  data-ai-hint={testimonial.imageHint}
                />
                <StarRating />
                <blockquote className="mt-4 flex-grow flex flex-col justify-center">
                  <p className="text-lg italic text-foreground/90 z-10 relative">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
                 <footer className="mt-4 text-base font-semibold text-foreground">
                    — {testimonial.name}
                  </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
