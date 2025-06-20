import { Button } from "@/components/ui/button";
import { ChevronRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const CommingSoon = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className=" bg-[#F9F9FB] rounded-2xl p-2 mx-4 lg:py-16 py-8 flex flex-col justify-center items-center  md:px-5 px-3">
        <Button
          variant="ghost"
          className="text-[#0E0D14] bg-[#FFFFFF] mb-6 rounded-full border border-[#E3E3E9] w-[157px] justify-center"
        >
          comming soon <ChevronRight height={12} />
        </Button>
        <p className="text-2xl md:text-6xl font-medium">Stay Tuned</p>
        <p className="text-[#67666B] text-sm md:text-xl text-center font-normal py-4">
          Get the latest articles and business updates that you need to know,
          you’ll <br className="md:block hidden" /> even get special
          recommendations weekly.
        </p>
        <div className="flex pt-4 items-center">
          <input
            placeholder="Your Email"
            className="border-t border-l border-b pl-3 pr-2 rounded-tl-2xl rounded-bl-2xl focus:ring-0 focus:outline-none  text-[#0A142F] lg:w-[700px]   h-[42px] border-[#F0F0F0]"
            type="text"
          />
          <button className="h-[42px] text-white md:px-12 px-4 rounded-tr-2xl rounded-br-2xl border-t border-r border-b border-[#F0F0F0] bg-gradient-to-tl  from-[#13121D] to-[#454062]">
            {" "}
            Subscribe
          </button>
        </div>
        <p className="text-[#67666B] text-sm md:text-xl text-center font-normal pt-5">
          Sign up to get early launch notification of our launch date !
        </p>
        <div className="flex space-x-4 pt-5 text-muted-foreground">
              <Link href="#"><Facebook className="h-5 w-5 hover:text-primary" /></Link>
              <Link href="#"><Linkedin className="h-5 w-5 hover:text-primary" /></Link>
              <Link href="#"><Instagram className="h-5 w-5 hover:text-primary" /></Link>
              <Link href="#"><Youtube className="h-5 w-5 hover:text-primary" /></Link>
            </div>
      </div>
    </div>
  );
};

export default CommingSoon;
