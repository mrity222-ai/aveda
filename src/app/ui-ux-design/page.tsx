import { PenTool, Brush, HeartHandshake } from "lucide-react";
import Image from 'next/image';

export default function UiUxDesignPage() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16">
       <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">UI/UX Design</h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We craft intuitive, engaging, and beautiful user experiences that drive results and customer satisfaction.
        </p>
      </div>

       <div className="grid gap-12 md:grid-cols-2 items-center">
        <div className="space-y-6">
            <div className="flex items-start gap-4">
                <HeartHandshake className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h3 className="font-headline text-2xl font-semibold">User Experience (UX)</h3>
                    <p className="text-muted-foreground mt-2">We conduct in-depth research to understand your users and design intuitive, user-centric flows.</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <Brush className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h3 className="font-headline text-2xl font-semibold">User Interface (UI)</h3>
                    <p className="text-muted-foreground mt-2">We design visually stunning interfaces that are consistent with your brand and a joy to use.</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <PenTool className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                    <h3 className="font-headline text-2xl font-semibold">Prototyping & Testing</h3>
                    <p className="text-muted-foreground mt-2">We create interactive prototypes to test with users, ensuring the final product is flawless.</p>
                </div>
            </div>
        </div>
        <div>
             <Image
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="UI/UX Design"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-cover shadow-lg"
                data-ai-hint="design wireframe"
              />
        </div>
      </div>
    </section>
  );
}
