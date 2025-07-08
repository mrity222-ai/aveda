"use client";

import { useState, useTransition } from "react";
import { getRelevantTestimonial } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Quote, Sparkles } from "lucide-react";

const services = [
  { value: "SaaS", label: "SaaS Products" },
  { value: "Custom Development", label: "Custom Development" },
  { value: "Digital Marketing", label: "Digital Marketing" },
];

export default function Testimonials() {
  const [selectedService, setSelectedService] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleAction = () => {
    setError("");
    setTestimonial("");
    startTransition(async () => {
      const result = await getRelevantTestimonial(selectedService);
      if (result.success) {
        setTestimonial(result.testimonial!);
      } else {
        setError(result.error!);
      }
    });
  };

  return (
    <section className="container max-w-7xl space-y-12 px-4 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">What Our Clients Say</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          See how we've helped businesses like yours succeed. Select a service to see a relevant testimonial, powered by AI.
        </p>
      </div>

      <div className="mx-auto max-w-2xl space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="w-full sm:w-[280px]">
              <SelectValue placeholder="Select a service..." />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  {service.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={handleAction} disabled={isPending || !selectedService} className="w-full sm:w-auto">
            <Sparkles className="mr-2 h-4 w-4" />
            {isPending ? "Finding..." : "Get AI Testimonial"}
          </Button>
        </div>

        <div className="pt-4 min-h-[140px]">
          {isPending && (
            <div className="space-y-4">
              <Skeleton className="h-6 w-3/4 mx-auto" />
              <Skeleton className="h-6 w-1/2 mx-auto" />
              <Skeleton className="h-6 w-5/6 mx-auto" />
            </div>
          )}
          {error && (
             <Alert variant="destructive" className="w-full">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {testimonial && (
            <Card className="p-6 bg-secondary border-l-4 border-primary">
              <CardContent className="p-0">
                <blockquote className="relative">
                  <Quote className="absolute -top-4 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-lg italic text-foreground/80">
                    "{testimonial}"
                  </p>
                </blockquote>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
