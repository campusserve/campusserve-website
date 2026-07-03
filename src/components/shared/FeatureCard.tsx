import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <Card className="group rounded-3xl border-0 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <CardContent className="p-8">

        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 transition group-hover:bg-yellow-400">
          <Icon className="h-7 w-7 text-yellow-600 group-hover:text-black" />
        </div>

        <h3 className="text-2xl font-semibold text-gray-900">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          {description}
        </p>

      </CardContent>
    </Card>
  );
}