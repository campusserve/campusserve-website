export default function FAQPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">

      <h1 className="text-5xl font-black">
        Frequently Asked Questions
      </h1>

      <div className="mt-12 space-y-8">

        <div className="rounded-2xl border p-8">
          <h2 className="text-xl font-bold">
            Is CampusServe free?
          </h2>

          <p className="mt-3 text-gray-600">
            Yes.
          </p>
        </div>

        <div className="rounded-2xl border p-8">
          <h2 className="text-xl font-bold">
            Which universities are supported?
          </h2>

          <p className="mt-3 text-gray-600">
            We'll expand campus by campus across Nigeria.
          </p>
        </div>

      </div>

    </main>
  );
}