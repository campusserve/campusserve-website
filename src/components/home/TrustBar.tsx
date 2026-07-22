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
            className="group flex items-center gap-3 transition-all duration-300"
          >

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/10 bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">

              <Icon className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />

            </div>

            <span className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
              {item.title}
            </span>

          </div>
        );
      })}

    </div>
  );
}