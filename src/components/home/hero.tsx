import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className=" max-w-[1440px] mx-auto rounded-3xl relative">
      <div className="absolute inset-0 z-0">
        <Image
          className="absolute left-0 rounded-3xl top-0 hidden md:block"
          src={"/v-1.svg"}
          width={720}
          height={720}
          alt=""
        />
        <Image
          className="absolute right-0 rounded-3xl top-0 hidden md:block"
          src={"/v-2.svg"}
          width={720}
          height={720}
          alt=""
        />
      </div>
      <div className="px-4 flex flex-col justify-center items-center">
        <Button
          variant="ghost"
          className="text-[#0E0D14] bg-[#FFFFFF] lg:mt-24 md:mt-12 mt-6 mb-6 rounded-full items-center flex justify-center border border-[#E3E3E9] w-[157px]"
        >
          meely 1.0 Public <ChevronRight height={12} />
        </Button>
        <p className="text-center text-2xl font-medium  md:text-6xl ">
          
          The Only <span className="text-[#1521F2]">Fintech Super App </span>{" "}
          <br />
          You’ll Ever Need
        </p>
        <p className="text-[#67666B] text-sm md:text-2xl font-normal py-4 text-center">
          Manage money, make payments, organize your finances, and <br className="md:block hidden" /> access essential tools — all in one secure platform.
        </p>
        <Button className="rounded-full my-5 bg-gradient-to-tl cursor-pointer from-[#13121D] to-[#454062]">
          Get Started
        </Button>
      </div>
      <div className="bg-[#FFF] max-w-[1176px] w-full mx-auto  rounded-3xl flex justify-center items-center">
        <Image src={"/hero.png"} width={1000} height={833} alt="" />
      </div>
    </div>
  );
};

export default Hero;
