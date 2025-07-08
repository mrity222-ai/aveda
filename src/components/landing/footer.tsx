import Link from "next/link";
import { Twitter, Linkedin, Github, Mail, Phone, MapPin, Instagram, Youtube, Facebook } from "lucide-react";
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
    href: "https://www.linkedin.com/company/aveda%E2%84%A2/?viewAsMember=true",
    Icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com",
    Icon: Github,
    label: "GitHub",
  },
  {
    href: "https://instagram.com",
    Icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://youtube.com",
    Icon: Youtube,
    label: "YouTube",
  },
  {
    href: "https://facebook.com",
    Icon: Facebook,
    label: "Facebook",
  },
];

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
    { href: '/saas-products', label: 'SaaS Products' },
    { href: '/custom-development', label: 'Custom Development' },
    { href: '/digital-marketing', label: 'Digital Marketing' },
    { href: '/ui-ux-design', label: 'UI/UX Design' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            <div className="space-y-4 md:col-span-1">
                <Logo className="h-10" />
                <p className="text-muted-foreground">
                Building AI-powered SaaS, custom software, and growth solutions for the future.
                </p>
                <div className="flex items-center gap-4 pt-2">
                    {socialLinks.map(({ href, label, Icon }) => (
                        <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="icon-bubble"
                        >
                        <Icon className="h-6 w-6 text-white" />
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold font-headline mb-4">Quick Links</h3>
                <ul className="space-y-3">
                    {quickLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold font-headline mb-4">Our Services</h3>
                 <ul className="space-y-3">
                    {serviceLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold font-headline mb-4">Contact Us</h3>
                 <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>Lucknow ,U.P. IN</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <a href="mailto:Avedatechnologies@gmail.com" className="hover:text-primary transition-colors">Avedatechnologies@gmail.com</a>
                    </div>
                    <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span>+91 9012887697</span>
                    </div>
                </div>
            </div>

        </div>
        
        <Separator className="my-12 bg-white/10" />
        
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aveda Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
