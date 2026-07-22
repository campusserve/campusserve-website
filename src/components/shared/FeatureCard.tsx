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
    <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl">

      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />

      <div className="relative">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">

          <Icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />

        </div>

        <h3 className="mt-8 text-2xl font-bold text-foreground">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-muted-foreground">
          {description}
        </p>

        <div className="mt-8 inline-flex items-center font-semibold text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">

          Learn More

          <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />

        </div>

      </div>

    </div>
  );
}