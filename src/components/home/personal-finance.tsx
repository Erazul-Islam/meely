import Heading from "@/shared/heading";
import HeadingDetails from "@/shared/heading-details";
import MeelyButton from "@/shared/meely-button";
import React from "react";
import MeelyCard from "./meely-card";
import Image from "next/image";

const PersonalFinance = () => {
  return (
    <div className="bg-[url('/bg.png')] px-4 md:my-10 my-5 bg-no-repeat">
      <div className="lg:pt-12 pt-6 ">
        <MeelyButton className="mx-auto" text="For Personal Finance" />
      </div>
      <Heading text="Smarter Personal Finance" />
      <HeadingDetails
        className="max-w-[605px] mx-auto w-full"
        text="Meely gives individuals full visibility and control over everyday money management — from spending to saving and investing, all in one secure app."
      />
      <div className="flex justify-center items-center">
        <div className="md:px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 max-w-[1170px]">
          <MeelyCard
            images={
              <div className="relative">
                <Image
                  className="absolute  top-4 right-2 z-10"
                  src={"/card1/c-1.png"}
                  width={182}
                  height={102}
                  alt=""
                />
                <Image
                  className="absolute rounded-md top-12 left-2 md:left-6 z-0"
                  src={"/card1/c-2.png"}
                  width={293}
                  height={130}
                  alt=""
                />
              </div>
            }
            content="Instantly see where your money is going and how you're spending over time."
            title="Smart Money Tracking"
          />
          <MeelyCard
            images={
              <div className="relative   h-[190px] w-full overflow-hidden">
                <Image
                  className="absolute border border-[#E9E9E9] top-12 left-3  rounded-[10px] z-10"
                  src={"/card1/c-4.png"}
                  width={112}
                  height={62}
                  alt=""
                />
                <Image
                  className="absolute border border-[#E9E9E9] bottom-4 left-3  rounded-[10px] z-10"
                  src={"/card1/c-6.png"}
                  width={97}
                  height={54}
                  alt=""
                />
                <Image
                  className="absolute rounded-md top-8 right-2  z-0"
                  src={"/card1/c-3.png"}
                  width={279}
                  height={198}
                  alt=""
                />
              </div>
            }
            content="Easily transfer funds to friends, family, or anyone — anytime, anywhere."
            title={
              <div>
                Send Money <br /> Instantly
              </div>
            }
          />
          <MeelyCard
            images={
              <div className="relative h-[190px] w-full overflow-hidden">
                <Image
                  className="absolute  top-8 right-2 z-0"
                  src={"/card1/c-7.png"}
                  width={266}
                  height={189}
                  alt=""
                />
                <Image
                  className="absolute rounded-md top-4 left-4 md:left-6 z-10"
                  src={"/card1/c-8.png"}
                  width={229}
                  height={83}
                  alt=""
                />
              </div>
            }
            content="Categorize your expenses and keep your spending aligned with your goals."
            title="Stay on Budget with meely"
          />
          <MeelyCard
            images={
              <div className="relative h-[190px] w-full overflow-hidden">
                <Image
                  className="absolute  top-2 right-2 z-0"
                  src={"/card1/c-10.png"}
                  width={247}
                  height={189}
                  alt=""
                />
                <Image
                  className="absolute rounded-md top-5 left-6 z-10"
                  src={"/card1/c-9.png"}
                  width={229}
                  height={83}
                  alt=""
                />
              </div>
            }
            content="Automatically charge your customer’s payment method on file, or email them the invoice "
            title="Send an invoice your customers"
          />
          <MeelyCard
            images={
              <div className="relative h-[190px] w-full overflow-hidden">
                <Image
                  className="absolute scale-200 origin-top-left left-14 top-4 rounded-md"
                  src={"/card1/c-11.png"}
                  width={427}
                  height={303}
                  alt=""
                />
              </div>
            }
            content="Never lose track of recurring payments — cancel or adjust with ease."
            title="Simplify Subscriptions"
          />
          <MeelyCard
            images={
              <div className="relative h-[190px] w-full overflow-hidden">
                <Image
                  className="absolute scale-125 origin-top-left left-8 top-4 rounded-md"
                  src={"/card1/c-12.png"}
                  width={427}
                  height={303}
                  alt=""
                />
              </div>
            }
            content="Get cashbacks, perks, and exclusive rewards every time you use Meely."
            title="Earn as You Spend with meely reward"
          />
          <MeelyCard
            images={
              <div className="relative h-[190px] w-full rounded-2xl overflow-hidden">
                <Image
                  className="absolute scale-200 origin-top-left"
                  src={"/card1/c-13.png"}
                  width={577}
                  height={411}
                  alt=""
                />
              </div>
            }
            content="Buy and sell digital assets directly within Meely’s secure platform. (Offered via partner)"
            title={
              <div>
                Invest with <br /> meely
              </div>
            }
          />
          <MeelyCard
            images={
              <div className="relative h-[190px] w-full overflow-hidden">
                <Image
                  className="absolute scale-200 origin-top-left left-14 top-4 rounded-md"
                  src={"/card1/c-14.png"}
                  width={427}
                  height={303}
                  alt=""
                />
              </div>
            }
            content="Add personal insurance for peace of mind — from trusted providers. (Third-party)"
            title={
              <div>
                Protect What <br /> Matters
              </div>
            }
          />
          <MeelyCard
            images={
              <div className="relative h-[190px] w-full rounded-2xl overflow-hidden">
                <Image
                  className="absolute scale-150 origin-top-left"
                  src={"/card1/c-15.png"}
                  width={427}
                  height={303}
                  alt=""
                />
              </div>
            }
            content="Understand your spending and income trends with simple, real-time visuals that help you stay in control."
            title="Insights You Can Trust"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalFinance;
