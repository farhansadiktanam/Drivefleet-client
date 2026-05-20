import { DeleteBooking } from "@/components/DeleteBooking";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log(user.id);

  const res = await fetch(`http://localhost:5000/my-bookings/${user?.id}`);
  const bookings = await res.json();
  console.log(bookings);

  return (
    <div className="max-w-5xl mx-auto px-4 my-8">
      <h2 className="font-bold text-2xl mb-6">My Bookings</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="rounded-2xl overflow-hidden shadow-md border border-default-200 bg-background hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={booking.imageUrl}
                alt={booking.carName}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-3">
              <div>
                <h3 className="font-bold text-lg leading-tight text-orange-500">
                  {booking.carName}
                </h3>
              </div>

              {/* Details row */}
              <div className="flex flex-wrap gap-3 text-sm text-default-600">
                <div className="flex items-center gap-1">
                  <span>Booking Date:</span>
                  <span>
                    {new Date(booking.bookingDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                {booking.duration && (
                  <div className="flex items-center gap-1">
                    <span>⏱</span>
                    <span>{booking.duration}</span>
                  </div>
                )}
              </div>
              <p className="text-default-500 text-sm">
                Booking Id: {booking._id}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-default-100">
                <div>
                  <p className="text-xs text-default-400">Total Price</p>
                  <p className="text-primary font-bold text-lg text-orange-500">
                    ${booking.dailyRentPrice}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <DeleteBooking booking={booking} />
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {bookings.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-default-400">
          <span className="text-5xl mb-4">🧳</span>
          <p className="text-lg font-medium">No bookings yet</p>
          <p className="text-sm">Start exploring destinations!</p>
        </div>
      )}
    </div>
  );
};

export default MyBookingPage;
