export default function VendorDashboard() {
  return (
    <div className="space-y-8">

      <h1 className="text-5xl font-black">
        Vendor Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-4">

        <Card title="Products" value="0" />
        <Card title="Orders" value="0" />
        <Card title="Revenue" value="₦0" />
        <Card title="Rating" value="0.0" />

      </div>

    </div>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow">

      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-black">
        {value}
      </h2>

    </div>
  );
}