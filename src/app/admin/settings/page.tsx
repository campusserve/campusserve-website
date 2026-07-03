export default function SettingsPage() {
  return (
    <main>

      <div className="rounded-3xl bg-white p-10 shadow">

        <h1 className="text-4xl font-black">
          Settings
        </h1>

        <p className="mt-3 text-gray-500">
          Configure CampusServe application settings, administrators, integrations and preferences.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-bold">
              General
            </h2>

            <p className="mt-2 text-gray-500">
              Platform name, logo and branding.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-bold">
              Waitlist
            </h2>

            <p className="mt-2 text-gray-500">
              Manage waitlist behaviour and notifications.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-bold">
              Email
            </h2>

            <p className="mt-2 text-gray-500">
              Configure SMTP and email templates.
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-xl font-bold">
              Security
            </h2>

            <p className="mt-2 text-gray-500">
              Passwords, sessions and administrator access.
            </p>
          </div>

        </div>

      </div>

    </main>
  );
}