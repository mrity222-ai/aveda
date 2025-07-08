import Image from 'next/image';

const clients = [
  { name: 'Apex Inc.', hint: 'minimalist logo' },
  { name: 'Stellar Solutions', hint: 'tech company logo' },
  { name: 'Quantum Corp', hint: 'abstract geometric logo' },
  { name: 'Momentum Dynamics', hint: 'dynamic motion logo' },
  { name: 'Pinnacle Group', hint: 'corporate brand logo' },
  { name: 'Nexus Enterprises', hint: 'modern network logo' },
  { name: 'Innovate AI', hint: 'modern tech logo' },
  { name: 'Synergy Labs', hint: 'abstract shape logo' },
  { name: 'Future Forge', hint: 'bold geometric logo' },
  { name: 'Visionary Ventures', hint: 'minimalist eye logo' },
  { name: 'Catalyst Co', hint: 'dynamic arrow logo' },
  { name: 'Horizon Digital', hint: 'simple letter logo' },
];

export default function Clients() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Trusted by Teams at the World’s Best Companies
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
            We partner with innovative companies to build the future of technology.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-12 items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center">
              <Image
                src="https://placehold.co/150x50.png"
                alt={`${client.name} Logo`}
                width={150}
                height={50}
                className="w-3/4 object-contain"
                data-ai-hint={client.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
