import { fetchFeaturedCars } from "@/lib/cars/data";
import CarCard from "./CarCards";

export default async function FeaturedCars() {
  const cars = await fetchFeaturedCars();

  return (
    <div className="px-4 my-10">
      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars?.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
}
