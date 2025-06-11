import React from "react";
import MeelyCard from "./meely-card";
import Image from "next/image";
import MeelyButton from "@/shared/meely-button";
import Heading from "@/shared/heading";
import HeadingDetails from "@/shared/heading-details";

const BusinessUse = () => {
  return (
    <div>
      <div className="lg:pt-12 pt-6 ">
        <MeelyButton className="mx-auto" text="For Business Use" />
      </div>
      <Heading text="Run Finances with Confidence" />
      <HeadingDetails
        className="max-w-[605px] mx-auto w-full"
        text="Whether you're a solo founder or a growing team, Meely equips your business with tools to handle finances, operations, and compliance — all in one place."
      />
      <div className="flex justify-center items-center">
        <div className="md:px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 max-w-[1170px]">
            <MeelyCard
            images={
              <div className="relative h-[190px] w-full overflow-hidden">
                <Image
                  className="absolute scale-200 origin-top-left left-8 top-4 rounded-md"
                  src={"/card2/b-1.png"}
                  width={427}
                  height={303}
                  alt=""
                />
              </div>
            }
            content="Schedule and send payroll with confidence — pay contractors or employees on time."
            title="Run Payroll Automatically"
          />
            <MeelyCard
            images={
              <div className="relative h-[190px] w-full overflow-hidden">
                <Image
                  className="absolute scale-200 origin-top-left left-8 top-4 rounded-md"
                  src={"/card2/b-2.png"}
                  width={427}
                  height={303}
                  alt=""
                />
              </div>
            }
            content="Monitor business expenses in real-time and optimize company cash flow."
            title="Track Business Spending"
          />
            <MeelyCard
            images={
              <div className="relative h-[190px] w-full overflow-hidden">
                <Image
                  className="absolute scale-200 origin-top-left left-8 top-4 rounded-md"
                  src={"/card2/b-3.png"}
                  width={427}
                  height={303}
                  alt=""
                />
              </div>
            }
            content="Send invoices and receive customer or vendor payments without delays."
            title="Smart Invoicing & Payouts"
          />
          <MeelyCard
            images={
              <div className="relative h-[190px] overflow-hidden rounded-2xl">
                <Image
                  className="absolute left-4 top-2"
                  src={"/card2/b-4.png"}
                  width={371}
                  height={264}
                  alt=""
                />
              </div>
            }
            content="Reconcile transactions, track income, and export records effortlessly."
            title="Powerful Accounting Tools"
          />
          <MeelyCard
            images={
              <div className="relative h-[190px] overflow-hidden rounded-2xl">
                <Image
                  className="absolute"
                  src={"/card2/b-5.png"}
                  width={371}
                  height={264}
                  alt=""
                />
              </div>
            }
            content="Generate tax-friendly reports to stay compliant and prepared."
            title="Generate Tax-Ready Reports"
          />
          <MeelyCard
            images={
              <div className="relative h-[190px] overflow-hidden rounded-2xl">
                <Image
                  className="absolute  scale-125 origin-top-left"
                  src={"/card2/b-6.png"}
                  width={563}
                  height={401}
                  alt=""
                />
              </div>
            }
            content="Issue and limit spending on employee cards with full control."
            title="Control and Track Team Cards"
          />
          <MeelyCard
            images={
              <div className="relative h-[190px] overflow-hidden rounded-2xl">
                <Image
                  className="absolute  left-2 top-2 scale-125 origin-top-left"
                  src={"/card2/b-7.png"}
                  width={443}
                  height={315}
                  alt=""
                />
              </div>
            }
            content="Accept payments from customers through smart and secure business tools."
            title="Sell with Confidence"
          />
          <MeelyCard
            images={
              <div className="relative h-[190px] overflow-hidden rounded-2xl">
                <Image
                  className="absolute"
                  src={"/card2/b-8.png"}
                  width={377}
                  height={268}
                  alt=""
                />
              </div>
            }
            content="Seamlessly integrate with platforms like QuickBooks, Xero, and Zapier."
            title="Integrate with Your Tools"
          />
          <MeelyCard
            images={
              <div className="relative h-[190px] overflow-hidden rounded-2xl">
                <Image
                  className="absolute scale-200 origin-top-left"
                  src={"/card2/b-9.png"}
                  width={518}
                  height={368}
                  alt=""
                />
              </div>
            }
            content="Optional business insurance through licensed third-party providers."
            title="Protect Your Business Assets"
          />

        </div>
      </div>
    </div>
  );
};

export default BusinessUse;
