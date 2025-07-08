import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { CodeXml, BarChart3 } from "lucide-react";
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container px-4 py-16 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-16">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We provide a comprehensive suite of services to power your success, from custom software to strategic marketing.
            </p>
          </div>

          <div id="custom-development" className="grid gap-12 md:grid-cols-2 items-center mb-24">
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Custom Development"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="software development"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-bold tracking-tight">Custom Development</h2>
              <p className="text-lg text-muted-foreground">Bring your unique ideas to life with our bespoke software development services, tailored to your specific requirements.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <CodeXml className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">Web Applications</h3>
                        <p className="text-muted-foreground">Robust, scalable, and secure web applications using modern technologies.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <CodeXml className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">Mobile Applications</h3>
                        <p className="text-muted-foreground">Engaging native or cross-platform mobile apps for iOS and Android.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <CodeXml className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">API & Integrations</h3>
                        <p className="text-muted-foreground">Custom APIs and third-party service integrations to streamline operations.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div id="digital-marketing" className="grid gap-12 md:grid-cols-2 items-center">
             <div className="space-y-6 md:order-2">
              <h2 className="font-headline text-3xl font-bold tracking-tight">Digital Marketing</h2>
              <p className="text-lg text-muted-foreground">Amplify your brand's reach and drive growth with data-driven digital marketing strategies.</p>
               <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <BarChart3 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">SEO & Content Strategy</h3>
                        <p className="text-muted-foreground">Improve search rankings and attract organic traffic.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <BarChart3 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">Social Media Management</h3>
                        <p className="text-muted-foreground">Build a strong social media presence and engage your audience.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <BarChart3 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">PPC Campaigns</h3>
                        <p className="text-muted-foreground">Maximize ROI with targeted pay-per-click advertising.</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="md:order-1">
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
