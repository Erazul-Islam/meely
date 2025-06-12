import MeelyCard from "@/components/home/meely-card";
import MeelyButton from "@/shared/meely-button";
import Image from "next/image";
import React from "react";

const MissionVission = () => {
  return (
    <div className="max-w-[1440px] my-12 mx-auto px-4 flex flex-col gap-5 md:flex-row justify-evenly items-center">
      <MeelyCard
        className="max-w-[590px]"
        images={
          <div className="px-4 relative py-4">
            <MeelyButton text="Our Vision" />
            <Image
              className="absolute right-0 rounded-2xl top-0 lg:h-[190px]"
              src={"/about/a-3.svg"}
              width={300}
              height={223}
              alt=""
            />
            <Image
              className="absolute left-1/2 top-8 -translate-x-1/2"
              src={"/about/a-4.svg"}
              width={148}
              height={148}
              alt=""
            />
          </div>
        }
        content="We envision a world where financial tools are unified, accessible, and intuitive — helping everyone from individuals to enterprises make smarter financial choices through secure, intelligent technology."
        title="Empowering people and businesses to master their finances with simplicity and confidence."
      />
      <MeelyCard
        className="max-w-[590px]"
        images={
          <div className="px-4 relative py-4">
            <MeelyButton text="Our Mission" />
            <Image
              className="absolute right-0 rounded-2xl top-0 lg:h-[190px]"
              src={"/about/a-3.svg"}
              width={300}
              height={223}
              alt=""
            />
            <Image
              className="absolute left-0 rounded-2xl top-0 lg:h-[190px]"
              src={"/about/a-5.svg"}
              width={300}
              height={223}
              alt=""
            />
            <Image
              className="absolute left-1/2 top-8 -translate-x-1/2"
              src={"/about/a-6.svg"}
              width={148}
              height={148}
              alt=""
            />
          </div>
        }
        content="Our mission is to unify payments, planning, and growth under one platform — building trust through transparency, innovation, and a relentless focus on user control and data protection."
        title="To simplify finance through one powerful, secure, and connected super app"
      />
    </div>
  );
};

export default MissionVission;
