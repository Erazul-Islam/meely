import Heading from "@/shared/heading";
import HeadingDetails from "@/shared/heading-details";
import { ChevronRight } from "lucide-react";
import React from "react";
import ReviewCard from "./review-card";

const Review = () => {
  return (
    <div className="py-4 px-4 max-w-[1440px] mx-auto">
      <div className="bg-[#090B16] px-4 py-4 rounded-2xl ">
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
        <div className="flex justify-center items-center">
          <div className="md:px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 md:gap-10">
            <ReviewCard
              user="John Allendane"
              desig="Creative manager"
              star={"4.8"}
              content={
                "I’ve tried so many finance apps, but Meely is the only one that actually replaced all of them. I use it daily to manage my budget, track my spending, and move money between accounts. It’s simple, intuitive, and makes personal finance feel like less of a chore"
              }
              img={"/users/u-1.png"}
            />
            <ReviewCard
              user="Macker Elion"
              desig="Marketer"
              star={"4.8"}
              content={
                "I started using Meely Pay to send rent to my roommate and it’s been incredibly smooth. Transfers are fast, and I always know where my money is going. Plus, I love that I can use the same app to track my bills and keep an eye on expenses."
              }
              img={"/users/u-2.jpg"}
            />
            <ReviewCard
              user="Kiem Nakos"
              desig="Web Developer @Jafsor"
              star={"4.8"}
              content={
                "Running a small business means wearing a lot of hats — Meely helps me wear fewer. I manage team payroll, business cards, and vendor payments all from one clean dashboard. It’s saved me hours each week and helped me stay on top of cash flow without hiring help."
              }
              img={"/users/u-3.jpg"}
            />
            <ReviewCard
              user="Lisa Batitto"
              desig="Product Designer  "
              star={"4.7"}
              content={
                "As a freelancer, I need to keep my personal and business finances separate — and Meely does that beautifully. I can switch views, tag income, track expenses, and even set aside tax savings. It’s like having a financial assistant that actually understands how I work."
              }
              img={"/users/u-4.png"}
            />
            <ReviewCard
              user="Carlos Jion"
              desig="Product Designer  "
              star={"4.7"}
              content={
                "Meely made crypto feel way less intimidating. I can browse real-time prices, trade within the app, and keep it all separate from my day-to-day budget. It’s awesome having one place for traditional and digital finance without needing a whole bunch of apps"
              }
              img={"/users/u-5.jpg"}
            />
            <ReviewCard
              user="James Williams"
              desig="Head of Design"
              star={"4.7"}
              content={
                "I used to feel overwhelmed trying to understand where my money was going each month. Meely changed that. Now I can see detailed insights across all my accounts in one place. It helps me make smarter financial decisions and feel more in control every single day."
              }
              img={"/users/u-6.jpg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
