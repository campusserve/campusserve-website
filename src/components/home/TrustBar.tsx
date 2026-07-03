import {
  ShieldCheck,
  Store,
  Smartphone,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Trusted Vendors",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
  },
  {
    icon: Store,
    title: "Campus Marketplace",
  },
];

export default function TrustBar() {
  return (
    <div className="flex flex-wrap gap-6 pt-2">

      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100">
              <Icon className="h-5 w-5 text-yellow-700" />
            </div>

            <span className="text-sm font-semibold text-gray-700">
              {item.title}
            </span>
          </div>
        );
      })}

    </div>
  );
}