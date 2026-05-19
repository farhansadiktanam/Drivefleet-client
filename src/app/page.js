import Banner from "@/components/Banner";
import FeaturedCars from "@/components/FeaturedCars";
import HowItWorks from "@/components/HowItWorks";
import SpecialOffers from "@/components/SpecialOffers";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedCars />
      <HowItWorks />
      <SpecialOffers />
    </div>
  );
}
