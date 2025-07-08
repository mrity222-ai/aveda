
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="sticky top-4 z-50 w-full">
      <div className="container flex h-16 max-w-screen-xl mx-auto items-center justify-between rounded-full bg-black/20 backdrop-blur-lg border border-white/10 px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>
        <div className="flex items-center justify-end">
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
