import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-accent">

      <div className="w-full max-w-xl rounded-3xl bg-white p-12 text-center shadow-xl">

        <div className="text-7xl">
          🎉
        </div>

        <h1 className="mt-6 text-5xl font-black">
          Success!
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Your submission has been received.
          We'll get back to you shortly.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-2xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Back Home
        </Link>

      </div>

    </main>
  );
}