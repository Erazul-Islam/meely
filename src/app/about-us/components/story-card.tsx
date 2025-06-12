import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type YearCardProps = {
  year: string;
  title: string;
  content: string;
  className?:string
};

const StoryCard = ({ year, title, content,className }: YearCardProps) => {
  return (
    <Card
      className={`bg-white ${className} border max-w-[450px] border-[#E9E9F5] rounded-xl shadow-[0px_6px_20px_-6px_#3D3C640F,0px_30px_50px_-14px_#3D3C6414] p-6`}
    >
      <CardHeader className="p-0 mb-4">
        <div className="flex gap-3 items-center">
            <p className="bg-[#625BF4] w-[65px] h-[1px]"></p>
            <span className="text-[#625BF4] text-xl font-medium ">{year}</span>
        </div>
        
        <CardTitle className="text-xl  font-semibold mt-1">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 text-sm text-gray-700">
        {content}
      </CardContent>
    </Card>
  );
};

export default StoryCard;
