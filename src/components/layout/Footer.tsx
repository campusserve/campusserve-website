import Link from "next/link";
import Container from "@/components/shared/Container";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-gray-200 bg-gray-50"
    >
      <Container className="py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          <div>
            <h3 className="text-2xl font-black text-gray-900">
              CampusServe
            </h3>

            <p className="mt-4 leading-7 text-gray-600">
              Everything you need on campus.
              One App.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              Product
            </h4>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li><Link href="#services">Features</Link></li>
              <li><Link href="#how-it-works">How It Works</Link></li>
              <li><Link href="#download">Download</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              Company
            </h4>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">For Vendors</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              Mobile App
            </h4>

            <p className="mt-4 text-gray-600">
              Android & iOS
            </p>

            <div className="mt-4 space-y-3">

              <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-medium">
                📱 Google Play — Coming Soon
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3 font-medium">
                🍎 App Store — Coming Soon
              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CampusServe. All rights reserved.
        </div>

      </Container>
    </footer>
  );
}