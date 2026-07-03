"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-gray-200/80 bg-white/90 shadow-lg backdrop-blur-xl"
            : "bg-white/80 backdrop-blur-lg"
        }`}
      >
        <Container>

          <div className="flex h-20 items-center justify-between">

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <Image
                src="/images/logo.png"
                alt="CampusServe"
                width={56}
                height={56}
                priority
                className="object-contain"
              />

              <div>
                <h1 className="text-2xl font-black text-gray-900 lg:text-3xl">
                  CampusServe
                </h1>

                <p className="text-sm text-gray-500">
                  Campus Life, Simplified
                </p>
              </div>

            </Link>

            <nav className="hidden xl:flex items-center gap-10">

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-base font-medium text-gray-600 transition hover:text-black after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full"
                >
                  {item.name}
                </Link>
              ))}

            </nav>

            <div className="hidden xl:block">

              <Button className="rounded-2xl bg-yellow-400 px-8 text-black hover:bg-yellow-500">
                Join Waitlist
              </Button>

            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-xl p-2 hover:bg-gray-100 xl:hidden"
            >
              <Menu className="h-7 w-7" />
            </button>

          </div>

        </Container>
      </header>

      <div className="h-20" />

      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 xl:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b p-6">

            <h2 className="text-2xl font-black">
              Menu
            </h2>

            <button
              onClick={() => setMobileOpen(false)}
              className="rounded-xl p-2 hover:bg-gray-100"
            >
              <X className="h-7 w-7" />
            </button>

          </div>

          <nav className="flex flex-col p-6">

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-4 text-lg font-medium text-gray-700 transition hover:bg-yellow-50 hover:text-yellow-600"
              >
                {item.name}
              </Link>
            ))}

            <Button className="mt-8 h-12 rounded-2xl bg-yellow-400 text-black hover:bg-yellow-500">
              Join Waitlist
            </Button>

          </nav>

        </div>

      </div>
    </>
  );
}