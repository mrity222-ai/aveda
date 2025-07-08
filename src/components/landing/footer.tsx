import Link from "next/link";
import { Twitter, Linkedin, Github, Instagram, Youtube, Facebook } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Logo from "../logo";

const socialLinks: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: "https://twitter.com", Icon: Twitter, label: "Twitter" },
  { href: "https://www.linkedin.com/company/aveda%E2%84%A2/?viewAsMember=true", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com", Icon: Github, label: "GitHub" },
  { href: "https://www.instagram.com/aveda_technology?igsh=MXVpNzVmcHV6M3dncw==", Icon: Instagram, label: "Instagram" },
  { href: "https://youtube.com", Icon: Youtube, label: "YouTube" },
  { href: "https://www.facebook.com/share/1Am2GvNX5J/", Icon: Facebook, label: "Facebook" },
];

const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
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
    <footer className="w-full bg-background border-t">
      <div className="container max-w-screen-xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4 md:col-span-1">
                <Logo />
                <p className="text-muted-foreground text-sm">
                  AI-powered solutions for modern businesses.
                </p>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
                <ul className="space-y-3">
                    {quickLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
                 <ul className="space-y-3">
                    {serviceLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
             <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Connect</h3>
                <div className="flex items-center gap-3">
                    {socialLinks.map(({ href, label, Icon }) => (
                        <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        >
                        <Icon className="h-5 w-5" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-sm text-muted-foreground flex justify-between items-center">
          <span>© {new Date().getFullYear()} Aveda Technologies. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
