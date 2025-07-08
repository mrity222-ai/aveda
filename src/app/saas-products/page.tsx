import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudCog } from "lucide-react";

export default function SaasProductsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container px-4 py-16 md:py-24 lg:py-32">
           <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">SaaS Products</h1>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Launch and scale your business with our ready-to-deploy, customizable SaaS solutions designed for performance and reliability.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                    <CloudCog className="h-10 w-10 text-primary" />
                    <CardTitle className="font-headline mt-4 text-2xl">Enterprise CRM</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">A powerful CRM to manage your customer relationships, sales pipelines, and marketing campaigns seamlessly.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                    <CloudCog className="h-10 w-10 text-primary" />
                    <CardTitle className="font-headline mt-4 text-2xl">Project Management Suite</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Organize tasks, track progress, and collaborate with your team effectively to deliver projects on time.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                    <CloudCog className="h-10 w-10 text-primary" />
                    <CardTitle className="font-headline mt-4 text-2xl">Analytics Platform</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Gain valuable insights from your data with our intuitive analytics platform, featuring customizable dashboards.</p>
                </CardContent>
              </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
