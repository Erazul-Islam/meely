import Image from "next/image";
import React from "react";

const WhyMeelyText: React.FC<{
  heading: string;
  content: string;
  img: string;
}> = ({ heading, content, img }) => {
  return (
    <div className="max-w-[448px] mt-8">
      <div
        className=" w-12 flex justify-center items-center h-12 rounded-xl shadow-inner"
        style={{
          background:
            "linear-gradient(180deg, #D2D5F4 0%, rgba(216, 218, 240, 0.27) 100%)",
          boxShadow: "inset 0px 2px 4px 0px #00000029",
        }}
      >
        <Image src={img} width={30} height={30} alt="" />
      </div>
      <h1 className="py-4 text-xl font-medium md:text-3xl text-[#0E0D14]">
        {heading}
      </h1>
      <p className="text-[#67666B]">{content}</p>
    </div>
  );
};

export default WhyMeelyText;
