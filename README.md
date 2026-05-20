# 🚗 DriveFleet — Premium Car Rental Platform

A full-stack car rental platform where users can explore available vehicles, view car details, book rentals, and manage their listings with secure authentication and a modern UI.

## 🔗 Live Site

**[https://drivefleet.vercel.app](https://drivefleet.vercel.app)** ← replace with your deployed URL

## ✨ Features

- 🔐 **Secure Authentication** — Email/password and Google OAuth login powered by Firebase, with JWT stored in HTTPOnly cookies to protect all private routes and APIs
- 🚘 **Full Car Management** — Users can add, update, and delete their own car listings with full CRUD operations, including image upload via imgbb/postimages
- 📅 **Booking System** — Logged-in users can book any available car, choose extras like a driver, add special notes, and manage all their bookings from a dedicated dashboard
- 🔍 **Search & Filter** — Real-time search by car name using MongoDB `$regex` operator and filter by car type to quickly find the perfect vehicle
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop with a clean recruiter-friendly dark UI built with Tailwind CSS and HeroUI v3
- 🛡️ **JWT Protected APIs** — All private routes and API endpoints are secured with JSON Web Tokens verified through Express middleware on the server
- 📊 **Booking Count Tracker** — Each car tracks how many times it has been booked using MongoDB `$inc` operator, displayed on every car card

## 🛠️ Tech Stack

| Layer            | Technology                      |
| ---------------- | ------------------------------- |
| Frontend         | Next.js 15, React 19            |
| Styling          | Tailwind CSS v3, HeroUI v3      |
| Auth             | Firebase (Email + Google OAuth) |
| Backend          | Node.js, Express.js             |
| Database         | MongoDB Atlas                   |
| Security         | JWT, HTTPOnly Cookies           |
| Animation        | Framer Motion                   |
| Icons            | Lucide React                    |
| Hosting (Client) | Vercel                          |
| Hosting (Server) | Render                          |
