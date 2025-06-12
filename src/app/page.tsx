import BusinessUse from "@/components/home/business-use";
import FaqSection from "@/components/home/faq-section";
import Hero from "@/components/home/hero";
import PersonalFinance from "@/components/home/personal-finance";
import Review from "@/components/home/review";
import WhyMeely from "@/components/home/why-meely";

export default function Home() {
  return (
    <div>
      <Hero />
      <PersonalFinance />
      <WhyMeely />
      <BusinessUse/>
      <Review/>
      <FaqSection/>
    </div>
  );
}
