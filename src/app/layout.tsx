import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import './globals.css';
import Chatbot from '@/components/chatbot';

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
    <html lang="en" className="!scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background overflow-x-hidden relative">
        <div className="fixed inset-0 -z-50">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-primary/10 rounded-full blur-3xl animate-pulse-blob [animation-delay:-4s]" />
          <div className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] bg-accent/10 rounded-full blur-3xl animate-pulse-blob-fast [animation-delay:-2s]" />
          <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-primary/10 rounded-full blur-3xl animate-pulse-blob [animation-delay:0s]" />
        </div>
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        <Toaster />
        <Chatbot />
      </body>
    </html>
  );
}
