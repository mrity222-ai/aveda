import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import Image from 'next/image';

export default function DigitalMarketingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container max-w-7xl px-4 py-12 sm:py-16 md:py-20">
           <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Digital Marketing</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Amplify your brand's reach and drive growth with data-driven digital marketing strategies that deliver measurable results.
            </p>
          </div>

           <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <BarChart3 className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-2xl font-semibold">SEO & Content Strategy</h3>
                        <p className="text-muted-foreground mt-2">Improve your search engine rankings and attract organic traffic with our expert SEO and content strategies.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <BarChart3 className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-2xl font-semibold">Social Media Management</h3>
                        <p className="text-muted-foreground mt-2">Build a strong social media presence, engage with your audience, and drive conversions across platforms.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <BarChart3 className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-2xl font-semibold">PPC Campaigns</h3>
                        <p className="text-muted-foreground mt-2">Maximize your ROI with targeted pay-per-click advertising campaigns on Google, Facebook, and more.</p>
                    </div>
                </div>
            </div>
            <div>
                 <Image
                    src="https://placehold.co/600x400.png"
                    alt="Digital Marketing"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint="marketing chart"
                  />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
