import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const SuperApp = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <div className="bg-[#1521F2] relative  pt-12 lg:pt-24 lg:pb-48 pb-32 px-4 mt-8 lg:mt-16 rounded-2xl">
        <h1 className="text-center text-2xl text-white font-medium md:text-5xl">
          One Super App. Endless <br /> Possibilities.
        </h1>
        <p className="text-center text-white py-4">
          Join Meely and take control of your money and business today.
        </p>
        <div className="pb-4 flex justify-center items-center">
          <Button className="rounded-full bg-gradient-to-tl cursor-pointer from-[#13121D] to-[#454062]">
            Start Now
          </Button>
        </div>
        <p className="w-2 h-2 absolute left-1/6  top-0 rounded-b-3xl bg-[#625BF4]"></p>
        <Image
          className="absolute left-6 top-20 lg:left-24 lg:top-24"
          src={"/super/Visa card.svg"}
          width={42}
          height={42}
          alt=""
        />
        <Image
          className="absolute left-6 lg:left-24"
          src={"/super/s-2.svg"}
          width={60}
          height={60}
          alt=""
        />
        <p className="w-3 h-3 absolute left-24 lg:left-48 bottom-12 lg:bottom-24 rounded-full bg-[#E8EAFF]"></p>
        <Image
          className="absolute lg:left-64 left-32 bottom-6 w-[45px] h-[45px] lg:w-[93px] lg:h-[93px]"
          src="/super/s-3.svg"
          width={0}
          height={0}
          alt=""
          priority
        />
        <Image
          className="absolute  top-2 left-1/2  lg:top-8"
          src={"/super/s-4.svg"}
          width={42}
          height={42}
          alt=""
        />
        <Image
          className="absolute right-1/3 bottom-0 w-[30px] h-[30px] lg:w-[63px] lg:h-[63px]"
          src="/super/s-5.svg"
          width={0}
          height={0}
          alt=""
          priority
        />
        <Image
          className="absolute right-1/6 bottom-16 w-[47px] h-[47px] lg:w-[94px] lg:h-[94px]"
          src="/super/s-6.svg"
          width={0}
          height={0}
          alt=""
          priority
        />
        <Image
          className="absolute right-1/6 top-24 w-[27px] h-[27px]"
          src="/super/s-7.svg"
          width={0}
          height={0}
          alt=""
          priority
        />
        <p className="w-3 h-3 absolute right-12 lg:right-48 top-6 rounded-full bg-[#E8EAFF]"></p>
        <Image
          className="absolute right-1/12 top-1/2 lg:w-[60px] lg:h-[60px] w-[30px] h-[30px]"
          src="/super/s-8.svg"
          width={0}
          height={0}
          alt=""
          priority
        />
      </div>
    </div>
  );
};

export default SuperApp;
