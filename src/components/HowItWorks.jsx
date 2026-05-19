import { Search, LogIn, CalendarCheck, Car } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Browse Fleet",
    desc: "Search and filter cars by type, location, or budget.",
  },
  {
    num: "02",
    icon: LogIn,
    title: "Sign In",
    desc: "Create a free account or sign in with Google instantly.",
  },
  {
    num: "03",
    icon: CalendarCheck,
    title: "Book Instantly",
    desc: "Pick your car, add extras and confirm your booking.",
  },
  {
    num: "04",
    icon: Car,
    title: "Hit the Road",
    desc: "Pick up your car from the listed location and enjoy!",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-slate-100 border-y border-slate-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">
          Simple Process
        </p>
        <h2 className="text-4xl font-black text-slate-900 mb-12">
          How It <span className="text-orange-500">Works</span>
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative bg-white border border-slate-200 p-8 text-center
                first:rounded-l-2xl last:rounded-r-2xl
                sm:nth-2:rounded-none lg:nth-2:rounded-none"
            >
              {/* Number */}
              <div
                className="w-9 h-9 rounded-full bg-orange-50 border border-orange-200
                flex items-center justify-center text-orange-500 font-bold text-sm
                mx-auto mb-4"
              >
                {step.num}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl bg-orange-50 flex items-center
                justify-center mx-auto mb-4"
              >
                <step.icon className="w-6 h-6 text-orange-500" />
              </div>

              <h3 className="text-slate-900 font-bold mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2
                  z-10 w-7 h-7 rounded-full bg-orange-500 shadow-md shadow-orange-200
                  items-center justify-center text-white text-sm font-bold"
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
