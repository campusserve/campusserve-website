import {
  TrendingUp,
  Users,
  GraduationCap,
  Store,
  Bike,
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <main>

      <div className="rounded-3xl bg-white p-10 shadow">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-yellow-100 p-4">
            <TrendingUp className="h-8 w-8 text-yellow-700" />
          </div>

          <div>

            <h1 className="text-4xl font-black">
              Analytics
            </h1>

            <p className="mt-2 text-gray-500">
              Platform insights and growth metrics.
            </p>

          </div>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <Metric
            title="Students"
            value="0"
            icon={<GraduationCap className="h-6 w-6" />}
          />

          <Metric
            title="Vendors"
            value="0"
            icon={<Store className="h-6 w-6" />}
          />

          <Metric
            title="Riders"
            value="0"
            icon={<Bike className="h-6 w-6" />}
          />

          <Metric
            title="Total Users"
            value="0"
            icon={<Users className="h-6 w-6" />}
          />

        </div>

      </div>

    </main>
  );
}

function Metric({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-black">
            {value}
          </h2>

        </div>

        <div className="rounded-xl bg-yellow-100 p-3 text-yellow-700">
          {icon}
        </div>

      </div>

    </div>
  );
}