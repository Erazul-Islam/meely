import type { Metadata } from "next";
import {  Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/navbar";
import Footer from "@/shared/footer";


const figtree = Figtree({
  variable: "--font-figtree-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "meely",
  description: "Fintech Supar App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
