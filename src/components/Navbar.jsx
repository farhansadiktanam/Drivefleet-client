"use client";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  // const { data: session } = authClient.useSession();
  // const user = session?.user;

  // const handleSignOut = async () => {
  //   await authClient.signOut();
  // };

  return (
    <nav className="flex justify-between p-4 shadow-lg">
      <h2 className="font-bold text-xl">
        Drive
        <span className="text-xl font-black tracking-tighter text-orange-500">
          Fleet
        </span>
      </h2>
      <ul className="flex gap-3 ">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/explore-cars"}>Explore Cars</Link>
        </li>
        <li>
          <Link href={"/add-car"}>Add Car</Link>
        </li>
        <li>
          <Link href={"/my-bookings"}> My Bookings</Link>
        </li>
      </ul>

      <ul className="flex gap-3 items-center ">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <Button
            variant="danger"
            className={"rounded-sm"}
            // onClick={handleSignOut}
          >
            Logout
          </Button>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/signup"}>Sign Up</Link>
        </li>{" "}
      </ul>
    </nav>
  );
};

export default Navbar;
