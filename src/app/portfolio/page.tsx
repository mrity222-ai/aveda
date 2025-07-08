import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const portfolioItems = [
  {
    title: 'AI-Powered Sales CRM',
    category: 'SaaS Product',
    description: 'A comprehensive CRM platform with AI-driven lead scoring and sales forecasting to boost team productivity.',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'crm dashboard',
    tags: ['SaaS', 'AI', 'Web App'],
  },
  {
    title: 'E-commerce Mobile App',
    category: 'Custom Development',
    description: 'A feature-rich mobile application for a retail client, offering a seamless shopping experience on iOS and Android.',
    image: 'https://images.unsplash.com/photo-1601072400319-95a631145318?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'mobile app interface',
    tags: ['Mobile', 'iOS', 'Android'],
  },
  {
    title: 'FinTech Brand Launch',
    category: 'Digital Marketing',
    description: 'A successful digital marketing campaign that established a new FinTech brand, driving significant user acquisition.',
    image: 'https://images.unsplash.com/photo-1642139049021-3854746c5a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'financial chart growth',
    tags: ['Marketing', 'Branding', 'SEO'],
  },
  {
    title: 'Enterprise ERP System',
    category: 'Custom Development',
    description: 'A bespoke Enterprise Resource Planning system built to streamline operations for a large manufacturing client.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'data analytics dashboard',
    tags: ['Web App', 'ERP', 'B2B'],
  },
  {
    title: 'HealthTech UI/UX Overhaul',
    category: 'UI/UX Design',
    description: 'Complete redesign of a health-tech platform, focusing on user-centric design to improve patient engagement.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'user interface design',
    tags: ['UI/UX', 'Healthcare', 'Design'],
  },
  {
    title: 'B2B Content Strategy',
    category: 'Digital Marketing',
    description: 'Implemented a long-term SEO and content strategy that resulted in a 300% increase in organic traffic.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'search engine optimization',
    tags: ['SEO', 'Content', 'B2B'],
  },
  {
    title: 'Cloud Migration Service',
    category: 'SaaS Product',
    description: 'Seamlessly migrated a legacy enterprise system to a modern cloud infrastructure, improving performance and scalability.',
    image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'cloud infrastructure',
    tags: ['Cloud', 'Migration', 'SaaS'],
  },
  {
    title: 'AI Chatbot Integration',
    category: 'Custom Development',
    description: 'Developed and integrated a custom AI-powered chatbot for a customer support platform, reducing response times by 60%.',
    image: 'https://images.unsplash.com/photo-1620712943543-2858200e9456?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageHint: 'AI chatbot',
    tags: ['AI', 'Chatbot', 'Web App'],
  },
];

export default function PortfolioPage() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Work</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          We take pride in the solutions we've built. Here's a selection of projects that showcase our expertise and commitment to quality.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <Card key={item.title} className="overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
            <div className="relative h-56 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                data-ai-hint={item.imageHint}
              />
            </div>
            <CardContent className="p-6 flex-grow flex flex-col">
              <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground flex-grow">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
