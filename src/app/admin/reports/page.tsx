import { FileText } from "lucide-react";

export default function ReportsPage() {
  return (
    <main>
      <div className="rounded-3xl bg-white p-10 shadow">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-yellow-100 p-4">
            <FileText className="h-8 w-8 text-yellow-700" />
          </div>

          <div>
            <h1 className="text-4xl font-black">Reports</h1>

            <p className="mt-2 text-gray-500">
              Generate operational and business reports.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-bold">Waitlist Report</h2>

            <p className="mt-2 text-gray-500">
              Export all waitlist registrations.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-bold">Vendor Report</h2>

            <p className="mt-2 text-gray-500">
              Approved and pending vendors.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-bold">Rider Report</h2>

            <p className="mt-2 text-gray-500">
              Rider registrations and activity.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}