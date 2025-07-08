import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import Image from 'next/image';

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    hint: "professional headshot man"
  },
  {
    name: "Jane Smith",
    role: "CTO",
    hint: "professional headshot woman"
  },
  {
    name: "Robert Johnson",
    role: "CFO",
    hint: "professional headshot man"
  },
  {
    name: "Emily White",
    role: "Head of Marketing",
    hint: "professional headshot woman"
  }
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container max-w-7xl px-4 py-12 sm:py-16 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                About Aveda Technologies
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Aveda Technologies was founded with a simple mission: to empower businesses with transformative technology solutions. We are a passionate team of developers, designers, and strategists dedicated to helping our clients innovate, build, and grow.
              </p>
              <p className="text-lg text-muted-foreground md:text-xl">
                Our approach is collaborative and client-centric. We believe in building strong partnerships to understand your unique challenges and deliver solutions that drive real results. From initial concept to final deployment, we are with you every step of the way.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://placehold.co/600x400.png"
                alt="Aveda Technologies Team"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="team meeting"
              />
            </div>
          </div>
        </section>

        <section className="bg-secondary py-12 sm:py-16 md:py-20">
          <div className="container max-w-7xl px-4">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Meet Our Team
              </h2>
              <p className="max-w-3xl text-lg text-muted-foreground md:text-xl">
                We’re a passionate team of developers, designers, and growth experts building the future of AI-powered technology.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center flex flex-col items-center">
                  <Image
                    src="https://placehold.co/400x400.png"
                    alt={`Photo of ${member.name}`}
                    width={150}
                    height={150}
                    className="rounded-full object-cover mb-4 shadow-md"
                    data-ai-hint={member.hint}
                  />
                  <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
