"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white ">
      <div className="max-w-[1440px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="text-2xl text-[#121212]">meely</div>

        <div className="hidden md:flex space-x-6 text-[16px] text-[#0E0D14] font-normal ">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/about-us" className="hover:text-primary">
            About Us
          </Link>
          <Link href="/contact-us" className="hover:text-primary">
            Contact Us
          </Link>
        </div>

        <div className="hidden md:flex space-x-3">
          <Button
            className="border border-[#E3E3E9] cursor-pointer rounded-full"
            variant="ghost"
          >
            Login
          </Button>
          <Button className="rounded-full bg-gradient-to-tl cursor-pointer from-[#13121D] to-[#454062]">
            Get Started
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-1/2">
              <div className="flex px-4 flex-col gap-4 mt-6">
                <Link href="/" className="text-base hover:text-primary">
                  Home
                </Link>
                <Link href="/about-us" className="text-base hover:text-primary">
                  About Us
                </Link>
                <Link href="/contact-us" className="text-base hover:text-primary">
                  Contact Us
                </Link>
                <Button
                  className="border border-[#E3E3E9] cursor-pointer rounded-full"
                  variant="ghost"
                >
                  Login
                </Button>
                <Button className="rounded-full bg-gradient-to-tl cursor-pointer from-[#13121D] to-[#454062]">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
