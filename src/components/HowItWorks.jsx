import { Search, LogIn, CalendarCheck, Car } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Browse Fleet",
    desc: "Search and filter from our wide selection of cars by type, location, or budget.",
  },
  {
    num: "02",
    icon: LogIn,
    title: "Sign In",
    desc: "Create a free account or log in with Google to unlock booking features.",
  },
  {
    num: "03",
    icon: CalendarCheck,
    title: "Book Instantly",
    desc: "Pick your car, choose extras like a driver, add a note and confirm your booking.",
  },
  {
    num: "04",
    icon: Car,
    title: "Hit the Road",
    desc: "Pick up your vehicle from the listed location and enjoy your journey!",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#080f1a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-2">
            Simple Process
          </p>
          <h2 className="font-display text-5xl text-white tracking-wider">
            HOW IT WORKS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative bg-[#1e293b] border border-white/5 p-8 text-center
              first:rounded-l-2xl last:rounded-r-2xl"
            >
              {/* Step number */}
              <div
                className="w-10 h-10 rounded-full bg-orange-500/15 border border-orange-500/30
                flex items-center justify-center text-orange-400 font-bold mx-auto mb-4"
              >
                {step.num}
              </div>
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center
                justify-center mx-auto mb-4"
              >
                <step.icon className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10
                  w-6 h-6 rounded-full bg-orange-500 items-center justify-center text-white text-xs"
                >
                  ›
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
