import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container px-4 py-16 md:py-24 lg:py-32">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                About AvedaTech
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                AvedaTech was founded with a simple mission: to empower businesses with transformative technology solutions. We are a passionate team of developers, designers, and strategists dedicated to helping our clients innovate, build, and grow.
              </p>
              <p className="text-lg text-muted-foreground md:text-xl">
                Our approach is collaborative and client-centric. We believe in building strong partnerships to understand your unique challenges and deliver solutions that drive real results. From initial concept to final deployment, we are with you every step of the way.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://placehold.co/600x400.png"
                alt="AvedaTech Team"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="team meeting"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
