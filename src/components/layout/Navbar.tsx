import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <Image
            src="/images/logo.png"
            alt="CampusServe"
            width={48}
            height={48}
          />

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              CampusServe
            </h2>

            <p className="text-xs text-gray-500">
              Campus Life, Simplified
            </p>
          </div>

        </div>

        {/* Navigation */}

        <nav className="hidden items-center gap-10 md:flex">

          <a
            href="#"
            className="font-medium text-gray-700 transition hover:text-yellow-500"
          >
            Home
          </a>

          <a
            href="#"
            className="font-medium text-gray-700 transition hover:text-yellow-500"
          >
            About
          </a>

          <a
            href="#"
            className="font-medium text-gray-700 transition hover:text-yellow-500"
          >
            Services
          </a>

          <a
            href="#"
            className="font-medium text-gray-700 transition hover:text-yellow-500"
          >
            Vendors
          </a>

          <a
            href="#"
            className="font-medium text-gray-700 transition hover:text-yellow-500"
          >
            Contact
          </a>

        </nav>

        {/* Button */}

        <button className="rounded-full bg-yellow-400 px-6 py-3 font-semibold shadow-lg transition hover:scale-105 hover:bg-yellow-500">
          Join Waitlist
        </button>

      </div>
    </header>
  );
}