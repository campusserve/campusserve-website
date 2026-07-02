export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-yellow-50">

      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        <div>

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            🚀 Launching Across Nigerian Campuses
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-gray-900">

            Campus Life,

            <span className="block text-yellow-500">
              Simplified.
            </span>

          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-600">

            Order food.

            Shop campus stores.

            Send packages.

            Find trusted student services.

            Everything your campus needs,
            all from one platform.

          </p>

          <div className="mt-12 flex gap-5">

            <button className="rounded-full bg-yellow-400 px-8 py-4 font-semibold shadow-xl transition hover:scale-105 hover:bg-yellow-500">
              Join Waitlist
            </button>

            <button className="rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold hover:bg-gray-100">
              Become a Vendor
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="hidden lg:flex justify-center">

          <div className="relative">

            <div className="h-96 w-96 rounded-full bg-yellow-100"></div>

            <div className="absolute left-16 top-16 flex h-64 w-64 items-center justify-center rounded-full bg-yellow-400 text-8xl font-black text-white shadow-2xl">

              CS

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}