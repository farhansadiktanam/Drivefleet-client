import BookingCar from "@/components/BookingCar";
import { DeleteCar } from "@/components/DeleteCar";
import { EditCar } from "@/components/EditCar";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { ArrowBigLeft, ArrowRight, MapPin, Star, Users } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const fetchSingleCar = async (id) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data || {};
};

const CarsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const car = await fetchSingleCar(id);

  return (
    <div className="shadow-lg">
      <Button variant="tertiary" className={"w-30  mt-4"}>
        <Link
          href={"/explore-cars"}
          className="flex items-center gap-1.5 text-sm font-semibold"
        >
          <ArrowBigLeft /> Back
        </Link>
      </Button>

      <div className="flex justify-center my-5 gap-5">
        <div className="glass-hover rounded-2xl overflow-hidden  w-full max-w-sm ">
          <div className=" my-2 flex justify-between">
            <EditCar car={car} />
            <DeleteCar car={car} />
          </div>
          <div className="relative h-48">
            <Image
              src={car.imageUrl}
              alt={car.carName}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1e293b] via-transparent to-transparent" />
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-slate-200 border border-white/10">
                {car.carType}
              </span>
              <span
                className={
                  car.availabilityStatus
                    ? "badge-available"
                    : "badge-unavailable"
                }
              >
                {car.availabilityStatus ? "Available" : "Unavailable"}
              </span>
            </div>
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3 className="font-display text-xl text-black tracking-wide mb-3">
              {car.carName}
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <Users className="w-3.5 h-3.5 text-orange-400" />
                {car.seatCapacity} seats
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                {car.pickupLocation}
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                {car.bookingCount || 0} bookings
              </div>
            </div>
            <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-1">
              {car.description}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div>
                <span className="text-orange-400 font-bold text-xl">
                  ${car.dailyRentPrice}
                </span>
                <span className="text-slate-500 text-sm">/day</span>
              </div>
              <BookingCar car={car} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsDetailsPage;
