import Link from "next/link";

const offers = [
  {
    tag: "🔥 Most Popular",
    tagClass: "bg-orange-500/15 text-orange-400 border border-orange-500/30",
    title: "Weekend Getaway",
    desc: "Book any SUV for the weekend and get 20% off. Perfect for family trips.",
    price: "$68",
    oldPrice: "$85",
    featured: true,
  },
  {
    tag: "✨ New",
    tagClass: "bg-green-500/12 text-green-400 border border-green-500/30",
    title: "City Cruiser",
    desc: "Rent any Sedan or Hatchback for 3+ days and enjoy a flat daily rate.",
    price: "$35",
    oldPrice: "$45",
    featured: false,
  },
  {
    tag: "💎 Limited",
    tagClass: "bg-purple-500/12 text-purple-400 border border-purple-500/30",
    title: "Luxury Experience",
    desc: "First-time renters get 15% off any luxury vehicle. One use only.",
    price: "$170",
    oldPrice: "$200",
    featured: false,
  },
];

export default function SpecialOffers() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-2">
          Limited Time
        </p>
        <h2 className="font-display text-5xl text-white tracking-wider">
          SPECIAL OFFERS
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {offers.map((offer) => (
          <div
            key={offer.title}
            className={`relative rounded-2xl p-6 overflow-hidden border transition-all hover:-translate-y-1
              ${
                offer.featured
                  ? "bg-[#1e293b] border-orange-500/40 shadow-lg shadow-orange-500/5"
                  : "bg-[#1e293b] border-white/5"
              }`}
          >
            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-orange-500/5 -translate-y-1/2 translate-x-1/2" />

            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${offer.tagClass}`}
            >
              {offer.tag}
            </span>
            <h3 className="text-white font-semibold text-lg mb-2">
              {offer.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              {offer.desc}
            </p>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-display text-3xl text-orange-400 tracking-wider">
                {offer.price}
              </span>
              <span className="text-slate-500 text-sm line-through">
                {offer.oldPrice}/day
              </span>
            </div>

            <Link
              href="/cars"
              className="block w-full text-center py-2.5 rounded-full border border-orange-500/40
                bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white
                text-sm font-semibold transition-all"
            >
              Claim Offer
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
