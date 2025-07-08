import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";

export default function PricingBanner() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
        <Card className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-white">
                Plans begin at ₹499/month
              </h2>
              <p className="text-lg text-muted-foreground mt-1">
                Affordable, Scalable & Powered by AI
              </p>
            </div>
          </div>
          <Button asChild size="lg" className="flex-shrink-0">
            <Link href="/contact">
              View Pricing <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </Card>
      </div>
    </section>
  );
}
