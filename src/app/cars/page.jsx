import CarCard from "@/components/CarCards";
import { fetchCars } from "@/lib/cars/data";
import { CarFront } from "lucide-react";
import React from "react";

const CarsPage = async () => {
  const cars = await fetchCars();
  console.log(cars);

  return (
    <div className="px-4">
      <h2 className="font-bold text-2xl text-center mb-6">All Cars</h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars?.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarsPage;
