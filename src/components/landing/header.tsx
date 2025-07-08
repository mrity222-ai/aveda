
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 max-w-screen-xl mx-auto items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>
        <div className="flex flex-1 items-center justify-end">
           <Button asChild>
            <Link href="/contact">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
