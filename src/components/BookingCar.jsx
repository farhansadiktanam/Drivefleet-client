"use client";

import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const BookingCar = ({ car }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [bookingDate, setBookingDate] = useState();
  const { _id, carName, imageUrl, dailyRentPrice, pickupLocation } = car;

  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      carId: _id,
      carName,
      dailyRentPrice,
      imageUrl,
      pickupLocation,
      bookingDate: new Date(bookingDate),
    };
    try {
      const res = await fetch("http://localhost:5000/my-bookings", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json();
      toast.success("Booking successfull");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="space-y-4 ">
      <DateField className="w-40" name="date" onChange={setBookingDate}>
        <Label>Booking Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button
        onClick={handleBooking}
        className={
          "button button--md button--tertiary w-30 font-semibold bg-orange-500/80 hover:bg-orange-500 text-white px-2 py-1 rounded-full transition-all"
        }
      >
        Book Now
      </Button>
    </div>
  );
};

export default BookingCar;
