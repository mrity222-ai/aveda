import { CodeXml } from "lucide-react";
import Image from 'next/image';

export default function CustomDevelopmentPage() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16">
       <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Custom Software</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Bring your unique ideas to life with our bespoke software development services, tailored to your specific requirements.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 items-center">
        <div>
             <Image
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Custom Software Development"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-cover shadow-lg"
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
  );
}
