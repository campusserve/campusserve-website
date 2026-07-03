import { Users } from "lucide-react";

export default function UsersPage() {
  return (
    <main>

      <div className="rounded-3xl bg-white p-10 shadow">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-yellow-100 p-4">
            <Users className="h-8 w-8 text-yellow-700" />
          </div>

          <div>

            <h1 className="text-4xl font-black">
              Users
            </h1>

            <p className="mt-2 text-gray-500">
              Manage registered CampusServe users.
            </p>

          </div>

        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-gray-300 p-16 text-center">

          <h2 className="text-2xl font-bold">
            Coming Soon
          </h2>

          <p className="mt-3 text-gray-500">
            Students, vendors, riders and administrators will appear here after authentication is implemented.
          </p>

        </div>

      </div>

    </main>
  );
}