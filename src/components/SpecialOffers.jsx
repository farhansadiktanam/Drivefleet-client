import Link from "next/link";

const offers = [
  {
    tag: "🔥 Most Popular",
    tagClass: "bg-orange-50 text-orange-500 border border-orange-200",
    title: "Weekend Getaway",
    desc: "Book any SUV for the weekend and get 20% off. Perfect for family trips.",
    price: "$68",
    oldPrice: "$85",
    featured: true,
  },
  {
    tag: "✨ New",
    tagClass: "bg-green-50 text-green-600 border border-green-200",
    title: "City Cruiser",
    desc: "Rent any Sedan or Hatchback for 3+ days and get a flat daily rate.",
    price: "$35",
    oldPrice: "$45",
    featured: false,
  },
  {
    tag: "💎 Limited",
    tagClass: "bg-purple-50 text-purple-600 border border-purple-200",
    title: "Luxury Experience",
    desc: "First-time renters get 15% off any luxury vehicle booking. One use only.",
    price: "$170",
    oldPrice: "$200",
    featured: false,
  },
];

export default function SpecialOffers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">
          Limited Time
        </p>
        <h2 className="text-4xl font-black text-slate-900 mb-12">
          Special <span className="text-orange-500">Offers</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`relative rounded-2xl p-6 overflow-hidden border
                transition-all hover:-translate-y-1 hover:shadow-xl
                ${
                  offer.featured
                    ? "bg-linear-to-br from-orange-50 to-white border-orange-200 shadow-md shadow-orange-100"
                    : "bg-white border-slate-200 hover:shadow-slate-100"
                }`}
            >
              {/* Corner decoration */}
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-full
                bg-orange-500/5 -translate-y-1/2 translate-x-1/2"
              />

              <span
                className={`inline-block text-xs font-semibold px-3 py-1
                rounded-full mb-4 ${offer.tagClass}`}
              >
                {offer.tag}
              </span>

              <h3 className="text-slate-900 font-bold text-lg mb-2">
                {offer.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {offer.desc}
              </p>

              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-3xl font-black text-orange-500">
                  {offer.price}
                </span>
                <span className="text-slate-400 text-sm line-through">
                  {offer.oldPrice}/day
                </span>
              </div>

              <Link
                href="/cars"
                className="block w-full text-center py-2.5 rounded-full border
                  border-orange-500 text-orange-500 hover:bg-orange-500
                  hover:text-white text-sm font-semibold transition-all"
              >
                Claim Offer
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
