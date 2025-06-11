import React from "react";

const HeadingDetails: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  return (
    <div className={`${className} text-base md:text-[20px] text-center font-normal py-2 md:py-4 text-[#67666B]`}>
      {text}
    </div>
  );
};

export default HeadingDetails;
