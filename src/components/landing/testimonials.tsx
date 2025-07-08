
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const staticTestimonial = "Aveda Technologies's SaaS product revolutionized our workflow. It's intuitive, powerful, and has significantly boosted our productivity.";

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
          <p className="max-w-xl text-muted-foreground sm:text-lg">
            See how we've helped businesses like yours succeed.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="glass-card p-8 soft-shadow">
            <blockquote className="relative">
              <Quote className="absolute -top-6 -left-6 h-12 w-12 text-primary/20 drop-shadow-lg" />
              <p className="text-lg italic text-foreground/80 z-10 relative">
                "{staticTestimonial}"
              </p>
               <footer className="mt-4 text-right text-sm font-semibold text-foreground">
                  — CEO of a Satisfied Client
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
