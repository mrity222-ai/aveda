import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "CEO of a Satisfied Client",
    title: "Tech Solutions",
    quote:
      "Aveda Technologies's SaaS product revolutionized our workflow. It's intuitive, powerful, and has significantly boosted our productivity.",
  },
  {
    name: "Jane Doe",
    title: "Marketing Director, Innovate Inc.",
    quote:
      "The smart analytics feature gave us insights we never knew we were missing. Our campaign ROI has increased by over 50%!",
  },
  {
    name: "John Smith",
    title: "Operations Manager, Growth Co.",
    quote:
      "Automating our workflows saved us countless hours. The platform is a game-changer for operational efficiency.",
  },
];

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

        <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-1 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="p-6 h-full flex flex-col"
            >
              <CardContent className="p-0 flex flex-col flex-grow">
                <blockquote className="flex-grow">
                  <p className="text-lg text-foreground/90">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
                 <footer className="mt-6 text-base font-semibold text-foreground">
                    {testimonial.name}
                    <div className="text-sm font-normal text-muted-foreground">{testimonial.title}</div>
                  </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
