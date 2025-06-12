import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 rounded-2xl py-5 bg-[#F9F9FB]">
      <p className="text-2xl text-center text-[#0E0D14] py-5 md:py-10 md:text-6xl font-medium">
        Get in touch with sales
      </p>
      <div className="bg-[#FAFAFE] border gap-9 max-w-[996px] w-full mx-auto flex lg:flex-row flex-col justify-center border-[#E3E3E9] p-4 rounded-2xl">
        <div className="bg-[#FAFAFE] md:order-1 order-2 shadow-2xl w-full max-w-[510px] py-5 px-5 rounded-2xl">
          <div className="flex gap-4">
            <input
              placeholder="First name"
              className="border w-full rounded-xl px-4 py-3 placeholder:text-[#7F7F8A] border-[#EDEEF4]"
              type="text"
              name=""
              id=""
            />
            <input
              placeholder="Last name"
              className="border w-full rounded-xl px-4 py-3 placeholder:text-[#7F7F8A] border-[#EDEEF4]"
              type="text"
              name=""
              id=""
            />
          </div>
          <div>
            <input
              placeholder="Your professional email address"
              className="border w-full rounded-xl my-4 px-4 py-3 placeholder:text-[#7F7F8A] border-[#EDEEF4]"
              type="text"
              name=""
              id=""
            />
            <select
              className="border w-full rounded-xl px-4 py-3 text-[#7F7F8A] border-[#EDEEF4] "
              defaultValue=""
            >
              <option value="" disabled>
                I want my meeting in English
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <input
              placeholder="Your professional email address"
              className="border w-full rounded-xl mt-4 px-4 py-3 placeholder:text-[#7F7F8A] border-[#EDEEF4]"
              type="text"
              name=""
              id=""
            />
            <textarea
              placeholder="Type your message"
              className="border w-full rounded-xl h-[109px] mt-4 px-4 py-3 placeholder:text-[#7F7F8A] border-[#EDEEF4]"
              name=""
              id=""
            />
            <Button className="rounded-full w-full mt-4 bg-gradient-to-tl cursor-pointer from-[#13121D] to-[#454062]">
            Contact
          </Button>
          </div>
        </div>
        <div className="max-w-[356px] md:order-2 order-1">
          <Image
            className="rounded-2xl w-[356px] h-[400px] text-center"
            src={"/person-1.jpg"}
            width={356}
            height={356}
            alt=""
          />
          <div className="py-4 mt-4 flex gap-4 items-center rounded-2xl px-4 bg-[#FFFFFF]">
            <div className="bg-[#F9F9F9] items-center flex justify-center w-7 h-7 rounded-full">
              <Mail width={17} height={17} className="text-[#1521F2]" />
            </div>
            <div>
              <h1 className="text-[#1A1A1A] font-semibold">Email</h1>
              <h2 className="text-[10px]">contact@meely.com</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
