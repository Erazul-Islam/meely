import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <div className="relative max-w-[1440px] px-4 mx-auto flex justify-center items-center">

      <div className="flex">
        <Image
          className="rounded-xl"
          src="/about/a-1.svg"
          width={720}
          height={992}
          alt=""
        />
        <Image
          className="rounded-xl"
          src="/about/a-2.svg"
          width={720}
          height={992}
          alt=""
        />
      </div>

      {/* Centered content */}
         <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
        <Button
          variant="ghost"
          className="text-[#0E0D14] bg-[#FFFFFF] mb-6 rounded-full border border-[#E3E3E9] w-[157px] justify-center"
        >
          About us <ChevronRight height={12} />
        </Button>
        <p className="text-2xl md:text-6xl font-medium">Who We Are</p>
        <p className="text-[#67666B] text-sm md:text-2xl font-normal py-4">
          Meely is building the next generation of fintech experiences for individuals <br /> and businesses.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
