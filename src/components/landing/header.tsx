
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/saas-products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
];

const allNavLinks = [...navLinks, { href: '/contact', label: 'Contact' }];


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/30">
      <div className="container flex h-16 max-w-screen-xl mx-auto items-center justify-between px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground/80 hover:text-foreground transition-colors"
                >
                    {link.label}
                </Link>
            ))}
             <Button asChild>
                <Link href="/contact">
                  Contact
                </Link>
            </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-6 py-6">
                  <Link href="/" className="flex items-center space-x-2">
                    <Logo />
                  </Link>
                  <nav className="grid gap-4">
                    {allNavLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex w-full items-center py-2 text-lg font-semibold"
                        >
                            {link.label}
                        </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
