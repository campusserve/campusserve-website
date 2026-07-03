import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import Container from "@/components/shared/Container";

const productLinks = [
  { name: "Food Delivery", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Hostel Finder", href: "#" },
  { name: "Campus Wallet", href: "#" },
];

const companyLinks = [
  { name: "About", href: "#" },
  { name: "Become a Vendor", href: "#" },
  { name: "Become a Rider", href: "#" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-gray-200 bg-gray-950 text-white"
    >
      <Container className="py-24">

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          <div>

            <h2 className="text-4xl font-black">
              CampusServe
            </h2>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              The all-in-one mobile platform for Nigerian university students.
              Food, marketplace, hostels, delivery and campus services in one app.
            </p>

            <div className="mt-8 flex gap-4">

              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href + Icon.displayName}
                    href={item.href}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition hover:bg-yellow-400 hover:text-black"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}

            </div>

          </div>

          <div>

            <h3 className="font-bold text-white">
              Product
            </h3>

            <div className="mt-6 space-y-4">

              {productLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-400 transition hover:text-yellow-400"
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>

          <div>

            <h3 className="font-bold text-white">
              Company
            </h3>

            <div className="mt-6 space-y-4">

              {companyLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-400 transition hover:text-yellow-400"
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>

          <div>

            <h3 className="font-bold text-white">
              Mobile App
            </h3>

            <div className="mt-6 space-y-4">

              <div className="rounded-2xl bg-white/10 p-4">
                📱 Google Play
                <p className="mt-1 text-sm text-gray-400">
                  Coming Soon
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                🍎 App Store
                <p className="mt-1 text-sm text-gray-400">
                  Coming Soon
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 lg:flex-row">

          <p>
            © {new Date().getFullYear()} CampusServe. All rights reserved.
          </p>

          <div className="flex gap-8">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>

        </div>

      </Container>
    </footer>
  );
}