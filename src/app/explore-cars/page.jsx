import CarCard from "@/components/CarCards";
import { fetchCars } from "@/lib/cars/data";
import React from "react";

const ExploreCarsPage = async () => {
  const cars = await fetchCars();
  console.log(cars);

  return (
    <div className="px-4 my-6">
      <h2 className="font-bold text-2xl text-center mb-6">All Cars</h2>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars?.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default ExploreCarsPage;
