import { LucideIcon, ArrowUpRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-yellow-300 hover:shadow-2xl">

      <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-yellow-100 opacity-0 transition-all duration-500 group-hover:opacity-100" />

      <div className="relative">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400">
          <Icon className="h-8 w-8 text-yellow-700 group-hover:text-black" />
        </div>

        <h3 className="mt-8 text-2xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          {description}
        </p>

        <div className="mt-8 flex items-center font-semibold text-yellow-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
          Learn More
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </div>

      </div>

    </div>
  );
}