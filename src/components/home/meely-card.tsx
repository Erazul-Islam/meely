import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const MeelyCard: React.FC<{
  title: React.ReactNode;
  content: string;
  images: React.ReactNode;
}> = ({ title, content, images }) => {
  return (
    <Card className="w-full pt-1 max-w-[370px] overflow-hidden">
      <div
        className="h-[190px] mx-2 my-2 rounded-xl"
        style={{ backgroundColor: "#F5F8FB" }}
      >
        {images}
      </div>
      <CardHeader>
        <CardTitle className="text-[32px] font-medium text-[#0E0D14]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-medium text-[#67666B]">{content}</p>
      </CardContent>
    </Card>
  );
};

export default MeelyCard;
