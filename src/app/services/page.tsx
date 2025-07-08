import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { CodeXml, PenTool } from "lucide-react";
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
              We provide a comprehensive suite of services to power your success, from custom software to strategic design.
            </p>
          </div>

          <div id="custom-software" className="grid gap-12 md:grid-cols-2 items-center mb-24">
            <div>
              <Image
                src="https://placehold.co/600x400.png"
                alt="Custom Software"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="software development"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-bold tracking-tight">Custom Software</h2>
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

          <div id="ui-ux-design" className="grid gap-12 md:grid-cols-2 items-center">
             <div className="space-y-6 md:order-2">
              <h2 className="font-headline text-3xl font-bold tracking-tight">UI/UX Design</h2>
              <p className="text-lg text-muted-foreground">We design intuitive and beautiful user interfaces for an exceptional user experience.</p>
               <div className="space-y-4">
                <div className="flex items-start gap-4">
                    <PenTool className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">Interface Design</h3>
                        <p className="text-muted-foreground">Creating visually appealing and brand-consistent interfaces.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <PenTool className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">User Experience</h3>
                        <p className="text-muted-foreground">Building seamless and intuitive user journeys that solve real problems.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <PenTool className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg">Prototyping & Testing</h3>
                        <p className="text-muted-foreground">Validating designs through interactive prototypes and user feedback.</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="md:order-1">
              <Image
                src="https://placehold.co/600x400.png"
                alt="UI/UX Design"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="design wireframe"
              />
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}
