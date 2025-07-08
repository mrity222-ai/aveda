
import Link from "next/link";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Logo from "../logo";

const socialLinks: { href: string; label: string; Icon: LucideIcon }[] = [
  {
    href: "https://twitter.com",
    Icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://linkedin.com",
    Icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com",
    Icon: Github,
    label: "GitHub",
  },
];

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
];

const serviceLinks = [
    { href: "/saas-products", label: "SaaS Products" },
    { href: "/custom-development", label: "Custom Development" },
    { href: "/digital-marketing", label: "Digital Marketing" },
    { href: "/ui-ux-design", label: "UI/UX Design" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="container max-w-7xl xl:max-w-screen-xl py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Company Branding */}
          <div className="space-y-4">
            <Logo showTagline={false} className="h-10" />
            <p className="text-muted-foreground pt-2">
              Building AI-powered SaaS, custom software, and growth solutions for the future.
            </p>
             <div className="flex items-center space-x-1 pt-2">
              {socialLinks.map(({ href, label, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="text-muted-foreground transition-colors hover:text-primary hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold">Our Services</h4>
             <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground transition-colors hover:text-primary hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>123 Innovation Drive, Tech City, 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="mailto:contact@avedatech.com" className="break-all transition-colors hover:text-primary hover:underline">contact@avedatech.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-border" />
        
        <div className="text-center text-sm text-muted-foreground">
          © 2025 Aveda Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
