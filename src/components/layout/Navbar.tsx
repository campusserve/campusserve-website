"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/shared/Container";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Vendors", href: "#vendors" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-4">

            <Image
              src="/images/logo.png"
              alt="CampusServe"
              width={64}
              height={64}
              priority
              className="rounded-xl"
            />

            <div>

              <h1 className="text-4xl font-black tracking-tight text-gray-900">
                CampusServe
              </h1>

              <p className="text-sm text-gray-500">
                Campus Life, Simplified
              </p>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative text-[17px] font-medium text-gray-600 transition-colors duration-300 hover:text-gray-900"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

          </nav>

          {/* CTA */}

          <Button
            size="lg"
            className="rounded-2xl bg-yellow-400 px-7 text-black shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-500 hover:shadow-xl"
          >
            Join Waitlist
          </Button>

        </div>
      </Container>
    </header>
  );
}