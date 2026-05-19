import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative min-h-130 flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&auto=format&fit=crop')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400
            bg-orange-500/10 border border-orange-500/25 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Premium Car Rentals
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-5">
            Find Your <br />
            <span className="text-orange-500">Perfect Ride</span>
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
            Explore our fleet of SUVs, Sedans, Luxury cars and more. Easy
            booking, transparent pricing — no hidden fees.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/cars"
              className="inline-flex items-center justify-center gap-2 bg-orange-500
                hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-full
                transition-all hover:-translate-y-0.5 hover:shadow-lg
                hover:shadow-orange-500/25 text-sm"
            >
              Explore Cars <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cars"
              className="inline-flex items-center justify-center gap-2 border
                border-white/15 hover:border-white/35 text-slate-300 hover:text-white
                font-medium px-8 py-3.5 rounded-full transition-all text-sm"
            >
              View Pricing
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/5">
            {[
              ["500+", "Cars available"],
              ["10K+", "Happy renters"],
              ["4.9★", "Avg rating"],
            ].map(([val, label]) => (
              <div key={label}>
                <div className="text-2xl font-bold text-white">{val}</div>
                <div className="text-slate-500 text-xs mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
