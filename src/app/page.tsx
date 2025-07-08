import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Services from '@/components/landing/services';
import Testimonials from '@/components/landing/testimonials';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
