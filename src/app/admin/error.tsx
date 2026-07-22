"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">

      <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-xl">

        <h1 className="text-4xl font-black text-red-600">
          Something went wrong
        </h1>

        <p className="mt-4 text-gray-600">
          The admin dashboard couldn't be loaded.
        </p>

        <button
          onClick={reset}
          className="mt-8 rounded-2xl bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Try Again
        </button>

      </div>

    </main>
  );
}