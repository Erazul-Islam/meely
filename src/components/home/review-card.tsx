"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const ReviewCard: React.FC<{
  star: string;
  content: string;
  img: string;
  user: string;
  desig: string;
}> = ({ star, content, img, user, desig }) => {
  return (
    <Card className="bg-[#121521] border-[#21232D] rounded-md text-white w-full max-w-[370px]">
      <CardContent>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className="w-4 h-4 text-[#FFDF6C] fill-yellow-400"
            />
          ))}
          <span className="ml-2 text-sm text-[#8D90A1]">{star}</span>
        </div>
        <p className="text-sm mb-6 text-[#7F7F8A]">{content}</p>
        <div className="flex items-center gap-3">
          <Image
            src={img}
            alt="User"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <h4 className="font-medium text-white text-sm">{user}</h4>
            <p className="text-[#444857] text-xs">{desig}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
