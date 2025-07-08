import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeXml } from "lucide-react";
import Image from 'next/image';

export default function CustomDevelopmentPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container px-4 py-12 sm:py-16 md:py-24 lg:py-32">
           <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Custom Software</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Bring your unique ideas to life with our bespoke software development services, tailored to your specific requirements.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
                 <Image
                    src="https://placehold.co/600x400.png"
                    alt="Custom Software Development"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint="software development"
                  />
            </div>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <CodeXml className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-2xl font-semibold">Web Applications</h3>
                        <p className="text-muted-foreground mt-2">We build robust, scalable, and secure web applications using modern technologies to meet your business needs.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <CodeXml className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-2xl font-semibold">Mobile Applications</h3>
                        <p className="text-muted-foreground mt-2">Engage your users with beautiful and performant native or cross-platform mobile apps for iOS and Android.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <CodeXml className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-headline text-2xl font-semibold">API & Integrations</h3>
                        <p className="text-muted-foreground mt-2">We design and develop custom APIs and integrate third-party services to streamline your operations.</p>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
