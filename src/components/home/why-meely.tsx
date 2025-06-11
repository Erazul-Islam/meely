import Heading from "@/shared/heading";
import HeadingDetails from "@/shared/heading-details";
import MeelyButton from "@/shared/meely-button";
import Image from "next/image";
import React from "react";
import WhyMeelyText from "./why-meely-text";

const WhyMeely = () => {
  return (
    <div className="px-4 bg-[#F9F9FB] rounded-2xl max-w-[1440px] mx-auto">
      <div className="lg:pt-12 pt-6 ">
        <MeelyButton className="mx-auto" text="Why meely" />
      </div>
      <Heading text="Stay In Control with One Smart Dashboard" />
      <HeadingDetails
        className="max-w-[605px] mx-auto w-full"
        text="Get a complete, real-time view of your personal or business finances — all from a single, intelligent platform. Monitor, track, and act with confidence."
      />
      <div className="flex flex-col justify-center pb-8 items-center lg:flex-row gap-10">
        <div>
          <WhyMeelyText
            content={
              "Stay on top of your income, spending, transfers, and investments with live updates and activity feeds — no more guessing or toggling between apps."
            }
            heading={"Track Everything in Real-Time"}
            img={"/Icon.svg"}
          />
          <WhyMeelyText
            content={
              "Visualize trends in your expenses, top vendors, payment types, and balances to make smarter, data-driven decisions — instantly."
            }
            heading={"Get Insights That Matter"}
            img={"/w-2.svg"}
          />
          <WhyMeelyText
            content={
              "Whether you're budgeting for yourself or managing business expenses, Meely keeps everything organized, separate, and under control."
            }
            heading={"Manage Both Personal & Business"}
            img={"/w-3.svg"}
          />
        </div>
        <Image src={"/Graphics.svg"} width={585} height={674} alt="" />
      </div>
    </div>
  );
};

export default WhyMeely;
