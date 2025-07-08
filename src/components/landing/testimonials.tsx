import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah L.",
    role: "CEO, Innovate Inc.",
    image: "https://placehold.co/100x100.png",
    imageHint: "professional headshot woman",
    quote:
      "Aveda Technologies's AI platform has been a complete game-changer for our team. The insights are incredible and have directly impacted our bottom line.",
  },
  {
    name: "Mike D.",
    role: "Marketing Director, Growth Co.",
    image: "https://placehold.co/100x100.png",
    imageHint: "professional headshot man",
    quote:
      "We've tried other platforms, but nothing comes close. The automated workflows have saved us hundreds of hours and let us focus on what matters.",
  },
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
    <section className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="max-w-xl text-muted-foreground sm:text-lg">
            See how we've helped businesses like yours succeed.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="bg-background/80 backdrop-blur-sm p-8 soft-shadow border"
            >
              <CardContent className="p-0 flex flex-col items-center text-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                  data-ai-hint={testimonial.imageHint}
                />
                <StarRating />
                <blockquote className="mt-4">
                  <p className="text-lg italic text-foreground/90 z-10 relative">
                    "{testimonial.quote}"
                  </p>
                  <footer className="mt-4 text-base font-semibold text-foreground">
                    — {testimonial.name},{" "}
                    <span className="font-normal text-muted-foreground">
                      {testimonial.role}
                    </span>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
