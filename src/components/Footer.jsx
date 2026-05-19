import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080f1a] border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl text-white tracking-wider">
                Drive<span className="text-orange-500">Fleet</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-xs">
              Premium car rentals for every journey. Explore our fleet and hit
              the road in style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { l: "Home", h: "/" },
                { l: "Explore Cars", h: "/cars" },
                { l: "Add Car", h: "/add-car" },
                { l: "My Bookings", h: "/my-bookings" },
                { l: "My Cars", h: "/my-cars" },
              ].map((item) => (
                <li key={item.h}>
                  <Link
                    href={item.h}
                    className="text-sm text-slate-500 hover:text-orange-400 transition-colors"
                  >
                    {item.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Types */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Car Types
            </h4>
            <ul className="space-y-2.5">
              {[
                "SUV",
                "Sedan",
                "Hatchback",
                "Luxury",
                "Minivan",
                "Pickup Truck",
              ].map((t) => (
                <li key={t}>
                  <Link
                    href={`/cars?type=${t}`}
                    className="text-sm text-slate-500 hover:text-orange-400 transition-colors"
                  >
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-500">
                hello@drivefleet.com
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-500">
                +1 (555) 987-6543
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-500">
                456 Fleet Ave, Los Angeles, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} DriveFleet. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link
              href="/terms"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
