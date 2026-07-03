export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">

      <div className="text-center">

        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />

        <h2 className="mt-6 text-2xl font-bold text-gray-900">
          Loading Dashboard...
        </h2>

        <p className="mt-2 text-gray-500">
          Fetching waitlist data
        </p>

      </div>

    </main>
  );
}