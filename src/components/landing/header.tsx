"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/saas-products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
];

const industriesData = {
  "Services": ["Audit & Certification", "Bike Leasing", "Billboard Rental", "Environmental Agency", "Hair Salon", "Handyman", "IT Hardware and Support", "Law firm", "Odoo Partner", "Photography", "Property Owner Association", "Real Estate", "Software Reseller", "Talent Acquisition"],
  "Retail": ["Agriculture Store", "Arts & Crafts", "Bakery", "Book Store", "Clothing Store", "Electronics Store", "Furniture Store", "Grocery Store", "Hardware Store", "Toy Store"],
  "Construction": ["Architecture Firm", "Construction", "Gardening", "Solar Energy"],
  "Supply Chain": ["Beverage Distributor", "Corporate Gifts", "Custom Furniture Production", "Fossil Fuel Trading", "Micro Brewery"],
  "Health & Fitness": ["Eyewear Store", "Fitness Center", "Pharmacy", "Sports Club", "Wellness Practitioners"],
  "Hospitality": ["Bar and Pub", "Fast Food", "Fine Dining Restaurant"]
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/30">
      <div className="container flex h-16 max-w-screen-xl mx-auto items-center justify-between px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            <Link href="/" className="px-3 py-2 text-foreground/80 hover:text-foreground transition-colors">Home</Link>
            <Link href="/about" className="px-3 py-2 text-foreground/80 hover:text-foreground transition-colors">About Us</Link>
            <Link href="/saas-products" className="px-3 py-2 text-foreground/80 hover:text-foreground transition-colors">Products</Link>
            <Link href="/services" className="px-3 py-2 text-foreground/80 hover:text-foreground transition-colors">Services</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground/80 hover:text-foreground transition-colors">Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-6 w-screen max-w-4xl">
                      <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                        {Object.entries(industriesData).map(([category, items]) => (
                          <div key={category}>
                            <h3 className="font-semibold text-foreground mb-3">{category}</h3>
                            <ul className="flex flex-col gap-2">
                              {items.map((item) => (
                                <li key={item}>
                                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/portfolio" className="px-3 py-2 text-foreground/80 hover:text-foreground transition-colors">Portfolio</Link>
            
             <Button asChild className="ml-4">
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
              <SheetContent side="right" className="w-full max-w-sm">
                <div className="grid gap-6 py-6">
                  <Link href="/" className="flex items-center space-x-2 px-6">
                    <Logo />
                  </Link>
                  <div className="flex flex-col gap-0 pl-6 pr-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="flex w-full items-center py-3 text-lg font-semibold"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="industries" className="border-b-0">
                        <AccordionTrigger className="flex w-full items-center py-3 text-lg font-semibold hover:no-underline">Industries</AccordionTrigger>
                        <AccordionContent className="overflow-y-auto max-h-[50vh]">
                          <div className="flex flex-col gap-2 pl-4 pr-2">
                            {Object.entries(industriesData).map(([category, items]) => (
                              <div key={category}>
                                <h3 className="font-semibold text-foreground mt-2 mb-1 text-base">{category}</h3>
                                <ul className="flex flex-col gap-1">
                                  {items.map((item) => (
                                    <li key={item}>
                                      <Link href="#" className="text-base font-normal text-muted-foreground hover:text-primary transition-colors">
                                        {item}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Link
                      href="/contact"
                      className="flex w-full items-center py-3 text-lg font-semibold"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
