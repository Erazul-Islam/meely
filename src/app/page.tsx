import BusinessUse from "@/components/home/business-use";
import Hero from "@/components/home/hero";
import PersonalFinance from "@/components/home/personal-finance";
import WhyMeely from "@/components/home/why-meely";

export default function Home() {
  return (
    <div>
      <Hero />
      <PersonalFinance />
      <WhyMeely />
      <BusinessUse/>
    </div>
  );
}
