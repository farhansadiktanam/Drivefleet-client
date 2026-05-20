"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    redirect("/");
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-lg">
      <h2 className="font-bold text-xl">
        Drive
        <span className="text-xl font-black tracking-tighter text-orange-500">
          Fleet
        </span>
      </h2>
      <ul className="flex gap-3 font-semibold">
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

      <ul className="flex gap-3 items-center font-semibold">
        {user && (
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        )}
        {user ? (
          <>
            {" "}
            <Avatar>
              <Avatar.Image alt="John Doe" src={user?.image} />
              <Avatar.Fallback>
                {user?.name.slice(0, 2).toUpperCase()}
              </Avatar.Fallback>
            </Avatar>
          </>
        ) : (
          <>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/register"}>Sign Up</Link>
            </li>{" "}
          </>
        )}
        {user && (
          <li>
            <Button
              variant="danger"
              className={"rounded-sm"}
              onClick={handleSignOut}
            >
              Logout
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
