import React from "react";
import Faq from "./faq";

const FaqSection = () => {
  return (
    <div className="lg:mt-28 md:mt-14 px-4 mt-7">
      <div className="flex justify-center items-center">
        <button className="bg-[#F2F4F7] px-12 text-[#475467] py-2 italic rounded-full border-[#EFFEFC]">
          FAQ
        </button>
      </div>

      <h1 className="text-center font-medium py-6 text-2xl md:text-5xl">
        Frequently Ask Questions
      </h1>
      <Faq />
    </div>
  );
};

export default FaqSection;
