import Heading from "@/shared/heading";
import HeadingDetails from "@/shared/heading-details";
import { ChevronRight } from "lucide-react";
import React from "react";
import ReviewCard from "./review-card";

const Review = () => {
  return (
    <div className="bg-[#090B16] rounded-2xl px-4 max-w-[1440px] mx-auto">
      <div className="lg:pt-12 flex justify-center items-center pt-6 ">
        <button className="text-[#FFF] ${className} bg-[#13151F] py-1  rounded-full items-center flex justify-center border border-[#E3E3E9] px-4 cursor-pointer">
          Review <ChevronRight height={12} />
        </button>
      </div>
      <Heading className="text-white" text="Loved user around the world" />
      <HeadingDetails
        className="max-w-[605px] mx-auto text-[#707179] w-full"
        text="Real stories from people using Meely to simplify personal and business finance — and finally take control of their money, all in one place."
      />
      <div className="md:px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5">
        <ReviewCard
          user="John Allendane"
          desig="Creative manager"
          star={"4.8"}
          content={
            "I’ve tried so many finance apps, but Meely is the only one that actually replaced all of them. I use it daily to manage my budget, track my spending, and move money between accounts. It’s simple, intuitive, and makes personal finance feel like less of a chore"
          }
          img={"/users/u-1.png"}
        />
      </div>
    </div>
  );
};

export default Review;
