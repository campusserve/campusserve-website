import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">

      <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl">

        <h1 className="text-6xl font-black text-primary">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/admin"
          className="mt-8 inline-flex rounded-2xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Back to Dashboard
        </Link>

      </div>

    </main>
  );
}