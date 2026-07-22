import {
  Bell,
  ChevronRight,
  GraduationCap,
  House,
  Package,
  Search,
  ShoppingBag,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";

const actions = [
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
    title: "Hostel",
    icon: House,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Delivery",
    icon: Package,
    color: "bg-green-100 text-green-600",
  },
];

export default function PhoneMockup() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning 👋"
      : hour < 17
      ? "Good Afternoon ☀️"
      : "Good Evening 🌙";

  return (
    <div className="relative flex justify-center xl:justify-end">

      <div className="absolute -inset-14 rounded-full bg-yellow-300/30 blur-3xl" />

      <div className="relative w-[360px] overflow-hidden rounded-[44px] border border-gray-200 bg-white shadow-[0_40px_80px_rgba(0,0,0,0.12)]">

        <div className="flex justify-center pt-4">
          <div className="h-2 w-28 rounded-full bg-gray-300" />
        </div>

        <div className="space-y-6 p-6">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">
                {greeting}
              </p>

            </div>

            <Bell className="h-6 w-6 text-gray-400" />

          </div>

          <div className="rounded-3xl bg-gradient-to-r from-yellow-400 to-amber-400 p-5 text-black">

            <p className="text-sm opacity-80">
              Available Balance
            </p>

            <div className="mt-2 flex items-center justify-between">

              <h3 className="text-3xl font-black">
                ₦12,500
              </h3>

              <Wallet className="h-9 w-9" />

            </div>

          </div>

          <div className="flex items-center rounded-2xl bg-gray-100 px-4 py-3">

            <Search className="h-5 w-5 text-gray-400" />

            <span className="ml-3 text-gray-500">
              Search food, vendors...
            </span>

          </div>

          <div className="grid grid-cols-2 gap-4">

            {actions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-gray-50 p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <item.icon className="h-7 w-7" />
                </div>

                <p className="mt-4 font-semibold text-gray-900">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

          <div className="rounded-3xl border border-gray-200 p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Active Order
                </p>

                <h4 className="mt-1 font-bold text-gray-900">
                  Campus Kitchen
                </h4>

              </div>

              <ChevronRight className="h-5 w-5 text-gray-400" />

            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">

              <div className="h-full w-3/4 rounded-full bg-yellow-400" />

            </div>

            <p className="mt-3 text-sm text-gray-500">
              Estimated arrival • 8 mins
            </p>

          </div>

          <div className="rounded-3xl bg-gray-900 p-5 text-white">

            <div className="flex items-center gap-3">

              <GraduationCap className="h-6 w-6 text-yellow-400" />

              <div>

                <h4 className="font-semibold">
                  Campus Tip
                </h4>

                <p className="text-sm text-gray-300">
                  Save more with exclusive student offers around campus.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}