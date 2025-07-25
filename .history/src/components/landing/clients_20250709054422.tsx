import Image from 'next/image';

const clients = [
  { name: 'Apex Inc.', hint: 'minimalist logo', image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: 'Stellar Solutions', hint: 'tech company logo', image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: 'Quantum Corp', hint: 'abstract geometric logo', image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: 'Momentum Dynamics', hint: 'dynamic motion logo', image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
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
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center">
              <Image
                src={client.image}
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
