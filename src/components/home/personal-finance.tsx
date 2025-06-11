import Heading from "@/shared/heading";
import HeadingDetails from "@/shared/heading-details";
import MeelyButton from "@/shared/meely-button";
import React from "react";

const PersonalFinance = () => {
  return (
    <div className="bg-[url('/bg.png')] px-4 h-screen md:my-10 my-5 bg-no-repeat">
      <div className="lg:pt-12 pt-6 ">
        <MeelyButton className="mx-auto" text="For Personal Finance" />
      </div>
      <Heading text="Smarter Personal Finance" />
      <HeadingDetails
        className="max-w-[605px] mx-auto w-full"
        text="Meely gives individuals full visibility and control over everyday money management — from spending to saving and investing, all in one secure app."
      />
    </div>
  );
};

export default PersonalFinance;
