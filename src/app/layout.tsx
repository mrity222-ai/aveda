import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aveda Technologies',
  description: 'Innovative Tech Solutions for Your Business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background overflow-x-hidden">
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
