import {
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Trusted Vendors",
    description: "Verified businesses serving students.",
  },
  {
    icon: Truck,
    title: "Fast Campus Delivery",
    description: "Quick deliveries within campus communities.",
  },
  {
    icon: Users,
    title: "Built for Students",
    description: "Designed around everyday campus life.",
  },
];

export default function TrustBar() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="flex items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
            <item.icon className="h-6 w-6 text-yellow-600" />
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              {item.title}
            </h4>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}