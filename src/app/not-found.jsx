import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="relative min-h-screen bg-[#0f172a] flex items-center
      justify-center px-4 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(249,115,22,0.08), transparent)," +
            "radial-gradient(ellipse 40% 40% at 80% 30%, rgba(249,115,22,0.05), transparent)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-width-lg max-w-lg w-full">
        {/* Car icon */}
        <div className="text-6xl mb-2 animate-bounce">🚗</div>

        {/* 404 */}
        <h1
          className="text-[120px] font-black leading-none tracking-tighter mb-2"
          style={{
            background: "linear-gradient(135deg, #f97316, #fb923c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>

        {/* Animated road */}
        <div className="relative w-full h-1.5 bg-slate-800 rounded-full my-6 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full w-2/5 rounded-full
            bg-linear-to-r from-transparent via-orange-500 to-transparent
            animate-[road_1.5s_linear_infinite]"
          />
        </div>

        <h2 className="text-xl font-bold text-white mb-3">
          Looks like you took a wrong turn!
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
          The page you are looking for does not exist or has been moved. Lets
          get you back on the right road.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600
              text-white font-semibold px-6 py-3 rounded-full transition-all
              hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/25 text-sm"
          >
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link
            href="/explore-cars"
            className="flex items-center gap-2 border border-white/10
              hover:border-white/25 text-slate-400 hover:text-white font-medium
              px-6 py-3 rounded-full transition-all text-sm"
          >
            Explore Cars <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Quick links */}
        <div
          className="flex flex-wrap items-center justify-center gap-5
          pt-6 border-t border-white/5"
        >
          {[
            { label: "Home", href: "/" },
            { label: "Explore Cars", href: "/explore-cars" },
            { label: "Add Car", href: "/add-car" },
            { label: "My Bookings", href: "/my-bookings" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-slate-600 hover:text-orange-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
