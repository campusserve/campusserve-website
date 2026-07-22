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
  },
  {
    title: "Market",
    icon: ShoppingBag,
  },
  {
    title: "Hostel",
    icon: House,
  },
  {
    title: "Delivery",
    icon: Package,
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
    <div className="relative flex justify-center">

      {/* Background Glow */}
      <div className="absolute -inset-12 rounded-full bg-primary/20 blur-3xl" />

      {/* Phone */}
      <div className="relative w-[360px] overflow-hidden rounded-[44px] border border-border bg-white shadow-[0_45px_90px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_55px_100px_rgba(0,0,0,0.18)]">

        {/* Dynamic Island */}
        <div className="flex justify-center pt-4">
          <div className="h-2 w-28 rounded-full bg-gray-300" />
        </div>

        <div className="space-y-6 p-6">

          {/* Greeting */}
          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-muted-foreground">
                {greeting}
              </p>

            </div>

            <Bell className="h-6 w-6 text-muted-foreground" />

          </div>

          {/* Wallet Card */}
          <div className="rounded-3xl bg-gradient-to-r from-primary to-[#E67E0E] p-5 text-black">

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

          {/* Search */}
          <div className="flex items-center rounded-2xl bg-gray-100 px-4 py-3">

            <Search className="h-5 w-5 text-muted-foreground" />

            <span className="ml-3 text-muted-foreground">
              Search food, vendors...
            </span>

          </div>

          {/* Services */}
          <div className="grid grid-cols-2 gap-4">

            {actions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">

                  <item.icon className="h-7 w-7 text-primary" />

                </div>

                <p className="mt-4 font-semibold text-foreground">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

          {/* Active Order */}
          <div className="rounded-3xl border border-border p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-muted-foreground">
                  Active Order
                </p>

                <h4 className="mt-1 font-bold text-foreground">
                  Campus Kitchen
                </h4>

              </div>

              <ChevronRight className="h-5 w-5 text-muted-foreground" />

            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-200">

              <div className="h-full w-3/4 rounded-full bg-primary" />

            </div>

            <p className="mt-3 text-sm text-muted-foreground">
              Estimated arrival • 8 mins
            </p>

          </div>

          {/* Tip Card */}
          <div className="rounded-3xl bg-gray-900 p-5 text-white">

            <div className="flex items-center gap-3">

              <GraduationCap className="h-6 w-6 text-primary" />

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