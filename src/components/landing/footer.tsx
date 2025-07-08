
import Link from "next/link";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Logo from "../logo";

const socialLinks = [
  {
    href: "https://twitter.com",
    icon: <Twitter className="h-5 w-5" />,
    label: "Twitter",
  },
  {
    href: "https://linkedin.com",
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com",
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
  },
];

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/portfolio", label: "Portfolio" },
];

const serviceLinks = [
    { href: "/products", label: "SaaS Products" },
    { href: "/services#custom-software", label: "Custom Software" },
    { href: "/services#ui-ux-design", label: "UI/UX Design" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Company Branding */}
          <div className="space-y-4">
            <Logo showTagline={true} className="h-12" />
            <p className="text-muted-foreground pt-2">
              Building AI-powered SaaS, custom software, and growth solutions for the future.
            </p>
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
            <h4 className="font-headline text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>Lucknow, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="mailto:hello@avedaerp.com" className="break-all transition-colors hover:text-primary hover:underline">hello@avedaerp.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <span>+91-XXXXXXXXXX</span>
              </div>
            </div>
             <div className="flex items-center space-x-1 pt-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {link.icon}
                </Link>
              ))}
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
