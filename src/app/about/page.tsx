export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <h1 className="text-5xl font-black">About CampusServe</h1>

      <p className="mt-8 text-xl leading-9 text-gray-600">
        CampusServe is building the operating system for Nigerian campuses.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="rounded-3xl border p-8">
          <h2 className="text-2xl font-bold">Food</h2>
          <p className="mt-3 text-gray-600">
            Order meals from trusted campus vendors.
          </p>
        </div>

        <div className="rounded-3xl border p-8">
          <h2 className="text-2xl font-bold">Marketplace</h2>
          <p className="mt-3 text-gray-600">
            Buy and sell within your university.
          </p>
        </div>

        <div className="rounded-3xl border p-8">
          <h2 className="text-2xl font-bold">Services</h2>
          <p className="mt-3 text-gray-600">
            Hostels, deliveries, printing and much more.
          </p>
        </div>
      </div>
    </main>
  );
}