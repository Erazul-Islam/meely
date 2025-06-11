'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 flex justify-between lg:flex-row flex-col text-sm">
        {/* Column 1 - Meely Info */}
        <div className='max-w-[362px] w-full'>
          <h2 className="text-xl text-[#121212]">meely</h2>
          <p className="text-[#67666B]  mt-2">
            Take control of your money with Meely — personal and business finance, all in one place.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <p className="font-medium text-2xl text-[#0E0D14] mb-2">Follow</p>
            <div className="border-t w-20 border-[#7F7F8A]"></div>
            <div className="flex space-x-4 text-muted-foreground">
              <Link href="#"><Facebook className="h-5 w-5 hover:text-primary" /></Link>
              <Link href="#"><Linkedin className="h-5 w-5 hover:text-primary" /></Link>
              <Link href="#"><Instagram className="h-5 w-5 hover:text-primary" /></Link>
            </div>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="font-medium text-[#0E0D14] text-2xl mb-3">Quick Links</h3>
          <ul className="space-y-2 text-[#67666B] font-normal">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><Link href="/features" className="hover:text-primary">Feature</Link></li>
            <li><Link href="/why-meely" className="hover:text-primary">Why Meely</Link></li>
            <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <ul className="space-y-2 text-[#67666B] font-normal md:mt-8">
            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 4 - Resources */}
        <div>
          <h3 className="text-[#0E0D14] text-2xl font-medium mb-3">Resources</h3>
          <ul className="space-y-2 text-[#67666B] font-normal">
            <li><Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      {/* Underline Divider */}
      <div className="border-t border-[#7F7F8A]"></div>

      {/* Bottom Text */}
      <div className="text-center py-6 text-xs text-muted-foreground">
        © 2025 meely. All rights reserved.
      </div>
    </footer>
  )
}
