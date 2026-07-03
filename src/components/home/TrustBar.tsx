import { ShieldCheck, Store, Smartphone } from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: ShieldCheck,
      text: "Trusted Campus Vendors",
    },
    {
      icon: Store,
      text: "Vendor Registration Open",
    },
    {
      icon: Smartphone,
      text: "Mobile App Coming Soon",
    },
  ];

  return (
    <div className="mt-10 flex flex-wrap gap-6">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.text}
            className="flex items-center gap-2 text-sm font-medium text-gray-600"
          >
            <Icon className="h-5 w-5 text-yellow-500" />
            <span>{item.text}</span>
          </div>
        );
      })}
    </div>
  );
}