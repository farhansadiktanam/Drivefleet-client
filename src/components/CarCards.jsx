import Image from "next/image";
import Link from "next/link";
import { Users, MapPin, Star, ArrowRight, Fuel } from "lucide-react";

export default function CarCard({ car }) {
  return (
    <div className="glass-hover rounded-2xl overflow-hidden shadow-lg ">
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
              car.availabilityStatus ? "badge-available" : "badge-unavailable"
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
          {/* <div className="flex items-center gap-1.5 text-slate-400 text-sm">
            <Users className="w-3.5 h-3.5 text-orange-400" />
            {car.seatCapacity} seats
          </div> */}
          <div className="flex items-center gap-1.5 text-slate-400 text-sm">
            <MapPin className="w-3.5 h-3.5 text-orange-400" />
            {car.pickupLocation}
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 text-sm">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            {car.bookingCount || 0} bookings
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          {/* <div>
            <span className="text-orange-400 font-bold text-xl">
              ${car.dailyRentPrice}
            </span>
            <span className="text-slate-500 text-sm">/day</span>
          </div> */}
          <Link
            href={`/explore-cars/${car._id}`}
            className="flex items-center gap-1.5 text-sm font-semibold bg-orange-500/10 hover:bg-orange-500 text-orange-400 hover:text-white px-4 py-2 rounded-full transition-all group"
          >
            View Details{" "}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
