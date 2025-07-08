
import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";
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

export default function Footer() {
  return (
    <footer className="w-full bg-background/50 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Logo className="h-10 mx-auto md:mx-0" />
            <p className="mt-4 text-muted-foreground max-w-xs">
              Building AI-powered SaaS, custom software, and growth solutions for the future.
            </p>
          </div>

          <div className="flex items-center gap-4">
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
        
        <Separator className="my-8 bg-white/10" />
        
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aveda Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
