import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

const MeelyButton: React.FC<{ text: string; className?: string }> = ({
  text,
  className
}) => {
  return (
    <Button
      variant="ghost"
      className={`text-[#0E0D14] ${className} bg-[#FFFFFF]  rounded-full items-center flex justify-center border border-[#E3E3E9] px-4 cursor-pointer`}
    >
      {text} <ChevronRight height={12} />
    </Button>
  );
};

export default MeelyButton;
