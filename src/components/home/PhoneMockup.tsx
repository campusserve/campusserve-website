import {
  Search,
  UtensilsCrossed,
  ShoppingBag,
  Package,
  House,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const quickActions = [
  {
    title: "Food",
    icon: UtensilsCrossed,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Market",
    icon: ShoppingBag,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Delivery",
    icon: Package,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Hostels",
    icon: House,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Services",
    icon: GraduationCap,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Jobs",
    icon: Briefcase,
    color: "bg-pink-100 text-pink-600",
  },
];

export default function PhoneMockup() {
  return (
    <div className="relative flex justify-center">

      {/* Background Glow */}
      <div className="absolute -inset-6 rounded-[3rem] bg-yellow-300/20 blur-3xl" />

      {/* Phone */}
      <div className="relative w-[320px] overflow-hidden rounded-[42px] border border-gray-200 bg-white shadow-xl">

        {/* Speaker */}
        <div className="mx-auto mt-4 h-2 w-24 rounded-full bg-gray-300" />

        <div className="p-6">

          {/* Greeting */}
          <p className="text-sm text-gray-500">
            Welcome back 👋
          </p>

          <h3 className="mt-1 text-3xl font-bold text-gray-900">
            Paul
          </h3>

          {/* Search */}
          <div className="mt-6 flex items-center rounded-xl bg-gray-100 px-4 py-3">

            <Search className="h-5 w-5 text-gray-400" />

            <span className="ml-3 text-sm text-gray-500">
              Search services...
            </span>

          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-3 gap-4">

            {quickActions.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-gray-50 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                >
                  <item.icon className="h-6 w-6" />
                </div>

                <p className="mt-3 text-sm font-medium text-gray-700">
                  {item.title}
                </p>
              </div>
            ))}

          </div>

          {/* CTA Card */}
          <div className="mt-8 rounded-xl bg-yellow-400 p-5">

            <p className="text-sm font-semibold text-black">
              Become a Rider 🚴
            </p>

            <p className="mt-2 text-xs leading-5 text-black/75">
              Deliver orders around campus and earn money on your own schedule.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}