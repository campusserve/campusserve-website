"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Download", href: "#download" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-4 shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="CampusServe"
              width={58}
              height={58}
              priority
              className="rounded-xl object-contain"
            />

            <div>

              <h1 className="text-3xl font-black tracking-tight text-gray-900">
                CampusServe
              </h1>

              <p className="text-sm text-gray-500">
                Campus Life, Simplified
              </p>

            </div>

          </Link>

          {/* Navigation */}

          <nav className="hidden lg:flex items-center gap-10">

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-[17px] font-medium text-gray-600 transition hover:text-gray-900 after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* CTA */}

          <Button
            size="lg"
            className="h-12 rounded-2xl bg-yellow-400 px-8 text-base font-semibold text-black shadow-lg hover:bg-yellow-500"
          >
            Join Waitlist
          </Button>

        </div>
      </Container>
    </header>
  );
}