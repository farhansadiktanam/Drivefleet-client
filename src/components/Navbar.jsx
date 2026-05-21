"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    redirect("/");
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-lg relative">
      {/* Logo */}
      <h2 className="font-bold text-xl">
        Drive
        <span className="text-xl font-black tracking-tighter text-orange-500">
          Fleet
        </span>
      </h2>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-3 font-semibold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/explore-cars">Explore Cars</Link>
        </li>
        <li>
          <Link href="/add-car">Add Car</Link>
        </li>
        <li>
          <Link href="/my-bookings">My Bookings</Link>
        </li>
      </ul>

      {/* Desktop Auth */}
      <ul className="hidden md:flex gap-3 items-center font-semibold">
        {user && (
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        )}
        {user ? (
          <>
            <Avatar>
              <Avatar.Image alt={user?.name} src={user?.image} />
              <Avatar.Fallback>
                {user?.name.slice(0, 2).toUpperCase()}
              </Avatar.Fallback>
            </Avatar>
            <li>
              <Button
                variant="danger"
                className="rounded-sm"
                onClick={handleSignOut}
              >
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Sign Up</Link>
            </li>
          </>
        )}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col gap-1 p-4 font-semibold md:hidden">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="py-2 border-b"
          >
            Home
          </Link>
          <Link
            href="/explore-cars"
            onClick={() => setMenuOpen(false)}
            className="py-2 border-b"
          >
            Explore Cars
          </Link>
          <Link
            href="/add-car"
            onClick={() => setMenuOpen(false)}
            className="py-2 border-b"
          >
            Add Car
          </Link>
          <Link
            href="/my-bookings"
            onClick={() => setMenuOpen(false)}
            className="py-2 border-b"
          >
            My Bookings
          </Link>

          {user ? (
            <>
              <Link
                href="/profile"
                onClick={() => setMenuOpen(false)}
                className="py-2 border-b"
              >
                Profile
              </Link>
              <div className="flex items-center gap-3 py-2 border-b">
                <Avatar>
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>
                    {user?.name.slice(0, 2).toUpperCase()}
                  </Avatar.Fallback>
                </Avatar>
                <span>{user?.name}</span>
              </div>
              <Button
                variant="danger"
                className="rounded-sm mt-2 w-full"
                onClick={() => {
                  handleSignOut();
                  setMenuOpen(false);
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <div className="flex gap-3 mt-2">
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                <Button variant="bordered" className="rounded-sm">
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setMenuOpen(false)}>
                <Button className="rounded-sm">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
